install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

start:
	npm run build && npm run preview

lint:
	npm run lint

clean-deps:
	rm -rf node_modules
	rm -f pnpm-lock.yaml
	rm -f bun.lock
	rm -f package-lock.json
	rm -f yarn.lock

compile:
	npm run compile
