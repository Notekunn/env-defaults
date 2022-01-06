# env-default

Env-default is zero-dependency module to load environment variables from file. Can compatibility use with [dotenv](https://www.npmjs.com/package/dotenv)

## Install

```bash
# with npm
npm install env-default

# or with Yarn
yarn add env-default
```

## Usage

### Javascript

```javascript
const envDefault = require('env-default');

const { PORT, NODE_ENV, IS_PRODUCTION } = envDefault.load({
	PORT: 3000,
	NODE_ENV: 'development',
	IS_PRODUCTION: false,
});
```

### TypeScript

```typescript
import { load } from 'env-default';

const { PORT, NODE_ENV, IS_PRODUCTION } = load({
	PORT: 3000,
	NODE_ENV: 'development',
	IS_PRODUCTION: false,
});
```

### Compatibility use with dotenv

Config dot env if nessessary.

```javascript
require('dotenv').config();
```
