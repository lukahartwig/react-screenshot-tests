# React Screenshot Tests

This is an example why running crossplatform screenshot tests is a bad idea.

## Prerequisites

- Node
- Yarn
- Docker

## Run the test

You can run the tests locally with:

```sh
yarn run test:local
```

You can run the test inside a docker container like this:

```sh
yarn run test:docker
```

## The Problem

Platforms render fonts differently which leads to small pixel differences

![Screenshot Comparison](/src/__image_snapshots__/__diff_output__/text-test-tsx-button-should-render-without-visual-regression-1-diff.png)

- **Left:** Local
- **Right:** Docker
