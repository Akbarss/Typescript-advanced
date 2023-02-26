"use strict";
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(new Date().getHours());
    }, 1000);
});
promise.then((data) => {
    alert(data.toFixed() + `${"this is hours"}`);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Akbar" }, { age: 18 });
console.log(merged.name, merged.age);
//# sourceMappingURL=generic.js.map