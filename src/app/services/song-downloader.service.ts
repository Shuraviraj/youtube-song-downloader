import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SongDownloaderService {
    private apiUrl = 'http://localhost:3000/api/download';

    constructor(private http: HttpClient) { }

    downloadSong(url: string): Observable<Blob> {
        return this.http.post(this.apiUrl, { url }, {
            responseType: 'blob'
        });
    }

    validateYouTubeUrl(url: string): boolean {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    }
}
