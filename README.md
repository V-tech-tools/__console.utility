# __console.utility


# 🌀 v_con :: **v__console.utility**
> **[.v.]** *Node Module* that only requires a single function call to execute some bash/shell code in a child_process

#
## ⏩ How To Install:
Add this repo git URL into dependencies in your projects package.json.  

	...
	"dependencies": {
		"v__console.utility":"https://github.com/V-tech-tools/__console.utility"  
	}, 
	...

## 💥 How to use:
Well just load it as a constant...and have fun... 

	const [v_con] = require( 'v__console.utility' );

	// Simple listing
	v_con.log( "message to print" );

	v_con.logI( "Some adaasdd das as git status" );
	v_con.logInfo( "Some adaasdd das as git status" );

	v_con.logW( "Some adaasdd das as git status" );
	v_con.logWarn( "Some adaasdd das as git status" );
  
	v_con.logE( "Some adaasdd das as git status" );
	v_con.logError( "Some adaasdd das as git status" );


	Or look at the test.js file for more info how to use these functions...
	const [cs, clearConsole, log, logInfo, logWarn, logError ] = require ('./v__console.utility');

	-> Clear Console
	   clearConsole();
	Alias: cs();
	
	-> console.log()
	  log();
	
	-> Will use the console.info() 
	   logInfo();
	A> logI();
	  
	-> Warning ...
	   logWarn();
	A> logW();
	  
	-> Console Error  
	   logError();
	A> logE();
  
	...



### 👻 Author: **-<[\_.⟁.\_]>-**   
### ⏰ CreatedTime: 05.09.2021 @ 18:51
