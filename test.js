/*jshint esversion: 8 */
const [v_con, cs, clearConsole, log, logInfo, logWarn, logError ] = require ('./v__console.utility');

var timingS = 500;
var timingM = 1000;

function testFunc() {
  log("cs() -> DOOOO ");
  logInfo("logInfo() -> DOOOO ");
  logWarn("logWarn() -> DOOOO ");
  logError("logError() -> DOOOO ");
  setTimeout(() => {
    cs();
    setTimeout(() => {
      log("cs() -> DONE ");
      log("clearConsole() -> DOOOO ");
      setTimeout(() => {
        clearConsole();
        setTimeout(() => {
          log("clearConsole() -> DONE ");

          testObj();

        }, timingS);
      }, timingS);
    }, timingS);
  }, timingM);
}

function testObj() {
  v_con.log("v_con.cs() -> DOOOO ");
  v_con.logInfo("v_con.logInfo() -> DOOOO ");
  v_con.logWarn("v_con.logWarn() -> DOOOO ");
  v_con.logError("v_con.logError() -> DOOOO ");
  setTimeout(() => {
    v_con.cs();
    setTimeout(() => {
      v_con.log("v_con.cs() -> DONE ");
      v_con.log("v_con.clearConsole() -> DOOOO ");
      setTimeout(() => {
        v_con.clearConsole();
        setTimeout(() => {
          v_con.log("v_con.clearConsole() -> DONE ");

          log(v_con);

        }, timingS);
      }, timingS);
    }, timingS);
  }, timingM);
}

testFunc();
