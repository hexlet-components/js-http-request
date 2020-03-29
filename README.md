# js-http-request

[![github action status](https://github.com/hexlet-components/js-http-request/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-http-request/actions)
[![Code Climate](https://codeclimate.com/github/hexlet-components/js-http-request/badges/gpa.svg)](https://codeclimate.com/github/hexlet-components/js-http-request)

## Install

```sh
npm install @hexlet/http-request
```

## Usage example

```javascript
import { get, post } from '@hexlet/http-request';

get(host)
  .then((response) => console.log(response.data));

post(host, { key: 'value' })
  .then((response) => console.log(response.status));
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-http-request/tree/master/docs)

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-http-request)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-http-request).
