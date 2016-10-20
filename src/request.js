import http from 'http';
import url from 'url';
import querystring from 'querystring';

import log from './logger';

export default config => new Promise((resolve, reject) => {
  const headers = config.headers;

  const parsedUrl = url.parse(config.url);
  const joinedParams = { ...querystring.parse(parsedUrl.query), ...config.params };
  const query = querystring.stringify(joinedParams);
  const path = query === '' ? `${parsedUrl.path}` : `${parsedUrl.path}?${query}`;
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    method: config.method,
    path,
    headers,
  };

  log(options);

  const req = http.request(options, res => {
    const response = {
      status: res.statusCode,
      statusText: res.statusMessage,
      headers: res.headers,
      config,
      request: req,
    };

    const responseData = [];
    res.on('data', (chunk) => {
      responseData.push(chunk.toString());
    });

    res.on('error', err => {
      log(err);
      reject(err);
    });

    res.on('end', () => {
      response.data = responseData.join('');
      resolve(response);
    });
  });

  req.on('error', err => {
    log(err);
    reject(err);
  });

  req.end(config.data);
});
