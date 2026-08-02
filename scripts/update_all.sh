#!/bin/sh

# run from root folder, like `sh ./scripts/update_all.sh`
# as well as GNUMake (make) and python3

# abort on first error so a failed lint/build isn't silently swallowed
set -e

cd interface
rm -rf node_modules
corepack use pnpm@latest
pnpm update
pnpm install
pnpm format
pnpm lint
pnpm build-webUI

cd ../mock-api
rm -rf node_modules
corepack use pnpm@latest
pnpm update
pnpm install
pnpm format

cd ..
npx cspell "**"

# build files that go into docs folder

platformio run -e build_modbus -t clean
platformio run -e build_modbus
platformio run -e build_standalone -t clean
platformio run -e build_standalone

# run tests
platformio run -e native-test -t exec
