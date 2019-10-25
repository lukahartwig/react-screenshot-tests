#!/usr/bin/env bash

docker container run \
  -it \
  --rm \
  -v "$PWD":/project \
  -w /project \
  --cap-add=SYS_ADMIN \
  zenika/alpine-chrome:with-puppeteer yarn test:local