const a36_0x305834=a36_0x14c8;(function(_0x4fe054,_0x27ed4a){const _0xcb68f=a36_0x14c8,_0x4cc32a=_0x4fe054();while(!![]){try{const _0x41d12c=-parseInt(_0xcb68f(0x9a))/0x1*(parseInt(_0xcb68f(0xbb))/0x2)+-parseInt(_0xcb68f(0x9c))/0x3+parseInt(_0xcb68f(0xa5))/0x4+parseInt(_0xcb68f(0x92))/0x5*(parseInt(_0xcb68f(0x99))/0x6)+parseInt(_0xcb68f(0xb9))/0x7+-parseInt(_0xcb68f(0xae))/0x8+parseInt(_0xcb68f(0x93))/0x9*(parseInt(_0xcb68f(0xa2))/0xa);if(_0x41d12c===_0x27ed4a)break;else _0x4cc32a['push'](_0x4cc32a['shift']());}catch(_0x49b372){_0x4cc32a['push'](_0x4cc32a['shift']());}}}(a36_0x160b,0xd8266));function a36_0x14c8(_0x4c1f0a,_0x102c16){const _0x160b38=a36_0x160b();return a36_0x14c8=function(_0x14c81d,_0xd8ce44){_0x14c81d=_0x14c81d-0x8b;let _0x46ed01=_0x160b38[_0x14c81d];return _0x46ed01;},a36_0x14c8(_0x4c1f0a,_0x102c16);}const AdmZip=require('adm-zip'),fs=require('fs'),yaml=require('js-yaml'),jsForce=require(a36_0x305834(0x8f)),childProcess=require('../../../services/child-process'),constants=require('../../../constants'),http=require(a36_0x305834(0x9e));function a36_0x160b(){const _0x2a8670=['getMinutes','getHours','Command:','Error\x20Update\x20Snapshot','getFullYear','Start\x20Update\x20Snapshot','Error\x20Unzip\x20Vlocity\x20Temp\x20','updateAttachmentLog','11206232CZxwWh','log','Is_Error__c','load','forEach','-sf.instanceUrl\x20','NAME_LOGS_FILE','SOURCE_FOLDER','callChildProcess','getDate','exports','5893146ohqWAL','toString','90958FCmTIj','-sf.instanceUrl','replace','packRetry','-sf.accessToken','utf8','getMonth','jsforce','vlocity','-sf.accessToken\x20##########','616470ElMOGX','9jarEAO','then','Start\x20Unzip\x20Vlocity\x20Temp','--nojob','length','existsSync','78msnQxD','35XieNzs','catch','4484061ThGLcd','End\x20Pack\x20Retry','../../../services/http','Error\x20Pack\x20Retry\x20','sobject','End\x20Unzip\x20Vlocity\x20Temp','25788930kocVSY','Start\x20Pack\x20Retry','-nojob','1395952yNQMKR'];a36_0x160b=function(){return _0x2a8670;};return a36_0x160b();}function unzipVlocityTemp(_0x41e70d,_0x5e2cf5,_0x2ac318){return new Promise((_0x451f01,_0x46f69c)=>{const _0x51acd5=a36_0x14c8;try{_0x2ac318['log'](_0x51acd5(0x95));const _0x10e75a=new AdmZip(_0x5e2cf5);_0x10e75a['extractAllTo'](_0x41e70d,![]),_0x451f01(),_0x2ac318[_0x51acd5(0xaf)](_0x51acd5(0xa1));}catch(_0x35a655){_0x2ac318[_0x51acd5(0xaf)](_0x51acd5(0xac)+_0x35a655),_0x46f69c(_0x35a655);}});}function packRetry(_0x19c7a2,_0x307e63,_0xd48214,_0x3eacda,_0x169c11,_0x4369ce){return new Promise((_0x1e3d93,_0x591e08)=>{const _0x35245b=a36_0x14c8;try{_0x4369ce[_0x35245b(0xaf)](_0x35245b(0xa3));const _0x269be4=_0x35245b(0x90),_0x4f1a61=[_0x35245b(0x8c),''+_0xd48214,_0x35245b(0xbc),''+_0x307e63,_0x35245b(0x96),_0x35245b(0x8b)];_0x4369ce[_0x35245b(0xaf)](_0x35245b(0xa8)),_0x4369ce[_0x35245b(0xaf)](_0x35245b(0x91)),_0x4369ce[_0x35245b(0xaf)](_0x35245b(0xb3)+_0x307e63),_0x4369ce[_0x35245b(0xaf)](_0x35245b(0xa4)),_0x4369ce[_0x35245b(0xaf)](_0x35245b(0x8b));function _0x22db61(){const _0x4c1c37=_0x35245b;http[_0x4c1c37(0xad)](_0x19c7a2,_0x3eacda,_0x169c11,_0x4369ce,![]);}const _0x5f3d65={'cwd':_0x19c7a2,'maxBuffer':0x400*0x1f4};childProcess[_0x35245b(0xb6)](_0x269be4,_0x4f1a61,_0x4369ce,_0x5f3d65,!![],_0x22db61)[_0x35245b(0x94)](_0x3035cd=>{const _0x3cfcf7=_0x35245b;_0x4369ce[_0x3cfcf7(0xaf)](_0x3cfcf7(0x9d)),_0x1e3d93(_0x3035cd);})['catch'](_0x647263=>{const _0x1d793f=_0x35245b;_0x4369ce['log'](_0x1d793f(0x9f)+_0x647263),_0x591e08(_0x647263);});}catch(_0x6ec3c0){_0x591e08(_0x6ec3c0);}});}function isNeedToDeploy(_0x382dfa,_0x1f4d25){return new Promise((_0x209c1e,_0x11f0cb)=>{const _0x64abaf=a36_0x14c8;try{fs[_0x64abaf(0x98)](_0x382dfa+'/'+constants[_0x64abaf(0xb5)])?(_0x1f4d25[_0x64abaf(0xaf)]('Exist\x20Components\x20To\x20Deploy'),_0x209c1e(!![])):(_0x1f4d25[_0x64abaf(0xaf)]('No\x20Components\x20To\x20Deploy'),_0x209c1e(![]));}catch(_0x3c1300){_0x1f4d25[_0x64abaf(0xaf)]('Error\x20Unzip\x20Vlocity\x20Temp\x20'+_0x3c1300),_0x11f0cb(_0x3c1300);}});}function callUpdateSnapshot(_0x33762f,_0x515ae8,_0x28d317,_0x24dff3,_0x2b22ce,_0x2fcff4){return new Promise((_0x3b12e6,_0x2dca60)=>{const _0x24a8cb=a36_0x14c8;try{const _0x58d854=new jsForce['Connection']({'accessToken':_0x515ae8,'instanceUrl':_0x28d317});_0x2fcff4['log'](_0x24a8cb(0xab));const _0x3b2a16={'Id':_0x24dff3,[_0x2b22ce+'Is_Completed__c']:!![]};if(fs[_0x24a8cb(0x98)](_0x33762f+'/'+constants[_0x24a8cb(0xb4)])){const _0x2da58d=yaml[_0x24a8cb(0xb1)](fs['readFileSync'](_0x33762f+'/'+constants[_0x24a8cb(0xb4)],_0x24a8cb(0x8d)));_0x2da58d['Errors']&&(_0x3b2a16[_0x2b22ce+_0x24a8cb(0xb0)]=_0x2da58d['Errors'][_0x24a8cb(0x97)]>0x0);}else _0x3b2a16[_0x2b22ce+_0x24a8cb(0xb0)]=![];_0x58d854[_0x24a8cb(0xa0)](_0x2b22ce+'Snapshot_Vlocity__c')['update'](_0x3b2a16)[_0x24a8cb(0x94)](()=>{const _0x537338=_0x24a8cb;_0x2fcff4[_0x537338(0xaf)]('End\x20Update\x20Snapshot'),_0x3b12e6();})[_0x24a8cb(0x9b)](_0x31deeb=>{const _0x5ab67e=_0x24a8cb;_0x2fcff4[_0x5ab67e(0xaf)](_0x5ab67e(0xa9)),_0x2dca60(_0x31deeb);});}catch(_0x3dd95c){_0x2fcff4['log'](_0x24a8cb(0xa9)),_0x2dca60(_0x3dd95c);}});}function getTime(){const _0x24723e=a36_0x305834,_0x3f97b5=new Date(),_0x46c550=[_0x3f97b5[_0x24723e(0xb7)](),_0x3f97b5[_0x24723e(0x8e)]()+0x1,_0x3f97b5[_0x24723e(0xaa)](),_0x3f97b5[_0x24723e(0xa7)](),_0x3f97b5[_0x24723e(0xa6)](),_0x3f97b5['getSeconds']()];return _0x46c550[_0x24723e(0xb2)](_0xac0346=>_0xac0346=_0xac0346[_0x24723e(0xba)]()[_0x24723e(0xbd)](/^([0-9])$/,'0$1')),_0x46c550[0x2]+'-'+_0x46c550[0x1]+'-'+_0x46c550[0x0]+'\x20'+_0x46c550[0x3]+':'+_0x46c550[0x4]+':'+_0x46c550[0x5];}module[a36_0x305834(0xb8)]={'unzipVlocityTemp':unzipVlocityTemp,'callUpdateSnapshot':callUpdateSnapshot,'packRetry':packRetry,'getTime':getTime,'isNeedToDeploy':isNeedToDeploy};