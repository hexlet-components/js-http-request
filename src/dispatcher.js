import log from './logger';
import request from './request';

const prepareData = (data, headers) => {
  if (data === undefined) {
    return [data, headers];
  }
  const jsonData = JSON.stringify(data);
  const bufferData = new Buffer(jsonData, 'utf-8');
  return [bufferData, {
    ...headers,
    'Content-Type': 'application/json;charset=utf-8',
    'Content-Length': bufferData.length,
  }];
};

export default rawConfig => {
  const [data, headers] = prepareData(rawConfig.data, rawConfig.headers || {});

  const config = {
    url: rawConfig.url,
    method: rawConfig.method,
    params: rawConfig.params || {},
    headers,
    data,
  };
  log(config);

  return request(config);
};
