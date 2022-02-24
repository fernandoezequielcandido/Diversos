function LaavorRatingSwap()
{"use strict";var Laavor01=document.getElementsByClassName("laavorRatingImage");if(Laavor01===undefined||Laavor01===null||Laavor01.length===0)
{}
else
{for(var Laavor02=0;Laavor02<Laavor01.length;Laavor02++)
{var Laavor03=Laavor01[Laavor02];Laavor233(Laavor03,Laavor02);}}
var Laavor04=document.getElementsByClassName("laavorRatingNumber");if(Laavor04===undefined||Laavor04===null||Laavor04.length===0)
{}
else
{for(var Laavor05=0;Laavor05<Laavor04.length;Laavor05++)
{var Laavor06=Laavor04[Laavor05];Laavor238(Laavor06,"Laavor249");}}
var Laavor07=document.getElementsByClassName("laavorRatingLetter");if(Laavor07===undefined||Laavor07===null||Laavor07.length===0)
{}
else
{for(var Laavor08=0;Laavor08<Laavor07.length;Laavor08++)
{var Laavor09=Laavor07[Laavor08];Laavor238(Laavor09,"Laavor250");}}
var Laavor10=document.getElementsByClassName("laavorSwapImage");if(Laavor10===undefined||Laavor10===null||Laavor10.length===0)
{}
else
{for(var Laavor11=0;Laavor11<Laavor10.length;Laavor11++)
{var Laavor12=Laavor10[Laavor11];Laavor246(Laavor12);}}
var Laavor13=document.getElementsByClassName("laavorSwapLabel");if(Laavor13===undefined||Laavor13===null||Laavor13.length===0)
{}
else
{for(var Laavor14=0;Laavor14<Laavor13.length;Laavor14++)
{var Laavor15=Laavor13[Laavor14];laavorLabelSwapInitAll(Laavor15);}}}
function laavorRatingImageResetAll(Laavor16)
{"use strict";var Laavor17=document.getElementById(Laavor16);Laavor17.innerHTML='';Laavor233(Laavor17);}
function laavorRatingNumberResetAll(Laavor18)
{"use strict";var Laavor17=document.getElementById(Laavor18);Laavor17.innerHTML='';Laavor238(Laavor17,"Laavor249");}
function laavorRatingLetterResetAll(Laavor19)
{"use strict";var Laavor17=document.getElementById(Laavor19);Laavor17.innerHTML='';Laavor238(Laavor17,"Laavor250");}
function Laavor233(Laavor21,Laavor20)
{"use strict";var Laavor22=Laavor245(Laavor20);Laavor21.setAttribute("Laavor243",Laavor22);Laavor21.classList.add(Laavor22);if(Laavor21!==undefined&&Laavor21!==null)
{var Laavor23=Laavor21.getAttribute("imageSelect");var Laavor24=Laavor21.getAttribute("imageDeselect");var Laavor25=Laavor21.getAttribute("spaceBetween");if(Laavor23!==undefined&&Laavor23!==null&&Laavor24!==undefined&&Laavor24!==null)
{var Laavor26=Laavor21.getAttribute("itemsNumber");var Laavor27=Laavor21.getAttribute("initialValue");var Laavor28=Laavor21.getAttribute("isReadOnly");var Laavor29=Laavor21.getAttribute("blockSelect");var Laavor30=Laavor21.getAttribute("imageWidth");var Laavor31=Laavor21.getAttribute("imageHeight");var Laavor204=Laavor21.getAttribute("commandEvent");var Laavor32;if(Laavor25!==undefined&&Laavor25!==null)
{Laavor32=Laavor25.Laavor247();}
else
{Laavor32=Laavor239("spaceBetweenImage").Laavor247();}
if(Laavor26===undefined||Laavor26===null)
{Laavor26=5;}
if(Laavor27===undefined||Laavor27===null)
{Laavor27=0;}
for(var Laavor33=1;Laavor33<=Laavor26;Laavor33++)
{var Laavor34=document.createElement("img");Laavor34.setAttribute("NumberLV",Laavor33);Laavor34.setAttribute("ItemsNumber",Laavor26);Laavor34.setAttribute("imageSelect",Laavor23);Laavor34.setAttribute("imageDeselect",Laavor24);Laavor34.style.cursor="pointer";Laavor34.setAttribute("Name",Laavor22);Laavor34.setAttribute("Laavor243",Laavor22);Laavor34.setAttribute("commandEvent",Laavor204);if(Laavor33<=Laavor27)
{Laavor34.setAttribute("Laavor240",true);Laavor34.src=Laavor23;}
else
{Laavor34.setAttribute("Laavor240",false);Laavor34.src=Laavor24;}
if(Laavor28!==undefined&&Laavor28!==null)
{if(Laavor28.toString()==="true")
{if(Laavor29!==undefined&&Laavor29!==null)
{Laavor34.setAttribute("blockSelect",Laavor29);}}
else
{Laavor34.addEventListener("click",Laavor231);Laavor34.onmouseover=Laavor234;Laavor34.onmouseleave=Laavor235;}}
else
{Laavor34.addEventListener("click",Laavor231);if(Laavor29!==undefined&&Laavor29!==null)
{Laavor34.setAttribute("blockSelect",Laavor29);}
Laavor34.onmouseover=Laavor234;Laavor34.onmouseleave=Laavor235;}
if(Laavor30!==undefined&&Laavor30!==null)
{Laavor34.style.width=Laavor30;}
if(Laavor31!==undefined&&Laavor31!==null)
{Laavor34.style.height=Laavor31;}
if(Laavor33!==1&&Laavor32>0)
{for(var Laavor35=0;Laavor35<Laavor32;Laavor35++)
{var Laavor36=document.createElement("span");Laavor36.innerHTML="&nbsp";Laavor21.appendChild(Laavor36);}}
Laavor21.appendChild(Laavor34);}}}}
function Laavor234(){if(this!==undefined&&this!==null)
{var Laavor37=this.getAttribute("NumberLV").Laavor247();var Laavor39=this.getAttribute("Laavor243");var Laavor44=document.getElementsByClassName(Laavor39)[0];var Laavor45=Laavor44.getElementsByTagName("img");for(var Laavor46=0;Laavor46<Laavor37;Laavor46++)
{var Laavor47=Laavor45[Laavor46];var Laavor48=Laavor47.getAttribute("Laavor240");if(Laavor48!==undefined&&Laavor48!=null)
{if(Laavor48==="false")
{Laavor47.src=Laavor47.getAttribute("imageSelect");}}}}}
function Laavor235(){if(this!==undefined&&this!==null)
{var Laavor38=this.getAttribute("NumberLV").Laavor247();var Laavor41=this.getAttribute("Laavor243");var Laavor49=document.getElementsByClassName(Laavor41)[0];var Laavor50=Laavor49.getElementsByTagName("img")
for(var Laavor51=0;Laavor51<Laavor38;Laavor51++)
{var Laavor52=Laavor50[Laavor51];var Laavor53=Laavor52.getAttribute("Laavor240");if(Laavor53!==undefined&&Laavor53!=null)
{if(Laavor53==="false")
{Laavor52.src=Laavor52.getAttribute("imageDeselect");}}}}}
function Laavor238(Laavor55,Laavor82)
{"use strict";var Laavor54=Laavor245();var Laavor57=Laavor245();Laavor55.setAttribute("Laavor243",Laavor54);Laavor55.classList.add(Laavor54);if(Laavor55!==undefined&&Laavor55!==null)
{var Laavor58=Laavor55.getAttribute("itemsNumber");var Laavor59=Laavor55.getAttribute("initialValue");var Laavor60=Laavor55.getAttribute("isReadOnly");var Laavor61=Laavor55.getAttribute("blockSelect");var Laavor62=Laavor55.getAttribute("spaceBetween");var Laavor63=Laavor55.getAttribute("fontSize");var Laavor68=Laavor55.getAttribute("border");var Laavor69=Laavor55.getAttribute("borderRadius");var Laavor70=Laavor55.getAttribute("textColorSelect");var Laavor71=Laavor55.getAttribute("textColorDeselect");var Laavor72=Laavor55.getAttribute("borderColorSelect");var Laavor73=Laavor55.getAttribute("borderColorDeselect");var Laavor78=Laavor55.getAttribute("backgroundColorSelect");var Laavor79=Laavor55.getAttribute("backgroundColorDeselect");var Laavor205=Laavor55.getAttribute("commandEvent");if(Laavor58===undefined||Laavor58===null)
{Laavor58=5;}
if(Laavor59===undefined||Laavor59===null)
{Laavor59=0;}
var Laavor80;if(Laavor62!==undefined&&Laavor62!==null)
{Laavor80=Laavor62.Laavor247();}
else
{Laavor80=Laavor239("spaceBetween").Laavor247();}
if(Laavor63===undefined||Laavor63===null||Laavor63==="")
{Laavor63=Laavor239("fontSize");}
if(Laavor68===undefined||Laavor68===null||Laavor68==="")
{Laavor68=Laavor239("border");}
if(Laavor69===undefined||Laavor69===null||Laavor69==="")
{Laavor69=Laavor239("borderRadius");}
if(Laavor70===undefined||Laavor70===null||Laavor70==="")
{Laavor70=Laavor239("textColorSelect");}
if(Laavor71===undefined||Laavor71===null||Laavor71==="")
{Laavor71=Laavor239("textColorDeselect");}
if(Laavor78===undefined||Laavor78===null||Laavor78==="")
{Laavor78=Laavor239("backgroundColorSelect");}
if(Laavor72===undefined||Laavor72===null||Laavor72==="")
{Laavor72=Laavor239("borderColorSelect");}
if(Laavor73===undefined||Laavor73===null||Laavor73==="")
{Laavor73=Laavor239("borderColorDeselect");}
if(Laavor78===undefined||Laavor78===null||Laavor78==="")
{Laavor78=Laavor239("backgroundColorSelect");}
if(Laavor79===undefined||Laavor79===null||Laavor79==="")
{Laavor79=Laavor239("backgroundColorDeselect");}
for(var Laavor56=1;Laavor56<=Laavor58;Laavor56++)
{var Laavor81=document.createElement("span");Laavor81.setAttribute("NumberLV",Laavor56);Laavor81.setAttribute("ItemsNumber",Laavor58);Laavor81.style.cursor="pointer";Laavor81.style.fontSize=Laavor63;Laavor81.style.borderRadius=Laavor69;Laavor81.style.border=Laavor68;Laavor81.style.borderStyle=Laavor239("borderStyle");Laavor81.setAttribute("Laavor240",true);Laavor81.setAttribute("Name",Laavor54);Laavor81.setAttribute("Laavor243",Laavor54);Laavor81.setAttribute("Laavor244",Laavor57);Laavor81.classList.add(Laavor57);Laavor81.setAttribute("textColorSelect",Laavor70);Laavor81.setAttribute("textColorDeselect",Laavor71);Laavor81.setAttribute("borderColorSelect",Laavor72);Laavor81.setAttribute("borderColorDeselect",Laavor73);Laavor81.setAttribute("backgroundColorSelect",Laavor78);Laavor81.setAttribute("backgroundColorDeselect",Laavor79);Laavor81.setAttribute("typeRating",Laavor82.toString());if(Laavor205!==undefined&&Laavor205!==null)
{Laavor81.setAttribute("commandEvent",Laavor205);}
if(Laavor56!==1&&Laavor80>0)
{for(var Laavor83=0;Laavor83<Laavor80;Laavor83++)
{var Laavor84=document.createElement("span");Laavor84.innerHTML="&nbsp";Laavor55.appendChild(Laavor84);}}
if(Laavor82==="Laavor249")
{Laavor81.innerHTML="&nbsp"+Laavor56.toString()+"&nbsp";}
else if(Laavor82==="Laavor250")
{Laavor81.innerHTML="&nbsp"+laavorGetLetter(Laavor56)+"&nbsp";}
if(Laavor56<=Laavor59)
{Laavor81.setAttribute("Laavor240",true);Laavor81.style.color=Laavor70;Laavor81.style.backgroundColor=Laavor78;Laavor81.style.borderColor=Laavor72;}
else
{Laavor81.setAttribute("Laavor240",false);Laavor81.style.color=Laavor71;Laavor81.style.backgroundColor=Laavor79;Laavor81.style.borderColor=Laavor73;}
if(Laavor60!==undefined&&Laavor60!==null)
{if(Laavor60.toString()==="true")
{if(Laavor61!==undefined&&Laavor61!==null)
{Laavor81.setAttribute("blockSelect",Laavor61);}}
else
{Laavor81.addEventListener("click",Laavor236);}
Laavor81.onmouseover=Laavor241;Laavor81.onmouseleave=Laavor242;}
else
{Laavor81.addEventListener("click",Laavor236);if(Laavor61!==undefined&&Laavor61!==null)
{Laavor81.setAttribute("blockSelect",Laavor61);}
Laavor81.onmouseover=Laavor241;Laavor81.onmouseleave=Laavor242;}
Laavor55.appendChild(Laavor81);}}}
function Laavor241(){if(this!==undefined&&this!==null)
{var Laavor85=this.getAttribute("NumberLV").Laavor247();var Laavor87=this.getAttribute("Laavor244");var Laavor90=document.getElementsByClassName(Laavor87);if(Laavor90.length>0)
{var Laavor91=Laavor90[0].getAttribute("textColorSelect");var Laavor93=Laavor90[0].getAttribute("borderColorSelect");var Laavor94=Laavor90[0].getAttribute("backgroundColorSelect");for(var Laavor100=0;Laavor100<Laavor85;Laavor100++)
{var Laavor102=Laavor90[Laavor100];var Laavor109=Laavor102.getAttribute("Laavor240");if(Laavor109!==undefined&&Laavor109!=null)
{if(Laavor109==="false")
{Laavor102.style.color=Laavor91;Laavor102.style.backgroundColor=Laavor94;Laavor102.style.borderColor=Laavor93;}}
else
{Laavor102.style.color=Laavor91;Laavor102.style.backgroundColor=Laavor94;Laavor102.style.borderColor=Laavor93;}}}}}
function Laavor242(){if(this!==undefined&&this!==null)
{var Laavor86=this.getAttribute("NumberLV").Laavor247();var Laavor88=this.getAttribute("Laavor244");var Laavor89=document.getElementsByClassName(Laavor88);if(Laavor89.length>0)
{var Laavor95=Laavor89[0].getAttribute("textColorDeselect");var Laavor96=Laavor89[0].getAttribute("borderColorDeselect");var Laavor104=Laavor89[0].getAttribute("backgroundColorDeselect");for(var Laavor101=0;Laavor101<Laavor86;Laavor101++)
{var Laavor103=Laavor89[Laavor101];var Laavor110=Laavor103.getAttribute("Laavor240");if(Laavor110!==undefined&&Laavor110!=null)
{if(Laavor110==="false")
{Laavor103.style.color=Laavor95;Laavor103.style.backgroundColor=Laavor104;Laavor103.style.borderColor=Laavor96;}}
else
{Laavor103.style.color=Laavor95;Laavor103.style.backgroundColor=Laavor104;Laavor103.style.borderColor=Laavor96;}}}}}
function Laavor246(Laavor97)
{"use strict";var Laavor98=Laavor245();Laavor97.setAttribute("Laavor243",Laavor98);if(Laavor97!==undefined&&Laavor97!==null)
{var Laavor99=Laavor97.getAttribute("firstImage");var Laavor114=Laavor97.getAttribute("secondImage");var Laavor116=Laavor97.getAttribute("firstImageWidth");var Laavor118=Laavor97.getAttribute("firstImageHeight");var Laavor120=Laavor97.getAttribute("secondImageWidth");var Laavor122=Laavor97.getAttribute("secondImageHeight");var Laavor124=Laavor97.getAttribute("blockSwap");var Laavor198=Laavor97.getAttribute("commandEvent");var Laavor113=document.createElement("img");Laavor113.setAttribute("firstImage",Laavor99);Laavor113.setAttribute("secondImage",Laavor114);Laavor113.setAttribute("blockSwap",Laavor124);Laavor113.setAttribute("isFirstImage",true);Laavor113.style.cursor="pointer";if(Laavor198!==undefined&&Laavor198!==null)
{Laavor113.setAttribute("commandEvent",Laavor198);}
if(Laavor116!==undefined&&Laavor116!==null)
{Laavor113.setAttribute("firstImageWidth",Laavor116);}
if(Laavor118!==undefined&&Laavor118!==null)
{Laavor113.setAttribute("firstImageHeight",Laavor118);}
if(Laavor120!==undefined&&Laavor120!==null)
{Laavor113.setAttribute("secondImageWidth",Laavor120);}
if(Laavor122!==undefined&&Laavor122!==null)
{Laavor113.setAttribute("secondImageHeight",Laavor122);}
Laavor113.setAttribute("Name",Laavor98);Laavor113.setAttribute("Laavor243",Laavor98);Laavor113.style.width=Laavor116;Laavor113.style.height=Laavor118;Laavor113.src=Laavor99;Laavor113.addEventListener("click",Laavor170);Laavor97.appendChild(Laavor113);}}
function laavorLabelSwapInitAll(Laavor107)
{"use strict";var Laavor131=Laavor245();Laavor107.setAttribute("Laavor243",Laavor131);if(Laavor107!==undefined&&Laavor107!==null)
{var Laavor130=Laavor107.getAttribute("firstText");var Laavor132=Laavor107.getAttribute("secondText");var Laavor133=Laavor107.getAttribute("firstFontSize");var Laavor135=Laavor107.getAttribute("secondFontSize");var Laavor137=Laavor107.getAttribute("border");var Laavor138=Laavor107.getAttribute("borderRadius");var Laavor139=Laavor107.getAttribute("firstTextColor");var Laavor140=Laavor107.getAttribute("secondTextColor");var Laavor141=Laavor107.getAttribute("firstBorderColor");var Laavor142=Laavor107.getAttribute("secondBorderColor");var Laavor143=Laavor107.getAttribute("firstBackgroundColor");var Laavor145=Laavor107.getAttribute("secondBackgroundColor");var Laavor125=Laavor107.getAttribute("blockSwap");var Laavor199=Laavor107.getAttribute("commandEvent");var Laavor108=document.createElement("span");Laavor108.setAttribute("firstText",Laavor130);Laavor108.setAttribute("secondText",Laavor132);Laavor108.setAttribute("blockSwap",Laavor125);Laavor108.setAttribute("isFirstText",true);Laavor108.style.cursor="pointer";Laavor108.style.borderStyle=Laavor239("borderStyle");if(Laavor199!==undefined&&Laavor199!==null)
{Laavor108.setAttribute("commandEvent",Laavor199);}
if(Laavor133===undefined||Laavor133===null||Laavor133==="")
{Laavor133=Laavor239("fontSize");}
Laavor108.style.fontSize=Laavor133;if(Laavor135===undefined||Laavor135===null||Laavor135==="")
{Laavor135=Laavor239("fontSize");}
if(Laavor137===undefined||Laavor137===null||Laavor137==="")
{Laavor137=Laavor239("border");}
Laavor108.style.border=Laavor137;if(Laavor138===undefined||Laavor138===null||Laavor138==="")
{Laavor138=Laavor239("borderRadius");}
Laavor108.style.borderRadius=Laavor138;if(Laavor139===undefined||Laavor139===null||Laavor139==="")
{Laavor139=Laavor239("firstTextColor");}
if(Laavor140===undefined||Laavor140===null||Laavor140==="")
{Laavor140=Laavor239("secondTextColor");}
if(Laavor143===undefined||Laavor143===null||Laavor143==="")
{Laavor143=Laavor239("firstBackgroundColor");}
if(Laavor145===undefined||Laavor145===null||Laavor145==="")
{Laavor145=Laavor239("secondBackgroundColor");}
if(Laavor141===undefined||Laavor141===null||Laavor141==="")
{Laavor141=Laavor239("firstBorderColor");}
if(Laavor142===undefined||Laavor142===null||Laavor142==="")
{Laavor142=Laavor239("secondBorderColor");}
if(Laavor133!==undefined&&Laavor133!==null&&Laavor133!=="")
{Laavor108.setAttribute("firstFontSize",Laavor133);}
Laavor108.style.fontSize=Laavor133;if(Laavor135!==undefined&&Laavor135!==null&&Laavor135!=="")
{Laavor108.setAttribute("secondFontSize",Laavor135);}
if(Laavor138!==undefined&&Laavor138!==null&&Laavor138!=="")
{Laavor108.setAttribute("borderRadius",Laavor138);}
Laavor108.style.borderRadius=Laavor138;if(Laavor139!==undefined&&Laavor139!==null&&Laavor139!=="")
{Laavor108.setAttribute("firstTextColor",Laavor139);}
Laavor108.style.color=Laavor139;if(Laavor140!==undefined&&Laavor140!==null&&Laavor140!=="")
{Laavor108.setAttribute("secondTextColor",Laavor140);}
if(Laavor141!==undefined&&Laavor141!==null&&Laavor141!=="")
{Laavor108.setAttribute("firstBorderColor",Laavor141);}
Laavor108.style.borderColor=Laavor141;if(Laavor142!==undefined&&Laavor142!==null&&Laavor142!=="")
{Laavor108.setAttribute("secondBorderColor",Laavor142);}
if(Laavor143!==undefined&&Laavor143!==null&&Laavor143!=="")
{Laavor108.setAttribute("firstBackgroundColor",Laavor143);}
Laavor108.style.backgroundColor=Laavor143;if(Laavor145!==undefined&&Laavor145!==null&&Laavor145!=="")
{Laavor108.setAttribute("secondBackgroundColor",Laavor145);}
Laavor108.setAttribute("Name",Laavor131);Laavor108.setAttribute("Laavor243",Laavor131);Laavor108.innerHTML=Laavor130;Laavor108.addEventListener("click",Laavor147);Laavor107.appendChild(Laavor108);}}
function Laavor239(Laavor188)
{var valuesD={};valuesD["fontSize"]="20px";valuesD["textColorSelect"]="#daa520";valuesD["textColorDeselect"]="#b4b4b4";valuesD["backgroundColorSelect"]="";valuesD["backgroundColorDeselect"]="";valuesD["borderColorSelect"]="";valuesD["borderColorDeselect"]="";valuesD["firstTextColor"]="#b4b4b4";valuesD["secondTextColor"]="#daa520";valuesD["backgroundColorFirst"]="";valuesD["backgroundColorSecond"]="";valuesD["firstBorderColor"]="";valuesD["secondBorderColor"]="";valuesD["borderRadius"]="5px";valuesD["border"]="1px";valuesD["spaceBetween"]="2";valuesD["spaceBetweenImage"]="0";valuesD["borderStyle"]="solid";valuesD["borderColor"]="";var Laavor152=valuesD[Laavor188];if(Laavor152!==undefined&&Laavor152!==null)
{return Laavor152;}
else
{return"";}}
function laavorRatingGetValue(Laavor153)
{"use strict";var Laavor150=document.getElementById(Laavor153);var Laavor42=Laavor150.getAttribute("Laavor243");if(Laavor150!==undefined&&Laavor150!==null)
{var Laavor156=0;for(var Laavor155=0;Laavor155<Laavor150.children.length;Laavor155++)
{var element=Laavor150.children[Laavor155];var Laavor159=element.getAttribute("Laavor243");if(Laavor159!==undefined&&Laavor159!==null)
{if(Laavor159===Laavor42)
{var Laavor111=element.getAttribute("Laavor240");if(Laavor111==="true")
{Laavor156++;}}}}
return Laavor156;}
return"error";}
function laavorRatingLetterGetValue(Laavor64)
{"use strict";var Laavor151=document.getElementById(Laavor64);var Laavor43=Laavor151.getAttribute("Laavor243");if(Laavor151!==undefined&&Laavor151!==null)
{var Laavor157=0;for(var Laavor154=0;Laavor154<Laavor151.children.length;Laavor154++)
{var element=Laavor151.children[Laavor154];var Laavor158=element.getAttribute("Laavor243");if(Laavor158!==undefined&&Laavor158!==null)
{if(Laavor158===Laavor43)
{var Laavor112=element.getAttribute("Laavor240");if(Laavor112==="true")
{Laavor157++;}}}}
return laavorGetLetter(Laavor157);}
return"error";}
String.prototype.Laavor247=function()
{"use strict";var Laavor160=parseInt(this);return Laavor160;};String.prototype.laavorToDouble=function()
{"use strict";var Laavor161=parseFloat(this);return Laavor161;};String.prototype.laavorContains=function(Laavor163)
{"use strict";var Laavor162=this.indexOf(Laavor163)!==-1;return Laavor162;};String.prototype.laavorReplaceAll=function(Laavor164,Laavor165)
{"use strict";var Laavor166=this;return Laavor166.split(Laavor164).join(Laavor165);};function Laavor245(Laavor167){"use strict";var Laavor182="";var Laavor183="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var Laavor206=0;Laavor206<15;Laavor206++)
Laavor182+=Laavor183.charAt(Math.floor(Math.random()*Laavor183.length));if(Laavor167!==undefined&&Laavor167!==null)
{Laavor182+="_"+Laavor167;}
return Laavor182;}
function laavorGetLetter(Laavor192){"use strict";var Laavor184="-ABCDEFGHIJKLMNOPQRSTUVWXYZ";return Laavor184[Laavor192];}
function Laavor170(event)
{"use strict";var Laavor127=event.currentTarget;var Laavor168=Laavor127.getAttribute("firstImage");var Laavor115=Laavor127.getAttribute("secondImage");var Laavor117=Laavor127.getAttribute("firstImageWidth");var Laavor119=Laavor127.getAttribute("firstImageHeight");var Laavor121=Laavor127.getAttribute("secondImageWidth");var Laavor123=Laavor127.getAttribute("secondImageHeight");var Laavor169=Laavor127.getAttribute("isFirstImage").toString();var Laavor126=Laavor127.getAttribute("blockSwap").toString();var Laavor200=Laavor127.getAttribute("commandEvent");var Laavor171="";var Laavor185="";if(Laavor168!==undefined&&Laavor168!==null&&Laavor115!==undefined&&Laavor115!==null)
{if(Laavor169==="true")
{Laavor127.src=Laavor115;Laavor171=Laavor115;Laavor185="second";if(Laavor121!==undefined&&Laavor121!==null)
{Laavor127.style.width=Laavor121;}
if(Laavor123!==undefined&&Laavor123!==null)
{Laavor127.style.height=Laavor123;}
Laavor127.setAttribute("isFirstImage",false);if(Laavor126!==undefined&&Laavor126!==null)
{if(Laavor126.toString()==="true")
{Laavor127.removeEventListener("click",Laavor170);Laavor127.removeAttribute("blockSwap");}}}
else if(Laavor169==="false")
{Laavor127.src=Laavor168;Laavor171=Laavor168;Laavor185="first";if(Laavor117!==undefined&&Laavor117!==null)
{Laavor127.style.width=Laavor117;}
if(Laavor119!==undefined&&Laavor119!==null)
{Laavor127.style.height=Laavor119;}
Laavor127.setAttribute("isFirstImage",true);if(Laavor126!==undefined&&Laavor126!==null)
{if(Laavor126.toString()==="true")
{Laavor127.removeEventListener("click",Laavor170);Laavor127.removeAttribute("blockSwap");}}}}
if(Laavor200!==undefined&&Laavor200!==null)
{try
{window[Laavor200](Laavor171,Laavor185);}
catch(errorLaavor)
{try
{window[Laavor200](errorLaavor);}
catch(errorLaavorI)
{}}}}
function Laavor147(event)
{"use strict";var Laavor128=event.currentTarget;var Laavor129=Laavor128.getAttribute("firstText");var Laavor144=Laavor128.getAttribute("isFirstText");var Laavor146=Laavor128.getAttribute("secondText");var Laavor134=Laavor128.getAttribute("firstFontSize");var Laavor136=Laavor128.getAttribute("secondFontSize");var Laavor148=Laavor128.getAttribute("firstTextColor");var Laavor149=Laavor128.getAttribute("secondTextColor");var Laavor187=Laavor128.getAttribute("firstBorderColor");var Laavor189=Laavor128.getAttribute("secondBorderColor");var Laavor190=Laavor128.getAttribute("firstBackgroundColor");var Laavor191=Laavor128.getAttribute("secondBackgroundColor");var Laavor193=Laavor128.getAttribute("blockSwap");var Laavor201=Laavor128.getAttribute("commandEvent");var Laavor194="";var Laavor186="";if(Laavor129!==undefined&&Laavor129!==null&&Laavor146!==undefined&&Laavor146!==null)
{if(Laavor144==="true")
{Laavor128.innerHTML=Laavor146;Laavor194=Laavor146;Laavor186="second";if(Laavor136!==undefined&&Laavor136!==null)
{Laavor128.style.fontSize=Laavor136;}
if(Laavor149!==undefined&&Laavor149!==null)
{Laavor128.style.color=Laavor149;}
if(Laavor191!==undefined&&Laavor191!==null)
{Laavor128.style.backgroundColor=Laavor191;}
if(Laavor189!==undefined&&Laavor189!==null)
{Laavor128.style.borderColor=Laavor189;}
Laavor128.setAttribute("isFirstText",false);if(Laavor193!==undefined&&Laavor193!==null)
{if(Laavor193.toString()==="true")
{Laavor128.removeEventListener("click",Laavor147);Laavor128.removeAttribute("blockSwap");}}}
else if(Laavor144==="false")
{Laavor128.innerHTML=Laavor129;Laavor194=Laavor129;Laavor186="first";if(Laavor134!==undefined&&Laavor134!==null)
{Laavor128.style.fontSize=Laavor134;}
if(Laavor148!==undefined&&Laavor148!==null)
{Laavor128.style.color=Laavor148;}
if(Laavor190!==undefined&&Laavor190!==null)
{Laavor128.style.backgroundColor=Laavor190;}
if(Laavor187!==undefined&&Laavor187!==null)
{Laavor128.style.borderColor=Laavor187;}
Laavor128.setAttribute("isFirstText",true);if(Laavor193!==undefined&&Laavor193!==null)
{if(Laavor193.toString()==="true")
{Laavor128.removeEventListener("click",Laavor147);Laavor128.removeAttribute("blockSwap");}}}}
if(Laavor201!==undefined&&Laavor201!==null)
{try
{window[Laavor201](Laavor194,Laavor186);}
catch(errorLaavor)
{try
{window[Laavor201](errorLaavor);}
catch(errorLaavorI)
{}}}}
function Laavor231(event)
{"use strict";var Laavor173=event.currentTarget;var Laavor174=Laavor173.getAttribute("Laavor240").toString();var Laavor178=Laavor173.getAttribute("Laavor243");var Laavor179=Laavor173.getAttribute("NumberLV");var Laavor195=Laavor173.getAttribute("blockSelect");var Laavor196=Laavor173.getAttribute("isReadOnly");var Laavor202=Laavor173.getAttribute("commandEvent");var Laavor207=document.getElementsByName(Laavor178);var Laavor208="false";if(Laavor207!==undefined&&Laavor207!==null&&Laavor207.length>0)
{for(var Laavor230=1;Laavor230<=Laavor207.length;Laavor230++)
{var Laavor172=Laavor207[Laavor230-1];var Laavor211=Laavor172.getAttribute("NumberLV");if(Laavor174==="false")
{if(Laavor211.Laavor247()<=Laavor179)
{Laavor172.setAttribute("Laavor240",true);Laavor172.src=Laavor172.getAttribute("imageSelect");}}
else
{if(Laavor211.Laavor247()>=Laavor179)
{Laavor172.setAttribute("Laavor240",false);Laavor172.src=Laavor172.getAttribute("imageDeselect");}
Laavor208="true";}
if(Laavor196!==undefined&&Laavor196!==null)
{if(Laavor196.toString()==="false")
{if(Laavor195!==undefined&&Laavor195!==null)
{if(Laavor195.toString()==="true")
{Laavor172.removeEventListener("click",Laavor231);Laavor172.removeAttribute("blockSelect");Laavor172.onmouseover=null;Laavor172.onmouseleave=null;}}}}
else
{if(Laavor195!==undefined&&Laavor195!==null)
{if(Laavor195.toString()==="true")
{Laavor172.removeEventListener("click",Laavor231);Laavor172.removeAttribute("blockSelect");Laavor172.onmouseover=null;Laavor172.onmouseleave=null}}}}}
if(Laavor202!==undefined&&Laavor202!==null)
{try
{if(Laavor208==="false")
{window[Laavor202](Laavor179);}
else
{var Laavor219=Laavor179.Laavor247()-1;window[Laavor202](Laavor219);}}
catch(errorLaavor)
{try
{window[Laavor202](errorLaavor);}
catch(errorLaavorI)
{}}}}
function Laavor236(event)
{"use strict";var Laavor176=event.currentTarget;var Laavor175=Laavor176.getAttribute("Laavor240").toString();var Laavor177=Laavor176.getAttribute("Laavor243");var Laavor180=Laavor176.getAttribute("NumberLV");var Laavor181=Laavor176.getAttribute("blockSelect");var Laavor197=Laavor176.getAttribute("isReadOnly");var Laavor92=Laavor176.getAttribute("textColorSelect");var Laavor210=Laavor176.getAttribute("textColorDeselect");var Laavor212=Laavor176.getAttribute("borderColorSelect");var Laavor213=Laavor176.getAttribute("borderColorDeselect");var Laavor214=Laavor176.getAttribute("backgroundColorSelect");var Laavor215=Laavor176.getAttribute("backgroundColorDeselect");var Laavor218=Laavor176.getAttribute("typeRating");var Laavor203=Laavor176.getAttribute("commandEvent");var Laavor216=document.getElementsByName(Laavor177);var Laavor209="false";if(Laavor216!==undefined&&Laavor216!==null&&Laavor216.length>0)
{for(var Laavor217=1;Laavor217<=Laavor216.length;Laavor217++)
{var Laavor229=Laavor216[Laavor217-1];var Laavor232=Laavor229.getAttribute("NumberLV");if(Laavor175==="false")
{if(Laavor232.Laavor247()<=Laavor180)
{Laavor229.setAttribute("Laavor240",true);if(Laavor92!==undefined&&Laavor92!==null)
{Laavor229.style.color=Laavor92;}
if(Laavor214!==undefined&&Laavor214!==null)
{Laavor229.style.backgroundColor=Laavor214;}
if(Laavor212!==undefined&&Laavor212!==null)
{Laavor229.style.borderColor=Laavor212;}}}
else
{if(Laavor232.Laavor247()>=Laavor180)
{Laavor229.setAttribute("Laavor240",false);if(Laavor210!==undefined&&Laavor210!==null)
{Laavor229.style.color=Laavor210;}
if(Laavor215!==undefined&&Laavor215!==null)
{Laavor229.style.backgroundColor=Laavor215;}
if(Laavor213!==undefined&&Laavor213!==null)
{Laavor229.style.borderColor=Laavor213;}
Laavor209="true";}}
if(Laavor197!==undefined&&Laavor197!==null)
{if(Laavor197.toString()==="false")
{if(Laavor181!==undefined&&Laavor181!==null)
{if(Laavor181.toString()==="true")
{Laavor229.removeEventListener("click",Laavor236);Laavor229.onmouseover=null;Laavor229.onmouseleave=null;Laavor229.removeAttribute("blockSelect");}}}}
else
{if(Laavor181!==undefined&&Laavor181!==null)
{if(Laavor181.toString()==="true")
{Laavor229.removeEventListener("click",Laavor236);Laavor229.onmouseover=null;Laavor229.onmouseleave=null;Laavor229.removeAttribute("blockSelect");}}}}}
if(Laavor203!==undefined&&Laavor203!==null)
{try
{var Laavor220=Laavor180;if(Laavor209==="true")
{Laavor220=Laavor180.Laavor247()-1;}
if(Laavor218==="Laavor249")
{window[Laavor203](Laavor220.toString());}
else if(Laavor218==="Laavor250")
{window[Laavor203](laavorGetLetter(Laavor220.toString()));}}
catch(errorLaavor)
{try
{window[Laavor203](errorLaavor);}
catch(errorLaavorI)
{}}}}