const spinner = () => {
  let interval = 50;
  const printer = ['\r|   ', '\r/    ', '\r-     ','\r\\     '];
  for (let i = 0; i < printer.length; i++) {
    setTimeout(() => {
      process.stdout.write(printer[i]);
    }, interval);
    interval += 100;
  }
};
spinner();