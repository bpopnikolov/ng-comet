export class SearchForm {
    public search: string;
    public category: string;
    public date: any;

    constructor(searchForm: any) {
        this.search = searchForm.search || '';
        this.category = searchForm.category || '';
        this.date = searchForm.date || '';
    }
}
