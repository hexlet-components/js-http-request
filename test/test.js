// @flow

import { it, describe } from 'mocha';
import assert from 'assert';
import nock from 'nock';
import querystring from 'querystring';
import hhr from '../src/index.js'; // hexlet-http-request

nock.disableNetConnect();

describe('HexletHttpRequest', () => {
  it('#get', done => {
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    const mock = nock(host)
      .get('/')
      .reply(200, body);

    hhr.get(host).then(response => {
      assert.equal(response.data, body);
      done();
    });
  });

  it('#get with params', done => {
    const params = { a: 'v', d: 'k' };
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    const mock = nock(host)
      .get(`/?${querystring.stringify(params)}`)
      .reply(200, body);

    hhr.get(host, { params }).then(response => {
      assert.equal(response.data, body);
      done();
    });
  });
});
