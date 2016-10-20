import log from './logger';
import request from './request';
import querystring from 'querystring';

const prepareData = (data, headers) => {
  if (data === undefined) {
    return [data, headers];
  }
  const preparedData = querystring.stringify(data);
  const bufferData = new Buffer(preparedData, 'utf-8');
  return [bufferData, {
    ...headers,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(bufferData),
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
