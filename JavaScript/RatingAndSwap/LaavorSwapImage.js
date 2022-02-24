window.onload = function() {

}

function laavorImageSwapInitAll(imageSwapItem)
{
	"use strict";
	var uniqueName = laavorUniqueName();
		
	imageSwapItem.setAttribute("LaavorAtrHex", uniqueName);
	
	if(imageSwapItem != undefined && imageSwapItem != null)
	{
		var firstImage = imageSwapItem.getAttribute("firstImage");
		var secondImage = imageSwapItem.getAttribute("secondImage");
		var firstImageWidth = imageSwapItem.getAttribute("firstImageWidth");
		var firstImageHeight = imageSwapItem.getAttribute("firstImageHeight");		
		var secondImageWidth = imageSwapItem.getAttribute("secondImageWidth");
		var secondImageHeight = imageSwapItem.getAttribute("secondImageHeight");		
		var blockSelect = imageSwapItem.getAttribute("blockSelect");
		var isFirstImage = imageSwapItem.getAttribute("isFirstImage");
		
		var elem = document.createElement("img");
		elem.setAttribute("NumberLV", iItem);
		elem.setAttribute("ItemsNumber", itemsNumber);
		elem.setAttribute("isFirstImage", true);
		elem.setAttribute("imageSelect", imageSelect);				
		elem.setAttribute("imageDeselect", imageDeselect);	
		
		elem.setAttribute("firstImageWidth", firstImageWidth);				
		elem.setAttribute("firstImageHeight", firstImageHeight);	
		elem.setAttribute("secondImageWidth", secondImageWidth);				
		elem.setAttribute("secondImageHeight", secondImageHeight);	
		
		elem.setAttribute("Name", uniqueName);
		elem.setAttribute("LaavorAtrHex", uniqueName);	
		
		elem.style.width = firstImageWidth;
		elem.style.height = firstImageHeight;
		
		elem.src = firstImage;
		elem.addEventListener("click", changeImage);
		
		imageSwapItem.appendChild(elem);
	}
}



String.prototype.contains  = function(search)
{
	var returnItem = this.indexOf(search) != -1;
	return returnItem;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function changeImage(event)
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
		
	if(firstImage != undefined && firstImage != null && secondImage != undefined && secondImage != null)
	{
		if(isFirstImage === "true")
		{
			itemLaavor.src = secondImage;	
			
			if(secondImageWidth != undefined && secondImageWidth != null)
			{
				itemLaavor.style.width = secondImageWidth;	
			}
			
			if(secondImageHeight != undefined && secondImageHeight != null)
			{
				itemLaavor.style.height = secondImageHeight;				
			}
			
			itemLaavor.setAttribute("isFirstImage", false);
		}
		else if(isFirstImage === "false")
		{
			itemLaavor.src = firstImage			
			
			if(firstImageWidth != undefined && firstImageWidth != null)
			{
				itemLaavor.style.width = firstImageWidth;	
			}
			
			if(firstImageHeight != undefined && firstImageHeight != null)
			{
				itemLaavor.style.height = firstImageHeight;				
			}
			
			itemLaavor.setAttribute("isFirstImage", true);
		}	
	}
} 