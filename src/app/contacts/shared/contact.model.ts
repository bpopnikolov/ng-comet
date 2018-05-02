export class Contact {
    constructor(
        public name: string,
        public value: string,
        public icon: string,
        public email: string,
        public phone: string,
        public isPrimary: boolean
    ) { }
}
