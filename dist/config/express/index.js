const a3_0x5bfabb=a3_0x267e;(function(_0x314e13,_0x9aa9c4){const _0xdb2a69=a3_0x267e,_0x55cced=_0x314e13();while(!![]){try{const _0x2e7c55=-parseInt(_0xdb2a69(0x12e))/0x1*(parseInt(_0xdb2a69(0x12b))/0x2)+parseInt(_0xdb2a69(0x139))/0x3*(-parseInt(_0xdb2a69(0x12a))/0x4)+parseInt(_0xdb2a69(0x12c))/0x5*(-parseInt(_0xdb2a69(0x143))/0x6)+parseInt(_0xdb2a69(0x137))/0x7+-parseInt(_0xdb2a69(0x132))/0x8*(-parseInt(_0xdb2a69(0x12f))/0x9)+parseInt(_0xdb2a69(0x13b))/0xa*(parseInt(_0xdb2a69(0x12d))/0xb)+-parseInt(_0xdb2a69(0x130))/0xc*(parseInt(_0xdb2a69(0x140))/0xd);if(_0x2e7c55===_0x9aa9c4)break;else _0x55cced['push'](_0x55cced['shift']());}catch(_0x49f5fe){_0x55cced['push'](_0x55cced['shift']());}}}(a3_0x4b2e,0x7e082));function a3_0x4b2e(){const _0x160cef=['json','530PxSVyA','public','urlencoded','../../routes/info','../../routes/default-route','8021fpMOJD','static','helmet','6eJRAqZ','5mb','../../routes/default-route-error','getDefaultDirectives','exports','60TuuXWk','34528ZfmraN','2532705aOwxtx','204996WBJhdL','14VBJTie','837AuOKTJ','17508IExSHC','path','63472CGXzgJ','use','\x27unsafe-inline\x27','cwd','\x27self\x27','3940027QhKMwG','join','24753YhotgL'];a3_0x4b2e=function(){return _0x160cef;};return a3_0x4b2e();}const express=require('express'),helmet=require(a3_0x5bfabb(0x142)),bodyParser=require('body-parser'),path=require(a3_0x5bfabb(0x131)),defaultRouter=require(a3_0x5bfabb(0x13f)),defaultRouterError=require(a3_0x5bfabb(0x127)),vlocityRouters=require('../../routes/vlocity'),infoRouters=require(a3_0x5bfabb(0x13e));function a3_0x267e(_0x38810a,_0x30f05f){const _0x4b2ebd=a3_0x4b2e();return a3_0x267e=function(_0x267e64,_0x15f7da){_0x267e64=_0x267e64-0x126;let _0x539d43=_0x4b2ebd[_0x267e64];return _0x539d43;},a3_0x267e(_0x38810a,_0x30f05f);}function configureExpress({vlocity:_0x12deb6}){const _0x36e880=a3_0x5bfabb,_0x49641b=express();return _0x49641b['use'](helmet({'contentSecurityPolicy':{'directives':{...helmet['contentSecurityPolicy'][_0x36e880(0x128)](),'script-src':[_0x36e880(0x136),_0x36e880(0x134)]}}})),_0x49641b[_0x36e880(0x133)](bodyParser[_0x36e880(0x13d)]({'extended':![]})),_0x49641b['use'](bodyParser[_0x36e880(0x13a)]({'limit':_0x36e880(0x126)})),_0x49641b[_0x36e880(0x133)](express[_0x36e880(0x141)](path[_0x36e880(0x138)](process[_0x36e880(0x135)](),_0x36e880(0x13c)))),_0x49641b[_0x36e880(0x133)](infoRouters),_0x49641b['use']('/',defaultRouter),_0x49641b[_0x36e880(0x133)](_0x12deb6,vlocityRouters),_0x49641b['use']('/',defaultRouterError),_0x49641b;}module[a3_0x5bfabb(0x129)]={'configureExpress':configureExpress};