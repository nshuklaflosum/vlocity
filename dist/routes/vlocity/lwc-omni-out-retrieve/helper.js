const a34_0x1556cc=a34_0x2bea;(function(_0x3f157c,_0x32f438){const _0x321a14=a34_0x2bea,_0x7b36c0=_0x3f157c();while(!![]){try{const _0x16b7b0=-parseInt(_0x321a14(0xfd))/0x1+-parseInt(_0x321a14(0xf5))/0x2*(-parseInt(_0x321a14(0xca))/0x3)+-parseInt(_0x321a14(0x116))/0x4+-parseInt(_0x321a14(0xe4))/0x5+-parseInt(_0x321a14(0x119))/0x6+-parseInt(_0x321a14(0xc8))/0x7*(parseInt(_0x321a14(0xd9))/0x8)+parseInt(_0x321a14(0xde))/0x9*(parseInt(_0x321a14(0xe0))/0xa);if(_0x16b7b0===_0x32f438)break;else _0x7b36c0['push'](_0x7b36c0['shift']());}catch(_0x533b90){_0x7b36c0['push'](_0x7b36c0['shift']());}}}(a34_0x25d8,0x5eec0));const path=require(a34_0x1556cc(0xe8)),fs=require('fs'),fse=require(a34_0x1556cc(0x103)),AdmZip=require('adm-zip'),constants=require(a34_0x1556cc(0xf9)),http=require(a34_0x1556cc(0xe2));function query(_0x2bc365,_0x17515b,_0x277af8){return new Promise((_0x1f7589,_0x535a64)=>{const _0x176f5e=a34_0x2bea;try{_0x277af8[_0x176f5e(0xc7)](_0x176f5e(0x100)),_0x2bc365[_0x176f5e(0xfb)](_0x17515b,(_0x348fcc,_0x2c3bb5)=>{const _0x20542c=_0x176f5e;_0x348fcc?(_0x277af8[_0x20542c(0xc7)]('Error\x20Query\x20'+_0x348fcc),_0x535a64(_0x348fcc)):(_0x277af8['log'](_0x20542c(0xc1)),_0x1f7589(_0x2c3bb5[_0x20542c(0x110)]['filter'](_0x2fc9a9=>_0x2fc9a9[_0x20542c(0xcc)]&&_0x2fc9a9['vlocity_cmt__SubType__c']&&_0x2fc9a9[_0x20542c(0x104)])['map'](({vlocity_cmt__Type__c:_0x560cbc,vlocity_cmt__SubType__c:_0x41d586,vlocity_cmt__Language__c:_0xb620e7})=>''+_0x560cbc+_0x41d586+_0xb620e7)));});}catch(_0xd3789c){_0x535a64(_0xd3789c),_0x277af8[_0x176f5e(0xc7)]('Error\x20Query\x20'+_0xd3789c);}});}function fetchOmniOutContentList(_0x561269,_0x230df3,_0x10925a){return new Promise((_0x14966a,_0xbd025)=>{const _0x4148f2=a34_0x2bea;try{_0x10925a[_0x4148f2(0xc7)](_0x4148f2(0x102));const _0x1f03de=[];let _0x4891c3=0x1,_0x300197=Promise[_0x4148f2(0xf4)]();_0x230df3[_0x4148f2(0xda)](_0x420f0a=>{const _0x22f220=_0x4148f2;_0x300197=_0x300197[_0x22f220(0xd6)](()=>fetchOmniOutContent(_0x561269,_0x420f0a))['then'](_0xef834a=>{const _0x20dcf7=_0x22f220;_0xef834a&&_0xef834a[_0x20dcf7(0xf0)]&&_0xef834a[_0x20dcf7(0xf0)][_0x20dcf7(0x10a)]===0x2&&(_0xef834a['compositeResponse'][0x0][_0x20dcf7(0xf8)]===0xc8&&_0x1f03de['push']({'lwcComponentList':_0xef834a['compositeResponse'][0x1]['body'][_0x20dcf7(0x110)],'name':_0xef834a[_0x20dcf7(0xf0)][0x0][_0x20dcf7(0xc4)][_0x20dcf7(0x110)][0x0]['DeveloperName']})),_0x10925a[_0x20dcf7(0xc7)](_0x20dcf7(0xec)+_0x4891c3++ +_0x20dcf7(0xbe)+_0x1f03de['length']+_0x20dcf7(0xe1)+_0x230df3[_0x20dcf7(0x10a)]);});}),_0x300197['then'](()=>{const _0x4e4a2d=_0x4148f2;_0x10925a[_0x4e4a2d(0xc7)](_0x4e4a2d(0xf6)),_0x14966a(_0x1f03de);})[_0x4148f2(0x107)](_0x5c3886=>{const _0x20a388=_0x4148f2;_0x10925a[_0x20a388(0xc7)](_0x20a388(0xc3)+_0x5c3886),_0xbd025(_0x5c3886);});}catch(_0x3bd839){_0xbd025(_0x3bd839),_0x10925a[_0x4148f2(0xc7)](_0x4148f2(0xc3)+_0x3bd839);}});}function fetchOmniOutContent(_0x5d5090,_0x52edbd){const _0x480be3=a34_0x1556cc;_0x52edbd=_0x52edbd['replace']('-','')[_0x480be3(0xc0)](_0x480be3(0x10c),'');const _0x26eb6b={'allOrNone':!![],'compositeRequest':[{'method':'GET','referenceId':_0x480be3(0xfc),'url':_0x480be3(0x114)+_0x52edbd+'\x27'},{'method':_0x480be3(0xff),'referenceId':'bundleResources','url':_0x480be3(0xe9)}]},_0x39d4e0=_0x5d5090[_0x480be3(0xdb)],_0x24feb6={'method':_0x480be3(0xd1),'url':_0x39d4e0+_0x480be3(0xee),'body':JSON[_0x480be3(0xea)](_0x26eb6b),'headers':{'Content-Type':'application/json'}};return _0x5d5090[_0x480be3(0x101)](_0x24feb6);}function a34_0x2bea(_0x405cc7,_0xfa8474){const _0x25d89d=a34_0x25d8();return a34_0x2bea=function(_0x2beaad,_0xf70b16){_0x2beaad=_0x2beaad-0xbe;let _0x4282f4=_0x25d89d[_0x2beaad];return _0x4282f4;},a34_0x2bea(_0x405cc7,_0xfa8474);}function createLwcFiles(_0x37a034,_0x1b27e5,_0x3a8182,_0x1b6793){return new Promise((_0x307a79,_0x52508e)=>{const _0x5c456a=a34_0x2bea;try{_0x1b6793['log']('Start\x20Create\x20Lwc\x20Files');const _0x29f241=[];let _0x227659=[],_0x434e6a=0x0,_0x415602=new AdmZip();_0x1b27e5[_0x5c456a(0xda)](_0x21b71b=>{const _0x3baffc=_0x5c456a;_0x227659[_0x3baffc(0xe6)]({'apiName':_0x21b71b[_0x3baffc(0x111)],'componentType':'LightningComponentBundle','label':_0x3baffc(0x115)+_0x21b71b['name']}),_0x21b71b['lwcComponentList']['forEach'](_0x38d25d=>{const _0xd3ec09=_0x3baffc;_0x38d25d['Source']!==_0xd3ec09(0xe7)&&(_0x434e6a+=_0x38d25d[_0xd3ec09(0xcd)][_0xd3ec09(0x10a)],_0x434e6a<constants[_0xd3ec09(0x112)]?_0x415602[_0xd3ec09(0x117)](''+_0x38d25d[_0xd3ec09(0xd7)],Buffer[_0xd3ec09(0xc6)](_0x38d25d[_0xd3ec09(0xcd)][_0xd3ec09(0xc0)](new RegExp(_0xd3ec09(0xcf),'g'),'c'))):(_0x29f241['push']({'snapshotId':_0x3a8182,'typeList':[{'type':_0xd3ec09(0xd8),'zip':_0x415602[_0xd3ec09(0xf1)]()[_0xd3ec09(0x106)](_0xd3ec09(0xd0)),'componentList':_0x227659}]}),_0x227659=[],_0x434e6a=0x0,_0x415602=new AdmZip()));}),delete _0x21b71b[_0x3baffc(0xd5)];}),_0x227659[_0x5c456a(0x10a)]&&_0x29f241[_0x5c456a(0xe6)]({'snapshotId':_0x3a8182,'typeList':[{'type':_0x5c456a(0xd8),'zip':_0x415602['toBuffer']()[_0x5c456a(0x106)](_0x5c456a(0xd0)),'componentList':_0x227659}]}),_0x1b6793[_0x5c456a(0xc7)]('End\x20Create\x20Lwc\x20Files'),_0x307a79(_0x29f241);}catch(_0x13fbee){_0x1b6793[_0x5c456a(0xc7)](_0x5c456a(0x109)+_0x13fbee),_0x52508e(_0x13fbee);}});}function sendComponents(_0x15cd49,_0x4b2bd5,_0x945b99,_0xfa866b){return new Promise((_0x5e1bb4,_0x5659af)=>{const _0x2d4c11=a34_0x2bea;try{_0xfa866b[_0x2d4c11(0xc7)](_0x2d4c11(0xce));let _0x2c6a0a=Promise[_0x2d4c11(0xf4)]();_0x945b99[_0x2d4c11(0xda)](_0x490a5f=>{const _0x17f463=_0x2d4c11;_0x2c6a0a=_0x2c6a0a[_0x17f463(0xd6)](()=>callSentComponents(_0x15cd49,_0x4b2bd5,_0x490a5f));}),_0x2c6a0a[_0x2d4c11(0xd6)](()=>{_0xfa866b['log']('End\x20Send\x20Components'),_0x5e1bb4();})['catch'](_0x21222b=>{const _0x4d9774=_0x2d4c11;_0xfa866b[_0x4d9774(0xc7)](_0x4d9774(0xef)+_0x21222b),_0x5659af(_0x21222b);});}catch(_0x495ec1){_0xfa866b[_0x2d4c11(0xc7)](_0x2d4c11(0xef)+_0x495ec1),_0x5659af(_0x495ec1);}});}function callSentComponents(_0x237ced,_0x334d78,_0x59935d){return new Promise((_0x5db62f,_0x498daf)=>{const _0x57bce6=a34_0x2bea;try{const _0x17010d={'methodType':constants[_0x57bce6(0xcb)],'body':JSON[_0x57bce6(0xea)](_0x59935d)};http['post'](_0x237ced,_0x334d78[_0x57bce6(0xc0)]('__',''),JSON[_0x57bce6(0xea)](_0x17010d))[_0x57bce6(0xd6)](()=>{_0x5db62f();})[_0x57bce6(0x107)](_0x498daf);}catch(_0x550ba6){_0x498daf(_0x550ba6);}});}function completeDeployment(_0x43291d,_0x506a9e,_0x5ee88b,_0x15dd45,_0x267bca,_0x3977d9,_0x338784,_0x2eb334,_0x198d19=![]){return new Promise((_0x3b0c46,_0x1adc12)=>{const _0x1bd755=a34_0x2bea;try{Promise[_0x1bd755(0xf4)]()[_0x1bd755(0xd6)](()=>updateAttachmentLog(_0x43291d,_0x506a9e,_0x3977d9,_0x2eb334,_0x198d19,!![]))[_0x1bd755(0xd6)](_0x4b63f0=>{const _0x4ebc3e=_0x1bd755;return _0x198d19=_0x4b63f0,http[_0x4ebc3e(0x108)](_0x506a9e,_0x267bca,_0x5ee88b,_0x338784,_0x2eb334,_0x4b63f0);})['then'](()=>callUpdateSnapshot(_0x506a9e,_0x15dd45,_0x5ee88b,_0x198d19,_0x2eb334));}catch(_0x3d2901){_0x1adc12(_0x3d2901);}});}function updateAttachmentLog(_0x3c7de3,_0x42d5d4,_0x53c8ff,_0x102b2f,_0x494d4c,_0x239ad8=![]){return new Promise(_0xc0adc2=>{const _0x5936a2=a34_0x2bea;try{_0x102b2f['log'](_0x5936a2(0xe3)),Promise[_0x5936a2(0xf4)]()[_0x5936a2(0xd6)](()=>http['getAttachmentBody'](_0x42d5d4,_0x53c8ff,_0x102b2f))['then'](_0x3238da=>http[_0x5936a2(0xdc)](_0x42d5d4,_0x53c8ff,_0x3238da,_0x102b2f,_0x494d4c))[_0x5936a2(0xd6)](()=>_0xc0adc2(_0x494d4c))[_0x5936a2(0x107)](()=>_0xc0adc2(_0x494d4c));}catch(_0x1e3a37){_0x102b2f[_0x5936a2(0xc7)]('Error\x20Update\x20Attachment\x20Log\x20'+_0x1e3a37),_0xc0adc2(_0x494d4c);}});}function callUpdateSnapshot(_0x2f2b3c,_0x2f2452,_0x336b38,_0x15f5e0,_0x1297c3){return new Promise((_0x2e462a,_0x217ef7)=>{const _0x51625f=a34_0x2bea;try{_0x1297c3[_0x51625f(0xc7)](_0x51625f(0x10b));const _0x72f870={'Id':_0x2f2452,[_0x336b38+_0x51625f(0xc9)]:!![],[_0x336b38+_0x51625f(0xd3)]:_0x15f5e0};_0x2f2b3c['updateSnapshot'](_0x336b38,_0x72f870)[_0x51625f(0xd6)](()=>{const _0xfc22ef=_0x51625f;_0x1297c3[_0xfc22ef(0xc7)]('End\x20Update\x20Snapshot'),_0x2e462a();})[_0x51625f(0x107)](_0xedd78=>{const _0x4c336a=_0x51625f;_0x1297c3[_0x4c336a(0xc7)]('Error\x20Update\x20Snapshot'),_0x217ef7(_0xedd78);});}catch(_0xa59467){_0x1297c3[_0x51625f(0xc7)]('Error\x20Update\x20Snapshot'),_0x217ef7(_0xa59467);}});}function a34_0x25d8(){const _0x37792d=['forEach','instanceUrl','callUpdateAttachmentLog','apex','784782YdiCyX','propSetMap','290kOWuyh',',\x20all\x20','../../../services/http','Start\x20Update\x20Attachment\x20Log','2938655stulIm','Process\x20Get\x20Dependency,\x20processed\x20','push','(hidden)','path','/services/data/v48.0/tooling/query?q=SELECT+Id,FilePath,Format,Source+FROM+LightningComponentResource+WHERE+LightningComponentBundleId=\x27@{bundleInfo.records[0].Id}\x27','stringify','Start\x20Extract\x20LWC\x20Dependencies','Process\x20Fetch\x20OmniOut\x20Content,\x20processed\x20','Custom\x20Lightning\x20Web\x20Component','/services/data/v50.0/tooling/composite','Error\x20Send\x20Components\x20','compositeResponse','toBuffer','elementTypeToLwcTemplateMapping','children','resolve','194fQdqJn','End\x20Fetch\x20OmniOut\x20Content\x20List\x20','Error\x20Extract\x20LWC\x20Dependencies\x20','httpStatusCode','../../../constants','Vlocity\x20BuildJSONWithPrefill','query','bundleInfo','48421ZUaVnv','post','GET','Start\x20Query','request','Start\x20Fetch\x20OmniOut\x20Content\x20List\x20','fs-extra','vlocity_cmt__Language__c','exports','toString','catch','callUpdateLog','Error\x20Create\x20Lwc\x20Files\x20','length','Start\x20Update\x20Snapshot','vlocity_cmt__','Error\x20Get\x20Prefilled\x20JSON\x20','/vlocity_cmt/v1/GenericInvoke/','lwcName','records','name','MAX_SIZE_UNZIP_ATTACHMENT','End\x20Extract\x20LWC\x20Dependencies','/services/data/v48.0/tooling/query?q=SELECT+Id,DeveloperName,Description+FROM+LightningComponentBundle+WHERE+DeveloperName=\x27','lwc/','2486032XMhxON','addFile','eleArray','4518444AbukZR',',\x20retrieved\x20','entries','replace','End\x20Query','Error\x20Get\x20Dependency\x20List\x20','Error\x20Fetch\x20OmniOut\x20Content\x20List\x20','body','type','from','log','4690QcsAqe','Is_Completed__c','1578EsceWV','METHOD_TYPE_ADD_COMPONENTS_TO_SNAPSHOT','vlocity_cmt__Type__c','Source','Start\x20Send\x20Components','vlocity_cmt','base64','POST','\x20from\x20','Is_Error__c','lwcComponentOverride','lwcComponentList','then','FilePath','LightningComponentBundle','2152FAtYnp'];a34_0x25d8=function(){return _0x37792d;};return a34_0x25d8();}function getDependencyList(_0x224874,_0x4927de,_0x3b6380){return new Promise((_0x4cac4b,_0x487d57)=>{const _0x29d159=a34_0x2bea;try{_0x3b6380['log']('Start\x20Get\x20Dependency\x20List\x20');const _0x21dda3=[];let _0x186fad=Promise[_0x29d159(0xf4)]();_0x4927de['forEach'](_0x5da7f0=>{const _0x4b0302=_0x29d159;_0x186fad=_0x186fad[_0x4b0302(0xd6)](()=>getPrefilledJSON(_0x224874,_0x5da7f0,_0x3b6380))[_0x4b0302(0xd6)](_0x4c6bd9=>{const _0x1227d5=_0x4b0302;_0x21dda3[_0x1227d5(0xe6)](_0x4c6bd9),_0x3b6380['log'](_0x1227d5(0xe5)+_0x21dda3[_0x1227d5(0x10a)]+_0x1227d5(0xd2)+_0x4927de[_0x1227d5(0x10a)]);});}),_0x186fad[_0x29d159(0xd6)](()=>{const _0x3ecd12=_0x29d159;_0x3b6380[_0x3ecd12(0xc7)]('End\x20Get\x20Dependency\x20List\x20'),_0x4cac4b(_0x21dda3);})[_0x29d159(0x107)](_0x91d88c=>{const _0x1a9f3b=_0x29d159;_0x3b6380['log'](_0x1a9f3b(0xc2)+_0x91d88c),_0x487d57(_0x91d88c);});}catch(_0x475f59){_0x3b6380[_0x29d159(0xc7)]('Error\x20Get\x20Dependency\x20List\x20'+_0x475f59),_0x487d57(_0x475f59);}});}function getPrefilledJSON(_0x3f7146,_0x25f8f9,_0x444430){return new Promise((_0x3648c0,_0xacee60)=>{const _0x5dbd26=a34_0x2bea;try{const _0x4d34d7={'sClassName':_0x5dbd26(0xfa),'sType':_0x25f8f9['vlocity_cmt__Type__c'],'sSubType':_0x25f8f9['vlocity_cmt__SubType__c'],'sLang':_0x25f8f9[_0x5dbd26(0x104)]};_0x3f7146[_0x5dbd26(0xdd)][_0x5dbd26(0xfe)](_0x5dbd26(0x10e),_0x4d34d7,(_0x2043f3,_0xf2bdc6)=>{const _0x501fdc=_0x5dbd26;_0x2043f3?(_0x444430[_0x501fdc(0xc7)]('Error\x20getPrefilledJSON\x20'+_0x2043f3),_0xacee60(_0x2043f3)):_0x3648c0(JSON['parse'](_0xf2bdc6));});}catch(_0x6cc6a6){_0xacee60(_0x6cc6a6),_0x444430[_0x5dbd26(0xc7)](_0x5dbd26(0x10d)+_0x6cc6a6);}});}function extractLwcDependencies(_0x353d9f,_0x24093e){return new Promise((_0x2de25c,_0x38025f)=>{const _0x116690=a34_0x2bea;try{_0x24093e[_0x116690(0xc7)](_0x116690(0xeb));const _0x21ce48=[];_0x353d9f[_0x116690(0xda)](_0x2dc79e=>{const _0x27683c=_0x116690;_0x2dc79e[_0x27683c(0xf3)]&&_0x2dc79e[_0x27683c(0xf3)][_0x27683c(0x10a)]>0x0&&_0x2dc79e[_0x27683c(0xf3)][_0x27683c(0xda)](_0x46fdde=>{const _0x290095=_0x27683c;_0x46fdde[_0x290095(0xf3)]&&_0x46fdde[_0x290095(0xf3)][_0x290095(0x10a)]>0x0&&_0x46fdde[_0x290095(0xf3)][_0x290095(0xda)](_0x48d221=>{const _0x5e428b=_0x290095;_0x48d221[_0x5e428b(0x118)][0x0][_0x5e428b(0xc5)]===_0x5e428b(0xed)&&_0x21ce48[_0x5e428b(0xe6)](_0x48d221['eleArray'][0x0][_0x5e428b(0xdf)][_0x5e428b(0x10f)]);});});if(_0x2dc79e[_0x27683c(0xdf)]&&_0x2dc79e[_0x27683c(0xdf)][_0x27683c(0xf2)])for(const [_0x4d99aa,_0x56ba41]of Object[_0x27683c(0xbf)](_0x2dc79e[_0x27683c(0xdf)][_0x27683c(0xf2)])){_0x21ce48[_0x27683c(0xe6)](_0x56ba41);}_0x2dc79e[_0x27683c(0xf3)]&&_0x2dc79e['children'][_0x27683c(0x10a)]>0x0&&_0x2dc79e['children'][_0x27683c(0xda)](_0x39c07=>{const _0x180b68=_0x27683c;_0x39c07[_0x180b68(0xdf)]&&_0x39c07[_0x180b68(0xdf)]['lwcComponentOverride']&&_0x21ce48[_0x180b68(0xe6)](_0x39c07[_0x180b68(0xdf)][_0x180b68(0xd4)]),_0x39c07[_0x180b68(0xf3)]&&_0x39c07[_0x180b68(0xf3)][_0x180b68(0x10a)]>0x0&&_0x39c07[_0x180b68(0xf3)]['forEach'](_0xe57791=>{const _0x6d2aa7=_0x180b68;_0xe57791['eleArray'][0x0]['propSetMap']&&_0xe57791['eleArray'][0x0][_0x6d2aa7(0xdf)][_0x6d2aa7(0xd4)]&&_0x21ce48[_0x6d2aa7(0xe6)](_0xe57791[_0x6d2aa7(0x118)][0x0]['propSetMap'][_0x6d2aa7(0xd4)]);});});}),_0x24093e[_0x116690(0xc7)](_0x116690(0x113)),_0x2de25c(_0x21ce48);}catch(_0x21871d){_0x24093e[_0x116690(0xc7)](_0x116690(0xf7)+_0x21871d),_0x38025f(_0x21871d);}});}module[a34_0x1556cc(0x105)]={'query':query,'getDependencyList':getDependencyList,'extractLwcDependencies':extractLwcDependencies,'fetchOmniOutContentList':fetchOmniOutContentList,'createLwcFiles':createLwcFiles,'sendComponents':sendComponents,'completeDeployment':completeDeployment};