const a13_0x4fbc48=a13_0x3c06;function a13_0x2943(){const _0x15dfb5=['clientSecret','pipelineNumber','timestamp','5dFcxIk','createProjectDirectory','path','branchId','vlocityNameSpacePrefix','./helper','flosumUrl','componentsMap','getTime','pipelineId','8833720wLkgwy','Completed\x20Date:\x20','then','callUpdateInfo','retrieveData','../../../services/http','logId','1atneSE','exports','1026662LKdISF','parse','27369naIzZC','pipelineKey','vlocityToken','catch','607630mJcZfg','3253974Iyzpda','flosumToken','handleNoComponents','1340ovxqTI','tmpPath','vlocityUrl','snapshotType','4108143WMGyPx','join','3839872vYpTQQ','nameSpacePrefix'];a13_0x2943=function(){return _0x15dfb5;};return a13_0x2943();}(function(_0x48020f,_0x20dfcc){const _0xcaf438=a13_0x3c06,_0x10a10e=_0x48020f();while(!![]){try{const _0x5390a9=-parseInt(_0xcaf438(0xbd))/0x1*(-parseInt(_0xcaf438(0x9d))/0x2)+-parseInt(_0xcaf438(0xa5))/0x3+parseInt(_0xcaf438(0xa7))/0x4+parseInt(_0xcaf438(0xac))/0x5*(-parseInt(_0xcaf438(0x9e))/0x6)+-parseInt(_0xcaf438(0xbf))/0x7+parseInt(_0xcaf438(0xb6))/0x8+-parseInt(_0xcaf438(0xc1))/0x9*(-parseInt(_0xcaf438(0xa1))/0xa);if(_0x5390a9===_0x20dfcc)break;else _0x10a10e['push'](_0x10a10e['shift']());}catch(_0x3000a2){_0x10a10e['push'](_0x10a10e['shift']());}}}(a13_0x2943,0xaf13c));function a13_0x3c06(_0x37b843,_0x10b6c4){const _0x2943e7=a13_0x2943();return a13_0x3c06=function(_0x3c0677,_0x26947c){_0x3c0677=_0x3c0677-0x9b;let _0x27fba=_0x2943e7[_0x3c0677];return _0x27fba;},a13_0x3c06(_0x37b843,_0x10b6c4);}const path=require(a13_0x4fbc48(0xae)),helper=require(a13_0x4fbc48(0xb1)),storage=require('../../../services/storage'),http=require(a13_0x4fbc48(0xbb)),{pathConfig}=require('../../../config/path');function backupBranch(_0x16a5d7,_0x2ab523){return new Promise((_0x4d7451,_0x36aa07)=>{const _0x520f51=a13_0x3c06;try{console['log'](_0x16a5d7);const _0x1f9e59=_0x16a5d7['flosumUrl'],_0x4eef03=_0x16a5d7[_0x520f51(0x9f)],_0x289f09={'instanceUrl':_0x16a5d7[_0x520f51(0xb2)],'accessToken':_0x16a5d7[_0x520f51(0x9f)],'clientId':_0x16a5d7['clientId'],'clientSecret':_0x16a5d7[_0x520f51(0xa9)]},_0x3c348d=_0x16a5d7[_0x520f51(0xa3)],_0x3fc382=_0x16a5d7[_0x520f51(0x9b)],_0x553d23=_0x16a5d7['logId'],_0x34fb4d=_0x16a5d7[_0x520f51(0xab)],_0x864f06=_0x16a5d7[_0x520f51(0xa8)],_0x235dae=_0x16a5d7[_0x520f51(0xb0)],_0x167e81=_0x16a5d7['attachLogId'],_0xe68459=JSON[_0x520f51(0xc0)](_0x16a5d7[_0x520f51(0xb3)]),_0x188604=_0x16a5d7[_0x520f51(0xb5)],_0x373bf8=_0x16a5d7[_0x520f51(0xaf)],_0x41ecb1=_0x16a5d7[_0x520f51(0xaa)],_0x35cc79=_0x16a5d7[_0x520f51(0xc2)],_0x4caba7=_0x16a5d7[_0x520f51(0xa4)]+'_'+_0x34fb4d+'_'+_0x16a5d7[_0x520f51(0xbc)],_0x4027fa=path[_0x520f51(0xa6)](pathConfig[_0x520f51(0xa2)],_0x4caba7);Promise['resolve']()[_0x520f51(0xb8)](()=>storage[_0x520f51(0xad)](_0x4027fa))[_0x520f51(0xb8)](()=>helper['createJobFileRollback'](_0x4027fa,_0xe68459,_0x235dae,_0x2ab523))[_0x520f51(0xb8)](()=>helper[_0x520f51(0xba)](_0x4027fa,_0x3c348d,_0x3fc382,_0x2ab523))[_0x520f51(0xb8)](()=>storage['checkExistComponents'](_0x4027fa,_0x2ab523))[_0x520f51(0xb8)](_0x2563bd=>{const _0x5d9ffb=_0x520f51;if(_0x2563bd)return helper['prepareDataForDeploy'](_0x4027fa,_0x2ab523)['then'](_0x566c29=>helper['deployData'](_0x289f09,_0x864f06,_0x553d23,_0x566c29,_0x188604,_0x41ecb1,_0x373bf8,_0x2ab523));return helper[_0x5d9ffb(0xa0)](_0x1f9e59,_0x4eef03,_0x864f06,_0x553d23,_0x188604,_0x41ecb1,_0x373bf8,_0x2ab523);})[_0x520f51(0xb8)](()=>{if(_0x188604&&_0x35cc79&&_0x41ecb1)return helper['callContinuePipelineVlocityDeploy'](_0x1f9e59,_0x4eef03,_0x864f06,_0x188604,_0x41ecb1,_0x35cc79,_0x373bf8,_0x553d23,_0x2ab523);return Promise['resolve']();})[_0x520f51(0x9c)](_0x3ed68a=>{const _0x413117=_0x520f51;http[_0x413117(0xb9)](_0x289f09,_0x553d23,_0x864f06,_0x167e81,_0x413117(0xb7)+helper[_0x413117(0xb4)]()+'\x0a',![],_0x2ab523,!![]),_0x36aa07(_0x3ed68a);})[_0x520f51(0xb8)](()=>storage['removeProject'](_0x4027fa,_0x2ab523));}catch(_0x57d7f6){_0x36aa07(_0x57d7f6);}});}module[a13_0x4fbc48(0xbe)]={'backupBranch':backupBranch};