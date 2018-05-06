import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkService } from './link.service';
import { LinksResolver } from './links.resolver';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        LinksResolver,
        LinkService,
    ]
})
export class LinkModule {}
