window.onload = function () {
    "use strict";
    var choiceImage = document.getElementsByClassName("laavorChoiceImage");

    if (choiceImage === undefined || choiceImage === null || choiceImage.length === 0) {

    }
    else {
        for (var iChoiceImage = 0; iChoiceImage < choiceImage.length; iChoiceImage++) {
            var choiceImageItem = choiceImage[iChoiceImage];
            laavorChoiceImageInitAll(choiceImageItem, iChoiceImage);
        }
    }
}

function dragStart(evt) {
    var uniqueName = evt.target.getAttribute("uniqueName_id");
    evt.target.classList.add(uniqueName);
	var idFatherAll = evt.target.getAttribute("idFatherAll");
	var saveData = document.getElementsByClassName("laavorChoiceImage")[idFatherAll];
	saveData.setAttribute("dragItemlaavor", uniqueName);
}

function dragEnd(evt) {
    var uniqueName = evt.target.getAttribute("uniqueName_id");
    evt.target.classList.remove(uniqueName);
	var idFatherAll = evt.target.getAttribute("idFatherAll");
	var saveData = document.getElementsByClassName("laavorChoiceImage")[idFatherAll];
	saveData.setAttribute("dragItemlaavor", uniqueName);
}

function drop(evt) {
    evt.preventDefault();
	var idFatherAll = evt.target.getAttribute("idFatherAll");
	var saveData = document.getElementsByClassName("laavorChoiceImage")[idFatherAll];
	
    var uniqueName = saveData.getAttribute("dragItemlaavor");
    var elemFather = evt.target;
    var typeElem = elemFather.getAttribute("type");

	var sourceSelected = "";
	var valueSelected = "";
	
	var isSelected = false;
		
    if (typeElem !== "node") {
        if (typeElem !== undefined && typeElem !== null) {
            if (uniqueName !== undefined && uniqueName !== null) {
                var imgLaavor = document.getElementsByClassName(uniqueName)[0];

                var idFather = evt.target.getAttribute("idLaavor");
                var idFatherNode = imgLaavor.getAttribute("idFather");

                if (idFatherNode !== undefined && idFatherNode !== null && idFather !== idFatherNode) {
                    evt.target.appendChild(document.getElementsByClassName(uniqueName + "_div")[0]);

                    imgLaavor.setAttribute("idFather", idFather);
                    var divImg = document.getElementsByClassName(imgLaavor.getAttribute("uniqueName_id") + "_div")[0];
                    divImg.setAttribute("idFather", idFather);
					
					var IDSelect = 	saveData.getAttribute("IDSelect");
	
					if(idFather == IDSelect)
					{
						isSelected = true;
					}
				
					sourceSelected = imgLaavor.src;
					valueSelected = imgLaavor.getAttribute("laavorValue");
                }
            }
        }
        else {
            var idFather = evt.target.getAttribute("idFather");
            if (idFather !== undefined && idFather !== null) {
                var elemFather = document.getElementsByClassName(idFather)[0];
                var imgLaavor = document.getElementsByClassName(uniqueName)[0];

                var idFatherNode = imgLaavor.getAttribute("idFather");

                if (idFatherNode !== undefined && idFatherNode !== null && idFather !== idFatherNode) {
                    if (elemFather !== undefined && elemFather !== null) {
                        elemFather.appendChild(document.getElementsByClassName(uniqueName + "_div")[0]);
                    }

                    imgLaavor.setAttribute("idFather", idFather);
                    var divImg = document.getElementsByClassName(imgLaavor.getAttribute("uniqueName_id") + "_div")[0];
                    divImg.setAttribute("idFather", idFather);
					
					var IDSelect = saveData.getAttribute("IDSelect");
	
					if(idFather == IDSelect)
					{
						isSelected = true;
					}
				
					sourceSelected = imgLaavor.src;
					valueSelected = imgLaavor.getAttribute("laavorValue");
                }
            }
        }
    }
    else {
        var idFather = evt.target.getAttribute("idFather");
        if (idFather !== undefined && idFather !== null) {
            var elemFather = document.getElementsByClassName(idFather)[0];
            var imgLaavor = document.getElementsByClassName(uniqueName)[0];

            var idFatherNode = imgLaavor.getAttribute("idFather");

            if (idFatherNode !== undefined && idFatherNode !== null && idFather !== idFatherNode) {
                elemFather.appendChild(document.getElementsByClassName(uniqueName + "_div")[0]);

                imgLaavor.setAttribute("idFather", idFather);
                var divImg = document.getElementsByClassName(imgLaavor.getAttribute("uniqueName_id") + "_div")[0];
                divImg.setAttribute("idFather", idFather);
				
				var IDSelect = saveData.getAttribute("IDSelect");
	
				if(idFather == IDSelect)
				{
					isSelected = true;
				}
				
				sourceSelected = imgLaavor.src;
				valueSelected = imgLaavor.getAttribute("laavorValue");
            }
        }
    }
	
	var commandEvent;
	
	if(isSelected === "true")
	{
		commandEvent = saveData.getAttribute("laavorChosen");
	}
	else
	{
		commandEvent = saveData.getAttribute("laavorUnchosen");
	}
	
	if(commandEvent !== undefined && commandEvent !== null)
	{
		try
		{
			window[commandEvent](valueSelected, sourceSelected);		
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
	
    saveData.setAttribute("dragItemlaavor", "");
}

function laavorChoiceImageGetSelectedValues(id)
{
	"use strict";
	var choiceImageItem = document.getElementById(id);
	var values = [];		
		
	if(choiceImageItem !== undefined && choiceImageItem !== null)
	{
		var itemsDeselectSelect = choiceImageItem.children;
		var imgs = itemsDeselectSelect[1].getElementsByTagName("img");
			
		var count = imgs.length;
		for(var iImg = 0; iImg < imgs.length; iImg++)
		{
			var eleImg = imgs[iImg];
			var valueImg = eleImg.getAttribute("laavorValue");
			
			if(valueImg !== undefined && valueImg !== null)
			{
				values.push(valueImg);
			}
		}
	}
	
	return values;
}

function laavorChoiceImageGetSelectedImages(id)
{
	"use strict";
	var choiceImageItem = document.getElementById(id);
	var sources = [];		
		
	if(choiceImageItem !== undefined && choiceImageItem !== null)
	{
		var itemsDeselectSelect = choiceImageItem.children;
		var imgs = itemsDeselectSelect[1].getElementsByTagName("img");
			
		var count = imgs.length;
		for(var iImg = 0; iImg < imgs.length; iImg++)
		{
			var eleImg = imgs[iImg];
			var sourceImg = eleImg.src;
			
			if(sourceImg !== undefined && sourceImg !== null)
			{
				sources.push(sourceImg);
			}
		}
	}
	
	return sources;
}

function allowDropEvent(ev) {
    ev.preventDefault();
}

function laavorUniqueName(id) {
    "use strict";
    var laavorName = "";
    var charPotential = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 15; i++)
        laavorName += charPotential.charAt(Math.floor(Math.random() * charPotential.length));

    if (id !== undefined && id !== null) {
        laavorName += "_" + id;
    }

    return laavorName;
}

function laavorChoiceImageInitAll(choiceImageItem, id) {
    "use strict";
    var uniqueName;
    var uniqueNameDeselect = laavorUniqueName("");
    var uniqueNameSelect = laavorUniqueName("");

    var indexDeselect = 0;
    var indexSelect = 1;

    var itemsDeselectSelect = choiceImageItem.children;
    var itemsDeselect = itemsDeselectSelect[indexDeselect].children;
    var itemsSelect = itemsDeselectSelect[indexSelect].children;

    itemsDeselectSelect[indexDeselect].addEventListener("drop", drop, true);
    itemsDeselectSelect[indexDeselect].addEventListener("dragover", allowDropEvent, true);
    itemsDeselectSelect[indexDeselect].setAttribute("type", "container");
    itemsDeselectSelect[indexDeselect].setAttribute("idLaavor", uniqueNameDeselect);
    itemsDeselectSelect[indexDeselect].classList.add(uniqueNameDeselect);
	itemsDeselectSelect[indexDeselect].setAttribute("idFatherAll", id);
	
    itemsDeselectSelect[indexSelect].addEventListener("drop", drop, true);
    itemsDeselectSelect[indexSelect].addEventListener("dragover", allowDropEvent, true);
    itemsDeselectSelect[indexSelect].setAttribute("type", "container");
    itemsDeselectSelect[indexSelect].setAttribute("idLaavor", uniqueNameSelect);
    itemsDeselectSelect[indexSelect].classList.add(uniqueNameSelect);
	itemsDeselectSelect[indexSelect].setAttribute("idFatherAll", id);
	
	choiceImageItem.setAttribute("IDDeselect", uniqueNameDeselect);
	choiceImageItem.setAttribute("IDSelect", uniqueNameSelect);
		
    var countItemsDeselect = itemsDeselect.length;

    var lisTemp = [];

    for (var iItem = 0; iItem < countItemsDeselect; iItem++) {

        var dragDropItem = itemsDeselect[iItem];

        var elemDiv = document.createElement("div");
        var elemBreakLine = document.createElement("br");

        elemDiv.appendChild(dragDropItem);
        elemDiv.appendChild(elemBreakLine);
		
        elemDiv.setAttribute("idFather", uniqueNameDeselect);

        lisTemp.push(elemDiv);
        countItemsDeselect--;
        iItem--;
    }

    var countItemsDeselect = lisTemp.length;
    for (var iItem = 0; iItem < countItemsDeselect; iItem++) {
        uniqueName = laavorUniqueName(id);

        itemsDeselectSelect[0].appendChild(lisTemp[iItem]);
        itemsDeselectSelect[0].children[iItem].classList.add(uniqueName + "_div");
        itemsDeselectSelect[0].children[iItem].children[0].setAttribute("draggable", true);
        itemsDeselectSelect[0].children[iItem].children[0].setAttribute("uniqueName_id", uniqueName);
        itemsDeselectSelect[0].children[iItem].children[0].addEventListener("dragstart", dragStart, true);
		itemsDeselectSelect[0].children[iItem].children[0].addEventListener("dragend", dragEnd, true);		
		itemsDeselectSelect[0].children[iItem].children[0].setAttribute("type", "node");
        itemsDeselectSelect[0].children[iItem].children[0].setAttribute("idFather", uniqueNameDeselect);
		itemsDeselectSelect[0].children[iItem].children[0].style.cursor = "grab";
		itemsDeselectSelect[0].children[iItem].children[0].setAttribute("idFatherAll", id);
    }

    var countItemsSelect = itemsSelect.length;
    for (var iItem = 0; iItem < countItemsSelect; iItem++) {
        uniqueName = laavorUniqueName(id);

        var dragDropItem = itemsSelect[iItem];

        dragDropItem.setAttribute("draggable", true);
        dragDropItem.setAttribute("uniqueName_id", uniqueName);
        dragDropItem.addEventListener("dragstart", dragEvent);
    }
}