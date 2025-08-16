import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongDownloaderComponent } from './components/song-downloader/song-downloader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongDownloaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('YouTube to MP3 Downloader');
}
