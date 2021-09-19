const { v4: uuidv4 } = require("uuid");

const vConsole = {
  _live: false,
  _print: true,
  _log_list: [],
  genUID() {
    return uuidv4();
  },

  printToggle() {
    try {
      vConsole._print = !vConsole._print;
      vConsole.log("Print Toggled >> " + vConsole._print);
      return true;
    } catch (e) {
      return e;
    }
  },

  printToDom(newItem) {
    try {
      if (!vConsole._live) console.log(vConsole);

      var helpString = `<log-item type='${newItem.type}'><type>${newItem.type}</type><id><icon>⛛</icon><val>${newItem.id}</val></id><msg><icon>🞑</icon><val>${newItem.msg}</val></msg><ts><icon>🞇</icon><val>${newItem.timestamp}</val></ts></log-item>`;
      if (!vConsole._live) console.log(helpString);

      document
        .querySelector("v-console log-list val")
        .insertAdjacentHTML("afterbegin", helpString);

      return true;
    } catch (e) {
      return e;
    }
  },

  createEntry(type, msg) {
    try {
      if (typeof msg === "object") {
        msg = JSON.stringify(msg, true, 2);
      }
      var newItem = {
        id: vConsole.genUID(),
        type: type,
        msg: msg,
        timestamp: Date.now(),
      };

      vConsole._log_list.push(newItem);

      if (vConsole._print) vConsole.printToDom(newItem);

      return true;
    } catch (e) {
      return e;
    }
  },

  assert() {
    vConsole.log("[not-ready] Vonsole.assert()");
    return false;
  },
  clear() {
    vConsole.log("[not-ready] Vonsole.clear()");
    return false;
  },
  count() {
    vConsole.log("[not-ready] Vonsole.count()");
    return false;
  },
  countReset() {
    vConsole.log("[not-ready] Vonsole.countReset()");
    return false;
  },
  debug() {
    vConsole.log("[not-ready] Vonsole.debug()");
    return false;
  },
  dir() {
    vConsole.log("[not-ready] Vonsole.dir()");
    return false;
  },
  dirxml() {
    vConsole.log("[not-ready] Vonsole.dirxml()");
    return false;
  },
  error(msg) {
    vConsole.createEntry("error", msg);
  },
  group() {
    vConsole.log("[not-ready] Vonsole.group()");
    return false;
  },
  groupCollapsed() {
    vConsole.log("[not-ready] Vonsole.groupCollapsed()");
    return false;
  },
  groupEnd() {
    vConsole.log("[not-ready] Vonsole.groupEnd()");
  },
  info(msg) {
    vConsole.createEntry("info", msg);
  },
  log(msg) {
    vConsole.createEntry("log", msg);
  },
  profile() {
    vConsole.log("[not-ready] Vonsole.profile()");
    return false;
  },
  profileEnd() {
    vConsole.log("[not-ready] Vonsole.profileEnd()");
    return false;
  },
  table() {
    vConsole.log("[not-ready] Vonsole.table()");
    return false;
  },
  time() {
    vConsole.log("[not-ready] Vonsole.time()");
    return false;
  },
  timeEnd() {
    vConsole.log("[not-ready] Vonsole.timeEnd()");
    return false;
  },
  timeLog() {
    vConsole.log("[not-ready] Vonsole.timeLog()");
    return false;
  },
  timeStamp() {
    vConsole.log("[not-ready] Vonsole.timeStamp()");
    return false;
  },
  trace() {
    vConsole.log("[not-ready] Vonsole.trace()");
    return false;
  },
  warn(msg) {
    vConsole.createEntry("warn", msg);
  },
};

if (vConsole._live) {
  console.assert = vConsole.assert;
  console.clear = vConsole.clear;
  console.count = vConsole.count;
  console.countReset = vConsole.countReset;
  console.debug = vConsole.debug;
  console.dir = vConsole.dir;
  console.dirxml = vConsole.dirxml;
  console.error = vConsole.error;
  console.group = vConsole.group;
  console.groupCollapsed = vConsole.groupCollapsed;
  console.groupEnd = vConsole.groupEnd;
  console.info = vConsole.info;
  console.log = vConsole.log;
  console.profile = vConsole.profile;
  console.profileEnd = vConsole.profileEnd;
  console.table = vConsole.table;
  console.time = vConsole.time;
  console.timeEnd = vConsole.timeEnd;
  console.timeLog = vConsole.timeLog;
  console.timeStamp = vConsole.timeStamp;
  console.trace = vConsole.trace;
  console.warn = vConsole.warn;
}

module.exports = vConsole;
