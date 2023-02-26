"use strict";
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(new Date().getHours());
    }, 100);
});
promise.then((data) => {
    alert(data.toFixed() + `${"this is hours"}`);
});
//# sourceMappingURL=generic.js.map