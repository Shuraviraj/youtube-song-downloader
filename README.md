# 🎵 YouTube MP3 Downloader

A beginner-friendly full-stack application that converts YouTube videos to MP3 files. This project demonstrates modern web development with Angular frontend and Node.js backend, designed specifically for educational purposes.

## 🌟 Features

- ✅ **Clean User Interface** - Modern Angular web app with responsive design
- ✅ **YouTube URL Validation** - Smart validation for various YouTube URL formats
- ✅ **High-Quality Audio** - Downloads at 320kbps MP3 format
- ✅ **Real-time Feedback** - Loading indicators and progress messages
- ✅ **Error Handling** - User-friendly error messages and guidance
- ✅ **Automatic Cleanup** - Temporary files are automatically removed
- ✅ **Cross-Platform** - Works on Windows, macOS, and Linux

## 🏗️ Project Structure

youtube-mp3-downloader/
├── 📁 backend/                   # 🔴 Node.js Express API Server
│   ├── server.js                # Main API server file
│   ├── package.json             # Backend dependencies
│   └── temp/                    # Temporary download files (auto-created)
│
├── 📁 src/                      # 🔵 Angular Frontend Source Code
│   ├── app/
│   │   ├── components/
│   │   │   └── song-downloader/ # Main download component
│   │   └── services/            # Angular services (API calls)
│   ├── index.html               # Main HTML file
│   └── styles.scss              # Global styles
│
├── 📁 public/                   # Static assets (favicon, etc.)
├── 📄 package.json              # Frontend dependencies & scripts
├── 📄 start.bat                 # Windows startup script
├── 📄 start.sh                  # Linux/Mac startup script
├── 📄 README.md                 # This documentation
└── 📄 PROJECT_STRUCTURE.md      # Detailed structure guide

## 🛠️ Tech Stack

### Frontend (Angular)

- **Angular 20** - Modern web framework with TypeScript
- **Reactive Forms** - Form handling and validation
- **SCSS** - Modern CSS with variables and mixins
- **RxJS** - Reactive programming for HTTP requests

### Backend (Node.js)

- **Express.js** - Fast web framework for APIs
- **@distube/ytdl-core** - YouTube video downloading library (updated)
- **fluent-ffmpeg** - Audio/video processing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Basic knowledge of:**
  - Running terminal/command prompt commands
  - Web browsers and downloading files

## 🚀 Quick Start (3 Easy Steps!)

### Option 1: Super Easy (Recommended for beginners)

**Windows Users:**

```bash
# Just double-click the start.bat file!
# Or run in command prompt:
start.bat
```

**Mac/Linux Users:**

```bash
# Just run in terminal:
./start.sh
```

### Option 2: Manual Setup

#### Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

#### Step 2: Start the Application

```bash
# Start both frontend and backend together
npm run dev
```

#### Step 3: Use the App

1. Open your browser and go to: `http://localhost:4200`
2. Paste any YouTube URL
3. Click "Download MP3"
4. Wait for your file to download! 🎵

## � For Angular & Express Beginners

### Understanding the Architecture

Since you're new to Angular and Express, here's how this project works:

#### Frontend (Angular) - The User Interface

- **Location**: `src/` folder
- **What it does**: Creates the web page you see in your browser
- **Main files**:
  - `song-downloader.component.ts` - The logic for the download form
  - `song-downloader.component.html` - The visual layout (HTML)
  - `song-downloader.component.scss` - The styling (CSS)
  - `song-downloader.service.ts` - Communicates with backend

#### Backend (Express) - The Processing Server

- **Location**: `backend/` folder  
- **What it does**: Downloads videos from YouTube and converts them
- **Main file**: `server.js` - Handles API requests and file processing

#### How They Work Together

1. User enters YouTube URL in **Angular frontend**
2. Frontend sends URL to **Express backend** via HTTP request
3. Backend downloads video and converts to MP3
4. Backend sends MP3 file back to user's browser
5. Browser automatically downloads the file

### Key Concepts You'll Learn

**Angular Concepts:**

- **Components** - Reusable UI pieces (like the download form)
- **Services** - Shared logic (like making HTTP requests)
- **Reactive Forms** - Handling form inputs and validation
- **HTTP Client** - Making requests to backend APIs

**Express Concepts:**

- **Routes** - URL endpoints (like `/api/download`)
- **Middleware** - Functions that process requests (like CORS)
- **Request/Response** - How frontend and backend communicate
- **File Handling** - Processing and sending files

## 🎯 Available Scripts

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start both frontend and backend together (recommended) |
| `npm run start:frontend` | Start only the Angular frontend |
| `npm run start:backend` | Start only the Express backend |
| `npm run build` | Build the Angular app for production |
| `npm run setup` | Install all dependencies for both frontend and backend |

## 🔧 Configuration & Ports

- **Frontend (Angular)**: Runs on `http://localhost:4200`
- **Backend (Express)**: Runs on `http://localhost:3000`
- **Download Storage**: Temporary files in `backend/temp/` (auto-deleted)

## 🎵 How It Works (Step by Step)

1. **User Input**: You paste a YouTube URL in the web interface
2. **Validation**: Angular validates the URL format
3. **API Request**: Frontend sends URL to backend via HTTP POST
4. **Video Download**: Backend uses `@distube/ytdl-core` to download video
5. **Audio Extraction**: `ffmpeg` extracts high-quality audio
6. **MP3 Conversion**: Audio is converted to MP3 format
7. **File Delivery**: MP3 is sent to your browser for download
8. **Cleanup**: Temporary files are automatically deleted

## 🐛 Troubleshooting

### Common Issues for Beginners

#### "Cannot connect to server"

- Make sure both frontend and backend are running
- Use `npm run dev` to start both together
- Check that ports 3000 and 4200 are not being used by other apps

#### "Node.js is not installed"

- Download and install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation
- Run `node --version` to verify installation

#### "npm command not found"

- npm comes with Node.js, try reinstalling Node.js
- Make sure Node.js is added to your system PATH

#### "Download fails"

- Some videos may be restricted or unavailable
- Try a different YouTube video
- Make sure the URL is valid and accessible

#### "Port already in use"

- Close other applications using ports 3000 or 4200
- Or change the port in the configuration files

### Getting Help

If you're stuck:

1. Stop the application (Ctrl+C in terminal)
2. Run `npm run setup` to reinstall dependencies
3. Try `npm run dev` again
4. Check that your YouTube URL is valid and public

## ⚠️ Important Notes for Beginners

### Educational Purpose

This project is designed to teach you:

- How frontend and backend communicate
- File processing and API development
- Modern web development practices
- Working with external libraries and APIs

### Legal & Ethical Considerations

- **Personal Use Only**: Only download content you have permission to use
- **Respect Copyrights**: Don't distribute copyrighted material
- **YouTube ToS**: Be aware of YouTube's Terms of Service
- **Educational Context**: This is for learning web development

### Best Practices Demonstrated

- **Separation of Concerns**: Frontend and backend in separate folders
- **Error Handling**: Proper error messages and validation
- **Code Comments**: Extensive documentation for learning
- **Security**: CORS configuration and input validation

## 🎓 Learning Path for Beginners

### If you're new to Angular

1. Start by examining `song-downloader.component.ts`
2. See how forms are handled with Reactive Forms
3. Look at how HTTP requests are made in the service
4. Understand component lifecycle and data binding

### If you're new to Express

1. Start with `backend/server.js`
2. Understand how routes work (`POST /api/download`)
3. See how middleware processes requests
4. Learn about file handling and streams

### Next Steps

- Try adding new features (like download progress bars)
- Experiment with the styling (SCSS files)
- Add validation for different video platforms
- Explore Angular routing and multiple components

## 🔄 Development Workflow

### Making Changes

**Frontend Changes:**

- Edit files in `src/app/`
- Changes auto-reload in browser (hot reload)
- Check browser console for errors

**Backend Changes:**

- Edit `backend/server.js`
- Restart backend: Ctrl+C then `npm run dev`
- Check terminal for error messages

**Testing Your Changes:**

- Always test with a real YouTube URL
- Check browser Developer Tools (F12) for errors
- Look at Network tab to see API requests

## 📦 Dependencies Explained

### Frontend Dependencies (package.json)

- **@angular/\*** - Angular framework and modules
- **rxjs** - Reactive programming library
- **typescript** - Type-safe JavaScript

### Backend Dependencies (backend/package.json)

- **express** - Web framework for Node.js
- **@distube/ytdl-core** - YouTube video downloader (updated library)
- **fluent-ffmpeg** - Video/audio processing
- **cors** - Enable cross-origin requests

## 🎯 Future Learning Projects

Once you understand this project, try:

- [ ] Add support for playlists
- [ ] Create user accounts and download history
- [ ] Add video quality selection
- [ ] Support for other video platforms
- [ ] Deploy to cloud platforms (Heroku, Vercel)
- [ ] Add a database for storing metadata
- [ ] Create mobile app version

## 📝 License & Legal

This project is for **educational purposes only**.

- Respect YouTube's Terms of Service
- Only download content you have permission to use
- Don't distribute copyrighted material
- Use this project to learn web development

## 🤝 Contributing & Learning

This is a learning project! You can:

- Fork the repository and experiment
- Try adding new features
- Fix bugs or improve code
- Share your improvements with others
- Use it as a base for other projects

---

**Happy Learning! 🎓🎵**

*Built with ❤️ for learning Angular, Express, and full-stack development*
