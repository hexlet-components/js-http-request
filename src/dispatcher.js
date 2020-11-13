// @ts-check

import querystring from 'querystring';

import log from './logger.js';
import request from './request.js';

const prepareData = (data, headers) => {
  if (data === undefined) {
    return [data, headers];
  }
  const preparedData = querystring.stringify(data);
  const bufferData = Buffer.from(preparedData, 'utf-8');
  return [bufferData, {
    ...headers,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(bufferData),
  }];
};

export default (rawConfig) => {
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
