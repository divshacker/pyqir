Search.setIndex({docnames:["api-reference/generator","api-reference/index","api-reference/jit","api-reference/parser","development-guide/building","development-guide/compatibility","development-guide/docs-authoring","development-guide/index","getting-started/index","getting-started/installing","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["api-reference/generator.md","api-reference/index.md","api-reference/jit.md","api-reference/parser.md","development-guide/building.md","development-guide/compatibility.md","development-guide/docs-authoring.md","development-guide/index.md","getting-started/index.md","getting-started/installing.md","index.md"],objects:{"pyqir.generator":[[0,0,1,"","BasicQisBuilder"],[0,0,1,"","Builder"],[0,0,1,"","Qubit"],[0,0,1,"","Ref"],[0,0,1,"","SimpleModule"]],"pyqir.generator.BasicQisBuilder":[[0,1,1,"","cx"],[0,1,1,"","cz"],[0,1,1,"","h"],[0,1,1,"","if_result"],[0,1,1,"","m"],[0,1,1,"","reset"],[0,1,1,"","rx"],[0,1,1,"","ry"],[0,1,1,"","rz"],[0,1,1,"","s"],[0,1,1,"","s_adj"],[0,1,1,"","t"],[0,1,1,"","t_adj"],[0,1,1,"","x"],[0,1,1,"","y"],[0,1,1,"","z"]],"pyqir.generator.SimpleModule":[[0,1,1,"","bitcode"],[0,2,1,"","builder"],[0,1,1,"","ir"],[0,2,1,"","qubits"],[0,2,1,"","results"]],"pyqir.jit":[[2,0,1,"","GateLogger"],[2,0,1,"","GateSet"],[2,0,1,"","NonadaptiveJit"]],"pyqir.jit.GateLogger":[[2,1,1,"","cx"],[2,1,1,"","cz"],[2,1,1,"","finish"],[2,1,1,"","h"],[2,1,1,"","m"],[2,1,1,"","print"],[2,1,1,"","reset"],[2,1,1,"","rx"],[2,1,1,"","ry"],[2,1,1,"","rz"],[2,1,1,"","s"],[2,1,1,"","s_adj"],[2,1,1,"","t"],[2,1,1,"","t_adj"],[2,1,1,"","x"],[2,1,1,"","y"],[2,1,1,"","z"]],"pyqir.jit.GateSet":[[2,1,1,"","cx"],[2,1,1,"","cz"],[2,1,1,"","finish"],[2,1,1,"","h"],[2,1,1,"","m"],[2,1,1,"","reset"],[2,1,1,"","rx"],[2,1,1,"","ry"],[2,1,1,"","rz"],[2,1,1,"","s"],[2,1,1,"","s_adj"],[2,1,1,"","t"],[2,1,1,"","t_adj"],[2,1,1,"","x"],[2,1,1,"","y"],[2,1,1,"","z"]],"pyqir.jit.NonadaptiveJit":[[2,1,1,"","eval"]],"pyqir.parser":[[3,0,1,"","QirAShrInstr"],[3,0,1,"","QirAddInstr"],[3,0,1,"","QirAndInstr"],[3,0,1,"","QirArrayType"],[3,0,1,"","QirBrTerminator"],[3,0,1,"","QirCallInstr"],[3,0,1,"","QirCondBrTerminator"],[3,0,1,"","QirDoubleConstant"],[3,0,1,"","QirDoubleType"],[3,0,1,"","QirFAddInstr"],[3,0,1,"","QirFCmpInstr"],[3,0,1,"","QirFDivInstr"],[3,0,1,"","QirFMulInstr"],[3,0,1,"","QirFNegInstr"],[3,0,1,"","QirFRemInstr"],[3,0,1,"","QirFSubInstr"],[3,0,1,"","QirICmpInstr"],[3,0,1,"","QirInstr"],[3,0,1,"","QirIntConstant"],[3,0,1,"","QirIntegerType"],[3,0,1,"","QirLShrInstr"],[3,0,1,"","QirLocalOperand"],[3,0,1,"","QirMulInstr"],[3,0,1,"","QirNamedStructType"],[3,0,1,"","QirNullConstant"],[3,0,1,"","QirOperand"],[3,0,1,"","QirOrInstr"],[3,0,1,"","QirPhiInstr"],[3,0,1,"","QirPointerType"],[3,0,1,"","QirQirCallInstr"],[3,0,1,"","QirQisCallInstr"],[3,0,1,"","QirQubitConstant"],[3,0,1,"","QirResultConstant"],[3,0,1,"","QirResultType"],[3,0,1,"","QirRetTerminator"],[3,0,1,"","QirRtCallInstr"],[3,0,1,"","QirSDivInstr"],[3,0,1,"","QirSRemInstr"],[3,0,1,"","QirShlInstr"],[3,0,1,"","QirStructType"],[3,0,1,"","QirSubInstr"],[3,0,1,"","QirSwitchTerminator"],[3,0,1,"","QirTerminator"],[3,0,1,"","QirType"],[3,0,1,"","QirUDivInstr"],[3,0,1,"","QirURemInstr"],[3,0,1,"","QirUnreachableTerminator"],[3,0,1,"","QirVoidType"],[3,0,1,"","QirXorInstr"]],"pyqir.parser.QirArrayType":[[3,3,1,"","element_count"],[3,3,1,"","element_types"]],"pyqir.parser.QirBrTerminator":[[3,3,1,"","dest"]],"pyqir.parser.QirCallInstr":[[3,3,1,"","func_args"],[3,3,1,"","func_name"]],"pyqir.parser.QirCondBrTerminator":[[3,3,1,"","condition"],[3,3,1,"","false_dest"],[3,3,1,"","true_dest"]],"pyqir.parser.QirDoubleConstant":[[3,3,1,"","value"]],"pyqir.parser.QirFCmpInstr":[[3,3,1,"","predicate"]],"pyqir.parser.QirICmpInstr":[[3,3,1,"","predicate"]],"pyqir.parser.QirInstr":[[3,3,1,"","output_name"],[3,3,1,"","type"]],"pyqir.parser.QirIntConstant":[[3,3,1,"","value"],[3,3,1,"","width"]],"pyqir.parser.QirIntegerType":[[3,3,1,"","width"]],"pyqir.parser.QirLocalOperand":[[3,3,1,"","name"],[3,3,1,"","type"]],"pyqir.parser.QirNamedStructType":[[3,3,1,"","name"]],"pyqir.parser.QirNullConstant":[[3,3,1,"","value"]],"pyqir.parser.QirPhiInstr":[[3,1,1,"","get_incoming_value_for_name"],[3,3,1,"","incoming_values"]],"pyqir.parser.QirPointerType":[[3,3,1,"","addrspace"],[3,3,1,"","type"]],"pyqir.parser.QirQubitConstant":[[3,3,1,"","id"],[3,3,1,"","value"]],"pyqir.parser.QirResultConstant":[[3,3,1,"","id"],[3,3,1,"","value"]],"pyqir.parser.QirRetTerminator":[[3,3,1,"","operand"]],"pyqir.parser.QirStructType":[[3,3,1,"","struct_element_types"]],"pyqir.parser.QirSwitchTerminator":[[3,3,1,"","default_dest"],[3,3,1,"","dest_pairs"],[3,3,1,"","operand"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","property","Python property"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:property"},terms:{"0":[4,6],"04":5,"0a1":9,"1":4,"10":[4,5],"11":[4,5],"12":5,"14":5,"15":5,"16":4,"18":5,"2":[6,9],"20":[4,5],"2019":5,"3":[4,5,9],"5":4,"56":4,"6":[4,5,9],"64":5,"7":[4,5],"9":[4,5],"boolean":[2,3],"case":3,"class":[0,1],"default":[3,4],"do":4,"final":3,"float":[2,3],"function":[3,6],"int":[2,3],"new":6,"null":3,"return":[2,3],"static":3,"switch":3,"true":3,"void":3,"while":6,As:[3,6],For:[5,6,9],If:[2,3,4,9],In:[4,6],No:9,Not:4,On:6,The:[2,3,4,6],Then:9,There:4,To:[4,9],__quantum__qir__:3,__quantum__qis__:3,__quantum__rt__:3,_gateset:2,_parser:3,_x86_64:9,abi:4,about:[7,9],ad:[4,6],adapt:2,add:6,addit:[3,6],address:3,addrspac:3,against:3,alia:9,all:[3,4,5,6],allianc:[6,9],alloc:3,allow:6,alreadi:4,altern:[4,9],alwai:3,an:[3,4,6,9],anonym:3,api:10,appli:6,appropri:6,apt:4,ar:[2,3,4,5,9],argument:[3,6],arithmet:3,arrai:3,author:[7,10],autom:5,automat:[4,6],avail:[4,9],backtick:6,base:[0,2,3],bash:9,basic:1,basicqisbuild:0,bc:2,been:5,befor:[2,3],begin:[2,3],behavior:4,bit:3,bitcod:0,bitwis:3,blob:4,block:[1,6],bool:2,branch:3,brew:4,briefli:6,build:[6,7,9,10],builder:1,built:[4,9],c:[4,9],cach:4,call:[2,3,6],callback:2,can:[3,4,5,6,9],cargo:4,cdylib:4,chang:4,channel:9,chmod:4,ci:4,circuit:2,clangd:4,cmakeinstal:4,cmd:[4,9],code:6,com:[4,6],command:[4,9],common:[6,9],compar:3,comparison:3,compat:[7,9,10],compil:[2,4],compon:4,conda:9,condit:3,conf:6,config:4,configur:4,constant:3,contain:[2,3,4],content:6,control:[2,3],core:4,correspond:3,could:3,count:3,crate:4,creat:9,cross:6,curl:4,current:[3,4,9],custom:6,cx:[0,2],cz:[0,2],d:9,debian:5,decid:3,default_dest:3,defin:[2,3,4,6],deleg:2,denot:6,depend:4,describ:6,descript:3,desir:9,dest:3,dest_pair:3,destin:3,detail:[4,6],determin:[2,3],dev:4,develop:[6,10],dict:2,direct:6,directli:[4,9],directori:4,distribut:9,divis:3,doc:6,docker:4,docset:6,document:7,doe:3,don:9,done:5,doubl:3,download:4,dure:2,e:[4,6,9],each:[2,3,4],easili:5,echo:4,either:[3,9],element:3,element_count:3,element_typ:3,emb:6,emphasi:6,end:[2,3],engin:6,enhanc:6,entir:6,entri:2,entry_point:2,environ:[7,9],eq:3,equal:5,equat:6,essenti:4,etc:4,eval:2,evalu:[2,3],ex:4,exampl:6,exclud:4,execut:[2,3],exist:2,expect:[3,5],expos:6,extend:6,extens:6,extern:6,f582e02696ceee81818dc3378531804b2213ed41c2a8bc566253d16d894cefab:4,fallback:3,fals:[3,4],false_dest:3,file:[2,6],file_path:2,finish:2,fix:3,flow:3,folder:[4,9],follow:[4,6,9],forg:9,form:9,found:[3,9],fresh:6,from:[2,3,6,7,8,10],func_arg:3,func_nam:3,g:[6,9],gate:2,gatelogg:1,gateset:1,gener:[1,3,4,6,9,10],genindex:6,get:[3,4,10],get_incoming_value_for_nam:3,gh:9,github:[4,6,8],given:3,global:3,group:5,guid:[6,10],h:[0,2],ha:3,halt:3,happen:9,have:[4,5],head:6,header:6,help:4,here:6,home:4,how:[3,9],howev:5,http:[4,6],id:3,identifi:3,if_result:0,imag:4,immedi:6,impli:3,improv:6,includ:6,incom:3,incoming_valu:3,index:[6,10],indic:[3,4],inform:[4,5,9],initi:4,inlin:[3,6],insal:4,inspect:3,instal:[5,8],instanc:[3,6],instead:9,instr:3,instruct:[1,2,9],integ:3,intersphinx:6,intrins:3,ir:0,isol:4,its:6,itself:6,jit:[1,9,10],jump:3,just:3,kitwar:4,languag:3,latest:4,latex:6,left:[3,6],length:3,level:[5,6],lib:4,librari:9,like:5,link:7,linux:9,list:[2,3],ll:2,lld:4,lldb:4,llvm:3,llvm_sys_110_prefix:4,llvm_sys_120_prefix:4,llvm_sys_130_prefix:4,local:[3,7],logic:3,look:4,m:[0,2,4,9],mac:[4,9],maco:5,macosx_:9,mai:[2,3,5,6],maintain:6,make:[4,9],manual:4,manylinux:[4,9],markdown:6,markup:6,match:3,math:6,maturin:4,maxdepth:6,measur:2,metadata:[2,6],miniconda:4,mode:4,modul:[1,4,9,10],modulenotfounderror:9,more:[3,4,6,9],most:5,msquantumpubl:4,multipl:[2,3,4],myst:7,name:[2,3,9],nativ:3,ne:3,need:4,negat:3,net:4,node:3,non:2,nonadaptivejit:1,none:[2,3],note:3,number_of_qubit:2,number_of_regist:2,numpi:6,o:4,object:[0,2,3],oeq:3,often:3,og:3,ogt:3,ol:3,olt:3,one:[3,4,9],onli:[4,9],op:3,opaqu:3,oper:[2,3,7],operand:1,option:[2,3],ord:3,order:[2,3],org:4,origin:3,os:9,other:[3,6],out:2,output:[3,9],output_nam:3,own:4,pack:4,packag:[5,8],page:[4,6,10],pair:3,paragraph:6,param:3,paramet:2,parser:[1,9,10],particular:6,pass:[3,4],path:[2,4,6],pattern:9,perform:3,phi:3,pip:[4,9],plain:6,platform:8,pleas:[6,9],plugin:6,point:[2,3],pointer:3,poitner:3,pop:2,possibl:3,powershel:[4,9],pre:[2,9],predic:3,prefix:4,preinstal:4,prerequisit:8,print:2,process:6,profil:3,program:[2,3],project:4,prompt:[4,9],properti:3,provid:[5,6],ps1:[4,9],py:6,pyqir:[1,7,8],pyqir_cache_dir:4,pyqir_download_llvm:4,pyqir_gener:9,pyqir_jit:9,pyqir_llvm_builds_url:4,pyqir_llvm_external_dir:4,pyqir_pars:9,pyqirinstruct:3,pyqiroperand:3,pyqirtermin:3,pyqirtyp:3,pytest:4,python3:[4,9],python:[2,4,5,9],qi:2,qir:[1,2,4,6,9],qiraddinstr:3,qirandinstr:3,qirarraytyp:3,qirashrinstr:3,qirbrtermin:3,qircallinstr:3,qircondbrtermin:3,qirconst:3,qirdoubleconst:3,qirdoubletyp:3,qirfaddinstr:3,qirfcmpinstr:3,qirfdivinstr:3,qirfmulinstr:3,qirfneginstr:3,qirfreminstr:3,qirfsubinstr:3,qiricmpinstr:3,qirinstr:3,qirintconst:3,qirintegertyp:3,qirlocaloperand:3,qirlshrinstr:3,qirmulinstr:3,qirnamedstruct:3,qirnamedstructtyp:3,qirnullconst:3,qiroperand:3,qiropinstr:3,qirorinstr:3,qirphiinstr:3,qirpointertyp:3,qirqircallinstr:3,qirqiscallinstr:3,qirqubitconst:3,qirresultconst:3,qirresulttyp:3,qirrettermin:3,qirrtcallinstr:3,qirsdivinstr:3,qirshlinstr:3,qirsreminstr:3,qirstructtyp:3,qirsubinstr:3,qirswitchtermin:3,qirtermin:3,qirtyp:3,qirudivinstr:3,qirunreachabletermin:3,qirureminstr:3,qirvoidtyp:3,qirxorinstr:3,quantum:[2,3],qubit:[0,2,3,6],r:9,rangl:6,reach:3,read:2,receiv:3,recommend:[4,6],record:2,ref:[0,6],refer:[6,10],referenc:6,regist:2,rel:5,releas:[4,8],remaind:3,repositori:9,repres:[1,2,5],requir:2,reset:[0,2],result:[0,2,3],result_stream:2,ret:3,right:[3,6],rm:4,role:6,root:[4,6,9],run:[2,4,5],runtim:[3,4],rust:4,rustup:4,rx:[0,2],ry:[0,2],rz:[0,2],s:[0,2],s_adj:[0,2],sccach:4,script:[4,9],search:[3,10],section:[4,6],see:[3,4,6,9],select:3,server:5,set:[2,3,4,6],sge:3,sgt:3,sh:[4,9],sha256sum:4,shift:3,should:[3,4,5,6],sign:3,similarli:6,simplemodul:0,simul:2,size:3,sle:3,slt:3,solut:4,some:[3,6,9],sourc:[3,7,9,10],space:3,special:3,specif:[3,4],specifi:[4,6],sphinx:7,ssl:4,standard:6,start:[2,6,9,10],state:[2,6],statement:3,store:4,str:[2,3],stream:2,strict:4,string:3,struct:3,struct_element_typ:3,style:6,subclass:3,subdir:4,subtract:3,succe:3,sudo:4,suppli:2,support:[3,4,6,8],sure:4,sy:4,syntax:6,system:[7,10],t:[0,2,9],t_adj:[0,2],tabl:6,take:3,target:[2,4,6],target_nam:6,term:3,termin:[1,9],test:[4,5],text:6,them:[4,5,9],theta:2,thi:[3,4,6,9],those:6,thu:6,tidi:4,toctre:6,togeth:6,toml:4,toolchain:4,tox:4,tradit:6,transfer:3,troubleshoot:8,true_dest:3,tupl:3,two:[3,4],ty:3,type:1,typeset:6,u:4,ubuntu:5,ueq:3,ug:3,ugt:3,ul:3,ult:3,un:3,uncondition:3,underli:3,uninstal:8,unless:4,uno:3,unreach:3,unsign:3,updat:4,url:[4,6],us:[3,4,5,6,9],user:[4,5],usr:4,v0:9,v3:4,valu:[1,2,3],variabl:3,variant:6,verifi:6,version:[4,9],via:[6,9],view:4,virtualenv:4,wa:9,wai:4,want:4,we:[6,9],webpag:9,well:4,what:9,wheel:4,wheelhous:9,when:6,where:[3,4],whether:4,which:[2,3,4],whl:9,width:3,win64:4,win_amd64:9,window:[5,9],wish:4,within:[3,4,6,9],without:2,work:[4,5,9],write:6,written:6,x86:5,x86_64:4,x:[0,2,4],xor:3,y:[0,2,4,9],yaml:6,you:[4,9],your:[4,9],z:[0,2],zero:2},titles:["pyqir.generator","API Reference","pyqir.jit","pyqir.parser","Building PyQIR from Source","PyQIR compatible systems","Authoring PyQIR Documentation","Development Guide","Getting Started","Installing PyQIR","Welcome to PyQIR\u2019s Documentation"],titleterms:{"1":5,"2":5,"class":[2,3],about:6,api:1,author:6,basic:3,block:3,build:4,builder:0,clang:4,cli:9,cmake:4,compat:5,content:10,develop:[4,7],document:[6,10],download:9,environ:4,error:9,exampl:9,from:[4,9],gatelogg:2,gateset:2,gener:0,get:8,github:9,guid:7,indic:10,instal:[4,9,10],instruct:3,introduct:10,jit:2,link:6,linux:4,llvm:4,local:4,maco:4,modul:0,myst:6,ninja:4,nonadaptivejit:2,oper:5,operand:3,option:4,other:9,packag:[4,9],parser:3,platform:9,prerequisit:9,pyqir:[0,2,3,4,5,6,9,10],qir:3,refer:1,releas:9,repres:3,requir:4,run:9,s:10,sourc:4,sphinx:6,start:8,support:9,system:5,tabl:10,termin:3,tier:5,troubleshoot:9,type:3,ubuntu:4,uninstal:9,valu:0,variabl:4,welcom:10,when:9,window:4}})