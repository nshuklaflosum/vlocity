function a28_0x3aee(){const _0x4ef5b5=['deployFromDeployment','catch','send','877192knPhAg','102462JCUpgF','682828ykejoc','REQUIRED_FIELDS_ERROR','5619928KKZlQS','3545100GUUGux','createLog','84sZGjZP','express','body','195uPxGbx','1787463PjIlhr','x-request-id','11698780IauFBl','../../../services/utils','../../../services/logger','ERROR','REQUIRED_FIELDS_DEPLOYMENT_FROM_DEPLOYMENT','headers','log','4lLDSLQ','REQUIRED_OBJECT_FIELDS_DEPLOYMENT_FROM_DEPLOYMENT','../../../constants','status','post'];a28_0x3aee=function(){return _0x4ef5b5;};return a28_0x3aee();}const a28_0x22f2d2=a28_0x2780;(function(_0x176298,_0x456fbb){const _0x443860=a28_0x2780,_0x1564ff=_0x176298();while(!![]){try{const _0x3004db=-parseInt(_0x443860(0x1c9))/0x1*(-parseInt(_0x443860(0x1bf))/0x2)+-parseInt(_0x443860(0x1cc))/0x3+parseInt(_0x443860(0x1cb))/0x4+parseInt(_0x443860(0x1d1))/0x5*(-parseInt(_0x443860(0x1c8))/0x6)+-parseInt(_0x443860(0x1ce))/0x7*(-parseInt(_0x443860(0x1c7))/0x8)+-parseInt(_0x443860(0x1d2))/0x9+-parseInt(_0x443860(0x1d4))/0xa;if(_0x3004db===_0x456fbb)break;else _0x1564ff['push'](_0x1564ff['shift']());}catch(_0x1405bf){_0x1564ff['push'](_0x1564ff['shift']());}}}(a28_0x3aee,0xd475e));function a28_0x2780(_0x9a99a2,_0x1b4420){const _0x3aee53=a28_0x3aee();return a28_0x2780=function(_0x2780e7,_0xf20bfb){_0x2780e7=_0x2780e7-0x1bb;let _0x2ccf10=_0x3aee53[_0x2780e7];return _0x2ccf10;},a28_0x2780(_0x9a99a2,_0x1b4420);}const {Router}=require(a28_0x22f2d2(0x1cf)),logger=require(a28_0x22f2d2(0x1d6)),constants=require(a28_0x22f2d2(0x1c1)),controller=require('./controller'),utils=require(a28_0x22f2d2(0x1d5)),router=new Router();router[a28_0x22f2d2(0x1c3)]('/',(_0x2ec430,_0x6382be)=>{const _0x1ac38f=a28_0x22f2d2,_0x21e5d4=logger[_0x1ac38f(0x1cd)]('vlocity:dep-from-dep:'+_0x2ec430[_0x1ac38f(0x1bd)][_0x1ac38f(0x1d3)]);_0x21e5d4[_0x1ac38f(0x1be)](constants['START_DEPLOYMENT_FROM_DEPLOYMENT']);const _0x842699=utils['checkRequiredFields'](_0x2ec430[_0x1ac38f(0x1d0)],constants[_0x1ac38f(0x1bc)],constants[_0x1ac38f(0x1c0)]);if(_0x842699['length']){_0x21e5d4['log'](constants[_0x1ac38f(0x1ca)]);const _0x14bc80={'status':constants[_0x1ac38f(0x1bb)],'error':{'message':constants['REQUIRED_FIELDS_ERROR'],'missingFields':_0x842699}};return _0x21e5d4[_0x1ac38f(0x1be)](_0x14bc80),_0x6382be['status'](0x190)['send'](_0x14bc80);}return controller[_0x1ac38f(0x1c4)](_0x2ec430[_0x1ac38f(0x1d0)],_0x21e5d4)[_0x1ac38f(0x1c5)](_0x1bb279=>_0x21e5d4[_0x1ac38f(0x1be)](_0x1bb279)),_0x6382be[_0x1ac38f(0x1c2)](0xc8)[_0x1ac38f(0x1c6)]('The\x20process\x20of\x20deploy\x20from\x20a\x20deployment\x20started.');}),module['exports']=router;