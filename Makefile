install:
	bun install

dev:
	bun run dev

build:
	bun run build

preview:
	bun run preview

start:
	bun run build && bun run preview

lint:
	bun run lint

clean-deps:
	rm -rf node_modules
	rm -f pnpm-lock.yaml
	rm -f bun.lock
	rm -f package-lock.json
	rm -f yarn.lock

compile:
	bun run compile
