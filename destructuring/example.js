let person = {
  firstName: "Christie",
  lastName: "Beauchamp",
  occupation: "Busy",
  dreams: "Vivid",
  height: "180cm",
};

function getFullName({ firstName, lastName }) {
  return firstName + " " + lastName;
}

let teacher = { name: "Walter", subject: "Chemistry" };
const { name } = teacher;
console.log(name);
const animals = ["Red Panda", "Otter", "Raccoon"];
const [pet] = animals;
console.log(pet);
function shouldDelete({ admin, verified }) {
  return !admin && !verified;
}

let user = { id: 8732429, admin: true, verified: false };

console.log(shouldDelete(user));
const [a, b, c] = [3, 1, 4, 1, 5];
console.log(c);
let d = 6;
let e = 22;

console.log({ e, d });
