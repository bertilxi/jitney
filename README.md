# Jitney

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

> Jitney is a dead simple event bus.

```js
import { eventBus } from "jitney";

const handleEvent = event => {
  console.log(event);
};

const unsubscribe = eventBus.on("event", handleEvent);

eventBus.emit("event", "my custom event payload");

unsubscribe();
```
