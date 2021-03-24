import request from '@/utils/request';

const config: Record<string, string> = {
  dev: 'https://fat-admin-server.hellobike.cn',
  fat: 'https://fat-admin-server.hellobike.cn',
  uat: 'https://uat-admin-server.hellobike.cn',
  pt: 'https://pt-admin-server.hellobike.cn',
  pre: 'https://pre-admin-server.hellobike.cn',
  pro: 'https://admin-server.hellobike.cn',
};

const API = config[REACT_APP_ENV] || config.dev;


// eslint-disable-next-line import/prefer-default-export
export const getLoginUserInfo = async (): Promise<string[]> => {
  const res = await request.get(`${API}/systemUser/getLoginUserInfo`);
  return res.data?.userActions || [];
};
