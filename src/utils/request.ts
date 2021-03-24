import axios, { AxiosError } from 'axios';
import { message } from 'antd';


declare module 'axios' {
  export interface AxiosRequestConfig {
    // 此参数为true时请求不带上token
    noToken?: boolean;
    // 此参数为true时请求不对返回值进行校验
    noValidate?: boolean;
    noGlobalMessage?: boolean;
  }
}

export interface StandardResponse<T = unknown> {
  code?: number;
  status?: number;
  msg?: string;
  info?: string;
  data: T;
}

const service = axios.create({
  timeout: 15000,
});

service.interceptors.request.use((conf) => {
  const config = conf;
  if (!config.noToken) {
    config.headers = {
      token: '123123',
      ...((config.headers as Record<string, unknown>) || {}),
    };
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    console.log('返回', response);
    const { config } = response;
    // 各种返回状况处理
    const res = response.data as StandardResponse;
    if (!config.noValidate) {
      if (res.code !== 0 && res.status !== 1) {
        message.error(res.msg);
      }
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (error.message === 'cancel') {
      throw error;
    }

    if (error.response) {
      message.error(error.response);
    }
  },
);

export default service;
