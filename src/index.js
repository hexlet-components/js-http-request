// @flow

import dispatch from './dispatcher';

/**
 * Perform get request
 */
export const get = (url: string, config: Object = {}) =>
  dispatch({ ...config, url, method: 'GET' });

/**
 * Perform post request
 */
export const post = (url: string, data: Object, config: Object = {}) =>
  dispatch({ ...config, url, data, method: 'POST' });

export default { get, post };
