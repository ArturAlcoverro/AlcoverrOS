install:
	pnpm install

dev:
	pnpm run dev

build:
	pnpm run build

preview:
	pnpm run preview

start:
	pnpm run build && pnpm run preview

lint:
	pnpm run lint

clean-deps:
	rm -rf node_modules
	rm -f pnpm-lock.yaml
	rm -f bun.lock
	rm -f package-lock.json
	rm -f yarn.lock

compile:
	pnpm run compile
