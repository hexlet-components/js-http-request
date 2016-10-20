// @flow

import { it, describe } from 'mocha';
import assert from 'assert';
import nock from 'nock';
import querystring from 'querystring';
import { get, post } from '../src/index.js'; // hexlet-http-request

nock.disableNetConnect();

describe('HexletHttpRequest', () => {
  it('#get', done => {
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    nock(host)
      .get('/')
      .reply(200, body);

    get(host).then(response => {
      assert.equal(response.data, body);
      done();
    });
  });

  it('#get with params', done => {
    const params = { a: 'v', d: 'k' };
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    nock(host)
      .get(`/?${querystring.stringify(params)}`)
      .reply(200, body);

    get(host, { params }).then(response => {
      assert.equal(response.data, body);
      done();
    });
  });

  it('#get', done => {
    const host = 'http://ru.hexlet.io';
    const status = 301;
    nock(host).get('/').reply(status);

    get(host).then(response => {
      assert.equal(response.status, status);
      done();
    }).catch(done);
  });

  it('#get 2', done => {
    const host = 'http://ru.hexlet.io';
    const pathname = '/users/new';
    const body = 'hello, world';
    nock(host).get(pathname).reply(200, body);

    get(`${host}${pathname}`).then(response => {
      assert.equal(response.data, body);
      done();
    }).catch(done);
  });

  it('#get 3', done => {
    const host = 'http://ru.hexlet.io';
    const pathname = '/users/new';
    nock(host).get(pathname).replyWithError('timeout error');

    get(`${host}${pathname}`).then(() => {
      assert(false);
    }).catch(err => {
      assert(err);
      done();
    });
  });

  it('#post', done => {
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

    post(`${host}${pathname}`, data).then(response => {
      assert.equal(response.status, status);
      done();
    }).catch(done);
  });
});
