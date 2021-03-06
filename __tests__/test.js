// @flow

import nock from 'nock';
import querystring from 'querystring';
import { get, post } from '../src/index.js'; // hexlet-http-request

nock.disableNetConnect();

describe('HexletHttpRequest', () => {
  it('#get 1', () => {
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    nock(host)
      .get('/')
      .reply(200, body);

    return expect(get(host)).resolves.toMatchObject({ data: body });
  });

  it('#get with params', () => {
    const params = { a: 'v', d: 'k' };
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    nock(host)
      .get(`/?${querystring.stringify(params)}`)
      .reply(200, body);

    return expect(get(host, { params })).resolves.toMatchObject({ data: body });
  });

  it('#get 2', () => {
    const host = 'http://ru.hexlet.io';
    const status = 301;
    nock(host).get('/').reply(status);

    return expect(get(host)).resolves.toMatchObject({ status });
  });

  it('#get 3', () => {
    const host = 'http://ru.hexlet.io';
    const pathname = '/users/new';
    const body = 'hello, world';
    nock(host).get(pathname).reply(200, body);

    return expect(get(`${host}${pathname}`)).resolves.toMatchObject({ data: body });
  });

  it('#get 4', () => {
    const host = 'http://ru.hexlet.io';
    const pathname = '/users/new';
    nock(host).get(pathname).replyWithError('timeout error');

    return expect(get(`${host}${pathname}`)).rejects
      .toMatchObject({ message: 'timeout error' });
  });

  it('#post', () => {
    const host = 'http://ru.hexlet.io';
    const pathname = '/users';
    const data = { nickname: 'scooter' };
    const preparedData = querystring.stringify(data);
    const status = 302;
    nock(host, {
      reqheaders: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': preparedData.length.toString(),
      },
    }).post(pathname, data).reply(status);

    return expect(post(`${host}${pathname}`, data)).resolves
      .toMatchObject({ status });
  });
});
