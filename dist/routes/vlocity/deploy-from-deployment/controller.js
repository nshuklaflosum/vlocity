const a18_0x2952fd=a18_0x3704;function a18_0x3704(_0x41cd5f,_0x35530d){const _0x3f71c7=a18_0x3f71();return a18_0x3704=function(_0x370424,_0x3a8802){_0x370424=_0x370424-0x125;let _0x53831f=_0x3f71c7[_0x370424];return _0x53831f;},a18_0x3704(_0x41cd5f,_0x35530d);}function a18_0x3f71(){const _0x34be5f=['8MiuMPs','deployData','./helper','\x0aError\x20:\x20','exports','4TGXMGu','tmpPath','path','jsforce','catch','getTime','446445urbcpW','instanceUrl','removeProject','authFlosum','authVlosityOrg','unzipComponentList','\x0apostJobApex:\x20apex','logId','.cls','deploymentId','apex','../../../services/storage','createJobFileDeploy','log','16oTUQfC','resolve','6925247ktOlFK','nameSpacePrefix','accessToken','1596245aTVpFw','createApex','550063MmiaMN','/apex','../../../config/path','1867662SIJHLb','apexCode','909030zPBcPX','then','/Flosum/GetVlocityComponents/','isSeparateMatrixVersions','VLOCITY_APEX_PATH','callUpdateInfo','readLogFile','4510596xRdStU','retrieveVlocityAttachments','removeFile','UNZIP_CATALOG_NAME','isEnabledApexPostDeploy','../../../constants'];a18_0x3f71=function(){return _0x34be5f;};return a18_0x3f71();}(function(_0x5513dd,_0x4c9416){const _0x2a16b0=a18_0x3704,_0x424d5e=_0x5513dd();while(!![]){try{const _0x2576ae=parseInt(_0x2a16b0(0x152))/0x1+-parseInt(_0x2a16b0(0x14b))/0x2*(parseInt(_0x2a16b0(0x13d))/0x3)+parseInt(_0x2a16b0(0x137))/0x4*(-parseInt(_0x2a16b0(0x150))/0x5)+parseInt(_0x2a16b0(0x12c))/0x6+parseInt(_0x2a16b0(0x14d))/0x7*(parseInt(_0x2a16b0(0x132))/0x8)+-parseInt(_0x2a16b0(0x155))/0x9+parseInt(_0x2a16b0(0x125))/0xa;if(_0x2576ae===_0x4c9416)break;else _0x424d5e['push'](_0x424d5e['shift']());}catch(_0x3d4785){_0x424d5e['push'](_0x424d5e['shift']());}}}(a18_0x3f71,0xa24be));const jsForce=require(a18_0x2952fd(0x13a)),helper=require(a18_0x2952fd(0x134)),http=require('../../../services/http'),storage=require(a18_0x2952fd(0x148)),constants=require(a18_0x2952fd(0x131)),path=require(a18_0x2952fd(0x139)),{pathConfig}=require(a18_0x2952fd(0x154));function deployFromDeployment(_0xee7885,_0x592552){return new Promise((_0x28963f,_0x3ad42c)=>{const _0x1ef895=a18_0x3704;try{console[_0x1ef895(0x14a)]('---\x20body'),console[_0x1ef895(0x14a)](_0xee7885);const _0x118f03=_0xee7885['authFlosum'][_0x1ef895(0x13e)],_0x5c9e3d=_0xee7885[_0x1ef895(0x140)][_0x1ef895(0x14f)],_0x37e55f=_0xee7885[_0x1ef895(0x141)]['instanceUrl'],_0x536da0=_0xee7885[_0x1ef895(0x141)]['accessToken'],_0x34bf0f=_0xee7885[_0x1ef895(0x144)],_0x22b436=_0xee7885['attachLogId'],_0x305aa9=new Date()['valueOf'](),_0x154edf=_0xee7885['snapshotType']+'_'+_0x305aa9+'_'+_0xee7885[_0x1ef895(0x144)],_0x1efcfe=_0xee7885['authFlosum'],_0x52d1e7=_0xee7885[_0x1ef895(0x14e)],_0x522a25=_0xee7885[_0x1ef895(0x146)],_0xacff1=_0xee7885[_0x1ef895(0x128)],_0xa6dac5=_0xee7885['isSeparateCalculationProcedureVersions'],_0x2dd99f=!!_0xee7885[_0x1ef895(0x130)],_0x5044d3=_0xee7885[_0x1ef895(0x156)],_0x32c100=_0x52d1e7===''?'/GetVlocityComponents/':_0x1ef895(0x127);let _0x1f191b='projectPath:\x20./'+constants[_0x1ef895(0x12f)];const _0x21f4ea=new jsForce['Connection'](_0x1efcfe);_0x2dd99f&&(_0x1f191b+=_0x1ef895(0x143)+_0x305aa9+'.cls');const _0x4dfe87=path['join'](pathConfig[_0x1ef895(0x138)],_0x154edf),_0x4976a6='./'+constants[_0x1ef895(0x129)]+_0x1ef895(0x153)+_0x305aa9+'.cls';storage['createProjectDirectory'](_0x4dfe87)[_0x1ef895(0x126)](()=>_0x2dd99f?storage[_0x1ef895(0x151)](_0x4976a6,_0x5044d3,_0x592552):Promise[_0x1ef895(0x14c)]())['then'](()=>storage[_0x1ef895(0x149)](_0x4dfe87,_0x1f191b,_0x592552))['then'](()=>helper['retrieveSourceComponents'](_0x21f4ea,_0x52d1e7,_0x522a25,_0x592552))[_0x1ef895(0x126)](_0x541f01=>helper[_0x1ef895(0x12d)](_0x21f4ea,_0x32c100,_0x541f01,_0x592552))[_0x1ef895(0x126)](_0x395612=>helper[_0x1ef895(0x142)](_0x395612,_0x4dfe87,_0x592552))[_0x1ef895(0x126)](()=>helper[_0x1ef895(0x133)](_0x4dfe87,_0x37e55f,_0x536da0,_0xacff1,_0xa6dac5,_0x2dd99f,_0x1ef895(0x147)+_0x305aa9+_0x1ef895(0x145),_0x592552))[_0x1ef895(0x126)](()=>storage[_0x1ef895(0x12b)](_0x4dfe87,helper[_0x1ef895(0x13c)](),_0x592552))[_0x1ef895(0x126)](_0x27370f=>http[_0x1ef895(0x12a)](_0x118f03,_0x5c9e3d,_0x34bf0f,_0x52d1e7,_0x22b436,_0x27370f,!![],_0x592552))['catch'](_0x9818e1=>{const _0x374a1a=_0x1ef895;http[_0x374a1a(0x12a)](_0x118f03,_0x5c9e3d,_0x34bf0f,_0x52d1e7,_0x22b436,'Error\x20Date:\x20'+helper[_0x374a1a(0x13c)]()+_0x374a1a(0x135)+_0x9818e1,![],_0x592552,!![])[_0x374a1a(0x126)](()=>_0x3ad42c(_0x9818e1))[_0x374a1a(0x13b)](_0x3a87bf=>_0x3ad42c(_0x9818e1+'\x0a'+_0x3a87bf));})[_0x1ef895(0x126)](()=>_0x2dd99f?storage[_0x1ef895(0x12e)](_0x4976a6,_0x592552):Promise['resolve']())[_0x1ef895(0x126)](()=>storage[_0x1ef895(0x13f)](_0x4dfe87,_0x592552));}catch(_0x1e2d93){_0x3ad42c(_0x1e2d93);}});}module[a18_0x2952fd(0x136)]={'deployFromDeployment':deployFromDeployment};