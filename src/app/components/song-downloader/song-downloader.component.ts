/**
 * YouTube MP3 Downloader Component
 * 
 * This component provides a user interface for downloading YouTube videos as MP3 files.
 * It includes form validation, loading states, and error handling.
 * 
 * Features:
 * - YouTube URL validation
 * - Loading indicator during download
 * - Error handling and user feedback
 * - Success notifications
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SongDownloaderService } from '../../services/song-downloader.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-song-downloader',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
    templateUrl: './song-downloader.component.html',
    styleUrl: './song-downloader.component.scss'
})
export class SongDownloaderComponent {
    // Form for YouTube URL input
    downloadForm: FormGroup;

    // Component state
    isLoading = false;
    error: string | null = null;
    success = false;
    downloadProgress = '';

    constructor(
        private fb: FormBuilder,
        private songDownloaderService: SongDownloaderService
    ) {
        // Initialize form with URL validation
        this.downloadForm = this.fb.group({
            url: ['', [Validators.required, this.youtubeUrlValidator]]
        });
    }

    /**
     * Custom validator for YouTube URLs
     * Accepts various YouTube URL formats:
     * - https://youtube.com/watch?v=...
     * - https://www.youtube.com/watch?v=...
     * - https://youtu.be/...
     */
    youtubeUrlValidator(control: any) {
        const url = control.value;
        if (!url) return null;

        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url) ? null : { invalidUrl: true };
    }

    /**
     * Handle form submission
     * Validates form, calls download service, and manages UI state
     */
    onSubmit() {
        if (this.downloadForm.invalid) {
            this.markFormGroupTouched();
            return;
        }

        const url = this.downloadForm.get('url')?.value;
        this.startDownload(url);
    }

    /**
     * Start the download process
     */
    private startDownload(url: string) {
        console.log('🎵 Starting download for:', url);

        // Reset state
        this.isLoading = true;
        this.error = null;
        this.success = false;
        this.downloadProgress = 'Connecting to server...';

        // Call download service
        this.songDownloaderService.downloadSong(url).subscribe({
            next: (blob) => {
                this.handleDownloadSuccess(blob);
            },
            error: (err) => {
                this.handleDownloadError(err);
            }
        });
    }

    /**
     * Handle successful download
     */
    private handleDownloadSuccess(blob: Blob) {
        console.log('✅ Download successful, file size:', blob.size, 'bytes');

        this.downloadProgress = 'Creating download link...';

        // Create download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().slice(0, 16).replace(/[-:]/g, '');
        link.download = `youtube-audio-${timestamp}.mp3`;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cleanup
        window.URL.revokeObjectURL(link.href);

        // Update UI
        this.isLoading = false;
        this.success = true;
        this.downloadProgress = '';
        this.downloadForm.reset();

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            this.success = false;
        }, 5000);
    }

    /**
     * Handle download errors
     */
    private handleDownloadError(err: any) {
        console.error('❌ Download error:', err);

        this.isLoading = false;
        this.downloadProgress = '';

        // Set user-friendly error message based on error type
        if (err.status === 400) {
            this.error = 'Invalid YouTube URL. Please check the URL and try again.';
        } else if (err.status === 500) {
            this.error = 'Server error. The video might be unavailable or restricted.';
        } else if (err.status === 0) {
            this.error = 'Cannot connect to server. Please make sure the API server is running.';
        } else {
            this.error = 'Download failed. Please try again or use a different video.';
        }
    }

    /**
     * Mark all form fields as touched to show validation errors
     */
    private markFormGroupTouched() {
        Object.keys(this.downloadForm.controls).forEach(key => {
            this.downloadForm.get(key)?.markAsTouched();
        });
    }

    /**
     * Clear error message
     */
    clearError() {
        this.error = null;
    }

    /**
     * Check if a form field has errors and is touched
     */
    isFieldInvalid(fieldName: string): boolean {
        const field = this.downloadForm.get(fieldName);
        return !!(field && field.invalid && field.touched);
    }

    /**
     * Get error message for a specific field
     */
    getFieldError(fieldName: string): string {
        const field = this.downloadForm.get(fieldName);

        if (field?.errors?.['required']) {
            return 'YouTube URL is required';
        }

        if (field?.errors?.['invalidUrl']) {
            return 'Please enter a valid YouTube URL';
        }

        return '';
    }
}
