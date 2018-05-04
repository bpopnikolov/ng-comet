import { User } from '../../../user/shared';

export class JobAd {
    public id: string;
    public title: string;
    public desc: string;
    public category: string;
    public status: string = 'Active';
    public isDeleted: boolean = false;
    public createdAt: any;
}