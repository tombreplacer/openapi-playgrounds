// This file is auto-generated by @hey-api/openapi-ts

export const $IPagingState = {
    required: ['hasNextPage', 'hasPreviousPage', 'indexFrom', 'pageIndex', 'pageSize', 'totalCount', 'totalPages'],
    type: 'object',
    properties: {
        indexFrom: {
            type: 'integer',
            format: 'int32',
            readOnly: true
        },
        pageIndex: {
            type: 'integer',
            format: 'int32',
            readOnly: true
        },
        pageSize: {
            type: 'integer',
            format: 'int32',
            readOnly: true
        },
        totalCount: {
            type: 'integer',
            format: 'int32',
            readOnly: true
        },
        totalPages: {
            type: 'integer',
            format: 'int32',
            readOnly: true
        },
        hasPreviousPage: {
            type: 'boolean',
            readOnly: true
        },
        hasNextPage: {
            type: 'boolean',
            readOnly: true
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryCreateDto = {
    required: ['isVisibleInFilter', 'onMainPageBottomSlider', 'onRightPanel', 'order', 'published', 'title'],
    type: 'object',
    properties: {
        title: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        onMainPageBottomSlider: {
            type: 'boolean'
        },
        onRightPanel: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryDto = {
    required: ['createdBy', 'createdOnUtc', 'id', 'isVisibleInFilter', 'itemsCount', 'mainPageBottomSlider', 'order', 'published', 'rightPanel', 'title', 'updatedBy', 'updatedOnUtc'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        itemsCount: {
            type: 'integer',
            format: 'int32'
        },
        createdBy: {
            minLength: 1,
            type: 'string'
        },
        updatedBy: {
            minLength: 1,
            type: 'string'
        },
        createdOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        updatedOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        mainPageBottomSlider: {
            type: 'boolean'
        },
        rightPanel: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryDtoSalvationResponse = {
    required: ['message', 'success', 'traceId'],
    type: 'object',
    properties: {
        success: {
            type: 'boolean'
        },
        message: {
            minLength: 1,
            type: 'string'
        },
        traceId: {
            minLength: 1,
            type: 'string'
        },
        details: {
            type: 'string',
            nullable: true
        },
        entityId: {
            type: 'string',
            nullable: true
        },
        entityType: {
            type: 'string',
            nullable: true
        },
        relatedObject: {
            '$ref': '#/components/schemas/NewsCategoryDto'
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryListItemDto = {
    required: ['createdBy', 'createdOnUtc', 'id', 'isVisibleInFilter', 'itemsCount', 'mainPageBottomSlider', 'order', 'published', 'rightPanel', 'title', 'updatedBy', 'updatedOnUtc'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        itemsCount: {
            type: 'integer',
            format: 'int32'
        },
        createdBy: {
            minLength: 1,
            type: 'string'
        },
        updatedBy: {
            minLength: 1,
            type: 'string'
        },
        createdOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        updatedOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        mainPageBottomSlider: {
            type: 'boolean'
        },
        rightPanel: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryListItemDtoIPagedList = {
    required: ['items', 'state'],
    type: 'object',
    properties: {
        state: {
            '$ref': '#/components/schemas/IPagingState'
        },
        items: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NewsCategoryListItemDto'
            },
            readOnly: true
        }
    },
    additionalProperties: false
} as const;

export const $NewsCategoryUpdateDto = {
    required: ['id', 'isVisibleInFilter', 'mainPageBottomSlider', 'order', 'published', 'rightPanel', 'title'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        mainPageBottomSlider: {
            type: 'boolean'
        },
        rightPanel: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureCreateDto = {
    required: ['isVisibleInFilter', 'order', 'published', 'shortTitle', 'title'],
    type: 'object',
    properties: {
        title: {
            minLength: 1,
            type: 'string'
        },
        shortTitle: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureDto = {
    required: ['createdBy', 'createdOnUtc', 'id', 'isFilterVisible', 'itemsCount', 'order', 'published', 'shortTitle', 'title', 'updatedBy', 'updatedOnUtc'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        shortTitle: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        createdBy: {
            minLength: 1,
            type: 'string'
        },
        updatedBy: {
            minLength: 1,
            type: 'string'
        },
        createdOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        updatedOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        isFilterVisible: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        },
        itemsCount: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureDtoSalvationResponse = {
    required: ['message', 'success', 'traceId'],
    type: 'object',
    properties: {
        success: {
            type: 'boolean'
        },
        message: {
            minLength: 1,
            type: 'string'
        },
        traceId: {
            minLength: 1,
            type: 'string'
        },
        details: {
            type: 'string',
            nullable: true
        },
        entityId: {
            type: 'string',
            nullable: true
        },
        entityType: {
            type: 'string',
            nullable: true
        },
        relatedObject: {
            '$ref': '#/components/schemas/NewsSignatureDto'
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureListItemDto = {
    required: ['createdBy', 'createdOnUtc', 'id', 'isFilterVisible', 'itemsCount', 'order', 'published', 'shortTitle', 'title', 'updatedBy', 'updatedOnUtc'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        shortTitle: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        createdBy: {
            minLength: 1,
            type: 'string'
        },
        updatedBy: {
            minLength: 1,
            type: 'string'
        },
        createdOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        updatedOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        isFilterVisible: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        },
        itemsCount: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureListItemDtoIPagedList = {
    required: ['items', 'state'],
    type: 'object',
    properties: {
        state: {
            '$ref': '#/components/schemas/IPagingState'
        },
        items: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NewsSignatureListItemDto'
            },
            readOnly: true
        }
    },
    additionalProperties: false
} as const;

export const $NewsSignatureUpdateDto = {
    required: ['id', 'isVisibleInFilter', 'order', 'published', 'shortTitle', 'title'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        shortTitle: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        isVisibleInFilter: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsTagListItemDto = {
    required: ['createdBy', 'createdOnUtc', 'id', 'itemsCount', 'order', 'published', 'title', 'updatedBy', 'updatedOnUtc', 'visibleOnlyInside'],
    type: 'object',
    properties: {
        id: {
            minLength: 1,
            type: 'string'
        },
        title: {
            minLength: 1,
            type: 'string'
        },
        published: {
            type: 'boolean'
        },
        itemsCount: {
            type: 'integer',
            format: 'int32'
        },
        createdBy: {
            minLength: 1,
            type: 'string'
        },
        updatedBy: {
            minLength: 1,
            type: 'string'
        },
        createdOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        updatedOnUtc: {
            type: 'string',
            format: 'date-time'
        },
        visibleOnlyInside: {
            type: 'boolean'
        },
        order: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $NewsTagListItemDtoIPagedList = {
    required: ['items', 'state'],
    type: 'object',
    properties: {
        state: {
            '$ref': '#/components/schemas/IPagingState'
        },
        items: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/NewsTagListItemDto'
            },
            readOnly: true
        }
    },
    additionalProperties: false
} as const;

export const $SalvationResponse = {
    required: ['message', 'success', 'traceId'],
    type: 'object',
    properties: {
        success: {
            type: 'boolean'
        },
        message: {
            minLength: 1,
            type: 'string'
        },
        traceId: {
            minLength: 1,
            type: 'string'
        },
        details: {
            type: 'string',
            nullable: true
        },
        entityId: {
            type: 'string',
            nullable: true
        },
        entityType: {
            type: 'string',
            nullable: true
        },
        relatedObject: {
            nullable: true
        }
    },
    additionalProperties: false
} as const;