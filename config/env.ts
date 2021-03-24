type EnvConfig = {
  SERVICE_API: string;
  HOTEL_API: string;
  DOWNLOAD_API: string;
};
const { MODE } = import.meta.env; // 环境变量

const config: Record<string, EnvConfig> = {
  dev: {
    SERVICE_API: 'https://fat-admin-server.hellobike.cn',
    HOTEL_API: 'https://fat-hotel.hellobike.cn',
    DOWNLOAD_API: 'http://fat-hotel-bd.hellobike.cn',
  },
  pt: {
    SERVICE_API: 'https://pt-admin-server.hellobike.cn',
    HOTEL_API: 'https://pt-hotel.hellobike.cn',
    DOWNLOAD_API: 'http://pt-hotel-bd.hellobike.cn',
  },
  fat: {
    SERVICE_API: 'https://fat-admin-server.hellobike.cn',
    HOTEL_API: 'https://fat-hotel.hellobike.cn',
    DOWNLOAD_API: 'http://fat-hotel-bd.hellobike.cn',
  },
  uat: {
    SERVICE_API: 'https://uat-admin-server.hellobike.cn',
    HOTEL_API: 'https://uat-hotel.hellobike.cn',
    DOWNLOAD_API: 'http://uat-hotel-bd.hellobike.cn',
  },
  pre: {
    SERVICE_API: 'https://pre-admin-server.hellobike.cn',
    HOTEL_API: 'https://pre-hotel.hellobike.cn',
    DOWNLOAD_API: 'http://pre-hotel-bd.hellobike.cn',
  },
  pro: {
    SERVICE_API: 'https://pro-admin-server.hellobike.cn',
    DOWNLOAD_API: 'http://hotel-bd.hellobike.cn',
    HOTEL_API: 'https://hotel.hellobike.cn',
  },
};

export default config[MODE] || config.dev;
