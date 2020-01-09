const { performance, PerformanceObserver } = require("perf_hooks");

function timer(name: string, size: number, func: Function): Promise<any> {
  const promises: Promise<any>[] = [];
  for (let i = 0; i < 8; i++) {
    promises.push(
      new Promise(resolve => {
        const wrapped = performance.timerify(func);
        const obs = new PerformanceObserver(list => {
          obs.disconnect();
          resolve(list.getEntries()[0].duration.toFixed(2));
        });
        obs.observe({ entryTypes: ["function"] });
        // A performance timeline entry will be created
        wrapped();
      })
    );
  }
  return Promise.all(promises).then((e: number[]) => {
    const totalTime = e.reduce((prev, curr) => +prev + +curr);
    console.log(
      `${name} took ${(totalTime / 10).toFixed(
        2
      )} ms on avg to sort ${size} elements`
    );
  });
}
export { timer };
