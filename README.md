# Coderr

A small extension on errors that adds a code property and aditional values

`npm i @robotmayo/coderr`

# Usage

```javascript
import Coderr from "@robotmayo/coderr";

function throwable() {
  throw new Coderr("Hi I have a code", "ERR_EXAMPLE");
}

try {
  throwable();
} catch (err) {
  console.log(err.code);
}
```

You can also wrap existing errors

```javascript
import { wrap } from "@robotmayo/coderr";

function throwable() {
  throw wrap(new Error("My Error"), "ERR_EXAMPLE");
}

try {
  throwable();
} catch (err) {
  console.log(err.code);
}
```

# API

```typescript
export default class Coderr extends Error {
  code: string;
  constructor(message?: string, code?: string);
}
export declare function wrap(e: Error, code?: string): Coderr;
```
