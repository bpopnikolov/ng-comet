export class User {
    constructor(public _id: string, public email:string, public role: string, public createdAt?: string, public jobApplied?: any[]) {
    }
}
