/**
 * YouTube MP3 Downloader - Backend API Server
 *
 * This server provides a REST API endpoint to download YouTube videos
 * and convert them to MP3 format using @distube/ytdl-core and ffmpeg.
 *
 * Educational purposes only - Please respect YouTube's Terms of Service
 */

const express = require("express");
const ytdl = require("@distube/ytdl-core");
const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const cors = require("cors");
const { randomBytes } = require("crypto");

// Configure FFmpeg with static binary
const ffmpegPath = require("ffmpeg-static");
ffmpeg.setFfmpegPath(ffmpegPath);

// Initialize Express app
const app = express();

// Setup temp directory for downloads
const tempDir = path.join(__dirname, "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
  console.log("Created temp directory for downloads");
}

// Middleware
app.use(
  cors({
    origin: "http://localhost:4200", // Only allow requests from Angular frontend
    credentials: true,
  })
);
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "YouTube MP3 Downloader API is running",
    timestamp: new Date().toISOString(),
  });
});

/**
 * POST /api/download
 * Downloads a YouTube video and converts it to MP3
 *
 * Request body: { url: string }
 * Response: MP3 file download or error message
 */
app.post("/api/download", async (req, res) => {
  console.log("📥 Download request received:", req.body);

  try {
    const { url } = req.body;

    // Validate request
    if (!url) {
      console.log("❌ No URL provided");
      return res.status(400).json({ error: "YouTube URL is required" });
    }

    // Validate YouTube URL
    if (!ytdl.validateURL(url)) {
      console.log("❌ Invalid YouTube URL:", url);
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    console.log("✅ Valid YouTube URL, fetching video info...");

    // Get video information
    const info = await ytdl.getInfo(url);
    const videoTitle = info.videoDetails.title
      .replace(/[^\w\s]/gi, "") // Remove special characters
      .replace(/\s+/g, "_") // Replace spaces with underscores
      .substring(0, 50); // Limit length

    console.log("🎵 Video title:", info.videoDetails.title);
    console.log("⏱️  Duration:", info.videoDetails.lengthSeconds + " seconds");

    // Generate unique file paths
    const id = randomBytes(8).toString("hex");
    const videoPath = path.join(tempDir, `${id}.mp4`);
    const audioPath = path.join(tempDir, `${videoTitle}_${id}.mp3`);

    console.log("📺 Starting download...");

    // Download video stream
    ytdl(url, {
      quality: "highestaudio",
      filter: "audioonly",
    })
      .pipe(fs.createWriteStream(videoPath))
      .on("finish", () => {
        console.log("✅ Download complete, converting to MP3...");

        // Convert to MP3 using FFmpeg
        ffmpeg(videoPath)
          .audioBitrate(320) // High quality audio
          .audioCodec("libmp3lame") // MP3 codec
          .save(audioPath)
          .on("end", () => {
            console.log("🎵 MP3 conversion complete, sending file...");

            // Send file to client
            res.download(audioPath, `${videoTitle}.mp3`, (err) => {
              // Cleanup temporary files
              fs.unlink(videoPath, () =>
                console.log("🗑️  Cleaned up video file")
              );
              fs.unlink(audioPath, () =>
                console.log("🗑️  Cleaned up audio file")
              );

              if (err) {
                console.error("❌ Download error:", err);
              } else {
                console.log("✅ File sent successfully!");
              }
            });
          })
          .on("error", (err) => {
            console.error("❌ FFmpeg conversion error:", err);
            res.status(500).json({ error: "Error converting video to MP3" });
            fs.unlink(videoPath, () => {});
          });
      })
      .on("error", (err) => {
        console.error("❌ Video download error:", err);
        res.status(500).json({ error: "Error downloading video from YouTube" });
      });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 YouTube MP3 Downloader API Server");
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log("📁 Temp directory:", tempDir);
  console.log("⚠️  Educational purposes only - Respect YouTube ToS");
  console.log("==========================================");
});
