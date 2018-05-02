import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../shared/models/careers/category.model';
import { SearchForm } from '../shared/search-form.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() public searchSubmit: EventEmitter<SearchForm> = new EventEmitter<SearchForm>();
  @Output() public searchReset: EventEmitter<SearchForm> = new EventEmitter<SearchForm>();
  @Input()  public categories: Category[];

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  public ngOnInit(): void {
    this.initSearchForm();
  }

  public onSearch(): void {
    // const form = {
    //   search: this.searchForm.get('search'),
    //   category: this.searchForm.value.category,
    //   date: this.searchForm.value.date,
    // };
    // console.log(this.searchForm.value);
    this.searchSubmit.emit(this.searchForm.value);
  }

  public onReset(): void {
    // this.searchForm.value.search = '';
    // this.searchForm.value.category = '';
    // this.searchForm.value.date = '';

    console.log(this.searchForm.value);
    this.searchReset.emit(this.searchForm.value);
  }
  private initSearchForm(): void {
    this.searchForm = this.fb.group({
      search: '',
      category: '',
      date: '',
    });
  }
}
