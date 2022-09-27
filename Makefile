install-deps:
	npm ci

run-games:
	bin/brain-games.js

run-even:
	bin/brain-even.js

run-calc:
	bin/brain-calc.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
