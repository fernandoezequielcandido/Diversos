var laavorBeforeSelected;
var laavorAllItems;
var laavorAllIdFather;
var laavorUserOptions;

String.prototype.laavorToInteger = function () {
    "use strict";
    var returnItem = parseInt(this);
    return returnItem;
};

function LaavorAccordion(idFather, options) {
	
	if(laavorAllItems === undefined || laavorAllItems === null)
	{
		laavorAllItems = [];
	}

	if(laavorBeforeSelected === undefined || laavorBeforeSelected === null)
	{
		laavorBeforeSelected = [];
	}
	
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
        laavorUserOptions[idFather] = GetDefaults();
    }
}

window.addEventListener('load', function () {
	var countIds = laavorAllIdFather.length;
	for(var iId = 0; iId < countIds; iId++)
	{
		LaavorAccordionIndoor(iId, laavorAllIdFather[iId]);
	}
});

function LaavorAccordionIndoor(position, laavorIdFather) {
	
    var laavorFather = document.getElementById(laavorAllIdFather[position]);
	
	laavorAllItems[laavorIdFather] = [];
    if (laavorFather !== undefined && laavorFather !== null) {
        var items = laavorFather.children;
        var countItems = items.length;

        SaveDefaults(laavorUserOptions[laavorIdFather]);

        try {
            for (var iItems = 0; iItems < countItems; iItems += 2) {
                var heightContent = GetHeight(items[iItems + 1]);
                var itemFull = { Title: items[iItems], Content: items[iItems + 1], HeightContent: heightContent };
                items[iItems + 1].style.display = 'none';
                laavorAllItems[laavorIdFather].push(itemFull);

                var uniqueName = laavorUniqueName(laavorAllItems[laavorIdFather].length - 1);

                itemFull.Title.setAttribute("LaavorAtrHex", uniqueName);
                itemFull.Title.onclick = clickTitle;

                itemFull.Title.setAttribute("LaavorIsSelected", false);
				itemFull.Title.setAttribute("IDFather", laavorIdFather);

                itemFull.Title.style.backgroundColor = laavorUserOptions[laavorIdFather].backgroundColorTitle;
                itemFull.Title.style.border = "solid 1px";
                itemFull.Title.style.borderColor = laavorUserOptions[laavorIdFather].borderColorTitle;
                itemFull.Title.style.color = laavorUserOptions[laavorIdFather].textColorTitle;
                itemFull.Title.style.fontSize = laavorUserOptions[laavorIdFather].fontSizeTitle.replace("em", "") + 'em';

                itemFull.Content.style.border = "solid 1px";
                itemFull.Content.style.borderColor = laavorUserOptions[laavorIdFather].borderColorContent;

                itemFull.Title.style.cursor = "pointer";

                itemFull.Title.style.marginBottom = "0px";
                itemFull.Content.style.marginBottom = "0px";
                itemFull.Title.style.marginTop = "0px";
                itemFull.Content.style.marginTop = "0x";

                itemFull.Title.onmouseover = HoverTitle;
                itemFull.Title.onmouseleave = LeaveHoverTitle;
            }

            if (laavorUserOptions[laavorIdFather].preSelectItem.toString() === "true") {
                laavorAllItems[laavorIdFather][0].Title.setAttribute("LaavorIsSelected", true);
                ShowWithHeightEffect(laavorAllItems[laavorIdFather][0]);
                laavorBeforeSelected[laavorIdFather] = laavorAllItems[laavorIdFather][0];
            }
            else {
                laavorBeforeSelected[laavorIdFather] = null;
            }
        }
        catch(e){
            throw new Error("The Title and Content order can not be interrupted, if necessary contact Laavor support.");
        }
    }
    else {
        throw new Error("Item with idFather informed was not found.");
    }
}

function HoverTitle() {
    if (this !== undefined && this !== null) {
		var idFather = this.getAttribute("IDFather");
		
		if(idFather !== undefined && idFather !== null)
		{		
			this.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitleHover;
			this.style.borderColor = laavorUserOptions[idFather].borderColorTitleHover;
			this.style.color = laavorUserOptions[idFather].textColorTitleHover;
		}
    }
}

function LeaveHoverTitle() {
    if (this !== undefined && this !== null) {
        var isSelected = this.getAttribute("LaavorIsSelected");
		var idFather = this.getAttribute("IDFather");
		
        if (isSelected === "false") {
            this.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitle;
            this.style.borderColor = laavorUserOptions[idFather].borderColorTitle;
            this.style.color = laavorUserOptions[idFather].textColorTitle;
        }
        else {
            this.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitleSelected;
            this.style.borderColor = laavorUserOptions[idFather].borderColorTitleSelected;
            this.style.color = laavorUserOptions[idFather].textColorTitleSelected;
        }
    }
}

function SaveDefaults(options) {
    var defaultOptions = GetDefaults();
    if (options.viewMode === undefined || options.viewMode === null) {
        options.viewMode = defaultOptions.viewMode;
    }
    if (options.preSelectItem === undefined || options.preSelectItem === null) {
        options.preSelectItem = defaultOptions.preSelectItem;
    }
    if (options.backgroundColorTitle === undefined || options.backgroundColorTitle === null) {
        options.backgroundColorTitle = defaultOptions.backgroundColorTitle;
    }
    if (options.backgroundColorTitleHover === undefined || options.backgroundColorTitleHover === null) {
        options.backgroundColorTitleHover = defaultOptions.backgroundColorTitleHover;
    }
    if (options.borderColorTitle === undefined || options.borderColorTitle === null) {
        options.borderColorTitle = defaultOptions.borderColorTitle;
    }
    if (options.borderColorTitleHover === undefined || options.borderColorTitleHover === null) {
        options.borderColorTitleHover = defaultOptions.borderColorTitleHover;
    }
    if (options.textColorTitle === undefined || options.textColorTitle === null) {
        options.textColorTitle = defaultOptions.textColorTitle;
    }
    if (options.textColorTitleHover === undefined || options.textColorTitleHover === null) {
        options.textColorTitleHover = defaultOptions.textColorTitleHover;
    }
    if (options.borderSizeTitle === undefined || options.borderSizeTitle === null) {
        options.borderSizeTitle = defaultOptions.borderSizeTitle;
    }
    if (options.borderTitleHasShadow === undefined || options.borderTitleHasShadow === null) {
        options.borderTitleHasShadow = defaultOptions.borderTitleHasShadow;
    }
    if (options.borderContentHasShadow === undefined || options.borderContentHasShadow === null) {
        options.borderContentHasShadow = defaultOptions.borderContentHasShadow;
    }
    if (options.fontSizeTitle === undefined || options.fontSizeTitle === null) {
        options.fontSizeTitle = defaultOptions.fontSizeTitle;
    }
    if (options.borderColorContent === undefined || options.borderColorContent === null) {
        options.borderColorContent = defaultOptions.borderColorContent;
    }
    if (options.backgroundColorTitleSelected === undefined || options.backgroundColorTitleSelected === null) {
        options.backgroundColorTitleSelected = defaultOptions.backgroundColorTitleSelected;
    }
    if (options.textColorTitleSelected === undefined || options.textColorTitleSelected === null) {
        options.textColorTitleSelected = defaultOptions.textColorTitleSelected;
    }
    if (options.borderColorTitleSelected === undefined || options.borderColorTitleSelected === null) {
        options.borderColorTitleSelected = defaultOptions.borderColorTitleSelected;
    }
}

function laavorUniqueName(id) {
    "use strict";
    var laavorName = "";
    var charPotential = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++) {
        laavorName += charPotential.charAt(Math.floor(Math.random() * charPotential.length));
    }
    laavorName += '_' + id.toString();
    return laavorName;
}
function clickTitle() {
    try {
	var idFather = this.getAttribute("IDFather");
        var uniqueNameLaavor = this.getAttribute("LaavorAtrHex");
        var isSelected = this.getAttribute("LaavorIsSelected");
        var id = uniqueNameLaavor.split('_')[1].toString().laavorToInteger();	
        var itemFull = laavorAllItems[idFather][id];
        var hideHisSelf = false;
        if (itemFull !== undefined && itemFull !== null) {
            if (laavorUserOptions[idFather].viewMode !== undefined && laavorUserOptions[idFather].viewMode !== null) {
                if (isSelected.toString() === 'true') {
                    HideWithHeightEffect(itemFull);
                    hideHisSelf = true;
                }
                else {
                    ShowWithHeightEffect(itemFull);
                }

                if (laavorUserOptions[idFather].viewMode === 'single') {
                    if (laavorBeforeSelected[idFather] !== undefined && laavorBeforeSelected[idFather] !== null) {
                        var uniqueBefore = this.getAttribute("LaavorAtrHex");
                        var uniqueCurrent = laavorBeforeSelected[idFather].Title.getAttribute("LaavorAtrHex");
                        if (uniqueBefore !== uniqueCurrent) {
                            HideWithHeightEffect(laavorBeforeSelected[idFather]);
                        }
                    }
                }
            }
            else if (laavorBeforeSelected[idFather] !== undefined && laavorBeforeSelected[idFather] !== null) {
                HideWithHeightEffect(laavorBeforeSelected[idFather]);
            }

            laavorBeforeSelected[idFather] = itemFull;
        }
        else {
            throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");
        }
    }
    catch(e){
        throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");
    }
}

String.prototype.laavorToInteger = function () {
    "use strict";
    var returnItem = parseInt(this);
    return returnItem;
};

function GetHeight(object) {

    if (object.clientHeight !== undefined && object.clientHeight !== null) {
        return object.clientHeight.toString().laavorToInteger();
    }

    if (object.height !== undefined && object.style.height !== null) {
        return object.height.toString().laavorToInteger();
    }

    if (object.offsetHeight !== undefined && object.offsetHeight !== null) {
        return object.offsetHeight.toString().laavorToInteger() - 2;
    }
    else {
        throw new Error("Error in count inside Accordion(Height Item) contact Laavor.com with example.");
    }
}

function changeHeightInTime(objectToHide, heightObject, time) {
    setTimeout(function () {
        objectToHide.style.height = heightObject.toString().replace("px", "") + 'px';
    }, time);
}

function HideWithHeightEffect(objectItem) {
    if (objectItem.Content !== undefined && objectItem.Content !== null && objectItem.HeightContent !== undefined && objectItem.HeightContent !== null) {
        var stepAnimation = objectItem.HeightContent / 10;

		var idFather = objectItem.Title.getAttribute("IDFather");
		
        var controlCount = 0;
        var currentTime = 50;

        objectItem.Content.style.opacity = "0";

        for (var iStepA = objectItem.HeightContent; iStepA > 0; iStepA -= stepAnimation) {
            changeHeightInTime(objectItem.Content, iStepA, currentTime);
            if (controlCount > 11) {
                throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");
            }
            currentTime += 50;
        }

        setTimeout(function () {
            objectItem.Content.style.height = '0px';
        }, currentTime);

        currentTime += 50;

        setTimeout(function () {
            objectItem.Content.style.display = 'none';
        }, currentTime);

        currentTime += 50;

        setTimeout(function () {
            objectItem.Content.style.height = objectItem.HeightContent.toString() + 'px';
            objectItem.Title.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitle;
            objectItem.Title.style.color = laavorUserOptions[idFather].textColorTitle;
            objectItem.Title.style.borderColor = laavorUserOptions[idFather].borderColorTitle;
        }, currentTime);

        objectItem.Title.setAttribute("LaavorIsSelected", false);
    }
}

///verificar undefined
function ShowWithHeightEffect(objectItem) {
    if (objectItem.Content !== undefined && objectItem.Content !== null && objectItem.HeightContent !== undefined && objectItem.HeightContent !== null) {
        var stepAnimation = objectItem.HeightContent / 10;

		var idFather = objectItem.Title.getAttribute("IDFather");
		
        var controlCount = 0;
        var currentTime = 50;

        objectItem.Content.style.height = stepAnimation.toString() + 'px';
        objectItem.Content.style.display = 'block';

        for (var iStepA = stepAnimation; iStepA <= objectItem.HeightContent; iStepA += stepAnimation) {
            changeHeightInTime(objectItem.Content, iStepA, currentTime);
            if (controlCount > 11) {
                throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");
            }
            currentTime += 50;
        }

        setTimeout(function () {
            objectItem.Content.style.height = objectItem.HeightContent.toString() + 'px';
            objectItem.Content.style.opacity = "1";
            objectItem.Title.style.backgroundColor = laavorUserOptions[idFather].backgroundColorTitleSelected;
            objectItem.Title.style.color = laavorUserOptions[idFather].textColorTitleSelected;
            objectItem.Title.style.borderColor = laavorUserOptions[idFather].borderColorTitleSelected;
        }, currentTime);

        currentTime += 50;

        objectItem.Title.setAttribute("LaavorIsSelected", true);


    }
}

function GetDefaults() {
    return {
        viewMode: 'single',
        preSelectItem: true,
        backgroundColorTitle: "orange",
        borderColorTitle: "black",
        borderSizeTitle: "8px",
        textColorTitle: "black",
        fontSizeTitle: "2em",
        backgroundColorTitleHover: "gray",
        borderColorTitleHover: "black",
        textColorTitleHover: "white",
        borderTitleHasShadow: true,
        borderColorContent: "black",
        backgroundColorTitleSelected: "#f0f0f0",
        textColorTitleSelected: "black",
        borderColorTitleSelected: "white"
    };
}