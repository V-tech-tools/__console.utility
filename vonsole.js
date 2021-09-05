/*jshint esversion: 8 */

const log = (msg = null) => {
  try {
    console.log(msg);
    return true;
  } catch (error) {
    console.trace();
    return error;
  }
};
const logInfo = (msg = null) => {
  try {
    console.info(msg);
    return true;
  } catch (error) {
    console.trace();
    return error;
  }
};
const logWarn = (msg = null) => {
  try {
    console.warn(msg);
    return true;
  } catch (error) {
    console.trace();
    return error;
  }
};

// <F>-: logError
const logError = (msg = null) => {
  try {
    console.error(msg);
    return true;
  } catch (error) {
    console.trace();
    return error;
  }
};

//-> Short Name as ALIAS 
const logE = (msg) => {
  return logError(msg);
};


// <F>-: clear console function 
const clearConsole = () => {
  console.clear();
};


//-> Short Name as ALIAS 
const cs = () => {
  clearConsole();
};

//<OBJ> v_con - -v- Console - Vonsole
const v_con = {
  clearConsole : () => {
    cs();
  },
  cs : () => {
    cs();
  },
  log : ( msg )=> {
    return log(msg);
  },
  logInfo : ( msg ) => {
    return logInfo( msg );
  },
  logWarn : ( msg ) => {
    return logWarn( msg );
  },
  logError : ( msg ) => {
    return logError( msg );
  },
  logE : (msg) => {
    return logError(msg);
  }
};

module.exports = [
  v_con,
  clearConsole,
  cs,
  log,
  logInfo,
  logWarn,
  logError,
];
