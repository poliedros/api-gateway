# Czar-Api

<a></a><img src="https://img.shields.io/github/workflow/status/poliedros/fd-api/test%20code" alt="Github Actions" /></a>
<a>[![Coverage Status](https://coveralls.io/repos/github/poliedros/fd-api/badge.svg?branch=main)](https://coveralls.io/github/poliedros/fd-api?branch=main)</a>

## Description

Czar Api is the main API for applications

## Auth

To keep a route safe, use the _JwtAuthGuard_

```
@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}
```

## Interceptors

### Timeout

Timeout interceptor is global and used to stop a requisition if it takes more than 10 seconds.

```
app.useGlobalInterceptors(new TimeoutInterceptor());
```

## Health

Health module is used to check if the API itself is up and running and to check other services.

## Users

Module to keep users' data. It can be used whatever database the project requires.

## Architecture

![Solution architecture](/docs/assets/architecture.png 'Solution architecture')

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
