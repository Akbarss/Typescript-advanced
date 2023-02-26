const cars: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

const promise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(new Date().getHours());
  }, 100);
});

promise.then((data) => {
  alert(data.toFixed() + `${"this is hours"}`);
});
