"use strict";
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Akbar" }, { age: 18 });
console.log(merged.name, merged.age);
// =============================================
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Akbar",
    age: 18,
    job: "Developer Web",
};
console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
console.log(getObjectValue(person, "job"));
//# sourceMappingURL=generic.js.map