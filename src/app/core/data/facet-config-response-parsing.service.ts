import { Injectable } from '@angular/core';
import {
  FacetConfigSuccessResponse,
  RestResponse
} from '../cache/response-cache.models';
import { ResponseParsingService } from './parsing.service';
import { RestRequest } from './request.models';
import { DSpaceRESTV2Response } from '../dspace-rest-v2/dspace-rest-v2-response.model';
import { DSpaceRESTv2Serializer } from '../dspace-rest-v2/dspace-rest-v2.serializer';
import { SearchFilterConfig } from '../../+search-page/search-service/search-filter-config.model';

@Injectable()
export class FacetConfigResponseParsingService implements ResponseParsingService {
  parse(request: RestRequest, data: DSpaceRESTV2Response): RestResponse {

    const config = data.payload._embedded.facets;
    const serializer = new DSpaceRESTv2Serializer(SearchFilterConfig);
    const facetConfig = serializer.deserializeArray(config);
    return new FacetConfigSuccessResponse(facetConfig, data.statusCode);
  }
}
