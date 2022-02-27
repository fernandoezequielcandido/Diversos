function LaavorRatingSwap()
{
	"use strict";
	var ratingImage =  document.getElementsByClassName("laavorRatingImage");
		
	if(ratingImage === undefined || ratingImage === null || ratingImage.length === 0)
	{
		
	}
	else
	{
		for(var iRatingImage = 0; iRatingImage < ratingImage.length; iRatingImage++)
		{		
			var ratingImageItem = ratingImage[iRatingImage];
			laavorRatingImageInitAll(ratingImageItem, iRatingImage);		
		}
	}
		
	var ratingNumber =  document.getElementsByClassName("laavorRatingNumber");
		
	if(ratingNumber === undefined || ratingNumber === null || ratingNumber.length === 0)
	{
		
	}
	else
	{
		for(var iRatingNumber = 0; iRatingNumber < ratingNumber.length; iRatingNumber++)
		{		
			var ratingNumberItem = ratingNumber[iRatingNumber];
			laavorRatingLabelInitAll(ratingNumberItem, "number");		
		}
	}
	
	var ratingLetter =  document.getElementsByClassName("laavorRatingLetter");
		
	if(ratingLetter === undefined || ratingLetter === null || ratingLetter.length === 0)
	{
		
	}
	else
	{	
		for(var iRatingLetter = 0; iRatingLetter < ratingLetter.length; iRatingLetter++)
		{		
			var ratingLetterItem = ratingLetter[iRatingLetter];
			laavorRatingLabelInitAll(ratingLetterItem, "letter");		
		}
	}
	
	var imageSwap =  document.getElementsByClassName("laavorSwapImage");
		
	if(imageSwap === undefined || imageSwap === null || imageSwap.length === 0)
	{
		
	}
    else
	{
		for(var iImageSwap = 0; iImageSwap < imageSwap.length; iImageSwap++)
		{		
			var imageSwapItem = imageSwap[iImageSwap];
			laavorImageSwapInitAll(imageSwapItem);		
		}
	}
	
	var labelSwap =  document.getElementsByClassName("laavorSwapLabel");
		
	if(labelSwap === undefined || labelSwap === null || labelSwap.length === 0)
	{
		
	}
	else
	{
		for(var iLabelSwap = 0; iLabelSwap < labelSwap.length; iLabelSwap++)
		{		
			var labelSwapItem = labelSwap[iLabelSwap];
			laavorLabelSwapInitAll(labelSwapItem);		
		}
	}
}

function laavorRatingImageResetAll(id)
{
	"use strict";
	var rating =  document.getElementById(id);
	rating.innerHTML = '';
	laavorRatingImageInitAll(rating);
}

function laavorRatingNumberResetAll(id)
{
	"use strict";
	var rating =  document.getElementById(id);
	rating.innerHTML = '';
	laavorRatingLabelInitAll(rating, "number");
}

function laavorRatingLetterResetAll(id)
{
	"use strict";
	var rating =  document.getElementById(id);
	rating.innerHTML = '';
	laavorRatingLabelInitAll(rating, "letter");
}

function laavorRatingImageInitAll(ratingItem, id)
{
	"use strict";
	var uniqueName = laavorUniqueName(id);
	
	ratingItem.setAttribute("LaavorAtrHex", uniqueName);
	ratingItem.classList.add(uniqueName);	
			
	if(ratingItem !== undefined && ratingItem !== null)
	{
		var imageSelect = ratingItem.getAttribute("imageSelect");
		var imageDeselect = ratingItem.getAttribute("imageDeselect");
		var spaceBetween = ratingItem.getAttribute("spaceBetween");
		
		if(imageSelect !== undefined && imageSelect !== null && imageDeselect !== undefined && imageDeselect !== null)
		{	
			var itemsNumber = ratingItem.getAttribute("itemsNumber");
			var initialValue = ratingItem.getAttribute("initialValue");
			var isReadOnly = ratingItem.getAttribute("isReadOnly");
			var blockSelect = ratingItem.getAttribute("blockSelect");
			var imageWidth = ratingItem.getAttribute("imageWidth");
			var imageHeight = ratingItem.getAttribute("imageHeight");
			var commandEvent = ratingItem.getAttribute("commandEvent");
			
			var numberSpaces;
			if(spaceBetween !== undefined && spaceBetween !== null)
			{
				numberSpaces = spaceBetween.laavorToInteger();
			}
			else
			{
				numberSpaces = getDefaultProperties("spaceBetweenImage").laavorToInteger();	
			}
	
			if(itemsNumber === undefined || itemsNumber === null)
			{
				itemsNumber = 5;				
			}
			
			if(initialValue === undefined || initialValue === null)
			{
				initialValue = 0;
			}
							
			for(var iItem = 1; iItem <= itemsNumber; iItem++)
			{
				var elem = document.createElement("img");
				elem.setAttribute("NumberLV", iItem);
				elem.setAttribute("ItemsNumber", itemsNumber);
				elem.setAttribute("imageSelect", imageSelect);				
				elem.setAttribute("imageDeselect", imageDeselect);	
			
			    elem.style.cursor = "pointer";
				
				elem.setAttribute("Name", uniqueName);
				elem.setAttribute("LaavorAtrHex", uniqueName);
				
				elem.setAttribute("commandEvent", commandEvent);
					
				if(iItem <= initialValue)
				{
					elem.setAttribute("IsSelectedLV", true);
					elem.src = imageSelect;
				}
				else
				{
					elem.setAttribute("IsSelectedLV", false);
					elem.src = imageDeselect;
				}
				
				if(isReadOnly !== undefined && isReadOnly !== null)
				{
					if(isReadOnly.toString() === "true")
					{
						if(blockSelect !== undefined && blockSelect !== null)
						{
							elem.setAttribute("blockSelect", blockSelect);	
						}
					}
					else
					{
						elem.addEventListener("click", laavorClickImage);	
						elem.onmouseover = HoverRatingImage;
						elem.onmouseleave = LeaveHoverRatingImage;
					}
				}
				else
				{
					elem.addEventListener("click", laavorClickImage);	
					
					if(blockSelect !== undefined && blockSelect !== null)
					{
						elem.setAttribute("blockSelect", blockSelect);	
					}
					
					elem.onmouseover = HoverRatingImage;
					elem.onmouseleave = LeaveHoverRatingImage;
				}
				
				if(imageWidth !== undefined && imageWidth !== null)
				{
					elem.style.width = imageWidth;
				}
				
				if(imageHeight !== undefined && imageHeight !== null)
				{
					elem.style.height = imageHeight;
				}
				
				if(iItem !== 1 && numberSpaces > 0)
				{
					for(var iS = 0; iS < numberSpaces; iS++)
					{
						var elemSpace = document.createElement("span");
						elemSpace.innerHTML = "&nbsp";
						ratingItem.appendChild(elemSpace);
					}
				}
									
				ratingItem.appendChild(elem);
			}
		}
	}
}

function HoverRatingImage() {

	if(this !== undefined && this !== null)
	{
		var indexTop = this.getAttribute("NumberLV").laavorToInteger();
		var uniqueNameLaavor = this.getAttribute("LaavorAtrHex");
		var rating = document.getElementsByClassName(uniqueNameLaavor)[0];
		var listImages = rating.getElementsByTagName("img");
		
		for(var iImage = 0; iImage < indexTop; iImage++)
		{			
			var currentImage = listImages[iImage];
			var isSelected = currentImage.getAttribute("IsSelectedLV");
			if(isSelected !== undefined && isSelected != null)
			{
				if(isSelected === "false")
				{
					currentImage.src = currentImage.getAttribute("imageSelect");	
				}
			}
		}	
	}	
}

function LeaveHoverRatingImage() {
	if(this !== undefined && this !== null)
	{
		var indexTop = this.getAttribute("NumberLV").laavorToInteger();
		var uniqueNameLaavor = this.getAttribute("LaavorAtrHex");
		var rating = document.getElementsByClassName(uniqueNameLaavor)[0];
		var listImages = rating.getElementsByTagName("img")
		
		for(var iImage = 0; iImage < indexTop; iImage++)
		{			
			var currentImage = listImages[iImage];
			var isSelected = currentImage.getAttribute("IsSelectedLV");
			if(isSelected !== undefined && isSelected != null)
			{
				if(isSelected === "false")
				{
					currentImage.src = currentImage.getAttribute("imageDeselect");	
				}
			}
		}	
	}		
}

function laavorRatingLabelInitAll(ratingItem, typeRating)
{
	"use strict";
	var uniqueNameBase = laavorUniqueName();
	var uniqueNameOthers = laavorUniqueName();	

	ratingItem.setAttribute("LaavorAtrHex", uniqueNameBase);
	ratingItem.classList.add(uniqueNameBase);
		
	if(ratingItem !== undefined && ratingItem !== null)
	{
		var itemsNumber = ratingItem.getAttribute("itemsNumber");
		var initialValue = ratingItem.getAttribute("initialValue");
		var isReadOnly = ratingItem.getAttribute("isReadOnly");
		var blockSelect = ratingItem.getAttribute("blockSelect");
		var spaceBetween = ratingItem.getAttribute("spaceBetween");
		var fontSize = ratingItem.getAttribute("fontSize");
		var border = ratingItem.getAttribute("border");
		var borderRadius = ratingItem.getAttribute("borderRadius");
	    var textColorSelect = ratingItem.getAttribute("textColorSelect");
		var textColorDeselect = ratingItem.getAttribute("textColorDeselect");
		var borderColorSelect = ratingItem.getAttribute("borderColorSelect");
		var borderColorDeselect = ratingItem.getAttribute("borderColorDeselect");
		var backgroundColorSelect = ratingItem.getAttribute("backgroundColorSelect");
		var backgroundColorDeselect = ratingItem.getAttribute("backgroundColorDeselect");
		var commandEvent = ratingItem.getAttribute("commandEvent");
					
		if(itemsNumber === undefined || itemsNumber === null)
		{
			itemsNumber = 5;				
		}
		
		if(initialValue === undefined || initialValue === null)
		{
			initialValue = 0;
		}
		
		var numberSpaces;
		if(spaceBetween !== undefined && spaceBetween !== null)
		{
			numberSpaces = spaceBetween.laavorToInteger();
		}
		else
		{
			numberSpaces = getDefaultProperties("spaceBetween").laavorToInteger();	
		}
		
		if(fontSize === undefined || fontSize === null || fontSize === "")
		{
			fontSize = getDefaultProperties("fontSize");
		}
		
		if(border === undefined || border === null || border === "")
		{
			border = getDefaultProperties("border");
		}
		
		if(borderRadius === undefined || borderRadius === null || borderRadius === "")
		{
			borderRadius = getDefaultProperties("borderRadius");
		}
		
		if(textColorSelect === undefined || textColorSelect === null || textColorSelect === "")
		{
			textColorSelect = getDefaultProperties("textColorSelect");
		}
		
		if(textColorDeselect === undefined || textColorDeselect === null || textColorDeselect === "")
		{
			textColorDeselect = getDefaultProperties("textColorDeselect");
		}
		
		if(backgroundColorSelect === undefined || backgroundColorSelect === null || backgroundColorSelect === "")
		{
			backgroundColorSelect = getDefaultProperties("backgroundColorSelect");
		}
		
		if(borderColorSelect === undefined || borderColorSelect === null || borderColorSelect === "")
		{
			borderColorSelect = getDefaultProperties("borderColorSelect");
		}
		
		if(borderColorDeselect === undefined || borderColorDeselect === null || borderColorDeselect === "")
		{
			borderColorDeselect = getDefaultProperties("borderColorDeselect");
		}	
		
		if(backgroundColorSelect === undefined || backgroundColorSelect === null || backgroundColorSelect === "")
		{
			backgroundColorSelect = getDefaultProperties("backgroundColorSelect");
		}
		
		if(backgroundColorDeselect === undefined || backgroundColorDeselect === null || backgroundColorDeselect === "")
		{
			backgroundColorDeselect = getDefaultProperties("backgroundColorDeselect");
		}
							
		for(var iItem = 1; iItem <= itemsNumber; iItem++)
		{
			var elem = document.createElement("span");
			elem.setAttribute("NumberLV", iItem);
			elem.setAttribute("ItemsNumber", itemsNumber);
			elem.style.cursor = "pointer";
			elem.style.fontSize = fontSize;
			elem.style.borderRadius = borderRadius;
			elem.style.border = border;
			elem.style.borderStyle = getDefaultProperties("borderStyle");
			
			elem.setAttribute("IsSelectedLV", true);

			elem.setAttribute("Name", uniqueNameBase);
			elem.setAttribute("LaavorAtrHex", uniqueNameBase);
			elem.setAttribute("LaavorAtrHexOthers", uniqueNameOthers);
			elem.classList.add(uniqueNameOthers);

			elem.setAttribute("textColorSelect", textColorSelect);
			elem.setAttribute("textColorDeselect", textColorDeselect);
			elem.setAttribute("borderColorSelect", borderColorSelect);
			elem.setAttribute("borderColorDeselect", borderColorDeselect);
			elem.setAttribute("backgroundColorSelect", backgroundColorSelect);
			elem.setAttribute("backgroundColorDeselect", backgroundColorDeselect);
			elem.setAttribute("typeRating", typeRating.toString());
			
			if(commandEvent !== undefined && commandEvent !== null)
			{
				elem.setAttribute("commandEvent", commandEvent);
			}
			
			if(iItem !== 1 && numberSpaces > 0)
			{
				for(var iS = 0; iS < numberSpaces; iS++)
				{
					var elemSpace = document.createElement("span");
					elemSpace.innerHTML = "&nbsp";
					ratingItem.appendChild(elemSpace);
				}
			}
			
			if(typeRating === "number")
			{
				elem.innerHTML =  "&nbsp" + iItem.toString() + "&nbsp";
			}
			else if(typeRating === "letter")
			{
				elem.innerHTML =  "&nbsp" + laavorGetLetter(iItem) + "&nbsp";				
			}
			
			if(iItem <= initialValue)
			{
				elem.setAttribute("IsSelectedLV", true);
				elem.style.color = textColorSelect;
				elem.style.backgroundColor = backgroundColorSelect;
				elem.style.borderColor = borderColorSelect;
			}
			else
			{
				elem.setAttribute("IsSelectedLV", false);
				elem.style.color = textColorDeselect;
				elem.style.backgroundColor = backgroundColorDeselect;
			    elem.style.borderColor = borderColorDeselect;
		    }
			
			if(isReadOnly !== undefined && isReadOnly !== null)
			{
				if(isReadOnly.toString() === "true")
				{
					if(blockSelect !== undefined && blockSelect !== null)
					{
						elem.setAttribute("blockSelect", blockSelect);	
					}
				}
				else
				{
					elem.addEventListener("click", laavorClickLabel);	
				}
				
				elem.onmouseover = HoverRatingLabel;
				elem.onmouseleave = LeaveHoverRatingLabel;
			}
			else
			{
				elem.addEventListener("click", laavorClickLabel);	
				
				if(blockSelect !== undefined && blockSelect !== null)
				{
					elem.setAttribute("blockSelect", blockSelect);	
				}
				
				elem.onmouseover = HoverRatingLabel;
				elem.onmouseleave = LeaveHoverRatingLabel;
			}
								
			ratingItem.appendChild(elem);
		}
	}
}

function HoverRatingLabel() {
	
	if(this !== undefined && this !== null)
	{
		var indexTop = this.getAttribute("NumberLV").laavorToInteger();
		var uniqueNameOthers = this.getAttribute("LaavorAtrHexOthers");
		var listLetters = document.getElementsByClassName(uniqueNameOthers);
		
		if(listLetters.length > 0)
		{
			var textColorSelect = listLetters[0].getAttribute("textColorSelect");
			var borderColorSelect = listLetters[0].getAttribute("borderColorSelect");
			var backgroundColorSelect = listLetters[0].getAttribute("backgroundColorSelect");

			for(var iLetter = 0; iLetter < indexTop; iLetter++)
			{		
				var currentLetter = listLetters[iLetter];
				var isSelected = currentLetter.getAttribute("IsSelectedLV");
				if(isSelected !== undefined && isSelected != null)
				{
					if(isSelected === "false")
					{
						currentLetter.style.color = textColorSelect;
						currentLetter.style.backgroundColor = backgroundColorSelect;
						currentLetter.style.borderColor = borderColorSelect;
					}
				}
				else
				{
					currentLetter.style.color = textColorSelect;
					currentLetter.style.backgroundColor = backgroundColorSelect;
					currentLetter.style.borderColor = borderColorSelect;
				}
			}	
		}
	}	
}

function LeaveHoverRatingLabel() {

	if(this !== undefined && this !== null)
	{
		var indexTop = this.getAttribute("NumberLV").laavorToInteger();
		var uniqueNameOthers = this.getAttribute("LaavorAtrHexOthers");
		var listLetters = document.getElementsByClassName(uniqueNameOthers);
		
		if(listLetters.length > 0)
		{
			var textColorDeselect = listLetters[0].getAttribute("textColorDeselect");
			var borderColorDeselect = listLetters[0].getAttribute("borderColorDeselect");
			var backgroundColorDeselect = listLetters[0].getAttribute("backgroundColorDeselect");
			
			for(var iLetter = 0; iLetter < indexTop; iLetter++)
			{		
				var currentLetter = listLetters[iLetter];
				var isSelected = currentLetter.getAttribute("IsSelectedLV");
				if(isSelected !== undefined && isSelected != null)
				{
					if(isSelected === "false")
					{
						currentLetter.style.color = textColorDeselect;
						currentLetter.style.backgroundColor = backgroundColorDeselect;
						currentLetter.style.borderColor = borderColorDeselect;
					}
				}
				else
				{
					currentLetter.style.color = textColorDeselect;
					currentLetter.style.backgroundColor = backgroundColorDeselect;
					currentLetter.style.borderColor = borderColorDeselect;
				}
			}	
		}
	}		
}

function laavorImageSwapInitAll(imageSwapItem)
{
	"use strict";
	var uniqueName = laavorUniqueName();
		
	imageSwapItem.setAttribute("LaavorAtrHex", uniqueName);
	
	if(imageSwapItem !== undefined && imageSwapItem !== null)
	{
		var firstImage = imageSwapItem.getAttribute("firstImage");
		var secondImage = imageSwapItem.getAttribute("secondImage");
		var firstImageWidth = imageSwapItem.getAttribute("firstImageWidth");
		var firstImageHeight = imageSwapItem.getAttribute("firstImageHeight");		
		var secondImageWidth = imageSwapItem.getAttribute("secondImageWidth");
		var secondImageHeight = imageSwapItem.getAttribute("secondImageHeight");		
		var blockSwap = imageSwapItem.getAttribute("blockSwap");
		var commandEvent = imageSwapItem.getAttribute("commandEvent");
									
		var elem = document.createElement("img");
		elem.setAttribute("firstImage", firstImage);
		elem.setAttribute("secondImage", secondImage);
		elem.setAttribute("blockSwap", blockSwap);
		elem.setAttribute("isFirstImage", true);
		
		elem.style.cursor = "pointer";
		
		if(commandEvent !== undefined && commandEvent !== null)
		{
			elem.setAttribute("commandEvent", commandEvent);
		}
		
		if(firstImageWidth !== undefined && firstImageWidth !== null)
		{
			elem.setAttribute("firstImageWidth", firstImageWidth);						
		}
		
		if(firstImageHeight !== undefined && firstImageHeight !== null)
		{
			elem.setAttribute("firstImageHeight", firstImageHeight);						
		}
		
		if(secondImageWidth !== undefined && secondImageWidth !== null)
		{
			elem.setAttribute("secondImageWidth", secondImageWidth);				
		}
		
		if(secondImageHeight !== undefined && secondImageHeight !== null)
		{
			elem.setAttribute("secondImageHeight", secondImageHeight);	
		}
				
		elem.setAttribute("Name", uniqueName);
		elem.setAttribute("LaavorAtrHex", uniqueName);	
		
		elem.style.width = firstImageWidth;
		elem.style.height = firstImageHeight;
		
		elem.src = firstImage;
		elem.addEventListener("click", laavorClickImageSwap);
		
		imageSwapItem.appendChild(elem);
	}
}

function laavorLabelSwapInitAll(labelSwapItem)
{
	"use strict";
	var uniqueName = laavorUniqueName();
		
	labelSwapItem.setAttribute("LaavorAtrHex", uniqueName);
	
	if(labelSwapItem !== undefined && labelSwapItem !== null)
	{
		var firstText = labelSwapItem.getAttribute("firstText");
		var secondText = labelSwapItem.getAttribute("secondText");
		var firstFontSize = labelSwapItem.getAttribute("firstFontSize");
		var secondFontSize = labelSwapItem.getAttribute("secondFontSize");
		var border = labelSwapItem.getAttribute("border");
		var borderRadius = labelSwapItem.getAttribute("borderRadius");
	    var firstTextColor = labelSwapItem.getAttribute("firstTextColor");
		var secondTextColor = labelSwapItem.getAttribute("secondTextColor");
		var firstBorderColor = labelSwapItem.getAttribute("firstBorderColor");
		var secondBorderColor = labelSwapItem.getAttribute("secondBorderColor");
		var firstBackgroundColor = labelSwapItem.getAttribute("firstBackgroundColor");
		var secondBackgroundColor = labelSwapItem.getAttribute("secondBackgroundColor");
	
		var blockSwap = labelSwapItem.getAttribute("blockSwap");
		var commandEvent = labelSwapItem.getAttribute("commandEvent");
									
		var elem = document.createElement("span");
		elem.setAttribute("firstText", firstText);
		elem.setAttribute("secondText", secondText);
		elem.setAttribute("blockSwap", blockSwap);
		elem.setAttribute("isFirstText", true);
		
		elem.style.cursor = "pointer";

		elem.style.borderStyle = getDefaultProperties("borderStyle");
		
		if(commandEvent !== undefined && commandEvent !== null)
		{
			elem.setAttribute("commandEvent", commandEvent);
		}
		
		if(firstFontSize === undefined || firstFontSize === null || firstFontSize === "")
		{
			firstFontSize = getDefaultProperties("fontSize");
		}
		elem.style.fontSize = firstFontSize;
		
		if(secondFontSize === undefined || secondFontSize === null || secondFontSize === "")
		{
			secondFontSize = getDefaultProperties("fontSize");
		}
				
		if(border === undefined || border === null || border === "")
		{
			border = getDefaultProperties("border");
		}
		elem.style.border = border;
		
		if(borderRadius === undefined || borderRadius === null || borderRadius === "")
		{
			borderRadius = getDefaultProperties("borderRadius");
		}
		elem.style.borderRadius = borderRadius;
		
		if(firstTextColor === undefined || firstTextColor === null || firstTextColor === "")
		{
			firstTextColor = getDefaultProperties("firstTextColor");
		}
		
		if(secondTextColor === undefined || secondTextColor === null || secondTextColor === "")
		{
			secondTextColor = getDefaultProperties("secondTextColor");
		}
		
		if(firstBackgroundColor === undefined || firstBackgroundColor === null || firstBackgroundColor === "")
		{
			firstBackgroundColor = getDefaultProperties("firstBackgroundColor");
		}
		
		if(secondBackgroundColor === undefined || secondBackgroundColor === null || secondBackgroundColor === "")
		{
			secondBackgroundColor = getDefaultProperties("secondBackgroundColor");
		}
		
		if(firstBorderColor === undefined || firstBorderColor === null || firstBorderColor === "")
		{
			firstBorderColor = getDefaultProperties("firstBorderColor");
		}
		
		if(secondBorderColor === undefined || secondBorderColor === null || secondBorderColor === "")
		{
			secondBorderColor = getDefaultProperties("secondBorderColor");
		}
		
		if(firstFontSize !== undefined && firstFontSize !== null && firstFontSize !== "")
		{
			elem.setAttribute("firstFontSize", firstFontSize);
		}
		elem.style.fontSize = firstFontSize;
		
		if(secondFontSize !== undefined && secondFontSize !== null && secondFontSize !== "")
		{
			elem.setAttribute("secondFontSize", secondFontSize);
		}
				
		if(borderRadius !== undefined && borderRadius !== null && borderRadius !== "")
		{
			elem.setAttribute("borderRadius", borderRadius);
		}
		elem.style.borderRadius = borderRadius;
		
		if(firstTextColor !== undefined && firstTextColor !== null && firstTextColor !== "")
		{
			elem.setAttribute("firstTextColor", firstTextColor);
		}
		elem.style.color = firstTextColor;
		
		if(secondTextColor !== undefined && secondTextColor !== null && secondTextColor !== "")
		{
			elem.setAttribute("secondTextColor", secondTextColor);
		}
		
		if(firstBorderColor !== undefined && firstBorderColor !== null && firstBorderColor !== "")
		{
			elem.setAttribute("firstBorderColor", firstBorderColor);
		}
		elem.style.borderColor = firstBorderColor;
		
		if(secondBorderColor !== undefined && secondBorderColor !== null && secondBorderColor !== "")
		{
			elem.setAttribute("secondBorderColor", secondBorderColor);	
		}
		
		if(firstBackgroundColor !== undefined && firstBackgroundColor !== null && firstBackgroundColor !== "")
		{
			elem.setAttribute("firstBackgroundColor", firstBackgroundColor);
		}
		elem.style.backgroundColor = firstBackgroundColor;
		
		if(secondBackgroundColor !== undefined && secondBackgroundColor !== null && secondBackgroundColor !== "")
		{
			elem.setAttribute("secondBackgroundColor", secondBackgroundColor);	
		}
					
		elem.setAttribute("Name", uniqueName);
		elem.setAttribute("LaavorAtrHex", uniqueName);	
				
		elem.innerHTML = firstText;
		elem.addEventListener("click", laavorClickLabelSwap);
		
		labelSwapItem.appendChild(elem);
	}
}

function getDefaultProperties(propertyName)
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
		
	var returnValue = valuesD[propertyName];
	if(returnValue !== undefined && returnValue !== null)
	{
		return returnValue;	
	}
	else
	{
		return "";
	}
}

function laavorRatingGetValue(id)
{
	"use strict";
	var rating = document.getElementById(id);
	var uniqueNameLaavor = rating.getAttribute("LaavorAtrHex");
	
	if(rating !== undefined && rating !== null)
	{
		var count = 0;
		for(var iCh = 0; iCh < rating.children.length; iCh++)
		{
			var element = rating.children[iCh];
			var nameLocal = element.getAttribute("LaavorAtrHex");
			
			if(nameLocal !== undefined && nameLocal !== null)
			{
				if(nameLocal === uniqueNameLaavor)
				{
					var isSelected = element.getAttribute("IsSelectedLV");
					if(isSelected === "true")
					{
						count++;
					}
				}
			}
		}
		
		return count;
	}
	
	return "error";
}

function laavorRatingLetterGetValue(id)
{
	"use strict";
	var rating = document.getElementById(id);
	var uniqueNameLaavor = rating.getAttribute("LaavorAtrHex");
	
	if(rating !== undefined && rating !== null)
	{
		var count = 0;
		for(var iCh = 0; iCh < rating.children.length; iCh++)
		{
			var element = rating.children[iCh];
			var nameLocal = element.getAttribute("LaavorAtrHex");
			
			if(nameLocal !== undefined && nameLocal !== null)
			{
				if(nameLocal === uniqueNameLaavor)
				{
					var isSelected = element.getAttribute("IsSelectedLV");
					if(isSelected === "true")
					{
						count++;
					}
				}
			}
		}
		
		return laavorGetLetter(count);
	}
	
	return "error";
}

String.prototype.laavorToInteger = function()
{
	"use strict";
	var returnItem = parseInt(this);
	return returnItem;
};

String.prototype.laavorToDouble = function()
{
	"use strict";
	var returnItem = parseFloat(this);
	return returnItem;
};

String.prototype.laavorContains  = function(search)
{
	"use strict";
	var returnItem = this.indexOf(search) !== -1;
	return returnItem;
};

String.prototype.laavorReplaceAll = function(search, substitution)
{
	"use strict";
    var valueStr = this;
    return valueStr.split(search).join(substitution);
};

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

function laavorGetLetter(indexLetter) {
  "use strict";
  var charPotential = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return charPotential[indexLetter];
}

function laavorClickImageSwap(event)
{
	"use strict";
	var itemLaavor = event.currentTarget;
	var firstImage = itemLaavor.getAttribute("firstImage");
	var secondImage = itemLaavor.getAttribute("secondImage");
	
	var firstImageWidth = itemLaavor.getAttribute("firstImageWidth");
	var firstImageHeight = itemLaavor.getAttribute("firstImageHeight");
	var secondImageWidth = itemLaavor.getAttribute("secondImageWidth");
	var secondImageHeight = itemLaavor.getAttribute("secondImageHeight");
	
	var isFirstImage = itemLaavor.getAttribute("isFirstImage").toString();
	var blockSwap = itemLaavor.getAttribute("blockSwap").toString();
	var commandEvent = itemLaavor.getAttribute("commandEvent");
		
	var currentImage = "";
	var firstOrSecond = "";
	if(firstImage !== undefined && firstImage !== null && secondImage !== undefined && secondImage !== null)
	{
		if(isFirstImage === "true")
		{
			itemLaavor.src = secondImage;
			currentImage = secondImage;
			firstOrSecond =  "second";
						
			if(secondImageWidth !== undefined && secondImageWidth !== null)
			{
				itemLaavor.style.width = secondImageWidth;	
			}
			
			if(secondImageHeight !== undefined && secondImageHeight !== null)
			{
				itemLaavor.style.height = secondImageHeight;				
			}
			
			itemLaavor.setAttribute("isFirstImage", false);
			
			if(blockSwap !== undefined && blockSwap !== null)
			{
				if(blockSwap.toString() === "true")
				{
					itemLaavor.removeEventListener("click", laavorClickImageSwap);
					itemLaavor.removeAttribute("blockSwap");
				}
			}
		}
		else if(isFirstImage === "false")
		{
			itemLaavor.src = firstImage;
			currentImage = firstImage;
			firstOrSecond =  "first";
			
			if(firstImageWidth !== undefined && firstImageWidth !== null)
			{
				itemLaavor.style.width = firstImageWidth;	
			}
			
			if(firstImageHeight !== undefined && firstImageHeight !== null)
			{
				itemLaavor.style.height = firstImageHeight;				
			}
			
			itemLaavor.setAttribute("isFirstImage", true);
			
			if(blockSwap !== undefined && blockSwap !== null)
			{
				if(blockSwap.toString() === "true")
				{
					itemLaavor.removeEventListener("click", laavorClickImageSwap);
					itemLaavor.removeAttribute("blockSwap");
				}
			}
		}	
	}
	
	if(commandEvent !== undefined && commandEvent !== null)
	{
		try
		{
			window[commandEvent](currentImage, firstOrSecond);		
		}
		catch(errorLaavor)
		{
			try
			{
				window[commandEvent](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function laavorClickLabelSwap(event)
{
	"use strict";
	var itemLaavor = event.currentTarget;
	var firstText = itemLaavor.getAttribute("firstText");
	var isFirstText = itemLaavor.getAttribute("isFirstText");
	var secondText = itemLaavor.getAttribute("secondText");
	var firstFontSize = itemLaavor.getAttribute("firstFontSize");
	var secondFontSize = itemLaavor.getAttribute("secondFontSize");
	var firstTextColor = itemLaavor.getAttribute("firstTextColor");
	var secondTextColor = itemLaavor.getAttribute("secondTextColor");
	var firstBorderColor = itemLaavor.getAttribute("firstBorderColor");
	var secondBorderColor = itemLaavor.getAttribute("secondBorderColor");
	var firstBackgroundColor = itemLaavor.getAttribute("firstBackgroundColor");
	var secondBackgroundColor = itemLaavor.getAttribute("secondBackgroundColor");
		
	var blockSwap = itemLaavor.getAttribute("blockSwap");
	
	var commandEvent = itemLaavor.getAttribute("commandEvent");
		
	var currentText = "";
	var firstOrSecond = "";
	if(firstText !== undefined && firstText !== null && secondText !== undefined && secondText !== null)
	{
		if(isFirstText === "true")
		{
			itemLaavor.innerHTML = secondText;
			currentText = secondText;
			firstOrSecond =  "second";
						
			if(secondFontSize !== undefined && secondFontSize !== null)
			{
				itemLaavor.style.fontSize = secondFontSize;	
			}
			
			if(secondTextColor !== undefined && secondTextColor !== null)
			{
				itemLaavor.style.color = secondTextColor;				
			}
			
			if(secondBackgroundColor !== undefined && secondBackgroundColor !== null)
			{
				itemLaavor.style.backgroundColor = secondBackgroundColor;				
			}
			
			if(secondBorderColor !== undefined && secondBorderColor !== null)
			{
				itemLaavor.style.borderColor = secondBorderColor;				
			}
			
			itemLaavor.setAttribute("isFirstText", false);
			
			if(blockSwap !== undefined && blockSwap !== null)
			{
				if(blockSwap.toString() === "true")
				{
					itemLaavor.removeEventListener("click", laavorClickLabelSwap);
					itemLaavor.removeAttribute("blockSwap");
				}
			}
		}
		else if(isFirstText === "false")
		{
			itemLaavor.innerHTML = firstText;
			currentText = firstText;
			firstOrSecond =  "first";
						
			if(firstFontSize !== undefined && firstFontSize !== null)
			{
				itemLaavor.style.fontSize = firstFontSize;	
			}
			
			if(firstTextColor !== undefined && firstTextColor !== null)
			{
				itemLaavor.style.color = firstTextColor;				
			}
			
			if(firstBackgroundColor !== undefined && firstBackgroundColor !== null)
			{
				itemLaavor.style.backgroundColor = firstBackgroundColor;				
			}
			
			if(firstBorderColor !== undefined && firstBorderColor !== null)
			{
				itemLaavor.style.borderColor = firstBorderColor;				
			}
						
			itemLaavor.setAttribute("isFirstText", true);
			
			if(blockSwap !== undefined && blockSwap !== null)
			{
				if(blockSwap.toString() === "true")
				{
					itemLaavor.removeEventListener("click", laavorClickLabelSwap);
					itemLaavor.removeAttribute("blockSwap");
				}
			}
		}	
	}
	
	if(commandEvent !== undefined && commandEvent !== null)
	{
		try
		{
			window[commandEvent](currentText, firstOrSecond);		
		}
		catch(errorLaavor)
		{
			try
			{
				window[commandEvent](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function laavorClickImage(event)
{
	"use strict";
	var imageLaavor = event.currentTarget;
	var isSelectedItem = imageLaavor.getAttribute("IsSelectedLV").toString();
	var uniqueNameLaavor = imageLaavor.getAttribute("LaavorAtrHex");
    var numberClick = imageLaavor.getAttribute("NumberLV");	
	var blockSelect = imageLaavor.getAttribute("blockSelect");
	var isReadOnly = imageLaavor.getAttribute("isReadOnly");
	var commandEvent = imageLaavor.getAttribute("commandEvent");
		
	var allImages = document.getElementsByName(uniqueNameLaavor);
	
	var subtract = "false";
	if(allImages !== undefined && allImages !== null && allImages.length > 0)
	{
		for(var iM = 1; iM <= allImages.length; iM++)
		{
			var currentImage  = allImages[iM - 1];			
			var numberCurrent =  currentImage.getAttribute("NumberLV");
			
            if(isSelectedItem === "false")
			{
				if(numberCurrent.laavorToInteger() <= numberClick)
				{
					currentImage.setAttribute("IsSelectedLV" , true);
					currentImage.src = currentImage.getAttribute("imageSelect");				
				}
			}
			else
			{
				if(numberCurrent.laavorToInteger() >= numberClick)
				{
					currentImage.setAttribute("IsSelectedLV" , false);
					currentImage.src = currentImage.getAttribute("imageDeselect");				
				}
				
				subtract = "true";
			}
			
			if(isReadOnly !== undefined && isReadOnly !== null)
			{
				if(isReadOnly.toString() === "false")
				{
					if(blockSelect !== undefined && blockSelect !== null)
					{
						if(blockSelect.toString() === "true")
						{
							currentImage.removeEventListener("click", laavorClickImage);
							currentImage.removeAttribute("blockSelect");
									
							currentImage.onmouseover = null;
						    currentImage.onmouseleave = null;
						}
					}
				}
			}
			else
			{
				if(blockSelect !== undefined && blockSelect !== null)
				{
					if(blockSelect.toString() === "true")
					{
						currentImage.removeEventListener("click", laavorClickImage);
						currentImage.removeAttribute("blockSelect");
						
						currentImage.onmouseover = null;
						currentImage.onmouseleave = null
					}
				}
			}
			
		}
	}
	
	if(commandEvent !== undefined && commandEvent !== null)
	{
		try
		{
			if(subtract === "false")
			{
				window[commandEvent](numberClick);
			}
			else
			{
				var valueCalc = numberClick.laavorToInteger() - 1;
				window[commandEvent](valueCalc);
			}
		}
		catch(errorLaavor)
		{
			try
			{
				window[commandEvent](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}
}

function laavorClickLabel(event)
{
	"use strict";
	var labelLaavor = event.currentTarget;
	var isSelectedItem = labelLaavor.getAttribute("IsSelectedLV").toString();
	var uniqueNameLaavor = labelLaavor.getAttribute("LaavorAtrHex");
    var numberClick = labelLaavor.getAttribute("NumberLV");	
	var blockSelect = labelLaavor.getAttribute("blockSelect");
	var isReadOnly = labelLaavor.getAttribute("isReadOnly");
	var textColorSelect = labelLaavor.getAttribute("textColorSelect");
	var textColorDeselect = labelLaavor.getAttribute("textColorDeselect");
	var borderColorSelect = labelLaavor.getAttribute("borderColorSelect");
	var borderColorDeselect = labelLaavor.getAttribute("borderColorDeselect");
	var backgroundColorSelect = labelLaavor.getAttribute("backgroundColorSelect");
	var backgroundColorDeselect = labelLaavor.getAttribute("backgroundColorDeselect");
	var typeRating = labelLaavor.getAttribute("typeRating");
	var commandEvent = labelLaavor.getAttribute("commandEvent");
	
	var allItems = document.getElementsByName(uniqueNameLaavor);
	
	var subtract = "false";
	
	if(allItems !== undefined && allItems !== null && allItems.length > 0)
	{
		for(var iN = 1; iN <= allItems.length; iN++)
		{
			var currentLabel  = allItems[iN - 1];			
			var itemNumber =  currentLabel.getAttribute("NumberLV");
			
            if(isSelectedItem === "false")
			{
				if(itemNumber.laavorToInteger() <= numberClick)
				{
					currentLabel.setAttribute("IsSelectedLV" , true);
					
					if(textColorSelect !== undefined && textColorSelect !== null)
					{
						currentLabel.style.color = textColorSelect;
					}
					
					if(backgroundColorSelect !== undefined && backgroundColorSelect !== null)
					{
						currentLabel.style.backgroundColor = backgroundColorSelect;
					}
					
					if(borderColorSelect !== undefined && borderColorSelect !== null)
					{
						currentLabel.style.borderColor = borderColorSelect;
					}
				}
			}
			else
			{
				if(itemNumber.laavorToInteger() >= numberClick)
				{
					currentLabel.setAttribute("IsSelectedLV" , false);
					
					if(textColorDeselect !== undefined && textColorDeselect !== null)
					{
						currentLabel.style.color = textColorDeselect;
					}
					
					if(backgroundColorDeselect !== undefined && backgroundColorDeselect !== null)
					{
						currentLabel.style.backgroundColor = backgroundColorDeselect;
					}
					
					if(borderColorDeselect !== undefined && borderColorDeselect !== null)
					{
						currentLabel.style.borderColor = borderColorDeselect;
					}
					
					subtract = "true";
				}
			}
			
			if(isReadOnly !== undefined && isReadOnly !== null)
			{
				if(isReadOnly.toString() === "false")
				{
					if(blockSelect !== undefined && blockSelect !== null)
					{
						if(blockSelect.toString() === "true")
						{
							currentLabel.removeEventListener("click", laavorClickLabel);
							currentLabel.removeEventListener("onmouseover", HoverRatingLabel);
							currentLabel.removeEventListener("onmouseleave", LeaveHoverRatingLabel);
							currentLabel.removeAttribute("blockSelect");
						}
					}
				}
			}
			else
			{
				if(blockSelect !== undefined && blockSelect !== null)
				{
					if(blockSelect.toString() === "true")
					{
						currentLabel.removeEventListener("click", laavorClickLabel);
						currentLabel.removeEventListener("onmouseover", HoverRatingLabel);
						currentLabel.removeEventListener("onmouseleave", LeaveHoverRatingLabel);
						currentLabel.removeAttribute("blockSelect");
					}
				}
			}
			
		}
	}
	
	if(commandEvent !== undefined && commandEvent !== null)
	{
		try
		{
			var valueCalc = numberClick;
			if(subtract === "true")		
			{
				valueCalc = numberClick.laavorToInteger() - 1;
			}
				
			if(typeRating === "number")
			{			
				window[commandEvent](valueCalc.toString());
			}
			else if(typeRating === "letter")
			{
				window[commandEvent](laavorGetLetter(valueCalc.toString()));		
			}	
		}
		catch(errorLaavor)
		{
			try
			{
				window[commandEvent](errorLaavor);
			}
			catch(errorLaavorI)
			{}
		}
	}			
}