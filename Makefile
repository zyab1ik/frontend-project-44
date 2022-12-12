install-deps:
	npm ci

run-games:
	bin/brain-games.js

run-even:
	bin/brain-even.js

run-calc:
	bin/brain-calc.js

run-gcd:
	bin/brain-gcd.js

run-progression:
	bin/brain-progression.js

run-prime:
	bin/brain-prime.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
