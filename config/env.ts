interface EnvConfig {
  SERVICE_API: string;
  HOTEL_API: string;
}
const { MODE } = import.meta.env; // 环境变量

const config: Record<string, EnvConfig> = {
  dev: {
    SERVICE_API: 'https://fat-admin-server.hellobike.cn',
    HOTEL_API: 'https://fat-hotel.hellobike.cn',
  },
  pt: {
    SERVICE_API: 'https://pt-admin-server.hellobike.cn',
    HOTEL_API: 'https://pt-hotel.hellobike.cn',
  },
  fat: {
    SERVICE_API: 'https://fat-admin-server.hellobike.cn',
    HOTEL_API: 'https://fat-hotel.hellobike.cn',
  },
  uat: {
    SERVICE_API: 'https://uat-admin-server.hellobike.cn',
    HOTEL_API: 'https://uat-hotel.hellobike.cn',
  },
  pre: {
    SERVICE_API: 'https://pre-admin-server.hellobike.cn',
    HOTEL_API: 'https://pre-hotel.hellobike.cn',
  },
  pro: {
    SERVICE_API: 'https://pro-admin-server.hellobike.cn',
    HOTEL_API: 'https://hotel.hellobike.cn',
  },
};

export default config[MODE] || config.dev;
