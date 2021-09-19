const vConsole = require("./v_console");

var faker = require("faker");

var testInterval = "";
var testRunningStatus = false;

const generateNewRandomLog = () => {
  var randomSentence = faker.lorem.sentence();
  var typeNumber = faker.datatype.number(3);

  switch (typeNumber) {
    case 0:
      vConsole.log(randomSentence);
      break;
    case 1:
      vConsole.info(randomSentence);
      break;
    case 2:
      vConsole.warn(randomSentence);
      break;
    case 3:
      vConsole.error(randomSentence);
      break;

    default:
      vConsole.log(randomSentence);
      break;
  }
  updateUiPrint();
};

function updateUiPrint() {
  document.querySelector("val[name='vConsoleLogListLength']").textContent =
    vConsole._log_list.length;

  document.querySelector("val[name='vConsoleLiveModeStatus']").textContent =
    vConsole._live;
  if (vConsole._live) {
    document
      .querySelector("info-block[name='vConsoleLiveModeStatus']")
      .classList.add("enabled_option");
  } else {
    document
      .querySelector("info-block[name='vConsoleLiveModeStatus']")
      .classList.remove("enabled_option");
  }

  document.querySelector("val[name='vConsoleLogPrintStatus']").textContent =
    vConsole._print ? "Enabled" : "DISABLED";
  if (vConsole._print) {
    document
      .querySelector("info-block[name='vConsoleLogPrintStatus']")
      .classList.add("enabled_option");
  } else {
    document
      .querySelector("info-block[name='vConsoleLogPrintStatus']")
      .classList.remove("enabled_option");
  }

  document.querySelector("val[name='isTestRunning']").textContent =
    testRunningStatus ? "RUNNING" : "stopped";
  if (testRunningStatus) {
    document
      .querySelector("info-block[name='isTestRunning']")
      .classList.add("enabled_option");
  } else {
    document
      .querySelector("info-block[name='isTestRunning']")
      .classList.remove("enabled_option");
  }
}

function maybeStartInterval() {
  if (testRunningStatus === false) {
    startNewInterval();
  } else {
    stopInterval();
  }
}

function startNewInterval() {
  if (testRunningStatus === false) {
    console.info("Starting Interval >>> ");
    testInterval = setInterval(generateNewRandomLog, 10);
    testRunningStatus = true;
  }
}
function stopInterval() {
  console.info("STOPPING Interval <<<");
  clearInterval(testInterval);
  testRunningStatus = false;
}

var basePageHTML = `<v-console>
                      <v-header>
                        <block-title>Browser Console API Test Page [ vConsole || vLog ]</block-title>
                      </v-header>
                      <info-stats>
                        <info-block >
                          <block-title>Log_Length: </block-title>
                          <val name="vConsoleLogListLength">${vConsole._log_list.length}</val>
                        </info-block>
                        <info-block  name="isTestRunning" title="Toggle Test start/stop " action="vConsoleMaybeStartTest">
                          <block-title>Test_Running: </block-title>
                          <val name="isTestRunning">${testRunningStatus}</val>
                        </info-block>
                        <info-block  name="vConsoleLiveModeStatus" title="Toggle Running Mode">
                          <block-title>LIVE: </block-title>
                          <val name="vConsoleLiveModeStatus">${vConsole._live}</val>
                        </info-block>
                        <info-block name="vConsoleLogPrintStatus" title="Toggle Output Printing" action='vConsolePrintToggle'>
                          <block-title>OUTPUT: </block-title>
                          <val name="vConsoleLogPrintStatus">${vConsole._print}</val>
                        </info-block>
                      </info-stats>
                      <log-list>
                        <block-title>Log List: </block-title>
                        <val></val>
                      </log-list>
                      <v-footer>
                        <block-title>foooooooooter space taking </block-title>
                      </v-footer>
                    </v-console>`;
document.body.insertAdjacentHTML("afterbegin", basePageHTML);

updateUiPrint();

var buttonsHelperHTML = `<v-block-controls><button action='vConsoleObjPrint'>Print vConsole</button>
<button action='vConsolePrintToggle'>Toggle _print</button>
<button action='vConsoleStartTest'>Start Test</button>
<button action='vConsoleStopTest'>Stop Test</button></v-block-controls>`;

document
  .querySelector("v-console info-stats")
  .insertAdjacentHTML("beforebegin", buttonsHelperHTML);

function handleClick(event) {
  event.preventDefault();
  console.log(event.target.id);

  switch (event.target.getAttribute("action")) {
    case "vConsoleObjPrint":
      vConsole.log(vConsole);
      break;

    case "vConsolePrintToggle":
      vConsole.printToggle();

      break;

    case "vConsoleStartTest":
      startNewInterval();
      break;

    case "vConsoleStopTest":
      stopInterval();
      break;

    case "vConsoleMaybeStartTest":
      maybeStartInterval();
      break;

    default:
      vConsole.info("No Click Event Trigger Found!");
      break;
  }

  updateUiPrint();
}

window.addEventListener("click", (event) => {
  handleClick(event);
});
