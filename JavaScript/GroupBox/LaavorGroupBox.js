var laavorUserOptions;
var laavorAllIdFather;

function LaavorGroupBox(idFather, options) {
    
	if(laavorAllIdFather === undefined || laavorAllIdFather === null)
	{
		laavorAllIdFather = [];
	}
	laavorAllIdFather.push(idFather);
	
	if(laavorUserOptions === undefined || laavorUserOptions === null)
	{
		laavorUserOptions = [];
	}
	
    if (options !== undefined && options !== null) {
		laavorUserOptions[idFather] = options;
    }
    else {
		laavorUserOptions[idFather] = GetDefaults()
    }
}

window.addEventListener('load', function () {
	var countIds = laavorAllIdFather.length;
	for(var iId = 0; iId < countIds; iId++)
	{
		LaavorGroupBoxIndoor(laavorAllIdFather[iId]);
	}
});

function LaavorGroupBoxIndoor(idFather) {
    laavorFather = document.getElementById(idFather);
    if (laavorFather !== undefined && laavorFather !== null) {
        var itemsGroup = laavorFather.children;

        SaveDefaults(laavorUserOptions[idFather]);
		
        try {     
			var itemFull = { Title: itemsGroup[0], Content: itemsGroup[1]};	
		
			itemFull.Title.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitle;
			itemFull.Title.style.border = "solid 1px";
			itemFull.Title.style.borderColor = laavorUserOptions[idFather].borderColorTitle;
			itemFull.Title.style.color = laavorUserOptions[idFather].textColorTitle;
			itemFull.Title.style.fontSize = laavorUserOptions[idFather].fontSizeTitle.replace("em", "") + 'em';
		
			itemFull.Content.style.border = "solid 1px";
			itemFull.Content.style.borderColor = laavorUserOptions[idFather].borderColorContent;
				
			itemFull.Title.style.marginBottom = "0px";
			itemFull.Content.style.marginBottom = "0px";
			itemFull.Title.style.marginTop = "0px";
			itemFull.Content.style.marginTop = "0x";
		
			

        }
        catch(e){
            throw new Error("It is necessary to be the title followed by the content, if necessary contact Laavor support.");
        }
    }
    else {
        throw new Error("Item with idFather informed was not found.");
    }
}

function SaveDefaults(options) {
    var defaultOptions = GetDefaults();
    
	if (options.backgroundColorTitle === undefined || options.backgroundColorTitle === null) {
        options.backgroundColorTitle = defaultOptions.backgroundColorTitle;
    }

    if (options.borderColorTitle === undefined || options.borderColorTitle === null) {
        options.borderColorTitle = defaultOptions.borderColorTitle;
    }

    if (options.textColorTitle === undefined || options.textColorTitle === null) {
        options.textColorTitle = defaultOptions.textColorTitle;
    }

    if (options.borderSizeTitle === undefined || options.borderSizeTitle === null) {
        options.borderSizeTitle = defaultOptions.borderSizeTitle;
    }

    if (options.fontSizeTitle === undefined || options.fontSizeTitle === null) {
        options.fontSizeTitle = defaultOptions.fontSizeTitle;
    }

    if (options.borderColorContent === undefined || options.borderColorContent === null) {
        options.borderColorContent = defaultOptions.borderColorContent;
    }
}

function GetDefaults() {
    return {
        backgroundColorTitle: "orange",
        borderColorTitle: "black",
		textColorTitle: "black",
		fontSizeTitle: "2em",
		borderColorContent: "black"
    };
}