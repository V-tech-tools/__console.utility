const vConsole = {
  history: [],
  output: "vMode", // default [passing output to console] | hidden [no console output] | vMode [totally replace console with custom mode - for live website]
  createEntry(type, msg) {
    this.history.push({ type: type, message: msg, timestamp: Date.now() });
  },
  log(msg) {
    this.createEntry("log", msg);
  },
  warn(msg) {
    this.createEntry("warn", msg);
  },
};
