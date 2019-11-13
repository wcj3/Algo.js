const { performance, PerformanceObserver } = require("perf_hooks");

function log(name: string, size: number, func: Function) {
  const wrapped = performance.timerify(func);
  const obs = new PerformanceObserver(list => {
    console.log(
      `${name} took ${list
        .getEntries()[0]
        .duration.toFixed(2)} ms for ${size} elements`
    );
    obs.disconnect();
  });
  obs.observe({ entryTypes: ["function"] });

  // A performance timeline entry will be created
  wrapped();
}
export { log };
