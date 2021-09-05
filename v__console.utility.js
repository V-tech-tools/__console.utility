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

//-> Short Name as ALIAS 
const logI = (msg) => {
  return logInfo(msg);
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

//-> Short Name as ALIAS 
const logW = (msg) => {
  return logWarn(msg);
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
  try {
    console.clear();
  } catch (error) {
    return error;
  }
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
    return logI( msg );
  },
  logI : ( msg ) => {
    return logI( msg );
  },
  logWarn : ( msg ) => {
    return logW( msg );
  },
  logW : ( msg ) => {
    return logW( msg );
  },
  logError : ( msg ) => {
    return logE( msg );
  },
  logE : (msg) => {
    return logE(msg);
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
