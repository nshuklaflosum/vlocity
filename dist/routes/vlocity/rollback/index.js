function a44_0x1ed5(){const _0x1c4b27=['status','../../../constants','112EuTtPR','559575hcMPAp','./controller','187InaZEP','post','34REczRP','590CNcnMa','../../../services/logger','rollbackBranch','677220tUdCay','36124PbMLBn','The\x20process\x20of\x20retrieve\x20started.','759217QboCfS','body','648dwJJUn','length','2419260ZdwUfP','checkRequiredFields','send','../../../services/utils','REQUIRED_FIELDS_ERROR','141381EQYxbt','vlocity:rollback:','createLog','log','58156mxREwF','START_ROLLBACK_BRANCH'];a44_0x1ed5=function(){return _0x1c4b27;};return a44_0x1ed5();}function a44_0x417b(_0x454e67,_0x4f3988){const _0x1ed5b8=a44_0x1ed5();return a44_0x417b=function(_0x417bf2,_0x7901f){_0x417bf2=_0x417bf2-0x186;let _0x5454cb=_0x1ed5b8[_0x417bf2];return _0x5454cb;},a44_0x417b(_0x454e67,_0x4f3988);}const a44_0xdf3aa0=a44_0x417b;(function(_0x3c0e32,_0x1d9834){const _0x3c19bf=a44_0x417b,_0x1a5c43=_0x3c0e32();while(!![]){try{const _0x3b8f24=-parseInt(_0x3c19bf(0x187))/0x1+-parseInt(_0x3c19bf(0x19d))/0x2*(parseInt(_0x3c19bf(0x190))/0x3)+parseInt(_0x3c19bf(0x1a2))/0x4*(parseInt(_0x3c19bf(0x19e))/0x5)+parseInt(_0x3c19bf(0x189))/0x6*(parseInt(_0x3c19bf(0x194))/0x7)+-parseInt(_0x3c19bf(0x198))/0x8*(-parseInt(_0x3c19bf(0x199))/0x9)+parseInt(_0x3c19bf(0x18b))/0xa+-parseInt(_0x3c19bf(0x19b))/0xb*(parseInt(_0x3c19bf(0x1a1))/0xc);if(_0x3b8f24===_0x1d9834)break;else _0x1a5c43['push'](_0x1a5c43['shift']());}catch(_0x4901d0){_0x1a5c43['push'](_0x1a5c43['shift']());}}}(a44_0x1ed5,0x87a07));const {Router}=require('express'),logger=require(a44_0xdf3aa0(0x19f)),constants=require(a44_0xdf3aa0(0x197)),controller=require(a44_0xdf3aa0(0x19a)),utils=require(a44_0xdf3aa0(0x18e)),router=new Router();router[a44_0xdf3aa0(0x19c)]('/',(_0x573a9b,_0x2d96bc)=>{const _0x5cbe64=a44_0xdf3aa0,_0x4ddbe7=logger[_0x5cbe64(0x192)](_0x5cbe64(0x191)+_0x573a9b['headers']['x-request-id']);_0x4ddbe7[_0x5cbe64(0x193)](constants[_0x5cbe64(0x195)]);const _0x28c381=utils[_0x5cbe64(0x18c)](_0x573a9b['body'],constants['REQUIRED_FIELDS_ROLLBACK']);if(_0x28c381[_0x5cbe64(0x18a)]){_0x4ddbe7[_0x5cbe64(0x193)](constants['REQUIRED_FIELDS_ERROR']);const _0x2e3476={'status':constants['ERROR'],'error':{'message':constants[_0x5cbe64(0x18f)],'missingFields':_0x28c381}};return _0x4ddbe7[_0x5cbe64(0x193)](_0x2e3476),_0x2d96bc['status'](0x190)[_0x5cbe64(0x18d)](_0x2e3476);}return controller[_0x5cbe64(0x1a0)](_0x573a9b[_0x5cbe64(0x188)],_0x4ddbe7)['catch'](_0xeb456f=>_0x4ddbe7[_0x5cbe64(0x193)](_0xeb456f)),_0x2d96bc[_0x5cbe64(0x196)](0xc8)['send'](_0x5cbe64(0x186));}),module['exports']=router;