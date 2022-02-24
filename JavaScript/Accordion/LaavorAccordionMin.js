var LaavorC01;var LaavorC02;var LaavorC03;var LaavorC04;String.prototype.LaavorC05=function(){"use strict";var LaavorC06=parseInt(this);return LaavorC06;};function LaavorAccordion(LaavorC07,LaavorC08){if(LaavorC02===undefined||LaavorC02===null)
{LaavorC02=[];}
if(LaavorC01===undefined||LaavorC01===null)
{LaavorC01=[];}
if(LaavorC03===undefined||LaavorC03===null)
{LaavorC03=[];}
LaavorC03.push(LaavorC07);if(LaavorC04===undefined||LaavorC04===null)
{LaavorC04=[];}
if(LaavorC08!==undefined&&LaavorC08!==null){LaavorC04[LaavorC07]=LaavorC08;}
else{LaavorC04[LaavorC07]=LaavorC11();}}
window.addEventListener('load',function(){var LaavorC09=LaavorC03.length;for(var LaavorC10=0;LaavorC10<LaavorC09;LaavorC10++)
{LaavorC12(LaavorC10,LaavorC03[LaavorC10]);}});function LaavorC12(LaavorC13,LaavorC14){var LaavorC15=document.getElementById(LaavorC03[LaavorC13]);LaavorC02[LaavorC14]=[];if(LaavorC15!==undefined&&LaavorC15!==null){var LaavorC16=LaavorC15.children;var LaavorC17=LaavorC16.length;LaavorC18(LaavorC04[LaavorC14]);try{for(var LaavorC19=0;LaavorC19<LaavorC17;LaavorC19+=2){var LaavorC21=LaavorC20(LaavorC16[LaavorC19+1]);var LaavorC22={LaavorC25:LaavorC16[LaavorC19],LaavorC26:LaavorC16[LaavorC19+1],LaavorC23:LaavorC21};LaavorC16[LaavorC19+1].style.display='none';LaavorC02[LaavorC14].push(LaavorC22);var LaavorC24=LaavorC39(LaavorC02[LaavorC14].length-1);LaavorC22.LaavorC25.setAttribute("LaavorC30",LaavorC24);LaavorC22.LaavorC25.onclick=LaavorC54;LaavorC22.LaavorC25.setAttribute("LaavorC31",false);LaavorC22.LaavorC25.setAttribute("LaavorC33",LaavorC14);LaavorC22.LaavorC25.style.backgroundColor=LaavorC04[LaavorC14].backgroundColorTitle;LaavorC22.LaavorC25.style.border="solid 1px";LaavorC22.LaavorC25.style.borderColor=LaavorC04[LaavorC14].borderColorTitle;LaavorC22.LaavorC25.style.color=LaavorC04[LaavorC14].textColorTitle;LaavorC22.LaavorC25.style.fontSize=LaavorC04[LaavorC14].fontSizeTitle.replace("em","")+'em';LaavorC22.LaavorC26.style.border="solid 1px";LaavorC22.LaavorC26.style.borderColor=LaavorC04[LaavorC14].borderColorContent;LaavorC22.LaavorC25.style.cursor="pointer";LaavorC22.LaavorC25.style.marginBottom="0px";LaavorC22.LaavorC26.style.marginBottom="0px";LaavorC22.LaavorC25.style.marginTop="0px";LaavorC22.LaavorC26.style.marginTop="0x";LaavorC22.LaavorC25.onmouseover=LaavorC27;LaavorC22.LaavorC25.onmouseleave=LaavorC28;}
if(LaavorC04[LaavorC14].preSelectItem.toString()==="true"){LaavorC02[LaavorC14][0].LaavorC25.setAttribute("LaavorC31",true);LaavorC29(LaavorC02[LaavorC14][0]);LaavorC01[LaavorC14]=LaavorC02[LaavorC14][0];}
else{LaavorC01[LaavorC14]=null;}}
catch(e){throw new Error("The Title and Content order can not be interrupted, if necessary contact Laavor support.");}}
else{throw new Error("Item with idFather informed was not found.");}}
function LaavorC27(){if(this!==undefined&&this!==null){var LaavorC34=this.getAttribute("LaavorC33");if(LaavorC34!==undefined&&LaavorC34!==null)
{this.style.backgroundColor=LaavorC04[LaavorC34].backgroundColorTitleHover;this.style.borderColor=LaavorC04[LaavorC34].borderColorTitleHover;this.style.color=LaavorC04[LaavorC34].textColorTitleHover;}}}
function LaavorC28(){if(this!==undefined&&this!==null){var LaavorC36=this.getAttribute("LaavorC31");var LaavorC35=this.getAttribute("LaavorC33");if(LaavorC36==="false"){this.style.backgroundColor=LaavorC04[LaavorC35].backgroundColorTitle;this.style.borderColor=LaavorC04[LaavorC35].borderColorTitle;this.style.color=LaavorC04[LaavorC35].textColorTitle;}
else{this.style.backgroundColor=LaavorC04[LaavorC35].backgroundColorTitleSelected;this.style.borderColor=LaavorC04[LaavorC35].borderColorTitleSelected;this.style.color=LaavorC04[LaavorC35].textColorTitleSelected;}}}
function LaavorC18(LaavorC37){var LaavorC38=LaavorC11();if(LaavorC37.viewMode===undefined||LaavorC37.viewMode===null){LaavorC37.viewMode=LaavorC38.viewMode;}
if(LaavorC37.preSelectItem===undefined||LaavorC37.preSelectItem===null){LaavorC37.preSelectItem=LaavorC38.preSelectItem;}
if(LaavorC37.backgroundColorTitle===undefined||LaavorC37.backgroundColorTitle===null){LaavorC37.backgroundColorTitle=LaavorC38.backgroundColorTitle;}
if(LaavorC37.backgroundColorTitleHover===undefined||LaavorC37.backgroundColorTitleHover===null){LaavorC37.backgroundColorTitleHover=LaavorC38.backgroundColorTitleHover;}
if(LaavorC37.borderColorTitle===undefined||LaavorC37.borderColorTitle===null){LaavorC37.borderColorTitle=LaavorC38.borderColorTitle;}
if(LaavorC37.borderColorTitleHover===undefined||LaavorC37.borderColorTitleHover===null){LaavorC37.borderColorTitleHover=LaavorC38.borderColorTitleHover;}
if(LaavorC37.textColorTitle===undefined||LaavorC37.textColorTitle===null){LaavorC37.textColorTitle=LaavorC38.textColorTitle;}
if(LaavorC37.textColorTitleHover===undefined||LaavorC37.textColorTitleHover===null){LaavorC37.textColorTitleHover=LaavorC38.textColorTitleHover;}
if(LaavorC37.borderSizeTitle===undefined||LaavorC37.borderSizeTitle===null){LaavorC37.borderSizeTitle=LaavorC38.borderSizeTitle;}
if(LaavorC37.borderTitleHasShadow===undefined||LaavorC37.borderTitleHasShadow===null){LaavorC37.borderTitleHasShadow=LaavorC38.borderTitleHasShadow;}
if(LaavorC37.borderContentHasShadow===undefined||LaavorC37.borderContentHasShadow===null){LaavorC37.borderContentHasShadow=LaavorC38.borderContentHasShadow;}
if(LaavorC37.fontSizeTitle===undefined||LaavorC37.fontSizeTitle===null){LaavorC37.fontSizeTitle=LaavorC38.fontSizeTitle;}
if(LaavorC37.borderColorContent===undefined||LaavorC37.borderColorContent===null){LaavorC37.borderColorContent=LaavorC38.borderColorContent;}
if(LaavorC37.backgroundColorTitleSelected===undefined||LaavorC37.backgroundColorTitleSelected===null){LaavorC37.backgroundColorTitleSelected=LaavorC38.backgroundColorTitleSelected;}
if(LaavorC37.textColorTitleSelected===undefined||LaavorC37.textColorTitleSelected===null){LaavorC37.textColorTitleSelected=LaavorC38.textColorTitleSelected;}
if(LaavorC37.borderColorTitleSelected===undefined||LaavorC37.borderColorTitleSelected===null){LaavorC37.borderColorTitleSelected=LaavorC38.borderColorTitleSelected;}}
function LaavorC39(LaavorC41){"use strict";var LaavorC40="";var LaavorC42="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var LaavorC43=0;LaavorC43<15;LaavorC43++){LaavorC40+=LaavorC42.charAt(Math.floor(Math.random()*LaavorC42.length));}
LaavorC40+='_'+LaavorC41.toString();return LaavorC40;}
function LaavorC54(){try{var LaavorC44=this.getAttribute("LaavorC33");var LaavorC45=this.getAttribute("LaavorC30");var LaavorC46=this.getAttribute("LaavorC31");var LaavorC47=LaavorC45.split('_')[1].toString().LaavorC05();var LaavorC48=LaavorC02[LaavorC44][LaavorC47];var LaavorC49=false;if(LaavorC48!==undefined&&LaavorC48!==null){if(LaavorC04[LaavorC44].viewMode!==undefined&&LaavorC04[LaavorC44].viewMode!==null){if(LaavorC46.toString()==='true'){LaavorC50(LaavorC48);LaavorC49=true;}
else{LaavorC29(LaavorC48);}
if(LaavorC04[LaavorC44].viewMode==='single'){if(LaavorC01[LaavorC44]!==undefined&&LaavorC01[LaavorC44]!==null){var LaavorC51=this.getAttribute("LaavorC30");var LaavorC52=LaavorC01[LaavorC44].LaavorC25.getAttribute("LaavorC30");if(LaavorC51!==LaavorC52){LaavorC50(LaavorC01[LaavorC44]);}}}}
else if(LaavorC01[LaavorC44]!==undefined&&LaavorC01[LaavorC44]!==null){LaavorC50(LaavorC01[LaavorC44]);}
LaavorC01[LaavorC44]=LaavorC48;}
else{throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
catch(e){throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
function LaavorC20(LaavorC53){if(LaavorC53.clientHeight!==undefined&&LaavorC53.clientHeight!==null){return LaavorC53.clientHeight.toString().LaavorC05();}
if(LaavorC53.height!==undefined&&LaavorC53.style.height!==null){return LaavorC53.height.toString().LaavorC05();}
if(LaavorC53.offsetHeight!==undefined&&LaavorC53.offsetHeight!==null){return LaavorC53.offsetHeight.toString().LaavorC05()-2;}
else{throw new Error("Error in count inside Accordion(Height Item) contact Laavor.com with example.");}}
function LaavorC55(LaavorC56,LaavorC57,LaavorC58){setTimeout(function(){LaavorC56.style.height=LaavorC57.toString().replace("px","")+'px';},LaavorC58);}
function LaavorC50(LaavorC59){if(LaavorC59.LaavorC26!==undefined&&LaavorC59.LaavorC26!==null&&LaavorC59.LaavorC23!==undefined&&LaavorC59.LaavorC23!==null){var LaavorC60=LaavorC59.LaavorC23/10;var LaavorC61=LaavorC59.LaavorC25.getAttribute("LaavorC33");var LaavorC62=0;var LaavorC63=50;LaavorC59.LaavorC26.style.opacity="0";for(var LaavorC67=LaavorC59.LaavorC23;LaavorC67>0;LaavorC67-=LaavorC60){LaavorC55(LaavorC59.LaavorC26,LaavorC67,LaavorC63);if(LaavorC62>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
LaavorC63+=50;}
setTimeout(function(){LaavorC59.LaavorC26.style.height='0px';},LaavorC63);LaavorC63+=50;setTimeout(function(){LaavorC59.LaavorC26.style.display='none';},LaavorC63);LaavorC63+=50;setTimeout(function(){LaavorC59.LaavorC26.style.height=LaavorC59.LaavorC23.toString()+'px';LaavorC59.LaavorC25.style.backgroundColor=LaavorC04[LaavorC61].backgroundColorTitle;LaavorC59.LaavorC25.style.color=LaavorC04[LaavorC61].textColorTitle;LaavorC59.LaavorC25.style.borderColor=LaavorC04[LaavorC61].borderColorTitle;},LaavorC63);LaavorC59.LaavorC25.setAttribute("LaavorC31",false);}}
function LaavorC29(LaavorC64){if(LaavorC64.LaavorC26!==undefined&&LaavorC64.LaavorC26!==null&&LaavorC64.LaavorC23!==undefined&&LaavorC64.LaavorC23!==null){var LaavorC65=LaavorC64.LaavorC23/10;var LaavorC68=LaavorC64.LaavorC25.getAttribute("LaavorC33");var LaavorC69=0;var LaavorC70=50;LaavorC64.LaavorC26.style.height=LaavorC65.toString()+'px';LaavorC64.LaavorC26.style.display='block';for(var LaavorC66=LaavorC65;LaavorC66<=LaavorC64.LaavorC23;LaavorC66+=LaavorC65){LaavorC55(LaavorC64.LaavorC26,LaavorC66,LaavorC70);if(LaavorC69>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
LaavorC70+=50;}
setTimeout(function(){LaavorC64.LaavorC26.style.height=LaavorC64.LaavorC23.toString()+'px';LaavorC64.LaavorC26.style.opacity="1";LaavorC64.LaavorC25.style.backgroundColor=LaavorC04[LaavorC68].backgroundColorTitleSelected;LaavorC64.LaavorC25.style.color=LaavorC04[LaavorC68].textColorTitleSelected;LaavorC64.LaavorC25.style.borderColor=LaavorC04[LaavorC68].borderColorTitleSelected;},LaavorC70);LaavorC70+=50;LaavorC64.LaavorC25.setAttribute("LaavorC31",true);}}
function LaavorC11(){return{viewMode:'single',preSelectItem:true,backgroundColorTitle:"orange",borderColorTitle:"black",borderSizeTitle:"8px",textColorTitle:"black",fontSizeTitle:"2em",backgroundColorTitleHover:"gray",borderColorTitleHover:"black",textColorTitleHover:"white",borderTitleHasShadow:true,borderColorContent:"black",backgroundColorTitleSelected:"#f0f0f0",textColorTitleSelected:"black",borderColorTitleSelected:"white"};}