function LaavorRatingSwap()
{
	"use strict";
	var lvRT01 =  document.getElementsByClassName("laavorRatingImage");
		
	if(lvRT01 === undefined || lvRT01 === null || lvRT01.length === 0)
	{
		
	}
	else
	{
		for(var lvRT02 = 0; lvRT02 < lvRT01.length; lvRT02++)
		{		
			var lvRT03 = lvRT01[lvRT02];
			lvRT233(lvRT03, lvRT02);		
		}
	}
		
	var lvRT04 =  document.getElementsByClassName("laavorRatingNumber");
		
	if(lvRT04 === undefined || lvRT04 === null || lvRT04.length === 0)
	{
		
	}
	else
	{
		for(var lvRT05 = 0; lvRT05 < lvRT04.length; lvRT05++)
		{		
			var lvRT06 = lvRT04[lvRT05];
			lvRT238(lvRT06, "lvRT249");		
		}
	}
	
	var lvRT07 =  document.getElementsByClassName("laavorRatingLetter");
		
	if(lvRT07 === undefined || lvRT07 === null || lvRT07.length === 0)
	{
		
	}
	else
	{	
		for(var lvRT08 = 0; lvRT08 < lvRT07.length; lvRT08++)
		{		
			var lvRT09 = lvRT07[lvRT08];
			lvRT238(lvRT09, "lvRT250");		
		}
	}
	
	var lvRT10 =  document.getElementsByClassName("laavorSwapImage");
		
	if(lvRT10 === undefined || lvRT10 === null || lvRT10.length === 0)
	{
		
	}
    else
	{
		for(var lvRT11 = 0; lvRT11 < lvRT10.length; lvRT11++)
		{		
			var lvRT12 = lvRT10[lvRT11];
			lvRT246(lvRT12);		
		}
	}
	
	var lvRT13 =  document.getElementsByClassName("laavorSwapLabel");
		
	if(lvRT13 === undefined || lvRT13 === null || lvRT13.length === 0)
	{
		
	}
	else
	{
		for(var lvRT14 = 0; lvRT14 < lvRT13.length; lvRT14++)
		{		
			var lvRT15 = lvRT13[lvRT14];
			laavorLabelSwapInitAll(lvRT15);		
		}
	}
}

function laavorRatingImageResetAll(lvRT16)
{
	"use strict";
	var lvRT17 =  document.getElementById(lvRT16);
	lvRT17.innerHTML = '';
	lvRT233(lvRT17);
}

function laavorRatingNumberResetAll(lvRT18)
{
	"use strict";
	var lvRT17 =  document.getElementById(lvRT18);
	lvRT17.innerHTML = '';
	lvRT238(lvRT17, "lvRT249");
}

function laavorRatingLetterResetAll(lvRT19)
{
	"use strict";
	var lvRT17 =  document.getElementById(lvRT19);
	lvRT17.innerHTML = '';
	lvRT238(lvRT17, "lvRT250");
}

function lvRT233(lvRT21, lvRT20)
{
	"use strict";
	var lvRT22 = lvRT245(lvRT20);
	
	lvRT21.setAttribute("lvRT243", lvRT22);
	lvRT21.classList.add(lvRT22);	
			
	if(lvRT21 !== undefined && lvRT21 !== null)
	{
		var lvRT23 = lvRT21.getAttribute("imageSelect");
		var lvRT24 = lvRT21.getAttribute("imageDeselect");
		var lvRT25 = lvRT21.getAttribute("spaceBetween");
		
		if(lvRT23 !== undefined && lvRT23 !== null && lvRT24 !== undefined && lvRT24 !== null)
		{	
			var lvRT26 = lvRT21.getAttribute("itemsNumber");
			var lvRT27 = lvRT21.getAttribute("initialValue");
			var lvRT28 = lvRT21.getAttribute("isReadOnly");
			var lvRT29 = lvRT21.getAttribute("blockSelect");
			var lvRT30 = lvRT21.getAttribute("imageWidth");
			var lvRT31 = lvRT21.getAttribute("imageHeight");
			var lvRT204 = lvRT21.getAttribute("commandEvent");
			
			var lvRT32;
			if(lvRT25 !== undefined && lvRT25 !== null)
			{
				lvRT32 = lvRT25.lvRT247();
			}
			else
			{
				lvRT32 = lvRT239("spaceBetweenImage").lvRT247();	
			}
	
			if(lvRT26 === undefined || lvRT26 === null)
			{
				lvRT26 = 5;				
			}
			
			if(lvRT27 === undefined || lvRT27 === null)
			{
				lvRT27 = 0;
			}
							
			for(var lvRT33 = 1; lvRT33 <= lvRT26; lvRT33++)
			{
				var lvRT34 = document.createElement("img");
				lvRT34.setAttribute("NumberLV", lvRT33);
				lvRT34.setAttribute("ItemsNumber", lvRT26);
				lvRT34.setAttribute("imageSelect", lvRT23);				
				lvRT34.setAttribute("imageDeselect", lvRT24);	
			
			    lvRT34.style.cursor = "pointer";
				
				lvRT34.setAttribute("Name", lvRT22);
				lvRT34.setAttribute("lvRT243", lvRT22);
				
				lvRT34.setAttribute("commandEvent", lvRT204);
					
				if(lvRT33 <= lvRT27)
				{
					lvRT34.setAttribute("lvRT240", true);
					lvRT34.src = lvRT23;
				}
				else
				{
					lvRT34.setAttribute("lvRT240", false);
					lvRT34.src = lvRT24;
				}
				
				if(lvRT28 !== undefined && lvRT28 !== null)
				{
					if(lvRT28.toString() === "true")
					{
						if(lvRT29 !== undefined && lvRT29 !== null)
						{
							lvRT34.setAttribute("blockSelect", lvRT29);	
						}
					}
					else
					{
						lvRT34.addEventListener("click", lvRT231);	
						lvRT34.onmouseover = lvRT234;
						lvRT34.onmouseleave = lvRT235;
					}
				}
				else
				{
					lvRT34.addEventListener("click", lvRT231);	
					
					if(lvRT29 !== undefined && lvRT29 !== null)
					{
						lvRT34.setAttribute("blockSelect", lvRT29);	
					}
					
					lvRT34.onmouseover = lvRT234;
					lvRT34.onmouseleave = lvRT235;
				}
				
				if(lvRT30 !== undefined && lvRT30 !== null)
				{
					lvRT34.style.width = lvRT30;
				}
				
				if(lvRT31 !== undefined && lvRT31 !== null)
				{
					lvRT34.style.height = lvRT31;
				}
				
				if(lvRT33 !== 1 && lvRT32 > 0)
				{
					for(var lvRT35 = 0; lvRT35 < lvRT32; lvRT35++)
					{
						var lvRT36 = document.createElement("span");
						lvRT36.innerHTML = "&nbsp";
						lvRT21.appendChild(lvRT36);
					}
				}
									
				lvRT21.appendChild(lvRT34);
			}
		}
	}
}

function lvRT234() {

	if(this !== undefined && this !== null)
	{
		var lvRT37 = this.getAttribute("NumberLV").lvRT247();
		var lvRT39 = this.getAttribute("lvRT243");
		var lvRT44 = document.getElementsByClassName(lvRT39)[0];
		var lvRT45 = lvRT44.getElementsByTagName("img");
		
		for(var lvRT46 = 0; lvRT46 < lvRT37; lvRT46++)
		{			
			var lvRT47 = lvRT45[lvRT46];
			var lvRT48 = lvRT47.getAttribute("lvRT240");
			if(lvRT48 !== undefined && lvRT48 != null)
			{
				if(lvRT48 === "false")
				{
					lvRT47.src = lvRT47.getAttribute("imageSelect");	
				}
			}
		}	
	}	
}

function lvRT235() {
	if(this !== undefined && this !== null)
	{
		var lvRT38 = this.getAttribute("NumberLV").lvRT247();
		var lvRT41 = this.getAttribute("lvRT243");
		var lvRT49 = document.getElementsByClassName(lvRT41)[0];
		var lvRT50 = lvRT49.getElementsByTagName("img")
		
		for(var lvRT51 = 0; lvRT51 < lvRT38; lvRT51++)
		{			
			var lvRT52 = lvRT50[lvRT51];
			var lvRT53 = lvRT52.getAttribute("lvRT240");
			if(lvRT53 !== undefined && lvRT53 != null)
			{
				if(lvRT53 === "false")
				{
					lvRT52.src = lvRT52.getAttribute("imageDeselect");	
				}
			}
		}	
	}		
}

function lvRT238(lvRT55, lvRT82)
{
	"use strict";
	var lvRT54 = lvRT245();
	var lvRT57 = lvRT245();	

	lvRT55.setAttribute("lvRT243", lvRT54);
	lvRT55.classList.add(lvRT54);
		
	if(lvRT55 !== undefined && lvRT55 !== null)
	{
		var lvRT58 = lvRT55.getAttribute("itemsNumber");
		var lvRT59 = lvRT55.getAttribute("initialValue");
		var lvRT60 = lvRT55.getAttribute("isReadOnly");
		var lvRT61 = lvRT55.getAttribute("blockSelect");
		var lvRT62 = lvRT55.getAttribute("spaceBetween");
		var lvRT63 = lvRT55.getAttribute("fontSize");
		var lvRT68 = lvRT55.getAttribute("border");
		var lvRT69 = lvRT55.getAttribute("borderRadius");
	    var lvRT70 = lvRT55.getAttribute("textColorSelect");
		var lvRT71 = lvRT55.getAttribute("textColorDeselect");
		var lvRT72 = lvRT55.getAttribute("borderColorSelect");
		var lvRT73 = lvRT55.getAttribute("borderColorDeselect");
		var lvRT78 = lvRT55.getAttribute("backgroundColorSelect");
		var lvRT79 = lvRT55.getAttribute("backgroundColorDeselect");
		var lvRT205 = lvRT55.getAttribute("commandEvent");
					
		if(lvRT58 === undefined || lvRT58 === null)
		{
			lvRT58 = 5;				
		}
		
		if(lvRT59 === undefined || lvRT59 === null)
		{
			lvRT59 = 0;
		}
		
		var lvRT80;
		if(lvRT62 !== undefined && lvRT62 !== null)
		{
			lvRT80 = lvRT62.lvRT247();
		}
		else
		{
			lvRT80 = lvRT239("spaceBetween").lvRT247();	
		}
		
		if(lvRT63 === undefined || lvRT63 === null || lvRT63 === "")
		{
			lvRT63 = lvRT239("fontSize");
		}
		
		if(lvRT68 === undefined || lvRT68 === null || lvRT68 === "")
		{
			lvRT68 = lvRT239("border");
		}
		
		if(lvRT69 === undefined || lvRT69 === null || lvRT69 === "")
		{
			lvRT69 = lvRT239("borderRadius");
		}
		
		if(lvRT70 === undefined || lvRT70 === null || lvRT70 === "")
		{
			lvRT70 = lvRT239("textColorSelect");
		}
		
		if(lvRT71 === undefined || lvRT71 === null || lvRT71 === "")
		{
			lvRT71 = lvRT239("textColorDeselect");
		}
		
		if(lvRT78 === undefined || lvRT78 === null || lvRT78 === "")
		{
			lvRT78 = lvRT239("backgroundColorSelect");
		}
		
		if(lvRT72 === undefined || lvRT72 === null || lvRT72 === "")
		{
			lvRT72 = lvRT239("borderColorSelect");
		}
		
		if(lvRT73 === undefined || lvRT73 === null || lvRT73 === "")
		{
			lvRT73 = lvRT239("borderColorDeselect");
		}	
		
		if(lvRT78 === undefined || lvRT78 === null || lvRT78 === "")
		{
			lvRT78 = lvRT239("backgroundColorSelect");
		}
		
		if(lvRT79 === undefined || lvRT79 === null || lvRT79 === "")
		{
			lvRT79 = lvRT239("backgroundColorDeselect");
		}
							
		for(var lvRT56 = 1; lvRT56 <= lvRT58; lvRT56++)
		{
			var lvRT81 = document.createElement("span");
			lvRT81.setAttribute("NumberLV", lvRT56);
			lvRT81.setAttribute("ItemsNumber", lvRT58);
			lvRT81.style.cursor = "pointer";
			lvRT81.style.fontSize = lvRT63;
			lvRT81.style.borderRadius = lvRT69;
			lvRT81.style.border = lvRT68;
			lvRT81.style.borderStyle = lvRT239("borderStyle");
			
			lvRT81.setAttribute("lvRT240", true);

			lvRT81.setAttribute("Name", lvRT54);
			lvRT81.setAttribute("lvRT243", lvRT54);
			lvRT81.setAttribute("lvRT244", lvRT57);
			lvRT81.classList.add(lvRT57);

			lvRT81.setAttribute("textColorSelect", lvRT70);
			lvRT81.setAttribute("textColorDeselect", lvRT71);
			lvRT81.setAttribute("borderColorSelect", lvRT72);
			lvRT81.setAttribute("borderColorDeselect", lvRT73);
			lvRT81.setAttribute("backgroundColorSelect", lvRT78);
			lvRT81.setAttribute("backgroundColorDeselect", lvRT79);
			lvRT81.setAttribute("typeRating", lvRT82.toString());
			
			if(lvRT205 !== undefined && lvRT205 !== null)
			{
				lvRT81.setAttribute("commandEvent", lvRT205);
			}
			
			if(lvRT56 !== 1 && lvRT80 > 0)
			{
				for(var lvRT83 = 0; lvRT83 < lvRT80; lvRT83++)
				{
					var lvRT84 = document.createElement("span");
					lvRT84.innerHTML = "&nbsp";
					lvRT55.appendChild(lvRT84);
				}
			}
			
			if(lvRT82 === "lvRT249")
			{
				lvRT81.innerHTML =  "&nbsp" + lvRT56.toString() + "&nbsp";
			}
			else if(lvRT82 === "lvRT250")
			{
				lvRT81.innerHTML =  "&nbsp" + laavorGetLetter(lvRT56) + "&nbsp";				
			}
			
			if(lvRT56 <= lvRT59)
			{
				lvRT81.setAttribute("lvRT240", true);
				lvRT81.style.color = lvRT70;
				lvRT81.style.backgroundColor = lvRT78;
				lvRT81.style.borderColor = lvRT72;
			}
			else
			{
				lvRT81.setAttribute("lvRT240", false);
				lvRT81.style.color = lvRT71;
				lvRT81.style.backgroundColor = lvRT79;
			    lvRT81.style.borderColor = lvRT73;
		    }
			
			if(lvRT60 !== undefined && lvRT60 !== null)
			{
				if(lvRT60.toString() === "true")
				{
					if(lvRT61 !== undefined && lvRT61 !== null)
					{
						lvRT81.setAttribute("blockSelect", lvRT61);	
					}
				}
				else
				{
					lvRT81.addEventListener("click", lvRT236);	
				}
				
				lvRT81.onmouseover = lvRT241;
				lvRT81.onmouseleave = lvRT242;
			}
			else
			{
				lvRT81.addEventListener("click", lvRT236);	
				
				if(lvRT61 !== undefined && lvRT61 !== null)
				{
					lvRT81.setAttribute("blockSelect", lvRT61);	
				}
				
				lvRT81.onmouseover = lvRT241;
				lvRT81.onmouseleave = lvRT242;
			}
								
			lvRT55.appendChild(lvRT81);
		}
	}
}

function lvRT241() {
	
	if(this !== undefined && this !== null)
	{
		var lvRT85 = this.getAttribute("NumberLV").lvRT247();
		var lvRT87 = this.getAttribute("lvRT244");
		var lvRT90 = document.getElementsByClassName(lvRT87);
		
		if(lvRT90.length > 0)
		{
			var lvRT91 = lvRT90[0].getAttribute("textColorSelect");
			var lvRT93 = lvRT90[0].getAttribute("borderColorSelect");
			var lvRT94 = lvRT90[0].getAttribute("backgroundColorSelect");

			for(var lvRT100 = 0; lvRT100 < lvRT85; lvRT100++)
			{		
				var lvRT102 = lvRT90[lvRT100];
				var lvRT109 = lvRT102.getAttribute("lvRT240");
				if(lvRT109 !== undefined && lvRT109 != null)
				{
					if(lvRT109 === "false")
					{
						lvRT102.style.color = lvRT91;
						lvRT102.style.backgroundColor = lvRT94;
						lvRT102.style.borderColor = lvRT93;
					}
				}
				else
				{
					lvRT102.style.color = lvRT91;
					lvRT102.style.backgroundColor = lvRT94;
					lvRT102.style.borderColor = lvRT93;
				}
			}	
		}
	}	
}

function lvRT242() {

	if(this !== undefined && this !== null)
	{
		var lvRT86 = this.getAttribute("NumberLV").lvRT247();
		var lvRT88 = this.getAttribute("lvRT244");
		var lvRT89 = document.getElementsByClassName(lvRT88);
		
		if(lvRT89.length > 0)
		{
			var lvRT95 = lvRT89[0].getAttribute("textColorDeselect");
			var lvRT96 = lvRT89[0].getAttribute("borderColorDeselect");
			var lvRT104 = lvRT89[0].getAttribute("backgroundColorDeselect");
			
			for(var lvRT101 = 0; lvRT101 < lvRT86; lvRT101++)
			{		
				var lvRT103 = lvRT89[lvRT101];
				var lvRT110 = lvRT103.getAttribute("lvRT240");
				if(lvRT110 !== undefined && lvRT110 != null)
				{
					if(lvRT110 === "false")
					{
						lvRT103.style.color = lvRT95;
						lvRT103.style.backgroundColor = lvRT104;
						lvRT103.style.borderColor = lvRT96;
					}
				}
				else
				{
					lvRT103.style.color = lvRT95;
					lvRT103.style.backgroundColor = lvRT104;
					lvRT103.style.borderColor = lvRT96;
				}
			}	
		}
	}		
}

function lvRT246(lvRT97)
{
	"use strict";
	var lvRT98 = lvRT245();
		
	lvRT97.setAttribute("lvRT243", lvRT98);
	
	if(lvRT97 !== undefined && lvRT97 !== null)
	{
		var lvRT99 = lvRT97.getAttribute("firstImage");
		var lvRT114 = lvRT97.getAttribute("secondImage");
		var lvRT116 = lvRT97.getAttribute("firstImageWidth");
		var lvRT118 = lvRT97.getAttribute("firstImageHeight");		
		var lvRT120 = lvRT97.getAttribute("secondImageWidth");
		var lvRT122 = lvRT97.getAttribute("secondImageHeight");		
		var lvRT124 = lvRT97.getAttribute("blockSwap");
		var lvRT198 = lvRT97.getAttribute("commandEvent");
									
		var lvRT113 = document.createElement("img");
		lvRT113.setAttribute("firstImage", lvRT99);
		lvRT113.setAttribute("secondImage", lvRT114);
		lvRT113.setAttribute("blockSwap", lvRT124);
		lvRT113.setAttribute("isFirstImage", true);
		
		lvRT113.style.cursor = "pointer";
		
		if(lvRT198 !== undefined && lvRT198 !== null)
		{
			lvRT113.setAttribute("commandEvent", lvRT198);
		}
		
		if(lvRT116 !== undefined && lvRT116 !== null)
		{
			lvRT113.setAttribute("firstImageWidth", lvRT116);						
		}
		
		if(lvRT118 !== undefined && lvRT118 !== null)
		{
			lvRT113.setAttribute("firstImageHeight", lvRT118);						
		}
		
		if(lvRT120 !== undefined && lvRT120 !== null)
		{
			lvRT113.setAttribute("secondImageWidth", lvRT120);				
		}
		
		if(lvRT122 !== undefined && lvRT122 !== null)
		{
			lvRT113.setAttribute("secondImageHeight", lvRT122);	
		}
				
		lvRT113.setAttribute("Name", lvRT98);
		lvRT113.setAttribute("lvRT243", lvRT98);	
		
		lvRT113.style.width = lvRT116;
		lvRT113.style.height = lvRT118;
		
		lvRT113.src = lvRT99;
		lvRT113.addEventListener("click", lvRT170);
		
		lvRT97.appendChild(lvRT113);
	}
}

function laavorLabelSwapInitAll(lvRT107)
{
	"use strict";
	var lvRT131 = lvRT245();
		
	lvRT107.setAttribute("lvRT243", lvRT131);
	
	if(lvRT107 !== undefined && lvRT107 !== null)
	{
		var lvRT130 = lvRT107.getAttribute("firstText");
		var lvRT132 = lvRT107.getAttribute("secondText");
		var lvRT133 = lvRT107.getAttribute("firstFontSize");
		var lvRT135 = lvRT107.getAttribute("secondFontSize");
		var lvRT137 = lvRT107.getAttribute("border");
		var lvRT138 = lvRT107.getAttribute("borderRadius");
	    var lvRT139 = lvRT107.getAttribute("firstTextColor");
		var lvRT140 = lvRT107.getAttribute("secondTextColor");
		var lvRT141 = lvRT107.getAttribute("firstBorderColor");
		var lvRT142 = lvRT107.getAttribute("secondBorderColor");
		var lvRT143 = lvRT107.getAttribute("firstBackgroundColor");
		var lvRT145 = lvRT107.getAttribute("secondBackgroundColor");
	
		var lvRT125 = lvRT107.getAttribute("blockSwap");
		var lvRT199 = lvRT107.getAttribute("commandEvent");
									
		var lvRT108 = document.createElement("span");
		lvRT108.setAttribute("firstText", lvRT130);
		lvRT108.setAttribute("secondText", lvRT132);
		lvRT108.setAttribute("blockSwap", lvRT125);
		lvRT108.setAttribute("isFirstText", true);
		
		lvRT108.style.cursor = "pointer";

		lvRT108.style.borderStyle = lvRT239("borderStyle");
		
		if(lvRT199 !== undefined && lvRT199 !== null)
		{
			lvRT108.setAttribute("commandEvent", lvRT199);
		}
		
		if(lvRT133 === undefined || lvRT133 === null || lvRT133 === "")
		{
			lvRT133 = lvRT239("fontSize");
		}
		lvRT108.style.fontSize = lvRT133;
		
		if(lvRT135 === undefined || lvRT135 === null || lvRT135 === "")
		{
			lvRT135 = lvRT239("fontSize");
		}
				
		if(lvRT137 === undefined || lvRT137 === null || lvRT137 === "")
		{
			lvRT137 = lvRT239("border");
		}
		lvRT108.style.border = lvRT137;
		
		if(lvRT138 === undefined || lvRT138 === null || lvRT138 === "")
		{
			lvRT138 = lvRT239("borderRadius");
		}
		lvRT108.style.borderRadius = lvRT138;
		
		if(lvRT139 === undefined || lvRT139 === null || lvRT139 === "")
		{
			lvRT139 = lvRT239("firstTextColor");
		}
		
		if(lvRT140 === undefined || lvRT140 === null || lvRT140 === "")
		{
			lvRT140 = lvRT239("secondTextColor");
		}
		
		if(lvRT143 === undefined || lvRT143 === null || lvRT143 === "")
		{
			lvRT143 = lvRT239("firstBackgroundColor");
		}
		
		if(lvRT145 === undefined || lvRT145 === null || lvRT145 === "")
		{
			lvRT145 = lvRT239("secondBackgroundColor");
		}
		
		if(lvRT141 === undefined || lvRT141 === null || lvRT141 === "")
		{
			lvRT141 = lvRT239("firstBorderColor");
		}
		
		if(lvRT142 === undefined || lvRT142 === null || lvRT142 === "")
		{
			lvRT142 = lvRT239("secondBorderColor");
		}
		
		if(lvRT133 !== undefined && lvRT133 !== null && lvRT133 !== "")
		{
			lvRT108.setAttribute("firstFontSize", lvRT133);
		}
		lvRT108.style.fontSize = lvRT133;
		
		if(lvRT135 !== undefined && lvRT135 !== null && lvRT135 !== "")
		{
			lvRT108.setAttribute("secondFontSize", lvRT135);
		}
				
		if(lvRT138 !== undefined && lvRT138 !== null && lvRT138 !== "")
		{
			lvRT108.setAttribute("borderRadius", lvRT138);
		}
		lvRT108.style.borderRadius = lvRT138;
		
		if(lvRT139 !== undefined && lvRT139 !== null && lvRT139 !== "")
		{
			lvRT108.setAttribute("firstTextColor", lvRT139);
		}
		lvRT108.style.color = lvRT139;
		
		if(lvRT140 !== undefined && lvRT140 !== null && lvRT140 !== "")
		{
			lvRT108.setAttribute("secondTextColor", lvRT140);
		}
		
		if(lvRT141 !== undefined && lvRT141 !== null && lvRT141 !== "")
		{
			lvRT108.setAttribute("firstBorderColor", lvRT141);
		}
		lvRT108.style.borderColor = lvRT141;
		
		if(lvRT142 !== undefined && lvRT142 !== null && lvRT142 !== "")
		{
			lvRT108.setAttribute("secondBorderColor", lvRT142);	
		}
		
		if(lvRT143 !== undefined && lvRT143 !== null && lvRT143 !== "")
		{
			lvRT108.setAttribute("firstBackgroundColor", lvRT143);
		}
		lvRT108.style.backgroundColor = lvRT143;
		
		if(lvRT145 !== undefined && lvRT145 !== null && lvRT145 !== "")
		{
			lvRT108.setAttribute("secondBackgroundColor", lvRT145);	
		}
					
		lvRT108.setAttribute("Name", lvRT131);
		lvRT108.setAttribute("lvRT243", lvRT131);	
				
		lvRT108.innerHTML = lvRT130;
		lvRT108.addEventListener("click", lvRT147);
		
		lvRT107.appendChild(lvRT108);
	}
}

function lvRT239(lvRT188)
{
	var valuesD = {};
	
	valuesD["fontSize"] = "20px";			
	valuesD["textColorSelect"] = "#daa520";
	valuesD["textColorDeselect"] = "#b4b4b4";
	valuesD["backgroundColorSelect"] = "";
	valuesD["backgroundColorDeselect"] = "";
	valuesD["borderColorSelect"] = "";
	valuesD["borderColorDeselect"] = "";
	
	valuesD["firstTextColor"] = "#b4b4b4";
	valuesD["secondTextColor"] = "#daa520";
	valuesD["backgroundColorFirst"] = "";
	valuesD["backgroundColorSecond"] = "";
	valuesD["firstBorderColor"] = "";
	valuesD["secondBorderColor"] = "";
		
	valuesD["borderRadius"] = "5px";
	valuesD["border"] = "1px";
	valuesD["spaceBetween"] = "2";
	valuesD["spaceBetweenImage"] = "0";
	valuesD["borderStyle"] = "solid";
	valuesD["borderColor"] = "";
		
	var lvRT152 = valuesD[lvRT188];
	if(lvRT152 !== undefined && lvRT152 !== null)
	{
		return lvRT152;	
	}
	else
	{
		return "";
	}
}

function laavorRatingGetValue(lvRT153)
{
	"use strict";
	var lvRT150 = document.getElementById(lvRT153);
	var lvRT42 = lvRT150.getAttribute("lvRT243");
	
	if(lvRT150 !== undefined && lvRT150 !== null)
	{
		var lvRT156 = 0;
		for(var lvRT155 = 0; lvRT155 < lvRT150.children.length; lvRT155++)
		{
			var element = lvRT150.children[lvRT155];
			var lvRT159 = element.getAttribute("lvRT243");
			
			if(lvRT159 !== undefined && lvRT159 !== null)
			{
				if(lvRT159 === lvRT42)
				{
					var lvRT111 = element.getAttribute("lvRT240");
					if(lvRT111 === "true")
					{
						lvRT156++;
					}
				}
			}
		}
		
		return lvRT156;
	}
	
	return "error";
}

function laavorRatingLetterGetValue(lvRT64)
{
	"use strict";
	var lvRT151 = document.getElementById(lvRT64);
	var lvRT43 = lvRT151.getAttribute("lvRT243");
	
	if(lvRT151 !== undefined && lvRT151 !== null)
	{
		var lvRT157 = 0;
		for(var lvRT154 = 0; lvRT154 < lvRT151.children.length; lvRT154++)
		{
			var element = lvRT151.children[lvRT154];
			var lvRT158 = element.getAttribute("lvRT243");
			
			if(lvRT158 !== undefined && lvRT158 !== null)
			{
				if(lvRT158 === lvRT43)
				{
					var lvRT112 = element.getAttribute("lvRT240");
					if(lvRT112 === "true")
					{
						lvRT157++;
					}
				}
			}
		}
		
		return laavorGetLetter(lvRT157);
	}
	
	return "error";
}

String.prototype.lvRT247 = function()
{
	"use strict";
	var lvRT160 = parseInt(this);
	return lvRT160;
};

String.prototype.laavorToDouble = function()
{
	"use strict";
	var lvRT161 = parseFloat(this);
	return lvRT161;
};

String.prototype.laavorContains  = function(lvRT163)
{
	"use strict";
	var lvRT162 = this.indexOf(lvRT163) !== -1;
	return lvRT162;
};

String.prototype.laavorReplaceAll = function(lvRT164, lvRT165)
{
	"use strict";
    var lvRT166 = this;
    return lvRT166.split(lvRT164).join(lvRT165);
};

function lvRT245(lvRT167) {
  "use strict";
  var lvRT182 = "";
  var lvRT183 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var lvRT206 = 0; lvRT206 < 15; lvRT206++)
    lvRT182 += lvRT183.charAt(Math.floor(Math.random() * lvRT183.length));

  if(lvRT167 !== undefined && lvRT167 !== null)
  {
	lvRT182 += "_" + lvRT167;  
  }	  
  
  return lvRT182;
}

function laavorGetLetter(lvRT192) {
  "use strict";
  var lvRT184 = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return lvRT184[lvRT192];
}

function lvRT170(event)
{
	"use strict";
	var lvRT127 = event.currentTarget;
	var lvRT168 = lvRT127.getAttribute("firstImage");
	var lvRT115 = lvRT127.getAttribute("secondImage");
	
	var lvRT117 = lvRT127.getAttribute("firstImageWidth");
	var lvRT119 = lvRT127.getAttribute("firstImageHeight");
	var lvRT121 = lvRT127.getAttribute("secondImageWidth");
	var lvRT123 = lvRT127.getAttribute("secondImageHeight");
	
	var lvRT169 = lvRT127.getAttribute("isFirstImage").toString();
	var lvRT126 = lvRT127.getAttribute("blockSwap").toString();
	var lvRT200 = lvRT127.getAttribute("commandEvent");
		
	var lvRT171 = "";
	var lvRT185 = "";
	if(lvRT168 !== undefined && lvRT168 !== null && lvRT115 !== undefined && lvRT115 !== null)
	{
		if(lvRT169 === "true")
		{
			lvRT127.src = lvRT115;
			lvRT171 = lvRT115;
			lvRT185 =  "second";
						
			if(lvRT121 !== undefined && lvRT121 !== null)
			{
				lvRT127.style.width = lvRT121;	
			}
			
			if(lvRT123 !== undefined && lvRT123 !== null)
			{
				lvRT127.style.height = lvRT123;				
			}
			
			lvRT127.setAttribute("isFirstImage", false);
			
			if(lvRT126 !== undefined && lvRT126 !== null)
			{
				if(lvRT126.toString() === "true")
				{
					lvRT127.removeEventListener("click", lvRT170);
					lvRT127.removeAttribute("blockSwap");
				}
			}
		}
		else if(lvRT169 === "false")
		{
			lvRT127.src = lvRT168;
			lvRT171 = lvRT168;
			lvRT185 =  "first";
			
			if(lvRT117 !== undefined && lvRT117 !== null)
			{
				lvRT127.style.width = lvRT117;	
			}
			
			if(lvRT119 !== undefined && lvRT119 !== null)
			{
				lvRT127.style.height = lvRT119;				
			}
			
			lvRT127.setAttribute("isFirstImage", true);
			
			if(lvRT126 !== undefined && lvRT126 !== null)
			{
				if(lvRT126.toString() === "true")
				{
					lvRT127.removeEventListener("click", lvRT170);
					lvRT127.removeAttribute("blockSwap");
				}
			}
		}	
	}
	
	if(lvRT200 !== undefined && lvRT200 !== null)
	{
		try
		{
			window[lvRT200](lvRT171, lvRT185);		
		}
		catch(errorLaavor)
		{
			try
			{
				window[lvRT200](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function lvRT147(event)
{
	"use strict";
	var lvRT128 = event.currentTarget;
	var lvRT129 = lvRT128.getAttribute("firstText");
	var lvRT144 = lvRT128.getAttribute("isFirstText");
	var lvRT146 = lvRT128.getAttribute("secondText");
	var lvRT134 = lvRT128.getAttribute("firstFontSize");
	var lvRT136 = lvRT128.getAttribute("secondFontSize");
	var lvRT148 = lvRT128.getAttribute("firstTextColor");
	var lvRT149 = lvRT128.getAttribute("secondTextColor");
	var lvRT187 = lvRT128.getAttribute("firstBorderColor");
	var lvRT189 = lvRT128.getAttribute("secondBorderColor");
	var lvRT190 = lvRT128.getAttribute("firstBackgroundColor");
	var lvRT191 = lvRT128.getAttribute("secondBackgroundColor");
		
	var lvRT193 = lvRT128.getAttribute("blockSwap");
	
	var lvRT201 = lvRT128.getAttribute("commandEvent");
		
	var lvRT194 = "";
	var lvRT186 = "";
	if(lvRT129 !== undefined && lvRT129 !== null && lvRT146 !== undefined && lvRT146 !== null)
	{
		if(lvRT144 === "true")
		{
			lvRT128.innerHTML = lvRT146;
			lvRT194 = lvRT146;
			lvRT186 =  "second";
						
			if(lvRT136 !== undefined && lvRT136 !== null)
			{
				lvRT128.style.fontSize = lvRT136;	
			}
			
			if(lvRT149 !== undefined && lvRT149 !== null)
			{
				lvRT128.style.color = lvRT149;				
			}
			
			if(lvRT191 !== undefined && lvRT191 !== null)
			{
				lvRT128.style.backgroundColor = lvRT191;				
			}
			
			if(lvRT189 !== undefined && lvRT189 !== null)
			{
				lvRT128.style.borderColor = lvRT189;				
			}
			
			lvRT128.setAttribute("isFirstText", false);
			
			if(lvRT193 !== undefined && lvRT193 !== null)
			{
				if(lvRT193.toString() === "true")
				{
					lvRT128.removeEventListener("click", lvRT147);
					lvRT128.removeAttribute("blockSwap");
				}
			}
		}
		else if(lvRT144 === "false")
		{
			lvRT128.innerHTML = lvRT129;
			lvRT194 = lvRT129;
			lvRT186 =  "first";
						
			if(lvRT134 !== undefined && lvRT134 !== null)
			{
				lvRT128.style.fontSize = lvRT134;	
			}
			
			if(lvRT148 !== undefined && lvRT148 !== null)
			{
				lvRT128.style.color = lvRT148;				
			}
			
			if(lvRT190 !== undefined && lvRT190 !== null)
			{
				lvRT128.style.backgroundColor = lvRT190;				
			}
			
			if(lvRT187 !== undefined && lvRT187 !== null)
			{
				lvRT128.style.borderColor = lvRT187;				
			}
						
			lvRT128.setAttribute("isFirstText", true);
			
			if(lvRT193 !== undefined && lvRT193 !== null)
			{
				if(lvRT193.toString() === "true")
				{
					lvRT128.removeEventListener("click", lvRT147);
					lvRT128.removeAttribute("blockSwap");
				}
			}
		}	
	}
	
	if(lvRT201 !== undefined && lvRT201 !== null)
	{
		try
		{
			window[lvRT201](lvRT194, lvRT186);		
		}
		catch(errorLaavor)
		{
			try
			{
				window[lvRT201](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function lvRT231(event)
{
	"use strict";
	var lvRT173 = event.currentTarget;
	var lvRT174 = lvRT173.getAttribute("lvRT240").toString();
	var lvRT178 = lvRT173.getAttribute("lvRT243");
    var lvRT179 = lvRT173.getAttribute("NumberLV");	
	var lvRT195 = lvRT173.getAttribute("blockSelect");
	var lvRT196 = lvRT173.getAttribute("isReadOnly");
	var lvRT202 = lvRT173.getAttribute("commandEvent");
		
	var lvRT207 = document.getElementsByName(lvRT178);
	
	var lvRT208 = "false";
	if(lvRT207 !== undefined && lvRT207 !== null && lvRT207.length > 0)
	{
		for(var lvRT230 = 1; lvRT230 <= lvRT207.length; lvRT230++)
		{
			var lvRT172  = lvRT207[lvRT230 - 1];			
			var lvRT211 =  lvRT172.getAttribute("NumberLV");
			
            if(lvRT174 === "false")
			{
				if(lvRT211.lvRT247() <= lvRT179)
				{
					lvRT172.setAttribute("lvRT240" , true);
					lvRT172.src = lvRT172.getAttribute("imageSelect");				
				}
			}
			else
			{
				if(lvRT211.lvRT247() >= lvRT179)
				{
					lvRT172.setAttribute("lvRT240" , false);
					lvRT172.src = lvRT172.getAttribute("imageDeselect");				
				}
				
				lvRT208 = "true";
			}
			
			if(lvRT196 !== undefined && lvRT196 !== null)
			{
				if(lvRT196.toString() === "false")
				{
					if(lvRT195 !== undefined && lvRT195 !== null)
					{
						if(lvRT195.toString() === "true")
						{
							lvRT172.removeEventListener("click", lvRT231);
							lvRT172.removeAttribute("blockSelect");
									
							lvRT172.onmouseover = null;
						    lvRT172.onmouseleave = null;
						}
					}
				}
			}
			else
			{
				if(lvRT195 !== undefined && lvRT195 !== null)
				{
					if(lvRT195.toString() === "true")
					{
						lvRT172.removeEventListener("click", lvRT231);
						lvRT172.removeAttribute("blockSelect");
						
						lvRT172.onmouseover = null;
						lvRT172.onmouseleave = null
					}
				}
			}
			
		}
	}
	
	if(lvRT202 !== undefined && lvRT202 !== null)
	{
		try
		{
			if(lvRT208 === "false")
			{
				window[lvRT202](lvRT179);
			}
			else
			{
				var lvRT219 = lvRT179.lvRT247() - 1;
				window[lvRT202](lvRT219);
			}
		}
		catch(errorLaavor)
		{
			try
			{
				window[lvRT202](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function lvRT236(event)
{
	"use strict";
	var lvRT176 = event.currentTarget;
	var lvRT175 = lvRT176.getAttribute("lvRT240").toString();
	var lvRT177 = lvRT176.getAttribute("lvRT243");
    var lvRT180 = lvRT176.getAttribute("NumberLV");	
	var lvRT181 = lvRT176.getAttribute("blockSelect");
	var lvRT197 = lvRT176.getAttribute("isReadOnly");
	var lvRT92 = lvRT176.getAttribute("textColorSelect");
	var lvRT210 = lvRT176.getAttribute("textColorDeselect");
	var lvRT212 = lvRT176.getAttribute("borderColorSelect");
	var lvRT213 = lvRT176.getAttribute("borderColorDeselect");
	var lvRT214 = lvRT176.getAttribute("backgroundColorSelect");
	var lvRT215 = lvRT176.getAttribute("backgroundColorDeselect");
	var lvRT218 = lvRT176.getAttribute("typeRating");
	var lvRT203 = lvRT176.getAttribute("commandEvent");
	
	var lvRT216 = document.getElementsByName(lvRT177);
	
	var lvRT209 = "false";
	
	if(lvRT216 !== undefined && lvRT216 !== null && lvRT216.length > 0)
	{
		for(var lvRT217 = 1; lvRT217 <= lvRT216.length; lvRT217++)
		{
			var lvRT229  = lvRT216[lvRT217 - 1];			
			var lvRT232 =  lvRT229.getAttribute("NumberLV");
			
            if(lvRT175 === "false")
			{
				if(lvRT232.lvRT247() <= lvRT180)
				{
					lvRT229.setAttribute("lvRT240" , true);
					
					if(lvRT92 !== undefined && lvRT92 !== null)
					{
						lvRT229.style.color = lvRT92;
					}
					
					if(lvRT214 !== undefined && lvRT214 !== null)
					{
						lvRT229.style.backgroundColor = lvRT214;
					}
					
					if(lvRT212 !== undefined && lvRT212 !== null)
					{
						lvRT229.style.borderColor = lvRT212;
					}
				}
			}
			else
			{
				if(lvRT232.lvRT247() >= lvRT180)
				{
					lvRT229.setAttribute("lvRT240" , false);
					
					if(lvRT210 !== undefined && lvRT210 !== null)
					{
						lvRT229.style.color = lvRT210;
					}
					
					if(lvRT215 !== undefined && lvRT215 !== null)
					{
						lvRT229.style.backgroundColor = lvRT215;
					}
					
					if(lvRT213 !== undefined && lvRT213 !== null)
					{
						lvRT229.style.borderColor = lvRT213;
					}
					
					lvRT209 = "true";
				}
			}
			
			if(lvRT197 !== undefined && lvRT197 !== null)
			{
				if(lvRT197.toString() === "false")
				{
					if(lvRT181 !== undefined && lvRT181 !== null)
					{
						if(lvRT181.toString() === "true")
						{
							lvRT229.removeEventListener("click", lvRT236);
							lvRT229.onmouseover = null;
							lvRT229.onmouseleave = null;
							lvRT229.removeAttribute("blockSelect");
						}
					}
				}
			}
			else
			{
				if(lvRT181 !== undefined && lvRT181 !== null)
				{
					if(lvRT181.toString() === "true")
					{
						lvRT229.removeEventListener("click", lvRT236);
						lvRT229.onmouseover = null;
						lvRT229.onmouseleave = null;
						lvRT229.removeAttribute("blockSelect");
					}
				}
			}
			
		}
	}
	
	if(lvRT203 !== undefined && lvRT203 !== null)
	{
		try
		{
			var lvRT220 = lvRT180;
			if(lvRT209 === "true")		
			{
				lvRT220 = lvRT180.lvRT247() - 1;
			}
				
			if(lvRT218 === "lvRT249")
			{			
				window[lvRT203](lvRT220.toString());
			}
			else if(lvRT218 === "lvRT250")
			{
				window[lvRT203](laavorGetLetter(lvRT220.toString()));		
			}	
		}
		catch(errorLaavor)
		{
			try
			{
				window[lvRT203](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}			
}