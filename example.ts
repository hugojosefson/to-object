import { toObject } from "https://deno.land/x/to_object_reducer/mod.ts";

const peopleAndTheirPhoneNumbers: Array<[string, string]> = [
  ["Alice", "11111111"],
  ["Bob", "22222222"],
  ["Eve", "44444444"],
];

const phoneBook = peopleAndTheirPhoneNumbers.reduce(toObject, {});

console.log(phoneBook);
