install:
	yarn.js

build:
	rm -rf dist
	npm run build

test:
	DEBUG=hexlet-http-request npm run test

lint:
	npm run eslint -- src test

publish:
	npm publish

.PHONY: test
