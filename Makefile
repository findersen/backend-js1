install:
	npm install

lint-install:
	npm install eslint
	npm install eslint-config-airbnb-base
	npm install eslint-plugin-import
	npx eslint --init

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

commit:
	node bin/commit.js

rec:
	asciinema rec
