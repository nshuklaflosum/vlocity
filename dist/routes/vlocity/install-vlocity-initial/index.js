const a30_0x267710=a30_0x5b5c;function a30_0x332f(){const _0x497f5f=['10ZLOVUP','../../../constants','28radXRb','ERROR','192vuoPed','length','36JlKusI','send','status','createLog','2421bQReFL','../../../services/logger','2EDjSas','checkRequiredFields','20368ozuRsN','exports','23641UzLeHw','express','2625219yPyMur','839674tSHwbo','REQUIRED_FIELDS_CLEAN_ORG_DATA','log','1568XOVaWu','20155FReTxI','headers','vlocity:install-vlocity-initial:','post','REQUIRED_FIELDS_ERROR','3853356ACATim','START_INSTALL_VLOCITY_INITIAL'];a30_0x332f=function(){return _0x497f5f;};return a30_0x332f();}(function(_0x4f4284,_0x34ba36){const _0x5c7cbb=a30_0x5b5c,_0x4b5cce=_0x4f4284();while(!![]){try{const _0xebc916=parseInt(_0x5c7cbb(0x150))/0x1*(-parseInt(_0x5c7cbb(0x14c))/0x2)+-parseInt(_0x5c7cbb(0x14a))/0x3*(parseInt(_0x5c7cbb(0x142))/0x4)+-parseInt(_0x5c7cbb(0x157))/0x5*(parseInt(_0x5c7cbb(0x144))/0x6)+parseInt(_0x5c7cbb(0x156))/0x7*(-parseInt(_0x5c7cbb(0x14e))/0x8)+parseInt(_0x5c7cbb(0x152))/0x9+parseInt(_0x5c7cbb(0x140))/0xa*(-parseInt(_0x5c7cbb(0x153))/0xb)+parseInt(_0x5c7cbb(0x146))/0xc*(parseInt(_0x5c7cbb(0x13e))/0xd);if(_0xebc916===_0x34ba36)break;else _0x4b5cce['push'](_0x4b5cce['shift']());}catch(_0x50eab0){_0x4b5cce['push'](_0x4b5cce['shift']());}}}(a30_0x332f,0x5bcc7));function a30_0x5b5c(_0x5edff6,_0x2e55e3){const _0x332fd=a30_0x332f();return a30_0x5b5c=function(_0x5b5ca9,_0x41e2ca){_0x5b5ca9=_0x5b5ca9-0x13d;let _0x121c09=_0x332fd[_0x5b5ca9];return _0x121c09;},a30_0x5b5c(_0x5edff6,_0x2e55e3);}const {Router}=require(a30_0x267710(0x151)),logger=require(a30_0x267710(0x14b)),constants=require(a30_0x267710(0x141)),controller=require('./controller'),utils=require('../../../services/utils'),router=new Router();router[a30_0x267710(0x15a)]('/',(_0x2090cb,_0x57f122)=>{const _0x1fa235=a30_0x267710,_0x4dd265=logger[_0x1fa235(0x149)](_0x1fa235(0x159)+_0x2090cb[_0x1fa235(0x158)]['x-request-id']);_0x4dd265['log'](constants[_0x1fa235(0x13f)]);const _0x3a0375=utils[_0x1fa235(0x14d)](_0x2090cb['body'],constants[_0x1fa235(0x154)]);if(_0x3a0375[_0x1fa235(0x145)]){_0x4dd265[_0x1fa235(0x155)](constants['REQUIRED_FIELDS_ERROR']);const _0x37e5fa={'status':constants[_0x1fa235(0x143)],'error':{'message':constants[_0x1fa235(0x13d)],'missingFields':_0x3a0375}};return _0x4dd265[_0x1fa235(0x155)](_0x37e5fa),_0x57f122['status'](0x190)[_0x1fa235(0x147)](_0x37e5fa);}return controller['installVlocityInitial'](_0x2090cb['body'],_0x4dd265)['catch'](_0xdbb939=>_0x4dd265[_0x1fa235(0x155)](_0xdbb939)),_0x57f122[_0x1fa235(0x148)](0xc8)[_0x1fa235(0x147)]('The\x20process\x20of\x20install\x20Vlocity\x20Initial\x20started.');}),module[a30_0x267710(0x14f)]=router;