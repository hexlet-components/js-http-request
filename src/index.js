// @flow

import dispatch from './dispatcher';

const get = (url, config = {}) => dispatch({ ...config, url, method: 'get' });

export default { get };
