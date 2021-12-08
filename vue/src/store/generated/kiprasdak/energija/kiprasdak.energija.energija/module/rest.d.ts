export interface EnergijaBuyOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
    book?: EnergijaOrderBook;
}
export interface EnergijaEnergyStore {
    index?: string;
    /** @format int32 */
    stored?: number;
    /** @format int32 */
    reserved?: number;
    description?: string;
}
export declare type EnergijaMsgBuyOrderResponse = object;
export declare type EnergijaMsgCancelBuyOrderResponse = object;
export declare type EnergijaMsgCancelSellOrderResponse = object;
export declare type EnergijaMsgCreatePairResponse = object;
export declare type EnergijaMsgRegisterEnergyStoreResponse = object;
export declare type EnergijaMsgRegisterSmartMeterResponse = object;
export declare type EnergijaMsgSellOrderResponse = object;
export declare type EnergijaMsgTokenizeEnergyResponse = object;
export interface EnergijaOrder {
    /** @format int32 */
    id?: number;
    creator?: string;
    /** @format int32 */
    amount?: number;
    /** @format int32 */
    price?: number;
}
export interface EnergijaOrderBook {
    /** @format int32 */
    idCount?: number;
    orders?: EnergijaOrder[];
}
export interface EnergijaQueryAllBuyOrderBookResponse {
    buyOrderBook?: EnergijaBuyOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface EnergijaQueryAllEnergyStoreResponse {
    energyStore?: EnergijaEnergyStore[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface EnergijaQueryAllSellOrderBookResponse {
    sellOrderBook?: EnergijaSellOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface EnergijaQueryAllSmartMeterResponse {
    smartMeter?: EnergijaSmartMeter[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface EnergijaQueryGetBuyOrderBookResponse {
    buyOrderBook?: EnergijaBuyOrderBook;
}
export interface EnergijaQueryGetEnergyStoreResponse {
    energyStore?: EnergijaEnergyStore;
}
export interface EnergijaQueryGetSellOrderBookResponse {
    sellOrderBook?: EnergijaSellOrderBook;
}
export interface EnergijaQueryGetSmartMeterResponse {
    smartMeter?: EnergijaSmartMeter;
}
export interface EnergijaSellOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
    book?: EnergijaOrderBook;
}
export interface EnergijaSmartMeter {
    index?: string;
    /** @format int32 */
    production?: number;
    /** @format int32 */
    consumption?: number;
    description?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title energija/buy_order_book.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBookAll
     * @summary Queries a list of buyOrderBook items.
     * @request GET:/kiprasdak/energija/energija/buyOrderBook
     */
    queryBuyOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryAllBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBook
     * @summary Queries a buyOrderBook by index.
     * @request GET:/kiprasdak/energija/energija/buyOrderBook/{index}
     */
    queryBuyOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryGetBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEnergyStoreAll
     * @summary Queries a list of energyStore items.
     * @request GET:/kiprasdak/energija/energija/energyStore
     */
    queryEnergyStoreAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryAllEnergyStoreResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEnergyStore
     * @summary Queries a energyStore by index.
     * @request GET:/kiprasdak/energija/energija/energyStore/{index}
     */
    queryEnergyStore: (index: string, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryGetEnergyStoreResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBookAll
     * @summary Queries a list of sellOrderBook items.
     * @request GET:/kiprasdak/energija/energija/sellOrderBook
     */
    querySellOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryAllSellOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBook
     * @summary Queries a sellOrderBook by index.
     * @request GET:/kiprasdak/energija/energija/sellOrderBook/{index}
     */
    querySellOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryGetSellOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySmartMeterAll
     * @summary Queries a list of smartMeter items.
     * @request GET:/kiprasdak/energija/energija/smartMeter
     */
    querySmartMeterAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryAllSmartMeterResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySmartMeter
     * @summary Queries a smartMeter by index.
     * @request GET:/kiprasdak/energija/energija/smartMeter/{index}
     */
    querySmartMeter: (index: string, params?: RequestParams) => Promise<HttpResponse<EnergijaQueryGetSmartMeterResponse, RpcStatus>>;
}
export {};
