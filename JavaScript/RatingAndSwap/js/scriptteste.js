
window.onload = function() {
	var imageSwapItem =  document.getElementsByClassName("laavorImageSwap");
	var firstWidth = itemLaavor.getAttribute("firstWidth");
	var firstHeight = itemLaavor.getAttribute("firstHeight");
		
	if(imageSwapItem != undefined && imageSwapItem != null && imageSwapItem.length > 0)
	{
		var firstImage = imageSwapItem[0].getAttribute("firstImage");
		imageSwapItem[0].src = firstImage;
		imageSwapItem[0].addEventListener("click", changeImage);
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
	var itemLaavor = event.currentTarget;
	var firstImage = itemLaavor.getAttribute("firstImage");
	var secondImage = itemLaavor.getAttribute("secondImage");
	
	var firstWidth = itemLaavor.getAttribute("firstWidth");
	var secondWidth = itemLaavor.getAttribute("secondWidth");
	var firstHeight = itemLaavor.getAttribute("firstHeight");
	var secondHeight = itemLaavor.getAttribute("secondHeight");
	
	if(firstImage != undefined && firstImage != null && secondImage != undefined && secondImage != null)
	{
		var firstImageDef = firstImage.replaceAll("\\", "/");
		var secondImageDef = secondImage.replaceAll("\\", "/");
		
		var currentImage = itemLaavor.src.replaceAll("\\", "/");
		if(currentImage.contains(firstImageDef))
		{
			itemLaavor.src = secondImage;	
			
			if(secondWidth != undefined && secondWidth != null)
			{
				itemLaavor.style.width = secondWidth;	
			}
			
			if(secondHeight != undefined && secondHeight != null)
			{
				itemLaavor.style.height = secondHeight;				
			}
		}
		else if(currentImage.contains(secondImageDef))
		{
			itemLaavor.src = firstImage			
			
			if(firstWidth != undefined && firstWidth != null)
			{
				itemLaavor.style.width = firstWidth;	
			}
			
			if(firstHeight != undefined && firstHeight != null)
			{
				itemLaavor.style.height = firstHeight;				
			}
		}	
	}
} 
