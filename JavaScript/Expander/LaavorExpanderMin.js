var lvExp1;var lvExp2;var lvExp3;function LaavorExpander(lvExp4,lvExp5){lvExp1=[];if(lvExp2===undefined||lvExp2===null)
{lvExp2=[];}
lvExp2.push(lvExp4);if(lvExp3===undefined||lvExp3===null)
{lvExp3=[];}
if(lvExp5!==undefined&&lvExp5!==null){lvExp3[lvExp4]=lvExp5;}
else{lvExp3[lvExp4]=lvExp9()}}
window.addEventListener('load',function(){var lvExp6=lvExp2.length;for(var lvExp7=0;lvExp7<lvExp6;lvExp7++)
{lvExp8(lvExp2[lvExp7]);}});function lvExp8(lvExp10){var lvExp11=document.getElementById(lvExp10);if(lvExp11!==undefined&&lvExp11!==null){var lvExp12=lvExp11.children;lvExp13(lvExp3[lvExp10]);var lvExp14=lvExp3[lvExp10];var lvExp15=elemSpace=document.createElement("span");var lvExp16=elemSpace=document.createElement("span");var lvExp17;if(lvExp14.imageArrowExpanded!=="none"&&lvExp14.imageArrowClosed!=="none")
{lvExp17=document.createElement("img");if(lvExp14.startExpanded.toString()==="true"){lvExp17.src=lvExp14.imageArrowExpanded;}
else{lvExp17.src=lvExp14.imageArrowClosed;}
lvExp17.style.width=lvExp14.imageArrowWidth.replace("px","")+"px";lvExp17.style.height=lvExp14.imageArrowHeight.replace("px","")+"px";lvExp17.style.verticalAlign="baseline";lvExp15.innerHTML="&nbsp&nbsp&nbsp";lvExp16.innerHTML="&nbsp&nbsp&nbsp";}
else if((lvExp14.imageArrowExpanded!=="none"&&lvExp14.imageArrowClosed==="none")||(lvExp14.imageArrowExpanded==="none"&&lvExp14.imageArrowClosed!=="none")){throw new Error("When used imageArrowExpanded it is also necessary to use the imageArrowClosed property or vice versa, or leave empty.");}
else{lvExp17=document.createElement("span");lvExp17.innerHTML="";lvExp15.innerHTML="";lvExp16.innerHTML="";}
try
{var lvExp18=document.createElement("span");lvExp18.innerHTML=lvExp12[0].innerHTML;lvExp12[0].innerHTML="";lvExp12[0].appendChild(lvExp16);lvExp12[0].appendChild(lvExp17);lvExp12[0].appendChild(lvExp15);lvExp12[0].appendChild(lvExp18);}
catch(e){throw new Error("Error while mounting title, if necessary contact Laavor support.");}
try{var lvExp19=lvExp51(lvExp12[1]);var lvExp20={lvExp21:lvExp12[0],lvExp22:lvExp17,lvExp23:lvExp12[1],lvExp24:lvExp19};lvExp12[1].style.display='none';lvExp1[lvExp10]=lvExp20;lvExp20.lvExp21.setAttribute("lvExp55",lvExp10);lvExp20.lvExp21.onclick=lvExp56;lvExp20.lvExp21.setAttribute("lvExp51",false);lvExp20.lvExp21.style.backgroundColor=lvExp14.backgroundColorTitle;lvExp20.lvExp21.style.border="solid 1px";lvExp20.lvExp21.style.borderColor=lvExp14.borderColorTitle;lvExp20.lvExp21.style.color=lvExp14.textColorTitle;lvExp20.lvExp21.style.fontSize=lvExp14.fontSizeTitle.replace("em","")+'em';lvExp20.lvExp23.style.border="solid 1px";lvExp20.lvExp23.style.borderColor=lvExp14.borderColorContent;lvExp20.lvExp21.style.cursor="pointer";lvExp20.lvExp21.style.marginBottom="0px";lvExp20.lvExp23.style.marginBottom="0px";lvExp20.lvExp21.style.marginTop="0px";lvExp20.lvExp23.style.marginTop="0x";if(lvExp14.startExpanded.toString()==="true"){lvExp1[lvExp10].lvExp21.setAttribute("lvExp51",true);lvExp25(lvExp1[lvExp10]);}}
catch(e){throw new Error("The Title and Content order can not be interrupted, if necessary contact Laavor support.");}}
else{throw new Error("Item with idFather informed was not found.");}}
function lvExp13(lvExp29){var lvExp30=lvExp9();if(lvExp29.startExpanded===undefined||lvExp29.startExpanded===null){lvExp29.startExpanded=lvExp30.startExpanded;}
if(lvExp29.backgroundColorTitle===undefined||lvExp29.backgroundColorTitle===null){lvExp29.backgroundColorTitle=lvExp30.backgroundColorTitle;}
if(lvExp29.borderColorTitle===undefined||lvExp29.borderColorTitle===null){lvExp29.borderColorTitle=lvExp30.borderColorTitle;}
if(lvExp29.textColorTitle===undefined||lvExp29.textColorTitle===null){lvExp29.textColorTitle=lvExp30.textColorTitle;}
if(lvExp29.fontSizeTitle===undefined||lvExp29.fontSizeTitle===null){lvExp29.fontSizeTitle=lvExp30.fontSizeTitle;}
if(lvExp29.borderColorContent===undefined||lvExp29.borderColorContent===null){lvExp29.borderColorContent=lvExp30.borderColorContent;}
if(lvExp29.imageArrowExpanded===undefined||lvExp29.imageArrowExpanded===null){lvExp29.imageArrowExpanded=lvExp30.imageArrowExpanded;}
if(lvExp29.imageArrowClosed===undefined||lvExp29.imageArrowClosed===null){lvExp29.imageArrowClosed=lvExp30.imageArrowClosed;}
if(lvExp29.imageArrowWidth===undefined||lvExp29.imageArrowWidth===null){lvExp29.imageArrowWidth=lvExp30.imageArrowWidth;}
if(lvExp29.imageArrowHeight===undefined||lvExp29.imageArrowHeight===null){lvExp29.imageArrowHeight=lvExp30.imageArrowHeight;}}
function lvExp56(){try{var lvExp31=this.getAttribute("lvExp51");var lvExp32=this.getAttribute("lvExp55");var lvExp35=lvExp1[lvExp32];if(lvExp35!==undefined&&lvExp35!==null){if(lvExp31.toString()==='true'){lvExp36(lvExp35);}
else{lvExp25(lvExp35);}}
else{throw new Error("Error in count inside Expander(Click) contact Laavor.com with example.");}}
catch(e){throw new Error("Error in count inside Expander(Click) contact Laavor.com with example.");}}
String.prototype.lvExp46=function(){"use strict";var lvExp47=parseInt(this);return lvExp47;};function lvExp51(lvExp45){if(lvExp45.clientHeight!==undefined&&lvExp45.clientHeight!==null){return lvExp45.clientHeight.toString().lvExp46();}
if(lvExp45.height!==undefined&&lvExp45.style.height!==null){return lvExp45.height.toString().lvExp46();}
if(lvExp45.offsetHeight!==undefined&&lvExp45.offsetHeight!==null){return lvExp45.offsetHeight.toString().lvExp46()-2;}
else{throw new Error("Error in count inside Expander(Height Item) contact Laavor.com with example.");}}
function lvExp44(lvExp48,lvExp49,lvExp50){setTimeout(function(){lvExp48.style.height=lvExp49.toString().replace("px","")+'px';},lvExp50);}
function lvExp36(lvExp26){if(lvExp26.lvExp23!==undefined&&lvExp26.lvExp23!==null&&lvExp26.lvExp24!==undefined&&lvExp26.lvExp24!==null){var lvExp37=lvExp26.lvExp24/10;var lvExp38=0;var lvExp40=50;lvExp26.lvExp23.style.opacity="0";for(var lvExp42=lvExp26.lvExp24;lvExp42>0;lvExp42-=lvExp37){lvExp44(lvExp26.lvExp23,lvExp42,lvExp40);if(lvExp38>11){throw new Error("Error in count inside Expander(Hide Item) contact Laavor.com with example.");}
lvExp40+=50;}
setTimeout(function(){lvExp26.lvExp23.style.height='0px';},lvExp40);lvExp40+=50;setTimeout(function(){lvExp26.lvExp23.style.display='none';},lvExp40);lvExp40+=50;setTimeout(function(){lvExp26.lvExp23.style.height=lvExp26.lvExp24.toString()+'px';},lvExp40);lvExp26.lvExp21.setAttribute("lvExp51",false);var lvExp33=lvExp26.lvExp21.getAttribute("lvExp55");if(lvExp3[lvExp33].imageArrowExpanded!=="none"&&lvExp3[lvExp33].imageArrowClosed!=="none")
{lvExp26.lvExp22.src=lvExp3[lvExp33].imageArrowClosed;}}}
function lvExp25(lvExp27){if(lvExp27.lvExp23!==undefined&&lvExp27.lvExp23!==null&&lvExp27.lvExp24!==undefined&&lvExp27.lvExp24!==null){var lvExp28=lvExp27.lvExp24/10;var lvExp39=0;var lvExp41=50;lvExp27.lvExp23.style.height=lvExp28.toString()+'px';lvExp27.lvExp23.style.display='block';for(var lvExp43=lvExp28;lvExp43<=lvExp27.lvExp24;lvExp43+=lvExp28){lvExp44(lvExp27.lvExp23,lvExp43,lvExp41);if(lvExp39>11){throw new Error("Error in count inside Expander(Hide Item) contact Laavor.com with example.");}
lvExp41+=50;}
setTimeout(function(){lvExp27.lvExp23.style.height=lvExp27.lvExp24.toString()+'px';lvExp27.lvExp23.style.opacity="1";},lvExp41);lvExp41+=50;lvExp27.lvExp21.setAttribute("lvExp51",true);var lvExp34=lvExp27.lvExp21.getAttribute("lvExp55");if(lvExp3[lvExp34].imageArrowExpanded!=="none"&&lvExp3[lvExp34].imageArrowClosed!=="none")
{lvExp27.lvExp22.src=lvExp3[lvExp34].imageArrowExpanded;}}}
function lvExp9(){return{startExpanded:true,backgroundColorTitle:"black",borderColorTitle:"black",textColorTitle:"white",fontSizeTitle:"2em",borderColorContent:"black",imageArrowExpanded:"none",imageArrowClosed:"none",imageArrowWidth:"24px",imageArrowHeight:"24px"};}