import request from '@/utils/request';
import config from '~/config/env';

// 用于mock接口
const API = config.HOTEL_API;

const isMock = false;

export interface ICityItem {
  value: string;
  title: string;
  children?: ICityItem[];
}
export interface ICityListResponse {
  cityList: ICityItem[];
}
export const getCityList = (): Promise<ICityListResponse> => request
  .post<Promise<ICityListResponse>>(
    isMock
      ? 'https://yapi.hellobike.cn/mock/4576/162020'
      : `${API}/hotel/crs/queryCityList`,
  )
  .then((res) => res.data);
