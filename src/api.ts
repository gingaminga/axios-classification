import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';

/**
 * @description axios 모듈화 클래스
 */
export default class API {
  protected instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * @description DELETE 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  delete<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.delete<Data, AxiosResponse<Data, Data>, Params>(endpoint, {
      data: params,
      headers,
    });
  }

  /**
   * @description GET 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  get<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.get<Data, AxiosResponse<Data, Data>, Params>(endpoint, {
      params,
      headers,
    });
  }

  /**
   * @description PATCH 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  patch<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.patch<Data, AxiosResponse<Data, Data>, Params>(endpoint, params, {
      headers,
    });
  }

  /**
   * @description POST 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  post<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.post<Data, AxiosResponse<Data, Data>, Params>(endpoint, params, {
      headers,
    });
  }

  /**
   * @description PUT 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  put<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.put<Data, AxiosResponse<Data, Data>, Params>(endpoint, params, {
      headers,
    });
  }

  /**
   * @description 그 외 모든 원하는 요청
   * @param config 요청 설정값
   */
  request<Params, Data>(config: AxiosRequestConfig<Params>) {
    return this.instance.request<Data, AxiosResponse<Data, Data>, Params>(config);
  }
}
