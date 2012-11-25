TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
REPORTER = spec
TIMEOUT = 1000
JSCOVERAGE = ./node_modules/jscover/bin/jscover

install:
	@npm install

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(TESTS)

test-cov: install cov
	@$(MAKE) -C .cov test REPORTER=dot
	@$(MAKE) -C .cov test REPORTER=html-cov > coverage.html

cov:
	@rm -rf .cov
	@$(JSCOVERAGE) --exclude=config --exclude=test --exclude=assets . .cov
	@cp -rf node_modules config test assets .cov

.PHONY: install test test-cov cov
