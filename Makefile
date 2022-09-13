install-deps:
	npm ci

run:
	bin/brain-games.js
	
lint:
	npx eslint .

publish:
	npm publish --dry-run