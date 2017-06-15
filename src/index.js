// @flow
import 'source-map-support/register';

import dispatch from './dispatcher';

/**
 * Perform get request
 *
 * @example
 * get(host).then(response => console.log(response.body))
 *
 */
export const get = (url: string, config: Object = {}) =>
  dispatch({ ...config, url, method: 'GET' });

/**
 * Perform post request
 *
 * @example
 * post(host, { key: 'value' }).then(response => console.log(response.status))
 */
export const post = (url: string, data: Object, config: Object = {}) =>
  dispatch({ ...config, url, data, method: 'POST' });

export default { get, post };
