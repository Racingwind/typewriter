const sentence = "hello there from lighthouse labs";

let count = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count * 50);
  count++;
}

setTimeout(() => {
  console.log("");
}, count * 50);