const cars: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

// const promise = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(new Date().getHours());
//   }, 1000);
// });

// promise.then((data) => {
//   alert(data.toFixed() + `${"this is hours"}`);
// });

type T = {
  name: string;
};

type R = {
  age: number;
};

function mergeObjects<T, R>(a: T, b: R) {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: "Akbar" }, { age: 18 });
console.log(merged.name, merged.age);
