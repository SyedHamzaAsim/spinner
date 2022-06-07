const loop = ['|', '/', '-', '\\'];
let x = 100;
for (let i = 0; i < 4; i++) {
  for (const char of loop) {
    x += 200;
    setTimeout(() => {
      process.stdout.write(`\r ${char}   `);
    }, x)
  }
}