import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DownloadService } from './download.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [DownloadService],
})
export class DownloadModule { }
