# to_object

TypeScript implementation of a function you can use for reducing down an array
of `[key, value]` pairs, to an object.

## Usage

```typescript
import { toObject } from "https://deno.land/x/to_object/mod.ts";

const peopleAndTheirPhoneNumbers: Array<[string, string]> = [
  ["Alice", "11111111"],
  ["Bob", "22222222"],
  ["Eve", "44444444"],
];

const phoneBook = peopleAndTheirPhoneNumbers.reduce(toObject, {});

console.log(phoneBook);
```

The above program, would print:

```
{ Alice: "11111111", Bob: "22222222", Eve: "44444444" }
```
