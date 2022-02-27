var laavorSwapPhrasesAllItems;
var laavorSwapPhrasesOptions;

function LaavorSwapPhrases(idFather, options) {
	
	if(laavorSwapPhrasesAllItems === undefined || laavorSwapPhrasesAllItems === null)
	{
		laavorSwapPhrasesAllItems = [];
	}
	
	if(laavorSwapPhrasesOptions === undefined || laavorSwapPhrasesOptions === null)
	{
		laavorSwapPhrasesOptions = [];
	}
	
	if(options === undefined || options === null)
	{
		laavorSwapPhrasesOptions[idFather] = GetDefaults();
	}
	else
	{
		laavorSwapPhrasesOptions[idFather] = options;
	}
	
	LaavorSwapPhrasesIndoor(idFather, options)
}

function LaavorSwapPhrasesIndoor(laavorIdFather, options) {
	
    var laavorFather = document.getElementById(laavorIdFather);
	
	laavorSwapPhrasesAllItems[laavorIdFather] = [];
    if (laavorFather !== undefined && laavorFather !== null) {
        var items = laavorFather.children;
        var countItems = items.length;      
		
        try {
            for (var iItems = 0; iItems < countItems; iItems++) {
                
				var itemFull;							
				var chosen;
				
				var userOptionsLocal;

				SaveDefaults(laavorSwapPhrasesOptions[laavorIdFather]);
				userOptionsLocal = laavorSwapPhrasesOptions[laavorIdFather];
								
				var textColorLocal = items[iItems].getAttribute("laavorTextColor");
				var borderColorLocal = items[iItems].getAttribute("laavorBorderColor");
				var backgroundColorLocal = items[iItems].getAttribute("laavorBackgroundColor");
				var fontSizeLocal = items[iItems].getAttribute("laavorFontSize");
				var borderLocal = items[iItems].getAttribute("laavorBorder");
				var widthLocal = items[iItems].getAttribute("laavorWidth");
				var heightLocal = items[iItems].getAttribute("laavorHeight");
				var alignLocal = items[iItems].getAttribute("laavorAlign");
				
				if(textColorLocal !== undefined && textColorLocal !== null && textColorLocal !== "")
				{
										
				}
				else
				{
					textColorLocal = userOptionsLocal.textColor;
				}
				
				if(borderColorLocal !== undefined && borderColorLocal !== null && borderColorLocal !== "")
				{
										
				}
				else
				{
					borderColorLocal = userOptionsLocal.borderColor;
				}
				
				if(backgroundColorLocal !== undefined && backgroundColorLocal !== null && backgroundColorLocal !== "")
				{
					
				}
				else
				{
					backgroundColorLocal = userOptionsLocal.backgroundColor;
				}
				
				if(fontSizeLocal !== undefined && fontSizeLocal !== null && fontSizeLocal !== "")
				{
										
				}				
				else
				{
					fontSizeLocal =  userOptionsLocal.fontSize;
				}
				
				if(borderLocal !== undefined && borderLocal !== null && borderLocal !== "")
				{
										
				}				
				else
				{
					borderLocal =  userOptionsLocal.border;
				}
				
				if(widthLocal !== undefined && widthLocal !== null && widthLocal !== "")
				{
										
				}				
				else
				{
					widthLocal =  userOptionsLocal.width;
				}
				
				if(heightLocal !== undefined && heightLocal !== null && heightLocal !== "")
				{
										
				}				
				else
				{
					heightLocal =  userOptionsLocal.height;
				}
				
				if(alignLocal !== undefined && alignLocal !== null && alignLocal !== "")
				{
										
				}				
				else
				{
					alignLocal =  userOptionsLocal.align;
				}
					
				if(iItems === 0)
				{
					chosen = true;
				}
				else
				{
					chosen = false;
				}
				
				var valueQuotes = items[iItems].getAttribute("laavorValue");
					
				itemFull = { Quotes: items[iItems], Index: iItems, Chosen: chosen, Value: valueQuotes };
				
				items[iItems].style.color = textColorLocal;
				items[iItems].style.border = borderLocal;
				items[iItems].style.backgroundColor = backgroundColorLocal;
				items[iItems].style.borderColor = borderColorLocal;
				items[iItems].style.fontSize  = fontSizeLocal.toString().replace("em", "") + 'em';
				items[iItems].style.width = widthLocal.replace("px", "") + 'px';
				
				if(heightLocal !== "")
				{
					items[iItems].style.height = heightLocal.replace("px", "") + 'px';
				}
				
				items[iItems].style.textAlign = alignLocal;
								
				if(iItems !== 0)
				{					
					items[iItems].style.display = 'none';
				}
				else
				{
					items[iItems].style.display = 'block';
				}
				
				items[iItems].setAttribute("IdFather", laavorIdFather);
				items[iItems].setAttribute("Index", iItems);
				items[iItems].style.cursor = "grab";
												
                laavorSwapPhrasesAllItems[laavorIdFather].push(itemFull);
							
				items[iItems].addEventListener("click", laavorClickPhrasesSwap);	
			}
		}
		catch(e){
            throw new Error("The Base Content and Quote order can not be interrupted, if necessary contact Laavor support.");
        }
	}
}

String.prototype.laavorSwapPhrasesToInteger = function () {
    "use strict";
    var returnItem = parseInt(this);
    return returnItem;
};

function laavorClickPhrasesSwap(event)
{
	"use strict";
	var itemQuotes = event.currentTarget;
	var index = itemQuotes.getAttribute("Index").toString().laavorSwapPhrasesToInteger();
	var idFather = itemQuotes.getAttribute("IdFather").toString();

	var valueChosen;
	var indexChosen;
	
	itemQuotes.style.display = 'none';	
	
	laavorSwapPhrasesAllItems[idFather][index].Chosen = false;
	if((index + 1) < laavorSwapPhrasesAllItems[idFather].length)
	{
		laavorSwapPhrasesAllItems[idFather][(index + 1)].Quotes.style.display =  'block';
		laavorSwapPhrasesAllItems[idFather][(index + 1)].Chosen = true;
		
		valueChosen = laavorSwapPhrasesAllItems[idFather][(index + 1)].Value;
	    indexChosen = laavorSwapPhrasesAllItems[idFather][(index + 1)].Index;
	}
	else
	{
		laavorSwapPhrasesAllItems[idFather][0].Quotes.style.display =  'block';
		laavorSwapPhrasesAllItems[idFather][0].Chosen = true;
		
		valueChosen = laavorSwapPhrasesAllItems[idFather][0].Value;
	    indexChosen = laavorSwapPhrasesAllItems[idFather][0].Index;
	}
	
	if(laavorSwapPhrasesOptions !== undefined && laavorSwapPhrasesOptions !== null)
	{
		if(laavorSwapPhrasesOptions[idFather] !== undefined && laavorSwapPhrasesOptions[idFather] !== null)
		{
			if(laavorSwapPhrasesOptions[idFather].OnSwap !== undefined && laavorSwapPhrasesOptions[idFather].OnSwap !== null && laavorSwapPhrasesOptions[idFather].OnSwap !== "")
			{
				try
				{
					laavorSwapPhrasesOptions[idFather].OnSwap(valueChosen, indexChosen);		
				}
				catch(errorLaavor)
				{
					try
					{
						laavorSwapPhrasesOptions[idFather].OnSwap(errorLaavor);
					}
					catch(errorLaavorI)
					{}
				}
			}
		}
	}
}

function laavorGetValueSwapPhrasesChosen(idFather)
{
	if(laavorSwapPhrasesAllItems !== undefined && laavorSwapPhrasesAllItems !== null)
	{
		if(laavorSwapPhrasesAllItems[idFather] !== undefined && laavorSwapPhrasesAllItems[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapPhrasesAllItems[idFather].length; index++)
			{	
				if(laavorSwapPhrasesAllItems[idFather][index].Chosen.toString() === "true")
				{
					return laavorSwapPhrasesAllItems[idFather][index].Value;
				}
			}
		}	
	}
	
 	return "";
}

function laavorGetIndexSwapPhrasesChosen(idFather)
{
	if(laavorSwapPhrasesAllItems !== undefined && laavorSwapPhrasesAllItems !== null)
	{
		if(laavorSwapPhrasesAllItems[idFather] !== undefined && laavorSwapPhrasesAllItems[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapPhrasesAllItems[idFather].length; index++)
			{	
				if(laavorSwapPhrasesAllItems[idFather][index].Chosen.toString() === "true")
				{
					return laavorSwapPhrasesAllItems[idFather][index].Index;
				}
			}
		}	
	}
	
	return "";
}

function laavorBlockSwapPhrases(idFather)
{
	if(laavorSwapPhrasesAllItems !== undefined && laavorSwapPhrasesAllItems !== null)
	{
		if(laavorSwapPhrasesAllItems[idFather] !== undefined && laavorSwapPhrasesAllItems[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapPhrasesAllItems[idFather].length; index++)
			{	
				laavorSwapPhrasesAllItems[idFather][index].Quotes.removeEventListener("click", laavorClickPhrasesSwap);
			}
		}	
	}
	
	return "";
}

function laavorReleaseSwapPhrases(idFather)
{
	if(laavorSwapPhrasesAllItems !== undefined && laavorSwapPhrasesAllItems !== null)
	{
		if(laavorSwapPhrasesAllItems[idFather] !== undefined && laavorSwapPhrasesAllItems[idFather] !== null)
		{
			for(var index = 0; index < laavorSwapPhrasesAllItems[idFather].length; index++)
			{	
				laavorSwapPhrasesAllItems[idFather][index].Quotes.addEventListener("click", laavorClickPhrasesSwap);
			}
		}	
	}
	
	return "";
}

function SaveDefaults(options) {
    var defaultOptions = GetDefaults();

    if (options.OnSwap === undefined || options.OnSwap === null) {
        options.OnSwap = defaultOptions.OnSwap;
    }

    if (options.textColor === undefined || options.textColor === null) {
        options.textColor = defaultOptions.textColor;
    }

    if (options.borderColor === undefined || options.borderColor === null) {
        options.borderColor = defaultOptions.borderColor;
    }

    if (options.backgroundColor === undefined || options.backgroundColor === null) {
        options.backgroundColor = defaultOptions.backgroundColor;
    }

    if (options.fontSize === undefined || options.fontSize === null) {
        options.fontSize = defaultOptions.fontSize;
    }	
	
	if (options.border === undefined || options.border === null) {
        options.border = defaultOptions.border;
    }	
	
	if (options.width === undefined || options.width === null) {
        options.width = defaultOptions.width;
    }	
	
	if (options.align === undefined || options.align === null) {
        options.align = defaultOptions.align;
    }
	
	if (options.height === undefined || options.height === null) {
        options.height = defaultOptions.height;
    }
}

function GetDefaults() {
    return {
		OnSwap: '',
        textColor: "black",
        borderColor: "black",
        backgroundColor: "white",
		fontSize: "2em",
		border: "solid 1px",
		width: "200px",
		height: "",
		align: "center"
    };
}