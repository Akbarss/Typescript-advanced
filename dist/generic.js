"use strict";
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Akbar" }, { age: 18 });
console.log(merged.name, merged.age);
//# sourceMappingURL=generic.js.map