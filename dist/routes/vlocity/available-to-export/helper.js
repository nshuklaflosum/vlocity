function a11_0x207f(_0x51ba74,_0xdbd7ef){const _0x1bf131=a11_0x1bf1();return a11_0x207f=function(_0x207f42,_0x35a1ea){_0x207f42=_0x207f42-0xec;let _0x361d6a=_0x1bf131[_0x207f42];return _0x361d6a;},a11_0x207f(_0x51ba74,_0xdbd7ef);}const a11_0x4d1591=a11_0x207f;(function(_0x277601,_0x58be80){const _0x5ea9f9=a11_0x207f,_0x224224=_0x277601();while(!![]){try{const _0x14f303=parseInt(_0x5ea9f9(0xf2))/0x1*(parseInt(_0x5ea9f9(0x100))/0x2)+parseInt(_0x5ea9f9(0xf4))/0x3+parseInt(_0x5ea9f9(0x102))/0x4+-parseInt(_0x5ea9f9(0x109))/0x5*(parseInt(_0x5ea9f9(0xfd))/0x6)+-parseInt(_0x5ea9f9(0x103))/0x7*(-parseInt(_0x5ea9f9(0x10d))/0x8)+parseInt(_0x5ea9f9(0xf7))/0x9*(-parseInt(_0x5ea9f9(0xfb))/0xa)+-parseInt(_0x5ea9f9(0xf5))/0xb;if(_0x14f303===_0x58be80)break;else _0x224224['push'](_0x224224['shift']());}catch(_0x13c476){_0x224224['push'](_0x224224['shift']());}}}(a11_0x1bf1,0xa0027));const {readFile,access,writeFile,rm}=require(a11_0x4d1591(0xfe)),{join}=require(a11_0x4d1591(0xfc)),{AvailableToExportCommand}=require('../../../services/cli-commands/available-to-export.command'),{pathConfig}=require(a11_0x4d1591(0x101)),body={'instanceUrl':'','accessToken':'','page':0x0},AVAILABLE_TO_EXPORT=a11_0x4d1591(0x107),COUNT_OF_COMPONENTS_PER_PAGE=0x2710;function a11_0x1bf1(){const _0x4a6d65=['catch','map','type','8QCRspi','substring','parse','utf-8','.json','vlocityUrl','records','1LVgnqg','vlocityToken','3313095MnrRXo','7246173WxzFxi','key','441BRkGPx','logger','exports','availableToExport','225280hEGTap','path','6510WFBqdi','fs/promises','page','2151986eUTlkB','../../../config/path','2524352ZhKFXL','2273866ojSjUA','then','push','stringify','available_export','execute','3310LyDXpG'];a11_0x1bf1=function(){return _0x4a6d65;};return a11_0x1bf1();}function checkFileExists(_0x3e4976){const _0x3ac4d0=a11_0x4d1591;return access(_0x3e4976)[_0x3ac4d0(0x104)](()=>!![])[_0x3ac4d0(0x10a)](()=>![]);}class AvailableToExportHelper{constructor({instanceUrl:_0x41fb2f,accessToken:_0x43eb9d,page:_0x5e39d6}=body,_0x3e9bcb){const _0xeb48a6=a11_0x4d1591;this['vlocityUrl']=_0x41fb2f,this[_0xeb48a6(0xf3)]=_0x43eb9d,this['page']=_0x5e39d6!==null&&_0x5e39d6!==undefined?_0x5e39d6:-0x1,this[_0xeb48a6(0xf8)]=_0x3e9bcb;}async[a11_0x4d1591(0xfa)](){const _0x1d350f=a11_0x4d1591,_0x3af6dd=join(pathConfig['tmpPath'],AVAILABLE_TO_EXPORT+'_'+this[_0x1d350f(0xf3)][_0x1d350f(0xec)](0x0,0xf)+_0x1d350f(0xef)),_0x322bdc=await checkFileExists(_0x3af6dd);if(this[_0x1d350f(0xff)]!==null&&this[_0x1d350f(0xff)]!==undefined&&this['page']>0x0&&_0x322bdc){const _0x26f0c6=await readFile(_0x3af6dd,{'encoding':_0x1d350f(0xee)});try{return JSON[_0x1d350f(0xed)](_0x26f0c6);}catch(_0x24f1ee){}}this[_0x1d350f(0xff)]===0x0&&_0x322bdc&&await rm(_0x3af6dd);const _0x4c2760=await new AvailableToExportCommand({'vlocityAuth':{'accessToken':this[_0x1d350f(0xf3)],'instanceUrl':this[_0x1d350f(0xf0)]},'logger':this[_0x1d350f(0xf8)]})[_0x1d350f(0x108)](),_0x162181=_0x4c2760?.[_0x1d350f(0xf1)][_0x1d350f(0x10b)](({VlocityDataPackType:_0x3dcbb9,Name:_0x3e1ba1,VlocityDataPackDisplayLabel:_0x1929f1,VlocityDataPackKey:_0x3acc58})=>({'type':_0x3dcbb9,'name':_0x3e1ba1,'label':_0x1929f1,'key':_0x3acc58}));return _0x162181['sort']((_0x396243,_0x175273)=>{const _0x4b8743=_0x1d350f,_0x1aebde=_0x396243[_0x4b8743(0x10c)]+'_'+_0x396243[_0x4b8743(0xf6)],_0x24ddf3=_0x175273[_0x4b8743(0x10c)]+'_'+_0x175273[_0x4b8743(0xf6)];if(_0x1aebde>_0x24ddf3)return 0x1;if(_0x24ddf3>_0x1aebde)return-0x1;return 0x0;}),_0x162181['length']>COUNT_OF_COMPONENTS_PER_PAGE&&await writeFile(_0x3af6dd,JSON[_0x1d350f(0x106)](_0x162181)),_0x162181;}async['execute'](){const _0x129ace=a11_0x4d1591,_0x145916=await this[_0x129ace(0xfa)](),_0x5e8023={};let _0x4eb0ef=-0x1,_0x5c1b15=0x0;for(const {type:_0x1f1a8a,name:_0x279d32,label:_0x2832e7,key:_0x5b6c85}of _0x145916){_0x4eb0ef++;if(this[_0x129ace(0xff)]>=0x0){if(_0x5c1b15>=COUNT_OF_COMPONENTS_PER_PAGE)return _0x5e8023;if(_0x4eb0ef<=this['page']*COUNT_OF_COMPONENTS_PER_PAGE)continue;}!_0x5e8023[_0x1f1a8a]&&(_0x5e8023[_0x1f1a8a]=[]),_0x5e8023[_0x1f1a8a][_0x129ace(0x105)]({'name':_0x279d32,'label':_0x2832e7,'key':_0x5b6c85}),_0x5c1b15++;}return _0x5e8023;}}module[a11_0x4d1591(0xf9)]={'AvailableToExportHelper':AvailableToExportHelper};