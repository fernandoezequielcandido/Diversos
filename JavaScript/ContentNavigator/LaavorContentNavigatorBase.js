var laavorItemsContentGlobal;
var laavorUserOptions;

function LaavorContentNavigator(idFather, options) {
	var fatherItem = document.getElementById(idFather);

	var optionsDefaults = GetDefaults();
	if (fatherItem !== undefined && fatherItem !== null) {

		if(laavorUserOptions === undefined || laavorUserOptions === null)
		{
			laavorUserOptions = [];
		}
	
		if (options !== undefined && options !== null) {
			laavorUserOptions[idFather] = options;
		}
		else {
			laavorUserOptions[idFather] = GetDefaults();
		}
	
		var itemHtml;
		if (options.elementItemHtml !== undefined && options.elementItemHtml !== null) {
			itemHtml = options.elementItemHtml;
		} else {
			itemHtml = optionsDefaults.elementItemHtml;
		}
	
		var itemsContent = fatherItem.getElementsByTagName(itemHtml);

		if (itemsContent !== undefined && itemsContent !== null) {

			for (var iItem = 0; iItem < itemsContent.length; iItem++) {
				itemsContent[iItem].style.display = "none";
			}

			var allItems = [];
			for (var iItemClone = 0; iItemClone < itemsContent.length; iItemClone++) {
				allItems.push(itemsContent[iItemClone].cloneNode(true));
			}
			laavorItemsContentGlobal = allItems;

			CreateVisualization(idFather);
		} else {
			throw new Error("The elementItemHtml 'children' was not found inside the parent.");
		}
	} else {
		throw new Error("Item with idFather informed was not found.");
	}
}

function CreateVisualization(idFather) {
	
	var laavorFather = document.getElementById(idFather);

	SaveDefaults(laavorUserOptions[idFather]);
		
	var userOptionsLocal = laavorUserOptions[idFather];
		
	var elemTable = document.createElement("table");
	var elemTR = document.createElement("tr");
	var elemTDPrevious = document.createElement("td");
	var elemTDContent = document.createElement("td");
	var elemTDNext = document.createElement("td");
		
	var elemContent = document.createElement("div");
	
	var elemSpaceLeftPrevious = document.createElement("span");
	var elemSpaceRightPrevious = document.createElement("span");
	var elemArrowPrevious;
	
	var elemSpaceLeftNext = document.createElement("span");
	var elemSpaceRightNext = document.createElement("span");
	var elemArrowNext;

    var uniqueName = laavorUniqueName(idFather);
	
	elemContent.innerHTML = laavorItemsContentGlobal[0].innerHTML;
	elemContent.id = uniqueName;
    elemContent.style.width = userOptionsLocal.widthContent.toString().replace("px", "") + "px";
    elemContent.style.heigth = userOptionsLocal.heigth.toString().replace("px", "") + "px";
		
	if(laavorUserOptions[idFather].useContentBorder.toString() === "true")
	{
		elemContent.style.border = "solid 1px";
		elemContent.style.borderColor = userOptionsLocal.borderColorContent;
    }
	
	if(laavorUserOptions[idFather].useExternalBorder.toString() === "true")
	{
		laavorFather.style.border = "solid 1px";
		laavorFather.style.borderColor = userOptionsLocal.borderColorExternal;
	}
	
	if(laavorUserOptions[idFather].backgroundColorContent !== "none")
	{
		elemContent.style.backgroundColor = userOptionsLocal.backgroundColorContent;
	}
	
	if(laavorUserOptions[idFather].backgroundColorExternal !== "none")
	{
		laavorFather.style.backgroundColor = userOptionsLocal.backgroundColorExternal;
	}
			
	if(userOptionsLocal.imageArrowPrevious !== "none" && userOptionsLocal.imageArrowNext !== "none"){
		elemArrowPrevious = document.createElement("img");
		elemArrowPrevious.src = userOptionsLocal.imageArrowPrevious;

		elemArrowPrevious.style.width = userOptionsLocal.imageArrowWidth.replace("px", "") + "px";
		elemArrowPrevious.style.height = userOptionsLocal.imageArrowHeight.replace("px", "") + "px";
		elemArrowPrevious.style.title = userOptionsLocal.imageArrowPreviousTitle;
		elemArrowPrevious.setAttribute("PositionToNavigate", -1);
		elemArrowPrevious.setAttribute("ContentID", uniqueName);
		elemArrowPrevious.id =  uniqueName + "_" + "previous";
		elemArrowPrevious.style.verticalAlign = "center";
		elemArrowPrevious.style.cursor = "default";
		elemArrowPrevious.style.opacity = 0.2;
		elemArrowPrevious.onclick = Previous;
			
		//elemTDPrevious.appendChild(elemSpaceLeftPrevious);
		elemTDPrevious.appendChild(elemArrowPrevious);
		//elemTDPrevious.appendChild(elemSpaceRightPrevious);
		
		elemTDContent.appendChild(elemContent);
		
		elemArrowNext = document.createElement("img");
		elemArrowNext.src = userOptionsLocal.imageArrowNext;

		elemArrowNext.style.width = userOptionsLocal.imageArrowWidth.replace("px", "") + "px";
		elemArrowNext.style.height = userOptionsLocal.imageArrowHeight.replace("px", "") + "px";
		elemArrowNext.style.title = userOptionsLocal.imageArrowNextTitle;
		elemArrowNext.setAttribute("PositionToNavigate", 1);
		elemArrowNext.setAttribute("ContentID", uniqueName);
		elemArrowNext.id =  uniqueName + "_" + "next";
		elemArrowNext.style.verticalAlign = "center";
		elemArrowNext.style.cursor = "pointer";
		elemArrowNext.onclick = Next;

		elemTDNext.appendChild(elemArrowNext);
	}
    else if (userOptionsLocal.imageArrowPrevious !== "none" && userOptionsLocal.imageArrowNext === "none")
    {
		throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");
    }
    else if (userOptionsLocal.imageArrowPrevious === "none" && userOptionsLocal.imageArrowNext !== "none")
    {
        throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");
    }
	else{
		throw new Error("imageArrowExpanded and imageArrowClosed are properties required for navigation.");
	}

	elemTable.appendChild(elemTR);
	elemTR.appendChild(elemTDPrevious);
	elemTR.appendChild(elemTDContent);
	elemTR.appendChild(elemTDNext);
	elemTable.style.verticalAlign = "center";
	
	laavorFather.appendChild(elemTable);
	laavorFather.style.width = userOptionsLocal.widthExternal.toString().replace("px", "") + "px";
	laavorFather.style.heigth = userOptionsLocal.heigth.toString().replace("px", "") + "px";
}

function laavorUniqueName(id) {
  "use strict";
  var laavorName = "";
  var charPotential = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    laavorName += charPotential.charAt(Math.floor(Math.random() * charPotential.length));

  if(id !== undefined && id !== null)
  {
	laavorName += "_" + id;  
  }	  
  
  return laavorName;
}

String.prototype.laavorToInteger = function()
{
	"use strict";
	var returnItem = parseInt(this);
	return returnItem;
};

function LaavorMoveToPrevious() {
	Previous();
}

function LaavorMoveToNext() {
	Next();
}

function Previous() {
	if(laavorItemsContentGlobal !== undefined && laavorItemsContentGlobal !== null)
	{
		var contentID = this.getAttribute("ContentID");
		var index = this.getAttribute("PositionToNavigate").toString().laavorToInteger();
		
		if(index !== -1)
		{
			var elemContent = document.getElementById(contentID);
			elemContent.innerHTML = "";
			elemContent.innerHTML = laavorItemsContentGlobal[index].innerHTML;
			var indexPos = index - 1;
			this.setAttribute("PositionToNavigate", indexPos);
			
			var arrowNext = document.getElementById(contentID + "_" + "next");
			var indexNext = arrowNext.getAttribute("PositionToNavigate").toString().laavorToInteger();
			indexNext = indexNext - 1;
			arrowNext.setAttribute("PositionToNavigate", indexNext);
			
			if(indexPos === -1)
			{
				this.style.opacity = 0.2;
				this.style.cursor = "default";
			}
			else
			{
				this.style.opacity = 1.0;
				this.style.cursor = "pointer";
			}
			
			if(indexNext === laavorItemsContentGlobal.length)
			{
				arrowNext.style.opacity = 0.2;
				arrowNext.style.cursor = "default";
			}
			else
			{
				arrowNext.style.opacity = 1.0;
				arrowNext.style.cursor = "pointer";
			}
		}
	}
}

function Next() {
	if(laavorItemsContentGlobal !== undefined && laavorItemsContentGlobal !== null)
	{
		var contentID = this.getAttribute("ContentID");
		var index = this.getAttribute("PositionToNavigate").toString().laavorToInteger();
		
		if(index < laavorItemsContentGlobal.length)
		{
			var elemContent = document.getElementById(contentID);
			elemContent.innerHTML = "";
			elemContent.innerHTML = laavorItemsContentGlobal[index].innerHTML;
			var indexPos = index + 1;
			this.setAttribute("PositionToNavigate", indexPos);
			
			var arrowPrevious = document.getElementById(contentID + "_" + "previous");
			var indexPrevious = arrowPrevious.getAttribute("PositionToNavigate").toString().laavorToInteger();
			indexPrevious = indexPrevious + 1;
			arrowPrevious.setAttribute("PositionToNavigate", indexPrevious);
			
			if(indexPos === laavorItemsContentGlobal.length)
			{
				this.style.opacity = 0.2;
				this.style.cursor = "default";
			}
			else
			{
				this.style.opacity = 1.0;
				this.style.cursor = "pointer";
			}
			
			if(indexPrevious === -1)
			{
				arrowPrevious.style.opacity = 0.2;
				arrowPrevious.style.cursor = "default";
			}
			else
			{
				arrowPrevious.style.opacity = 1.0;
				arrowPrevious.style.cursor = "pointer";
			}
		}
	}
}

function SaveDefaults(options) {
    var defaultOptions = GetDefaults();

    if (options.backgroundColorContent === undefined || options.backgroundColorContent === null) {
        options.backgroundColorContent = defaultOptions.backgroundColorContent;
    }
	
	if (options.backgroundColorExternal === undefined || options.backgroundColorExternal === null) {
        options.backgroundColorExternal = defaultOptions.backgroundColorExternal;
    }

    if (options.borderColorContent === undefined || options.borderColorContent === null) {
        options.borderColorContent = defaultOptions.borderColorContent;
    }
	
	if (options.imageArrowPrevious === undefined || options.imageArrowPrevious === null) {
        options.imageArrowPrevious = defaultOptions.imageArrowPrevious;
    }
	
	if (options.imageArrowNext === undefined || options.imageArrowNext === null) {
        options.imageArrowNext = defaultOptions.imageArrowNext;
    }
	
	if (options.imageArrowWidth === undefined || options.imageArrowWidth === null) {
        options.imageArrowWidth= defaultOptions.imageArrowWidth;
    }
	
	if (options.imageArrowHeight === undefined || options.imageArrowHeight === null) {
        options.imageArrowHeight = defaultOptions.imageArrowHeight;
    }
	
	if (options.elementItemHtml === undefined || options.elementItemHtml ===  null){
		options.elementItemHtml = defaultOptions.elementItemHtml;
	}
	
	if (options.useExternalBorder === undefined || options.useExternalBorder ===  null){
		options.useExternalBorder = defaultOptions.useExternalBorder;
	}
	
	if (options.useContentBorder === undefined || options.useContentBorder ===  null){
		options.useContentBorder = defaultOptions.useContentBorder;
	}
	
	if (options.borderColorExternal === undefined || options.borderColorExternal ===  null){
		options.borderColorExternal = defaultOptions.borderColorExternal;
	}
	
	if (options.borderColorContent === undefined || options.borderColorContent ===  null){
		options.borderColorContent = defaultOptions.borderColorContent;
	}
	
	if (options.widthContent === undefined || options.widthContent ===  null){
		options.widthContent = defaultOptions.widthContent;
	}
	
	if (options.widthExternal === undefined || options.widthExternal ===  null){
		options.widthExternal = defaultOptions.widthExternal;
	}
	
	if (options.heigth === undefined || options.heigth ===  null){
        options.heigth = defaultOptions.heigth;
	}
}

function GetDefaults() {
	return {
        imageArrowPrevious: "images/previous.png",
		imageArrowNext: "images/next.png",
		imageArrowPreviousTitle: "Previous",
		imageArrowNextTitle: "Next",
		imageArrowWidth: "44px",
		imageArrowHeight: "40px",
		elementItemHtml: 'span',
		useExternalBorder: true,
		useContentBorder: true,
		borderColorExternal: "DeepSkyBlue",
		borderColorContent: "DeepSkyBlue",
		backgroundColorContent: "none",
		backgroundColorExternal: "none",
		widthContent: "800px",
		widthExternal: "915px",
		heigth: "350px"
	};
}
