window.onpageshow = function () {
	"use strict";
	var rating =  document.getElementsByClassName("laavorRatingImage");
		
	if(rating === undefined || rating === null || rating.length === 0)
	{
		return;
	}
		
	for(var iRating = 0; iRating < rating.length; iRating++)
	{		
		var ratingItem = rating[iRating];
		laavorRIInitAll(ratingItem);		
	}
}

"use strict";
function laavorRIResetAll(id)
{
	var rating =  document.getElementById(id);
	rating.innerHTML = '';
	laavorRIInitAll(rating);
}

"use strict";
function laavorRIInitAll(ratingItem)
{
	var uniqueClass = laavorUniqueClass();
		
	ratingItem.setAttribute("ClassLaavor", uniqueClass);
	
	if(ratingItem !== undefined && ratingItem !== null)
	{
		var imageSelect = ratingItem.getAttribute("imageSelect");
		var imageDeselect = ratingItem.getAttribute("imageDeselect");
				
		if(imageSelect !== undefined && imageSelect !== null && imageDeselect !== undefined && imageDeselect !== null)
		{
			var itemsNumber = ratingItem.getAttribute("itemsNumber");
			var initialValue = ratingItem.getAttribute("initialValue");
			var isReadOnly = ratingItem.getAttribute("isReadOnly");
			var blockSelect = ratingItem.getAttribute("blockSelect");
			var imageWidth = ratingItem.getAttribute("imageWidth");
			var imageHeight = ratingItem.getAttribute("imageHeight");		
			
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
				elem.classList.add(uniqueClass);
				elem.setAttribute("ClassLaavor", uniqueClass);	
				elem.setAttribute("imageSelect", imageSelect);				
				elem.setAttribute("imageDeselect", imageDeselect);	
									
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
					}
				}
				else
				{
					elem.addEventListener("click", laavorClickImage);	
					
					if(blockSelect !== undefined && blockSelect !== null)
					{
						elem.setAttribute("blockSelect", blockSelect);	
					}
				}
				
				if(imageWidth !== undefined && imageWidth !== null)
				{
					elem.style.width = imageWidth;
				}
				
				if(imageHeight !== undefined && imageHeight !== null)
				{
					elem.style.height = imageHeight;
				}
									
				ratingItem.appendChild(elem);
			}
		}
	}
}

"use strict";
function laavorRIGetValue(id)
{
	var rating = document.getElementById(id);
	var classLaavor = rating.getAttribute("ClassLaavor");
	
	if(rating != undefined && rating != null)
	{
		var count = 0;
		for(var iCh = 0; iCh < rating.children.length; iCh++)
		{
			var elementImg = rating.children[iCh];
			var classLocal = elementImg.getAttribute("ClassLaavor");
			
			if(classLocal != undefined && classLocal != null)
			{
				if(classLocal === classLaavor)
				{
					var isSelected = elementImg.getAttribute("IsSelectedLV");
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

"use strict";
String.prototype.laavorToInteger  = function()
{
	var returnItem = parseInt(this);
	return returnItem;
}

"use strict";
String.prototype.laavorContains  = function(search)
{
	var returnItem = this.indexOf(search) !== -1;
	return returnItem;
}

"use strict";
String.prototype.laavorReplaceAll = function(search, substitution) {
    var valueStr = this;
    return valueStr.split(search).join(substitution);
};

"use strict";
function laavorUniqueClass() {
  var laavorClass = "";
  var charPotential = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    laavorClass += charPotential.charAt(Math.floor(Math.random() * charPotential.length));

  return laavorClass;
}

"use strict";
function laavorClickImage(event)
{
	var imageLaavor = event.currentTarget;
	var isSelectedItem = imageLaavor.getAttribute("IsSelectedLV").toString();
	var classUniqueLaavor = imageLaavor.getAttribute("ClassLaavor");
    var numberClick = imageLaavor.getAttribute("NumberLV");	
	var blockSelect = imageLaavor.getAttribute("blockSelect");
	var isReadOnly = imageLaavor.getAttribute("isReadOnly");
		
	var allImages = document.getElementsByClassName(classUniqueLaavor);
	
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
					}
				}
			}
			
		}
	}
} 
