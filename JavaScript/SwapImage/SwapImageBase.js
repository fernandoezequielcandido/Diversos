var laavorSwapImageAllImages;
var laavorSwapImageOptions;

function LaavorSwap(idFather, options) {
	
	if(laavorSwapImageAllImages === undefined || laavorSwapImageAllImages === null)
	{
		laavorSwapImageAllImages = [];
	}
	
	if(laavorSwapImageOptions === undefined || laavorSwapImageOptions === null)
	{
		laavorSwapImageOptions = [];
	}
	
	if(options === undefined || options === null)
	{
		laavorSwapImageOptions[idFather] = GetDefaults().OnSwap;
	}
	else
	{
		laavorSwapImageOptions[idFather] = options.OnSwap;
	}
	
	LaavorSwapIndoor(idFather, options)
}

function LaavorSwapIndoor(laavorIdFather, options) {
	
    var laavorFather = document.getElementById(laavorIdFather);
	
	laavorSwapImageAllImages[laavorIdFather] = [];
    if (laavorFather !== undefined && laavorFather !== null) {
        var items = laavorFather.children;
        var countItems = items.length;      

		var imageWidth = laavorFather.getAttribute("imageWidth");
		var imageHeight = laavorFather.getAttribute("imageHeight");
		
        try {
            for (var iItems = 0; iItems < countItems; iItems++) {
                
				var itemFull;
								
				var chosen;
				
				if(iItems === 0)
				{
					chosen = true;
				}
				else
				{
					chosen = false;
				}
				
				var valueImg = items[iItems].getAttribute("laavorValue");
					
				itemFull = { Image: items[iItems], Index: iItems, Chosen: chosen, Value: valueImg };
				
				if (imageWidth !== undefined && imageWidth !== null && imageWidth !== "")
				{
					items[iItems].style.width = imageWidth.replace("px", "") + 'px';
				}
				
				if (imageHeight !== undefined && imageHeight !== null && imageHeight !== "")
				{
					items[iItems].style.height  = imageHeight.replace("px", "") + 'px';
				}
								
				if(iItems !== 0)
				{
					items[iItems].style.display = 'none';
				}
				
				items[iItems].setAttribute("IdFather", laavorIdFather);
				items[iItems].setAttribute("Index", iItems);
				items[iItems].style.cursor = "grab";
												
                laavorSwapImageAllImages[laavorIdFather].push(itemFull);
							
				items[iItems].addEventListener("click", laavorClickImageSwap);
        
			}
		}
		catch(e){
            throw new Error("The Base Content and Images order can not be interrupted, if necessary contact Laavor support.");
        }
	}
}

String.prototype.laavorToInteger = function () {
    "use strict";
    var returnItem = parseInt(this);
    return returnItem;
};

function laavorClickImageSwap(event)
{
	"use strict";
	var itemImage = event.currentTarget;
	var index = itemImage.getAttribute("Index").toString().laavorToInteger();
	var idFather = itemImage.getAttribute("IdFather").toString();

	var valueChosen;
	var indexChosen;
	var sourceChosen;
	
	itemImage.style.display = 'none';	
	
	laavorSwapImageAllImages[idFather][index].Chosen = false;
	if((index + 1) < laavorSwapImageAllImages[idFather].length)
	{
		laavorSwapImageAllImages[idFather][(index + 1)].Image.style.display =  'block';
		laavorSwapImageAllImages[idFather][(index + 1)].Chosen = true;
		
		valueChosen = laavorSwapImageAllImages[idFather][(index + 1)].Value;
	    indexChosen = laavorSwapImageAllImages[idFather][(index + 1)].Index;
	    sourceChosen = laavorSwapImageAllImages[idFather][(index + 1)].Image.src;
	}
	else
	{
		laavorSwapImageAllImages[idFather][0].Image.style.display =  'block';
		laavorSwapImageAllImages[idFather][0].Chosen = true;
		
		valueChosen = laavorSwapImageAllImages[idFather][0].Value;
	    indexChosen = laavorSwapImageAllImages[idFather][0].Index;
	    sourceChosen = laavorSwapImageAllImages[idFather][0].Image.src;
	}
	
	if(laavorSwapImageOptions !== undefined && laavorSwapImageOptions !== null)
	{
		if(laavorSwapImageOptions[idFather] !== undefined && laavorSwapImageOptions[idFather] !== null)
		{
			try
			{
				laavorSwapImageOptions[idFather](valueChosen, indexChosen, sourceChosen);		
			}
			catch(errorLaavor)
			{
				try
				{
					laavorSwapImageOptions[idFather](errorLaavor);
				}
				catch(errorLaavorI)
				{}
			}
		}
	}
}

function laavorGetValueSwapImageChosen(idFather)
{
	if(laavorSwapImageAllImages !== undefined && laavorSwapImageAllImages !== null)
	{
		if(laavorSwapImageAllImages[idFather] !== undefined && laavorSwapImageAllImages[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapImageAllImages[idFather].length; index++)
			{	
				if(laavorSwapImageAllImages[idFather][index].Chosen.toString() === "true")
				{
					return laavorSwapImageAllImages[idFather][index].Value;
				}
			}
		}	
	}
	
 	return "";
}

function laavorGetIndexSwapImageChosen(idFather)
{
	if(laavorSwapImageAllImages !== undefined && laavorSwapImageAllImages !== null)
	{
		if(laavorSwapImageAllImages[idFather] !== undefined && laavorSwapImageAllImages[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapImageAllImages[idFather].length; index++)
			{	
				if(laavorSwapImageAllImages[idFather][index].Chosen.toString() === "true")
				{
					return laavorSwapImageAllImages[idFather][index].Index;
				}
			}
		}	
	}
	
	return "";
}

function laavorGetSourceSwapImageChosen(idFather)
{
	if(laavorSwapImageAllImages !== undefined && laavorSwapImageAllImages !== null)
	{
		if(laavorSwapImageAllImages[idFather] !== undefined && laavorSwapImageAllImages[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapImageAllImages[idFather].length; index++)
			{	
				if(laavorSwapImageAllImages[idFather][index].Chosen.toString() === "true")
				{
					return laavorSwapImageAllImages[idFather][index].Image.src;
				}
			}
		}	
	}
	
	return "";
}

function laavorBlockSwapImage(idFather)
{
	if(laavorSwapImageAllImages !== undefined && laavorSwapImageAllImages !== null)
	{
		if(laavorSwapImageAllImages[idFather] !== undefined && laavorSwapImageAllImages[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapImageAllImages[idFather].length; index++)
			{	
				laavorSwapImageAllImages[idFather][index].Image.removeEventListener("click", laavorClickImageSwap);
			}
		}	
	}
	
	return "";
}

function laavorReleaseSwapImage(idFather)
{
	if(laavorSwapImageAllImages !== undefined && laavorSwapImageAllImages !== null)
	{
		if(laavorSwapImageAllImages[idFather] !== undefined && laavorSwapImageAllImages[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapImageAllImages[idFather].length; index++)
			{	
				laavorSwapImageAllImages[idFather][index].Image.addEventListener("click", laavorClickImageSwap);
			}
		}	
	}
	
	return "";
}

function GetDefaults() {
    return {
        OnSwap: ''
    };
}
