import { Component, Input, OnInit } from '@angular/core';
import { FacetValue } from '../../../search-service/facet-value.model';
import { SearchFilterConfig } from '../../../search-service/search-filter-config.model';
import { SearchService } from '../../../search-service/search.service';
import { Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SearchFilterService } from '../search-filter.service';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */

@Component({
  selector: 'ds-search-facet-filter',
  styleUrls: ['./search-facet-filter.component.scss'],
  templateUrl: './search-facet-filter.component.html',
})

export class SidebarFacetFilterComponent implements OnInit {
  @Input() filterValues: FacetValue[];
  @Input() filterConfig: SearchFilterConfig;
  currentPage: Observable<number>;

  constructor(private filterService: SearchFilterService) {
  }

  ngOnInit(): void {
    this.currentPage = this.filterService.getPage(this.filterConfig.name);
  }

  isChecked(value: FacetValue) {
    return this.filterService.isFilterActive(this.filterConfig.name, value.value);
  }

  getSearchLink() {
    return this.filterService.searchLink;
  }

  getQueryParams(value: FacetValue): Params {
    return this.filterService.switchFilterInURL(this.filterConfig, value.value);
  }

  get facetCount(): Observable<number> {
    const resultCount = this.filterValues.length;
    return this.currentPage.map((page: number) => {
      const max = page * this.filterConfig.pageSize;
      return max > resultCount ? resultCount : max;
    });
  }

  showMore() {
    this.filterService.increasePage(this.filterConfig.name);
  }

  showLess() {
    this.filterService.decreasePage(this.filterConfig.name);
  }

  getCurrentPage(): Observable<number> {
    return this.filterService.getPage(this.filterConfig.name);

  }
}