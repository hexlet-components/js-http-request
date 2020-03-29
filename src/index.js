// @ts-check

import dispatch from './dispatcher';

/**
 * Perform get request
 *
 * @example
 * get(host).then(response => console.log(response.data))
 *
 */
export const get = (url, config) => (
  dispatch({ ...config, url, method: 'GET' })
);

/**
 * Perform post request
 *
 * @example
 * post(host, { key: 'value' }).then(response => console.log(response.status))
 */
export const post = (url, data, config) => (
  dispatch({
    ...config,
    url,
    data,
    method: 'POST',
  })
);

export default { get, post };
