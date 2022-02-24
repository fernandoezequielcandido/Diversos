var lvGB1;var lvGB2;function LaavorGroupBox(lvGB3,lvGB4){if(lvGB2===undefined||lvGB2===null)
{lvGB2=[];}
lvGB2.push(lvGB3);if(lvGB1===undefined||lvGB1===null)
{lvGB1=[];}
if(lvGB4!==undefined&&lvGB4!==null){lvGB1[lvGB3]=lvGB4;}
else{lvGB1[lvGB3]=lvGB5()}}
window.addEventListener('load',function(){var lvGB6=lvGB2.length;for(var lvGB7=0;lvGB7<lvGB6;lvGB7++)
{lvGB8(lvGB2[lvGB7]);}});function lvGB8(lvGB9){lvGB10=document.getElementById(lvGB9);if(lvGB10!==undefined&&lvGB10!==null){var lvGB12=lvGB10.children;lvGB13(lvGB1[lvGB9]);try{var lvGB11={lvGB14:lvGB12[0],lvGB15:lvGB12[1]};lvGB11.lvGB14.style.backgroundColor=lvGB1[lvGB9].backgroundColorTitle;lvGB11.lvGB14.style.border="solid 1px";lvGB11.lvGB14.style.borderColor=lvGB1[lvGB9].borderColorTitle;lvGB11.lvGB14.style.color=lvGB1[lvGB9].textColorTitle;lvGB11.lvGB14.style.fontSize=lvGB1[lvGB9].fontSizeTitle.replace("em","")+'em';lvGB11.lvGB15.style.border="solid 1px";lvGB11.lvGB15.style.borderColor=lvGB1[lvGB9].borderColorContent;lvGB11.lvGB14.style.marginBottom="0px";lvGB11.lvGB15.style.marginBottom="0px";lvGB11.lvGB14.style.marginTop="0px";lvGB11.lvGB15.style.marginTop="0x";}
catch(e){throw new Error("It is necessary to be the title followed by the content, if necessary contact Laavor support.");}}
else{throw new Error("Item with idFather informed was not found.");}}
function lvGB13(lvGB16){var lvGB17=lvGB5();if(lvGB16.backgroundColorTitle===undefined||lvGB16.backgroundColorTitle===null){lvGB16.backgroundColorTitle=lvGB17.backgroundColorTitle;}
if(lvGB16.borderColorTitle===undefined||lvGB16.borderColorTitle===null){lvGB16.borderColorTitle=lvGB17.borderColorTitle;}
if(lvGB16.textColorTitle===undefined||lvGB16.textColorTitle===null){lvGB16.textColorTitle=lvGB17.textColorTitle;}
if(lvGB16.borderSizeTitle===undefined||lvGB16.borderSizeTitle===null){lvGB16.borderSizeTitle=lvGB17.borderSizeTitle;}
if(lvGB16.fontSizeTitle===undefined||lvGB16.fontSizeTitle===null){lvGB16.fontSizeTitle=lvGB17.fontSizeTitle;}
if(lvGB16.borderColorContent===undefined||lvGB16.borderColorContent===null){lvGB16.borderColorContent=lvGB17.borderColorContent;}}
function lvGB5(){return{backgroundColorTitle:"orange",borderColorTitle:"black",textColorTitle:"black",fontSizeTitle:"2em",borderColorContent:"black"};}