# js-def-issue

This repository highlights the issue happening when generating definition files from javascript.

The javascript that raise the issue near from [ExtendedClass.js](./ExtendedClass.js)

Here the error returned by typescript:

```log
ExtendedClass.js:1:1 - error TS9006: Declaration emit for this file requires using private name 'BaseClass' from module '"deps/BaseClass"'. An explicit type annotation may unblock declaration emit.

1 define("lib/ExtendedClass", ["deps/BaseClass"],
  ~~~~~~
```

It seems that BaseClass cannot be reexported.

The issue is reproducible with typescript 4.5.5 and 4.6.0-beta.



