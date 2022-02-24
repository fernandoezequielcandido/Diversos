var laavorAllItemExpander;
var laavorAllIdFather;
var laavorUserOptions;

function LaavorExpander(idFather, options) {
    laavorAllItemExpander = [];
	
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
		LaavorExpanderIndoor(laavorAllIdFather[iId]);
	}
});

function LaavorExpanderIndoor(idFather) {
    var laavorFather = document.getElementById(idFather);
    if (laavorFather !== undefined && laavorFather !== null) {
        var itemExpander = laavorFather.children;

        SaveDefaults(laavorUserOptions[idFather]);
		
		var userOptionsLocal = laavorUserOptions[idFather];
			
		var elemSpaceRight = elemSpace = document.createElement("span");
		var elemSpaceLeft = elemSpace = document.createElement("span"); 
		var elemArrow;
			
		if(userOptionsLocal.imageArrowExpanded !== "none" && userOptionsLocal.imageArrowClosed !== "none")
		{
			elemArrow = document.createElement("img");
			
			if (userOptionsLocal.startExpanded.toString() === "true"){
				elemArrow.src = userOptionsLocal.imageArrowExpanded;
			}
			else{
				elemArrow.src = userOptionsLocal.imageArrowClosed;
			}
			
			elemArrow.style.width = userOptionsLocal.imageArrowWidth.replace("px", "") + "px";
			elemArrow.style.height = userOptionsLocal.imageArrowHeight.replace("px", "") + "px";
			elemArrow.style.verticalAlign = "baseline";
			
			elemSpaceRight.innerHTML = "&nbsp&nbsp&nbsp";
			elemSpaceLeft.innerHTML = "&nbsp&nbsp&nbsp";
		}
		else if((userOptionsLocal.imageArrowExpanded !== "none" && userOptionsLocal.imageArrowClosed === "none") ||
			    (userOptionsLocal.imageArrowExpanded === "none" && userOptionsLocal.imageArrowClosed !== "none")){
					
			throw new Error("When used imageArrowExpanded it is also necessary to use the imageArrowClosed property or vice versa, or leave empty.");
		}
		else{
			elemArrow = document.createElement("span");
			elemArrow.innerHTML = "";
			elemSpaceRight.innerHTML = "";
			elemSpaceLeft.innerHTML = "";
		}
		
		try
		{
			var spanTitle = document.createElement("span");
			spanTitle.innerHTML = itemExpander[0].innerHTML;
		
			itemExpander[0].innerHTML = "";
		
			itemExpander[0].appendChild(elemSpaceLeft);
			itemExpander[0].appendChild(elemArrow);
			itemExpander[0].appendChild(elemSpaceRight);
		
			itemExpander[0].appendChild(spanTitle);
		}
		catch(e){
			throw new Error("Error while mounting title, if necessary contact Laavor support.");
		}
				
        try {
			
			var heightContent = GetHeight(itemExpander[1]);
						
			var itemFull = { Title: itemExpander[0], Arrow: elemArrow, Content: itemExpander[1], HeightContent: heightContent };
			itemExpander[1].style.display = 'none';
			laavorAllItemExpander[idFather] = itemFull;
			itemFull.Title.setAttribute("IdFather", idFather);
		
			itemFull.Title.onclick = clickTitle;
			
			itemFull.Title.setAttribute("LaavorIsSelected", false);
		
			itemFull.Title.style.backgroundColor = userOptionsLocal.backgroundColorTitle;
			itemFull.Title.style.border = "solid 1px";
			itemFull.Title.style.borderColor = userOptionsLocal.borderColorTitle;
			itemFull.Title.style.color = userOptionsLocal.textColorTitle;
			itemFull.Title.style.fontSize = userOptionsLocal.fontSizeTitle.replace("em", "") + 'em';
		
			itemFull.Content.style.border = "solid 1px";
			itemFull.Content.style.borderColor = userOptionsLocal.borderColorContent;
		
			itemFull.Title.style.cursor = "pointer";
		
			itemFull.Title.style.marginBottom = "0px";
			itemFull.Content.style.marginBottom = "0px";
			itemFull.Title.style.marginTop = "0px";
			itemFull.Content.style.marginTop = "0x";

            if (userOptionsLocal.startExpanded.toString() === "true") {
                laavorAllItemExpander[idFather].Title.setAttribute("LaavorIsSelected", true);
                ShowWithHeightEffect(laavorAllItemExpander[idFather]);
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

function SaveDefaults(options) {
    var defaultOptions = GetDefaults();

    if (options.startExpanded === undefined || options.startExpanded === null) {
        options.startExpanded = defaultOptions.startExpanded;
    }

    if (options.backgroundColorTitle === undefined || options.backgroundColorTitle === null) {
        options.backgroundColorTitle = defaultOptions.backgroundColorTitle;
    }

    if (options.borderColorTitle === undefined || options.borderColorTitle === null) {
        options.borderColorTitle = defaultOptions.borderColorTitle;
    }

    if (options.textColorTitle === undefined || options.textColorTitle === null) {
        options.textColorTitle = defaultOptions.textColorTitle;
    }

    if (options.fontSizeTitle === undefined || options.fontSizeTitle === null) {
        options.fontSizeTitle = defaultOptions.fontSizeTitle;
    }

    if (options.borderColorContent === undefined || options.borderColorContent === null) {
        options.borderColorContent = defaultOptions.borderColorContent;
    }
	
	if (options.imageArrowExpanded === undefined || options.imageArrowExpanded === null) {
        options.imageArrowExpanded = defaultOptions.imageArrowExpanded;
    }
	
	if (options.imageArrowClosed === undefined || options.imageArrowClosed === null) {
        options.imageArrowClosed = defaultOptions.imageArrowClosed;
    }
	
	if (options.imageArrowWidth === undefined || options.imageArrowWidth === null) {
        options.imageArrowWidth= defaultOptions.imageArrowWidth;
    }
	
	if (options.imageArrowHeight === undefined || options.imageArrowHeight === null) {
        options.imageArrowHeight = defaultOptions.imageArrowHeight;
    }
}

function clickTitle() {
    try {
        var isSelected = this.getAttribute("LaavorIsSelected");
		var idFather = this.getAttribute("IdFather");

        var itemFull = laavorAllItemExpander[idFather];

        if (itemFull !== undefined && itemFull !== null) {
            if (isSelected.toString() === 'true') {
                HideWithHeightEffect(itemFull);
            }
            else {
                ShowWithHeightEffect(itemFull);
            }
        }
        else {
            throw new Error("Error in count inside Expander(Click) contact Laavor.com with example.");
        }
    }
    catch(e){
        throw new Error("Error in count inside Expander(Click) contact Laavor.com with example.");
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
        throw new Error("Error in count inside Expander(Height Item) contact Laavor.com with example.");
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

        var controlCount = 0;
        var currentTime = 50;

        objectItem.Content.style.opacity = "0";

        for (var iStepA = objectItem.HeightContent; iStepA > 0; iStepA -= stepAnimation) {
            changeHeightInTime(objectItem.Content, iStepA, currentTime);
            if (controlCount > 11) {
                throw new Error("Error in count inside Expander(Hide Item) contact Laavor.com with example.");
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
        }, currentTime);

        objectItem.Title.setAttribute("LaavorIsSelected", false);
		var idFather = objectItem.Title.getAttribute("IdFather");
		
		if(laavorUserOptions[idFather].imageArrowExpanded !== "none" && laavorUserOptions[idFather].imageArrowClosed !== "none")
		{		
			objectItem.Arrow.src = laavorUserOptions[idFather].imageArrowClosed;
		}
    }
}

function ShowWithHeightEffect(objectItem) {
    if (objectItem.Content !== undefined && objectItem.Content !== null && objectItem.HeightContent !== undefined && objectItem.HeightContent !== null) {
        var stepAnimation = objectItem.HeightContent / 10;

        var controlCount = 0;
        var currentTime = 50;

        objectItem.Content.style.height = stepAnimation.toString() + 'px';
        objectItem.Content.style.display = 'block';

        for (var iStepA = stepAnimation; iStepA <= objectItem.HeightContent; iStepA += stepAnimation) {
            changeHeightInTime(objectItem.Content, iStepA, currentTime);
            if (controlCount > 11) {
                throw new Error("Error in count inside Expander(Hide Item) contact Laavor.com with example.");
            }
            currentTime += 50;
        }

        setTimeout(function () {
            objectItem.Content.style.height = objectItem.HeightContent.toString() + 'px';
            objectItem.Content.style.opacity = "1";
		}, currentTime);

        currentTime += 50;

        objectItem.Title.setAttribute("LaavorIsSelected", true);
		var idFather = objectItem.Title.getAttribute("IdFather");
		
		if(laavorUserOptions[idFather].imageArrowExpanded !== "none" && laavorUserOptions[idFather].imageArrowClosed !== "none")
		{		
			objectItem.Arrow.src = laavorUserOptions[idFather].imageArrowExpanded;
		}
    }
}

function GetDefaults() {
    return {
		startExpanded: true,
        backgroundColorTitle: "black",
        borderColorTitle: "black",
        textColorTitle: "white",
        fontSizeTitle: "2em",
        borderColorContent: "black",
		imageArrowExpanded: "none",
		imageArrowClosed: "none",
		imageArrowWidth: "24px",
		imageArrowHeight: "24px"
    };
}