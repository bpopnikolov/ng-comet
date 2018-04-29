export class ResponseError {
    err: string;
    msg: string;

    constructor(err, msg) {
        this.err = err;
        this.msg = msg;
    }
}
