const a24_0x5ec147=a24_0x27e2;function a24_0x27e2(_0x262c91,_0x57707a){const _0x3d10fe=a24_0x3d10();return a24_0x27e2=function(_0x27e24d,_0x30b7e2){_0x27e24d=_0x27e24d-0x16c;let _0x31beed=_0x3d10fe[_0x27e24d];return _0x31beed;},a24_0x27e2(_0x262c91,_0x57707a);}function a24_0x3d10(){const _0x34fb54=['status','exports','vlocity','createAttachment','split','METHOD_ADD_DEPLOYMENT_STATUS_ATTACHMENTS','../../../services/storage','Error\x20add\x20deployment\x20status\x20','Vlocity\x20Temp','Error\x20Add\x20Deployment\x20Status\x20Attachments\x20','-Export.yaml','attachmentPackage','MAX_SIZE_UNZIP_ATTACHMENT','JOB_FILE_NAME','vlocityUrl','lastComponentId','callBranchComponentList','Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20','--verbose','stringify','Error\x20Deploy\x20Backup\x20Chunks\x20','\x20Deployed.','Error\x20update\x20metadata\x20log\x20','7917080jJcuJV','Success','5130495SxLEbW','deployData','lstatSync','flosumToken','packDeploy','isLWCActivation','1183DhUSya','attachLogId','1000635kTlGsW','runApex','Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20','size','SOURCE_FOLDER','nameSpacePrefix','createBackupChunks','/logs','componentsCount','Start\x20Create\x20Vlocity\x20Temp\x20Zip','logger','retrieveData','\x20\x20-\x20','isEnabledApexPostDeploy','29170qKTkOk','componentIdListJson','recordList','readdirSync','Error\x20Create\x20Vlocity\x20Temp\x20Zip\x20','Error\x20Create\x20Backup\x20Chunks\x20','callUpdateLog','-job','callComponentList','544320GwmEoY','-sf.accessToken','Start\x20Retrieve\x20Vlocity\x20Attachments','End\x20Add\x20Deployment\x20Status\x20Attachments','clientSecret','idList','projectPath','../../../services/http','addLocalFolder','includes','flosumUrl','36724wjSjTU','resolve','parse','appendFileSync','currentStatus','apexCode','slice','projectPath:\x20./','manifest:\x0a','44ilmVPM','forEach','toString','clientId','Backup\x20Chunk\x20prepared,\x20size\x20=\x20','../../../services/js-force','-autoRetryErrors','VLOCITY_JOB_INFO','Start\x20Deploy\x20Data','application/zip','base64','End\x20Create\x20Vlocity\x20Temp\x20Zip','result','VLOCITY_TEMP_CATALOG','-sf.instanceUrl','Start\x20Create\x20Backup\x20Chunks','9360oTLBpi','toBuffer','branchId','isVlocityBuildVerboseFlagNeeded','adm-zip','-separateCalculationProcedureVersions','../../../services/child-process','Start\x20Backup\x20Data','9873ovfyGa','then','End\x20Send\x20Vlocity\x20Temp','isSeparateMatrixVersions','../../../config/dotenv','jsForceHelper','CREATED','createVlocityTempZip','createBackupJobYamlFile','BACKUP_FOLDER','catch','End\x20\x20Retrieve\x20Vlocity\x20Attachments','-apex','backupData','Start\x20Add\x20Deployment\x20Status\x20Attachments','errorMessage','isSeparateCalculationProcedureVersions','sendVlocityTemp','Error\x20Deploy\x20Data\x20','flosumAuth','../retrieve/helper','End\x20Create\x20Backup\x20Chunks,\x20size\x20=\x20','Error\x20Backup\x20Data\x20','\x20Chunks\x20From\x20','createProjectDirectory','deployBackup','length','logId','getFolderSize','push','log','CalculationProcedureVersion','existsSync','post','-separateMatrixVersions','toFixed','Error\x20Create\x20Vlocity\x20Temp\x20Zip,\x20Vlocity\x20Temp\x20not\x20found','Retrieved:\x20','vlocityToken','FlosumErrors:\x20'];a24_0x3d10=function(){return _0x34fb54;};return a24_0x3d10();}(function(_0x4f19ca,_0x4d2bec){const _0x3b2482=a24_0x27e2,_0x32f458=_0x4f19ca();while(!![]){try{const _0xdb9589=-parseInt(_0x3b2482(0x1f5))/0x1*(parseInt(_0x3b2482(0x1ec))/0x2)+parseInt(_0x3b2482(0x1ca))/0x3+parseInt(_0x3b2482(0x1e1))/0x4+-parseInt(_0x3b2482(0x1c2))/0x5+-parseInt(_0x3b2482(0x179))/0x6*(parseInt(_0x3b2482(0x1c8))/0x7)+-parseInt(_0x3b2482(0x1c0))/0x8+-parseInt(_0x3b2482(0x181))/0x9*(-parseInt(_0x3b2482(0x1d8))/0xa);if(_0xdb9589===_0x4d2bec)break;else _0x32f458['push'](_0x32f458['shift']());}catch(_0x4c130a){_0x32f458['push'](_0x32f458['shift']());}}}(a24_0x3d10,0x8e280));const fs=require('fs'),AdmZip=require(a24_0x5ec147(0x17d)),childProcess=require(a24_0x5ec147(0x17f)),constants=require('../../../constants'),http=require(a24_0x5ec147(0x1e8)),storage=require(a24_0x5ec147(0x1af)),{configureObject}=require(a24_0x5ec147(0x185)),{RetrieveHelper}=require(a24_0x5ec147(0x195)),{JsForceHelper}=require(a24_0x5ec147(0x16e));class DeployHelper{constructor(_0x1fc090,_0x522f0e,_0x592314){const _0x534bdb=a24_0x5ec147;this[_0x534bdb(0x1e7)]=_0x1fc090,this['flosumUrl']=_0x522f0e['flosumUrl'],this[_0x534bdb(0x1c5)]=_0x522f0e[_0x534bdb(0x1c5)],this[_0x534bdb(0x194)]={'instanceUrl':_0x522f0e[_0x534bdb(0x1eb)],'accessToken':_0x522f0e[_0x534bdb(0x1c5)],'clientSecret':_0x522f0e[_0x534bdb(0x1e5)],'clientId':_0x522f0e[_0x534bdb(0x16c)]},this[_0x534bdb(0x17b)]=_0x522f0e[_0x534bdb(0x17b)],this['nameSpacePrefix']=_0x522f0e[_0x534bdb(0x1cf)],this['vlocityUrl']=_0x522f0e[_0x534bdb(0x1b7)],this[_0x534bdb(0x1a7)]=_0x522f0e['vlocityToken'],this[_0x534bdb(0x19c)]=_0x522f0e['logId'],this['isSeparateMatrixVersions']=_0x522f0e[_0x534bdb(0x184)],this[_0x534bdb(0x191)]=_0x522f0e[_0x534bdb(0x191)],this[_0x534bdb(0x1c7)]=_0x522f0e[_0x534bdb(0x1c7)],this['componentsCount']=_0x522f0e['componentsCount'],this[_0x534bdb(0x1d9)]=_0x522f0e[_0x534bdb(0x1d9)],this[_0x534bdb(0x1c9)]=_0x522f0e[_0x534bdb(0x1c9)],this['isEnabledApexPostDeploy']=!!_0x522f0e[_0x534bdb(0x1d7)],this[_0x534bdb(0x1f1)]=_0x522f0e[_0x534bdb(0x1f1)],this['timestamp']=_0x522f0e['timestamp'],this[_0x534bdb(0x1d4)]=_0x592314,this[_0x534bdb(0x186)]=new JsForceHelper(this[_0x534bdb(0x194)],_0x592314);}['retrieveBranchComponents'](){return new Promise((_0x405c07,_0x4e346d)=>{const _0x4d9bb3=a24_0x27e2;try{this[_0x4d9bb3(0x1d4)][_0x4d9bb3(0x19f)](_0x4d9bb3(0x1e3)),this[_0x4d9bb3(0x1b9)]()['then'](_0xc4ec3=>{const _0x2c6e46=_0x4d9bb3;this[_0x2c6e46(0x1d4)][_0x2c6e46(0x19f)](_0x2c6e46(0x18c)),_0x405c07(_0xc4ec3);})[_0x4d9bb3(0x18b)](_0x7e9d62=>{const _0x24a32b=_0x4d9bb3;this[_0x24a32b(0x1d4)][_0x24a32b(0x19f)](_0x24a32b(0x1cc)+_0x7e9d62),_0x4e346d(_0x7e9d62);});}catch(_0x493dd1){this['logger'][_0x4d9bb3(0x19f)](_0x4d9bb3(0x1cc)+_0x493dd1),_0x4e346d(_0x493dd1);}});}[a24_0x5ec147(0x1b9)](_0x2da0e3='',_0x16e4a=[]){return new Promise((_0x42f8e9,_0x4207b5)=>{const _0x1e739f=a24_0x27e2;try{const _0x345691={'branchId':this['branchId'],'lastComponentId':_0x2da0e3,'componentIdListJson':this[_0x1e739f(0x1d9)]},_0x5c342c={'methodType':constants['METHOD_TYPE_GET_BRANCH_ATTACHMENTS'],'body':JSON[_0x1e739f(0x1bc)](_0x345691)};http[_0x1e739f(0x1a2)](this['flosumAuth'],this[_0x1e739f(0x1cf)],_0x5c342c)['then'](_0x50ae6d=>{const _0x555c55=_0x1e739f;let {data:_0xae01eb}=_0x50ae6d;_0xae01eb=JSON[_0x555c55(0x1ee)](_0xae01eb),this[_0x555c55(0x1d4)][_0x555c55(0x19f)](_0x555c55(0x1a6)+Number['parseFloat'](''+_0x16e4a[_0x555c55(0x19b)]/this[_0x555c55(0x1d2)]*0x64)[_0x555c55(0x1a4)](0x2)+'%'),_0x16e4a[_0x555c55(0x19e)](..._0xae01eb[_0x555c55(0x1b4)][_0x555c55(0x1da)]),_0xae01eb[_0x555c55(0x1b8)]!=='-1'?_0xae01eb['attachmentPackage'][_0x555c55(0x1e6)]&&_0xae01eb[_0x555c55(0x1b4)]['idList'][_0x555c55(0x19b)]?http[_0x555c55(0x1e0)](this[_0x555c55(0x194)],_0xae01eb[_0x555c55(0x1b4)][_0x555c55(0x1e6)],this[_0x555c55(0x1cf)],this[_0x555c55(0x1d2)],this[_0x555c55(0x1d4)],_0x16e4a)[_0x555c55(0x182)](_0x502b47=>this[_0x555c55(0x1b9)](_0xae01eb[_0x555c55(0x1b8)],_0x502b47))[_0x555c55(0x182)](_0x229fe5=>_0x42f8e9(_0x229fe5))[_0x555c55(0x18b)](_0x20fa17=>_0x4207b5(_0x20fa17)):this[_0x555c55(0x1b9)](_0xae01eb['lastComponentId'],_0x16e4a)[_0x555c55(0x182)](_0xddd2dd=>_0x42f8e9(_0xddd2dd))[_0x555c55(0x18b)](_0xecc4ab=>{_0x4207b5(_0xecc4ab);}):_0x42f8e9(_0x16e4a);})['catch'](_0x25fb2c=>{_0x4207b5(_0x25fb2c);});}catch(_0x583671){_0x4207b5(_0x583671);}});}async[a24_0x5ec147(0x18e)](){const _0x1a3b75=a24_0x5ec147;try{this[_0x1a3b75(0x1d4)]['log'](_0x1a3b75(0x180)),await storage[_0x1a3b75(0x199)](this[_0x1a3b75(0x1e7)]+'/'+constants[_0x1a3b75(0x18a)]),this[_0x1a3b75(0x189)]();const _0x52a2b1=fs[_0x1a3b75(0x1db)](this[_0x1a3b75(0x1e7)]+'/'+constants[_0x1a3b75(0x1ce)]),_0x433427=new RetrieveHelper(this[_0x1a3b75(0x1e7)]+'/'+constants[_0x1a3b75(0x18a)],{'isNotIncludeDependencies':!![],'isSeparateMatrixVersions':_0x52a2b1['includes']('CalculationMatrixVersion'),'isSeparateCalculationProcedureVersions':_0x52a2b1[_0x1a3b75(0x1ea)](_0x1a3b75(0x1a0)),'authFlosum':{'instanceUrl':this['flosumUrl'],'accessToken':this['flosumToken']},'authVlosityOrg':{'instanceUrl':this[_0x1a3b75(0x1b7)],'accessToken':this['vlocityToken']},'attachLogId':this[_0x1a3b75(0x1c9)],'selectedDataPackTypes':'[]'},this[_0x1a3b75(0x1d4)]);await _0x433427[_0x1a3b75(0x1d5)]();const _0x1ba122=await this[_0x1a3b75(0x1d0)]();await this[_0x1a3b75(0x19a)](_0x1ba122),this['logger'][_0x1a3b75(0x19f)]('End\x20Backup\x20Data');}catch(_0x33a740){this[_0x1a3b75(0x1d4)]['log']('Error\x20Backup\x20Data\x20'+_0x33a740);throw _0x33a740;}}[a24_0x5ec147(0x189)](){const _0x30d9b8=a24_0x5ec147;try{let _0x389020=_0x30d9b8(0x1f3)+constants['UNZIP_CATALOG_NAME']+'\x0a';_0x389020+=_0x30d9b8(0x1f4);const _0x3ec0e1=fs['readdirSync'](this['projectPath']+'/'+constants[_0x30d9b8(0x1ce)]);for(const _0x436f53 of _0x3ec0e1){const _0x1514cd=fs[_0x30d9b8(0x1db)](this[_0x30d9b8(0x1e7)]+'/'+constants['SOURCE_FOLDER']+'/'+_0x436f53);for(const _0x3e8ed2 of _0x1514cd){_0x389020+=_0x30d9b8(0x1d6)+_0x436f53+'/'+_0x3e8ed2+'\x0a';}}fs[_0x30d9b8(0x1ef)](this[_0x30d9b8(0x1e7)]+'/'+constants['BACKUP_FOLDER']+'/'+constants[_0x30d9b8(0x1b6)],_0x389020);}catch(_0x2d214c){this[_0x30d9b8(0x1d4)][_0x30d9b8(0x19f)](_0x30d9b8(0x197)+_0x2d214c);throw _0x2d214c;}}['getFolderSize'](_0x1e9891){const _0x11dd8c=a24_0x5ec147;let _0x17071b=0x0;const _0x236805=fs['readdirSync'](_0x1e9891);return _0x236805[_0x11dd8c(0x1f6)](_0x2655ed=>{const _0x26ff47=_0x11dd8c,_0x486f04=fs[_0x26ff47(0x1c4)](_0x1e9891+'/'+_0x2655ed);_0x486f04['isDirectory']()?_0x17071b+=this[_0x26ff47(0x19d)](_0x1e9891+'/'+_0x2655ed):_0x17071b+=_0x486f04[_0x26ff47(0x1cd)];}),_0x17071b;}[a24_0x5ec147(0x1d0)](){return new Promise((_0x3523c9,_0x1846bc)=>{const _0x44f5a4=a24_0x27e2;try{this['logger'][_0x44f5a4(0x19f)](_0x44f5a4(0x178));const _0x350c81=[],_0x3e5954=this[_0x44f5a4(0x1e7)]+'/'+constants[_0x44f5a4(0x18a)]+'/'+constants[_0x44f5a4(0x1ce)];!fs[_0x44f5a4(0x1a1)](_0x3e5954)&&_0x3523c9([]);let _0x46a5a9=new AdmZip(),_0x3af31d=0x0;const _0x5f0a4d=fs[_0x44f5a4(0x1db)](_0x3e5954);_0x5f0a4d['forEach'](_0x9168d7=>{const _0x3c544e=_0x44f5a4,_0xfaa337=fs['readdirSync'](_0x3e5954+'/'+_0x9168d7);_0xfaa337[_0x3c544e(0x1f6)](_0x31fbf4=>{const _0x2321be=_0x3c544e,_0x36178f=_0x3e5954+'/'+_0x9168d7+'/'+_0x31fbf4,_0x16a656=this[_0x2321be(0x19d)](_0x36178f);_0x3af31d+_0x16a656>constants[_0x2321be(0x1b5)]?(_0x350c81[_0x2321be(0x19e)](_0x46a5a9['toBuffer']()[_0x2321be(0x1f7)](_0x2321be(0x173))),_0x46a5a9=new AdmZip(),_0x46a5a9['addLocalFolder'](_0x36178f,_0x9168d7+'/'+_0x31fbf4),this[_0x2321be(0x1d4)][_0x2321be(0x19f)](_0x2321be(0x16d)+_0x3af31d),_0x3af31d=_0x16a656):(_0x3af31d+=_0x16a656,_0x46a5a9[_0x2321be(0x1e9)](_0x36178f,_0x9168d7+'/'+_0x31fbf4));});}),_0x350c81['push'](_0x46a5a9['toBuffer']()[_0x44f5a4(0x1f7)](_0x44f5a4(0x173))),this[_0x44f5a4(0x1d4)][_0x44f5a4(0x19f)](_0x44f5a4(0x196)+_0x350c81[_0x44f5a4(0x19b)]),_0x3523c9(_0x350c81);}catch(_0x5e30b8){this[_0x44f5a4(0x1d4)][_0x44f5a4(0x19f)](_0x44f5a4(0x1dd)+_0x5e30b8),_0x1846bc(_0x5e30b8);}});}[a24_0x5ec147(0x19a)](_0x43c071){return new Promise((_0xe64f05,_0x2d7f8c)=>{const _0xc6cba0=a24_0x27e2;try{this[_0xc6cba0(0x1d4)][_0xc6cba0(0x19f)]('Start\x20Deploy\x20Backup\x20Chunks');let _0x1ad772=Promise[_0xc6cba0(0x1ed)]();_0x43c071[_0xc6cba0(0x1f6)]((_0x2b5873,_0x9b8c9e)=>{const _0x2334f6=_0xc6cba0;_0x1ad772=_0x1ad772[_0x2334f6(0x182)](()=>{const _0x55d15c=_0x2334f6,_0x113e28={'vlocityBackupZip':_0x2b5873,'metadataLogId':this[_0x55d15c(0x19c)]},_0x3aff05={'methodType':constants['METHOD_VLOCITY_BACKUP'],'body':JSON[_0x55d15c(0x1bc)](_0x113e28)};return http['post'](this[_0x55d15c(0x194)],this[_0x55d15c(0x1cf)],_0x3aff05)[_0x55d15c(0x182)](()=>this[_0x55d15c(0x1d4)]['log'](_0x9b8c9e+0x1+_0x55d15c(0x198)+_0x43c071[_0x55d15c(0x19b)]+_0x55d15c(0x1be)));});}),_0x1ad772[_0xc6cba0(0x182)](()=>{const _0x54018c=_0xc6cba0;this['logger'][_0x54018c(0x19f)]('End\x20Deploy\x20Backup\x20Chunks'),_0xe64f05();})['catch'](_0x1a9137=>{const _0x1f15f9=_0xc6cba0;this[_0x1f15f9(0x1d4)][_0x1f15f9(0x19f)]('Error\x20Deploy\x20Backup\x20Chunks\x20'+_0x1a9137),_0x2d7f8c(_0x1a9137);});}catch(_0x393ce3){this[_0xc6cba0(0x1d4)][_0xc6cba0(0x19f)](_0xc6cba0(0x1bd)+_0x393ce3),_0x2d7f8c(_0x393ce3);}});}[a24_0x5ec147(0x1c3)](_0x3d567d,_0x59688f){return new Promise((_0x5024c7,_0x1af4ab)=>{const _0xf2eeda=a24_0x27e2;try{this[_0xf2eeda(0x1d4)][_0xf2eeda(0x19f)](_0xf2eeda(0x171));const _0x38025e=_0xf2eeda(0x1ab),_0x39a980=[_0xf2eeda(0x1e2),this[_0xf2eeda(0x1a7)],_0xf2eeda(0x177),this[_0xf2eeda(0x1b7)],_0xf2eeda(0x1df),constants[_0xf2eeda(0x1b6)],_0xf2eeda(0x16f)];this[_0xf2eeda(0x184)]&&_0x39a980[_0xf2eeda(0x19e)](_0xf2eeda(0x1a3));this[_0xf2eeda(0x191)]&&_0x39a980['push'](_0xf2eeda(0x17e));_0x39a980[_0xf2eeda(0x19e)](_0xf2eeda(0x1c6));this['isEnabledApexPostDeploy']&&(_0x39a980[_0xf2eeda(0x19e)](_0xf2eeda(0x1cb)),_0x39a980['push'](_0xf2eeda(0x18d)),_0x39a980[_0xf2eeda(0x19e)](_0x3d567d));configureObject[_0xf2eeda(0x17c)]&&_0x39a980[_0xf2eeda(0x19e)](_0xf2eeda(0x1bb));this[_0xf2eeda(0x1d4)][_0xf2eeda(0x19f)](_0x39a980[_0xf2eeda(0x1f2)](0x2)['join']('\x20'));const _0x3902e2=()=>{const _0x2ef9ac=_0xf2eeda;http['updateAttachmentLog'](this[_0x2ef9ac(0x1e7)],this[_0x2ef9ac(0x186)],this[_0x2ef9ac(0x1c9)],this[_0x2ef9ac(0x1d4)],![]);},_0x5d4e48={'cwd':this['projectPath'],'maxBuffer':0x400*0x1f4,'shell':!![]};childProcess['callChildProcess'](_0x38025e,_0x39a980,this['logger'],_0x5d4e48,_0x59688f,_0x3902e2)[_0xf2eeda(0x182)](_0x52f398=>{const _0x153ba4=_0xf2eeda;this[_0x153ba4(0x1d4)]['log']('End\x20Deploy\x20Data'),_0x5024c7(_0x52f398);})[_0xf2eeda(0x18b)](_0x49b51a=>{const _0x1171c3=_0xf2eeda;this[_0x1171c3(0x1d4)][_0x1171c3(0x19f)](_0x1171c3(0x193)+_0x49b51a),_0x1af4ab(_0x49b51a);});}catch(_0x4644ca){this[_0xf2eeda(0x1d4)][_0xf2eeda(0x19f)](_0xf2eeda(0x193)+_0x4644ca),_0x1af4ab(_0x4644ca);}});}async['addDeploymentStatusAttachments'](_0x2559fc){const _0x1f6faa=a24_0x5ec147;try{if(!_0x2559fc)return 0x0;_0x2559fc=JSON['parse'](_0x2559fc),this[_0x1f6faa(0x1d4)][_0x1f6faa(0x19f)](_0x1f6faa(0x18f));const _0x5d3242=[];for(const _0x587755 in _0x2559fc[_0x1f6faa(0x1f0)]){const _0x2b9829=_0x587755[_0x1f6faa(0x1ad)]('/');if(_0x2b9829['length']!==0x2)continue;const [_0x3bd20a,_0x264866]=_0x2b9829,_0x410f11={'componentType':_0x3bd20a,'componentName':_0x264866},_0x2ec0d6=_0x2559fc['currentStatus'][_0x587755];_0x2ec0d6===_0x1f6faa(0x1c1)?(_0x410f11[_0x1f6faa(0x1a9)]=_0x1f6faa(0x1c1),_0x410f11[_0x1f6faa(0x175)]=_0x1f6faa(0x187)):(_0x410f11['status']='Failure',_0x410f11['errorMessage']=_0x2ec0d6),_0x5d3242[_0x1f6faa(0x19e)](_0x410f11);}const _0x15871d={'deploymentResultList':_0x5d3242,'metadataLogId':this['logId']},_0x233b5a={'methodType':constants[_0x1f6faa(0x1ae)],'body':JSON['stringify'](_0x15871d)};return await http['post'](this[_0x1f6faa(0x194)],this[_0x1f6faa(0x1cf)],_0x233b5a),this[_0x1f6faa(0x1d4)]['log'](_0x1f6faa(0x1e4)),_0x5d3242['filter'](_0x287dbe=>!_0x287dbe[_0x1f6faa(0x190)])['length'];}catch(_0x4e0e3c){this['logger'][_0x1f6faa(0x19f)](_0x1f6faa(0x1b2)+_0x4e0e3c);throw _0x4e0e3c;}}[a24_0x5ec147(0x188)](){return new Promise((_0x180b3b,_0x193593)=>{const _0x5ddcd1=a24_0x27e2;try{this['logger'][_0x5ddcd1(0x19f)](_0x5ddcd1(0x1d3));const _0x44313b=this[_0x5ddcd1(0x1e7)]+'/'+constants[_0x5ddcd1(0x176)];if(fs[_0x5ddcd1(0x1a1)](_0x44313b)){const _0x18a99a=_0x44313b+_0x5ddcd1(0x1d1);if(this[_0x5ddcd1(0x1d4)]['errors'][_0x5ddcd1(0x19b)]&&fs[_0x5ddcd1(0x1a1)](_0x18a99a)){const _0x19d5fd=fs[_0x5ddcd1(0x1db)](_0x18a99a);if(_0x19d5fd&&_0x19d5fd[_0x5ddcd1(0x19b)]){const _0x508702=_0x19d5fd[0x0];if(_0x508702[_0x5ddcd1(0x1ea)]('job-yaml-')&&_0x508702[_0x5ddcd1(0x1ea)](_0x5ddcd1(0x1b3))){const _0x331f23=_0x5ddcd1(0x1a8)+JSON[_0x5ddcd1(0x1bc)](this[_0x5ddcd1(0x1d4)]['errors']);fs[_0x5ddcd1(0x1ef)]('./'+_0x18a99a+'/'+_0x508702,_0x331f23);}}}const _0x45a13c=new AdmZip();_0x45a13c['addLocalFolder'](_0x44313b,constants[_0x5ddcd1(0x176)]),this[_0x5ddcd1(0x1d4)][_0x5ddcd1(0x19f)](_0x5ddcd1(0x174)),_0x180b3b(_0x45a13c[_0x5ddcd1(0x17a)]()[_0x5ddcd1(0x1f7)](_0x5ddcd1(0x173)));}else this[_0x5ddcd1(0x1d4)][_0x5ddcd1(0x19f)](_0x5ddcd1(0x1a5)),_0x180b3b();}catch(_0x27e8c2){this[_0x5ddcd1(0x1d4)]['log'](_0x5ddcd1(0x1dc)+_0x27e8c2),_0x180b3b();}});}['sendVlocityTemp'](_0x42c1bd){return new Promise((_0x304278,_0x480a2e)=>{const _0x50b909=a24_0x27e2;try{this[_0x50b909(0x1d4)]['log']('Start\x20Send\x20Vlocity\x20Temp');const _0x250fd6={'Name':_0x50b909(0x1b1),'ContentType':_0x50b909(0x172),'Description':_0x50b909(0x1b1),'ParentId':this[_0x50b909(0x19c)],'Body':_0x42c1bd};this['jsForceHelper'][_0x50b909(0x1ac)](_0x250fd6)[_0x50b909(0x182)](()=>{const _0x23d865=_0x50b909;this[_0x23d865(0x1d4)][_0x23d865(0x19f)](_0x23d865(0x183)),_0x304278();})[_0x50b909(0x18b)](_0x53d600=>{const _0x42507f=_0x50b909;this[_0x42507f(0x1d4)]['log'](_0x42507f(0x1ba)+_0x53d600),_0x480a2e(_0x53d600);});}catch(_0x543863){this[_0x50b909(0x1d4)]['log'](_0x50b909(0x1ba)+_0x543863),_0x480a2e(_0x543863);}});}async['completeDeployment'](_0x5d94d0,_0x30911d=![]){const _0x10a18c=a24_0x5ec147,_0x1da8ba=await this['createVlocityTempZip']();_0x1da8ba&&await this[_0x10a18c(0x192)](_0x1da8ba);let _0x519119=this['componentsCount'];try{const _0x5c4628=await storage['readFile'](this[_0x10a18c(0x1e7)],constants[_0x10a18c(0x176)]+'/'+constants[_0x10a18c(0x170)],this['logger']);_0x519119=await this['addDeploymentStatusAttachments'](_0x5c4628);}catch(_0x87e61a){this['logger'][_0x10a18c(0x19f)](_0x10a18c(0x1b0)+_0x87e61a);}const _0x46b4fa=await http['updateAttachmentLog'](this[_0x10a18c(0x1e7)],this[_0x10a18c(0x186)],this[_0x10a18c(0x1c9)],this[_0x10a18c(0x1d4)],_0x30911d,!![]);try{await http[_0x10a18c(0x1de)](this[_0x10a18c(0x186)],this[_0x10a18c(0x19c)],this[_0x10a18c(0x1cf)],_0x5d94d0&&_0x519119>0x0,this[_0x10a18c(0x1d4)],_0x46b4fa||_0x519119!==this[_0x10a18c(0x1d2)]);}catch(_0x6c0d37){this[_0x10a18c(0x1d4)][_0x10a18c(0x19f)](_0x10a18c(0x1bf)+_0x6c0d37);}}}module[a24_0x5ec147(0x1aa)]={'DeployHelper':DeployHelper};