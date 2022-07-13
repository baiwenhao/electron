## start
node_modules/.bin/electron .
npm start

## build
node_modules/.bin/electron-builder -m dmg
electron-builder -m dmg

```
# linux
node_modules/.bin/electron-builder -l
# or
npm run build:linux

# windows
node_modules/.bin/electron-builder -w
# or
npm run build:windows

# mac
node_modules/.bin/electron-builder -m
# or
npm run build:mac
```