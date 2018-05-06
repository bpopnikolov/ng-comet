import { Category } from './category.model';
export class JobAd {
    constructor(
        public _id: string,
        public title: string,
        public desc: string,
        public category: Category,
        public status: string,
        public createdAt: any,
    ) { }
}
