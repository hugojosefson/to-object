const peopleAndTheirPhoneNumbers: Array<[string, string]> = [
  ["Alice", "11111111"],
  ["Bob", "22222222"],
  ["Eve", "44444444"],
];

const phoneBook = Object.fromEntries(peopleAndTheirPhoneNumbers);

console.log(phoneBook);
