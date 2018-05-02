install:
	npm install

docs:
	mkdir -p docs
	npm run documentation -- build src/index.js -f md > docs/README.md

build:
	rm -rf dist
	npm run build

test:
	DEBUG=hexlet-http-request npm run test

lint:
	npm run eslint -- src __tests__

publish:
	npm publish

.PHONY: test docs
