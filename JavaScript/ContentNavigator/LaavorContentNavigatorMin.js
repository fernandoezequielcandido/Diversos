var lvCN01;var lvCN02;function LaavorContentNavigator(lvCN03,lvCN04){var lvCN05=document.getElementById(lvCN03);var lvCN06=lvCN28();if(lvCN05!==undefined&&lvCN05!==null){if(lvCN02===undefined||lvCN02===null)
{lvCN02=[];}
if(lvCN04!==undefined&&lvCN04!==null){lvCN02[lvCN03]=lvCN04;}
else{lvCN02[lvCN03]=lvCN28();}
var lvCN07;if(lvCN04.elementItemHtml!==undefined&&lvCN04.elementItemHtml!==null){lvCN07=lvCN04.elementItemHtml;}else{lvCN07=lvCN06.elementItemHtml;}
var lvCN08=lvCN05.getElementsByTagName(lvCN07);if(lvCN08!==undefined&&lvCN08!==null){for(var lvCN09=0;lvCN09<lvCN08.length;lvCN09++){lvCN08[lvCN09].style.display="none";}
var lvCN11=[];for(var lvCN10=0;lvCN10<lvCN08.length;lvCN10++){lvCN11.push(lvCN08[lvCN10].cloneNode(true));}
lvCN01=lvCN11;lvCN12(lvCN03);}else{throw new Error("The elementItemHtml 'children' was not found inside the parent.");}}else{throw new Error("Item with idFather informed was not found.");}}
function lvCN12(lvCN03){var lvCN13=document.getElementById(lvCN03);lvCN51(lvCN02[lvCN03]);var lvCN14=lvCN02[lvCN03];var lvCN15=document.createElement("table");var lvCN16=document.createElement("tr");var lvCN17=document.createElement("td");var lvCN18=document.createElement("td");var lvCN19=document.createElement("td");var lvCN20=document.createElement("div");var lvCN21=document.createElement("span");var lvCN22=document.createElement("span");var lvCN23;var lvCN24=document.createElement("span");var lvCN25=document.createElement("span");var lvCN27;var lvCN26=lvCN30(lvCN03);lvCN20.innerHTML=lvCN01[0].innerHTML;lvCN20.id=lvCN26;lvCN20.style.width=lvCN14.widthContent.toString().replace("px","")+"px";lvCN20.style.heigth=lvCN14.heigth.toString().replace("px","")+"px";if(lvCN02[lvCN03].useContentBorder.toString()==="true")
{lvCN20.style.border="solid 1px";lvCN20.style.borderColor=lvCN14.borderColorContent;}
if(lvCN02[lvCN03].useExternalBorder.toString()==="true")
{lvCN13.style.border="solid 1px";lvCN13.style.borderColor=lvCN14.borderColorExternal;}
if(lvCN02[lvCN03].backgroundColorContent!=="none")
{lvCN20.style.backgroundColor=lvCN14.backgroundColorContent;}
if(lvCN02[lvCN03].backgroundColorExternal!=="none")
{lvCN13.style.backgroundColor=lvCN14.backgroundColorExternal;}
if(lvCN14.imageArrowPrevious!=="none"&&lvCN14.imageArrowNext!=="none"){lvCN23=document.createElement("img");lvCN23.src=lvCN14.imageArrowPrevious;lvCN23.style.width=lvCN14.imageArrowWidth.replace("px","")+"px";lvCN23.style.height=lvCN14.imageArrowHeight.replace("px","")+"px";lvCN23.style.title=lvCN14.imageArrowPreviousTitle;lvCN23.setAttribute("lvCN53",-1);lvCN23.setAttribute("lvCN54",lvCN26);lvCN23.id=lvCN26+"_"+"lvCN55";lvCN23.style.verticalAlign="center";lvCN23.style.cursor="default";lvCN23.style.opacity=0.2;lvCN23.onclick=lvCN29;lvCN17.appendChild(lvCN23);lvCN18.appendChild(lvCN20);lvCN27=document.createElement("img");lvCN27.src=lvCN14.imageArrowNext;lvCN27.style.width=lvCN14.imageArrowWidth.replace("px","")+"px";lvCN27.style.height=lvCN14.imageArrowHeight.replace("px","")+"px";lvCN27.style.title=lvCN14.imageArrowNextTitle;lvCN27.setAttribute("lvCN53",1);lvCN27.setAttribute("lvCN54",lvCN26);lvCN27.id=lvCN26+"_"+"lvCN56";lvCN27.style.verticalAlign="center";lvCN27.style.cursor="pointer";lvCN27.onclick=lvCN46;lvCN19.appendChild(lvCN27);}
else if(lvCN14.imageArrowPrevious!=="none"&&lvCN14.imageArrowNext==="none")
{throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");}
else if(lvCN14.imageArrowPrevious==="none"&&lvCN14.imageArrowNext!=="none")
{throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");}
else{throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");}
lvCN15.appendChild(lvCN16);lvCN16.appendChild(lvCN17);lvCN16.appendChild(lvCN18);lvCN16.appendChild(lvCN19);lvCN15.style.verticalAlign="center";lvCN13.appendChild(lvCN15);lvCN13.style.width=lvCN14.widthExternal.toString().replace("px","")+"px";lvCN13.style.heigth=lvCN14.heigth.toString().replace("px","")+"px";}
function lvCN30(lvCN38){"use strict";var lvCN39="";var lvCN47="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<15;i++)
lvCN39+=lvCN47.charAt(Math.floor(Math.random()*lvCN47.length));if(lvCN38!==undefined&&lvCN38!==null)
{lvCN39+="_"+lvCN38;}
return lvCN39;}
String.prototype.lvCN52=function()
{"use strict";var lvCN57=parseInt(this);return lvCN57;};function LaavorMoveToPrevious(){lvCN29();}
function LaavorMoveToNext(){lvCN46();}
function lvCN29(){if(lvCN01!==undefined&&lvCN01!==null)
{var lvCN31=this.getAttribute("lvCN54");var lvCN32=this.getAttribute("lvCN53").toString().lvCN52();if(lvCN32!==-1)
{var lvCN33=document.getElementById(lvCN31);lvCN33.innerHTML="";lvCN33.innerHTML=lvCN01[lvCN32].innerHTML;var lvCN34=lvCN32-1;this.setAttribute("lvCN53",lvCN34);var lvCN35=document.getElementById(lvCN31+"_"+"lvCN56");var lvCN36=lvCN35.getAttribute("lvCN53").toString().lvCN52();lvCN36=lvCN36-1;lvCN35.setAttribute("lvCN53",lvCN36);if(lvCN34===-1)
{this.style.opacity=0.2;this.style.cursor="default";}
else
{this.style.opacity=1.0;this.style.cursor="pointer";}
if(lvCN36===lvCN01.length)
{lvCN35.style.opacity=0.2;lvCN35.style.cursor="default";}
else
{lvCN35.style.opacity=1.0;lvCN35.style.cursor="pointer";}}}}
function lvCN46(){if(lvCN01!==undefined&&lvCN01!==null)
{var lvCN31=this.getAttribute("lvCN54");var lvCN40=this.getAttribute("lvCN53").toString().lvCN52();if(lvCN40<lvCN01.length)
{var lvCN41=document.getElementById(lvCN31);lvCN41.innerHTML="";lvCN41.innerHTML=lvCN01[lvCN40].innerHTML;var lvCN43=lvCN40+1;this.setAttribute("lvCN53",lvCN43);var lvCN44=document.getElementById(lvCN31+"_"+"lvCN55");var lvCN45=lvCN44.getAttribute("lvCN53").toString().lvCN52();lvCN45=lvCN45+1;lvCN44.setAttribute("lvCN53",lvCN45);if(lvCN43===lvCN01.length)
{this.style.opacity=0.2;this.style.cursor="default";}
else
{this.style.opacity=1.0;this.style.cursor="pointer";}
if(lvCN45===-1)
{lvCN44.style.opacity=0.2;lvCN44.style.cursor="default";}
else
{lvCN44.style.opacity=1.0;lvCN44.style.cursor="pointer";}}}}
function lvCN51(lvCN04){var lvCN50=lvCN28();if(lvCN04.backgroundColorContent===undefined||lvCN04.backgroundColorContent===null){lvCN04.backgroundColorContent=lvCN50.backgroundColorContent;}
if(lvCN04.backgroundColorExternal===undefined||lvCN04.backgroundColorExternal===null){lvCN04.backgroundColorExternal=lvCN50.backgroundColorExternal;}
if(lvCN04.borderColorContent===undefined||lvCN04.borderColorContent===null){lvCN04.borderColorContent=lvCN50.borderColorContent;}
if(lvCN04.imageArrowPrevious===undefined||lvCN04.imageArrowPrevious===null){lvCN04.imageArrowPrevious=lvCN50.imageArrowPrevious;}
if(lvCN04.imageArrowNext===undefined||lvCN04.imageArrowNext===null){lvCN04.imageArrowNext=lvCN50.imageArrowNext;}
if(lvCN04.imageArrowWidth===undefined||lvCN04.imageArrowWidth===null){lvCN04.imageArrowWidth=lvCN50.imageArrowWidth;}
if(lvCN04.imageArrowHeight===undefined||lvCN04.imageArrowHeight===null){lvCN04.imageArrowHeight=lvCN50.imageArrowHeight;}
if(lvCN04.elementItemHtml===undefined||lvCN04.elementItemHtml===null){lvCN04.elementItemHtml=lvCN50.elementItemHtml;}
if(lvCN04.useExternalBorder===undefined||lvCN04.useExternalBorder===null){lvCN04.useExternalBorder=lvCN50.useExternalBorder;}
if(lvCN04.useContentBorder===undefined||lvCN04.useContentBorder===null){lvCN04.useContentBorder=lvCN50.useContentBorder;}
if(lvCN04.borderColorExternal===undefined||lvCN04.borderColorExternal===null){lvCN04.borderColorExternal=lvCN50.borderColorExternal;}
if(lvCN04.borderColorContent===undefined||lvCN04.borderColorContent===null){lvCN04.borderColorContent=lvCN50.borderColorContent;}
if(lvCN04.widthContent===undefined||lvCN04.widthContent===null){lvCN04.widthContent=lvCN50.widthContent;}
if(lvCN04.widthExternal===undefined||lvCN04.widthExternal===null){lvCN04.widthExternal=lvCN50.widthExternal;}
if(lvCN04.heigth===undefined||lvCN04.heigth===null){lvCN04.heigth=lvCN50.heigth;}}
function lvCN28(){return{imageArrowPrevious:"images/previous.png",imageArrowNext:"images/next.png",imageArrowPreviousTitle:"Previous",imageArrowNextTitle:"Next",imageArrowWidth:"44px",imageArrowHeight:"40px",elementItemHtml:'span',useExternalBorder:true,useContentBorder:true,borderColorExternal:"DeepSkyBlue",borderColorContent:"DeepSkyBlue",backgroundColorContent:"none",backgroundColorExternal:"none",widthContent:"800px",widthExternal:"915px",heigth:"350px"};}