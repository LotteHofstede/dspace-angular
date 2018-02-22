import { Component } from '@angular/core';
import { SearchService } from '../search-service/search.service';
import { SearchFilterService } from '../search-filters/search-filter/search-filter.service';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router';
import { AppliedFilter } from '../search-service/applied-filter.model';
import { RemoteData } from '../../core/data/remote-data';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */

@Component({
  selector: 'ds-search-labels',
  // styleUrls: ['./search-labels.component.scss'],
  templateUrl: './search-labels.component.html',
})

export class SearchLabelsComponent {
  appliedFilters: Observable<RemoteData<AppliedFilter[]>>;

  constructor(private searchService: SearchService, private filterService: SearchFilterService) {
    this.appliedFilters = searchService.getAppliedFilters();
  }

  getQueryParamsWithout(filterName: string, value: string): Observable<Params> {
    return this.filterService.getQueryParamsWithoutByName(filterName, value);
  }

  getSearchLink() {
    return this.filterService.searchLink;
  }
}
