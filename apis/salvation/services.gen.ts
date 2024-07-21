// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { NewsGetPagedListData, NewsGetPagedListResponse, NewsCategoryGetPagedListResponse, NewsSignatureGetPagedListResponse, NewsSignatureCreateData, NewsSignatureCreateResponse, NewsSignatureUpdateData, NewsSignatureUpdateResponse, NewsTagGetPagedListResponse, UploadsGetFileData, UploadsGetFileResponse } from './types.gen';

export class NewsService {
    /**
     * @param data The data for the request.
     * @param data.pageIndex
     * @param data.pageSize
     * @param data.searchPattern
     * @param data.categoryTitle
     * @param data.signatureTitleShort
     * @param data.tagTitle
     * @param data.onHome
     * @param data.onBanner
     * @param data.minVideoCount
     * @param data.minAudioCount
     * @param data.dateFrom
     * @param data.dateTo
     * @param data.order
     * @param data.orderDirection
     * @returns NewsListItemDtoIPagedList OK
     * @throws ApiError
     */
    public static newsGetPagedList(data: NewsGetPagedListData = {}): CancelablePromise<NewsGetPagedListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/api/News',
            query: {
                PageIndex: data.pageIndex,
                PageSize: data.pageSize,
                SearchPattern: data.searchPattern,
                CategoryTitle: data.categoryTitle,
                SignatureTitleShort: data.signatureTitleShort,
                TagTitle: data.tagTitle,
                OnHome: data.onHome,
                OnBanner: data.onBanner,
                MinVideoCount: data.minVideoCount,
                MinAudioCount: data.minAudioCount,
                DateFrom: data.dateFrom,
                DateTo: data.dateTo,
                Order: data.order,
                OrderDirection: data.orderDirection
            },
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
}

export class NewsCategoryService {
    /**
     * @returns NewsCategoryListItemDtoIPagedList OK
     * @throws ApiError
     */
    public static newsCategoryGetPagedList(): CancelablePromise<NewsCategoryGetPagedListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/api/NewsCategory',
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
}

export class NewsSignatureService {
    /**
     * @returns NewsSignatureDtoIPagedList OK
     * @throws ApiError
     */
    public static newsSignatureGetPagedList(): CancelablePromise<NewsSignatureGetPagedListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/api/NewsSignature',
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns ApiSuccessResponse OK
     * @throws ApiError
     */
    public static newsSignatureCreate(data: NewsSignatureCreateData = {}): CancelablePromise<NewsSignatureCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/api/NewsSignature',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns ApiSuccessResponse OK
     * @throws ApiError
     */
    public static newsSignatureUpdate(data: NewsSignatureUpdateData = {}): CancelablePromise<NewsSignatureUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/api/NewsSignature',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
}

export class NewsTagService {
    /**
     * @returns NewsTagListItemDtoIPagedList OK
     * @throws ApiError
     */
    public static newsTagGetPagedList(): CancelablePromise<NewsTagGetPagedListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/api/NewsTag',
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
}

export class UploadsService {
    /**
     * @param data The data for the request.
     * @param data.onlyFilterVisible
     * @returns unknown OK
     * @throws ApiError
     */
    public static uploadsGetFile(data: UploadsGetFileData = {}): CancelablePromise<UploadsGetFileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Uploads',
            query: {
                onlyFilterVisible: data.onlyFilterVisible
            },
            errors: {
                400: 'Bad Request',
                500: 'Internal Server Error'
            }
        });
    }
    
}