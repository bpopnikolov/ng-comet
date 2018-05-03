import { Injectable } from '@angular/core';
import { JobAd } from '../../shared/models/careers/jobAd.model';
import { SearchForm } from './search-form.model';

@Injectable()
export class SearchService {

  constructor() { }
  public search(form: SearchForm, list: JobAd[]): JobAd[] {

    let filteredList = [...list];

    if (form.search) {
      filteredList = filteredList.filter((listing) =>
        listing.title.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()) ||
        listing.desc.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()));
    }
    if (form.category) {
      filteredList = filteredList.filter((listing) => listing.category === form.category);
    }

    if (form.date) {
      form.date = form.date.setHours(0, 0, 0, 0);
      filteredList = filteredList
        .map((listing) => {
          listing.createdAt = new Date(listing.createdAt).setHours(0, 0, 0, 0);
          return listing;
        })
        .filter((listing) => listing.createdAt >= form.date);
    }

    return filteredList;
  }
}
