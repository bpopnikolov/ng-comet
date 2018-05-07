import { User } from '../../user/shared/user.model';
export class JobApplication {
    constructor(
        public _id: string,
        public firsname: string,
        public lastname: string,
        public comment: string,
        public cv: string,
        public cl: string,
        public user: User,
        public jobAd: any) { }
}
