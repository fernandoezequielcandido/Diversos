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
    evt.target.style.borderImage = "1px solid gren";
    sessionStorage["dragItemlaavor"] = uniqueName;
}

function dragEnd(evt) {
    var uniqueName = evt.target.getAttribute("uniqueName_id");
    evt.target.classList.remove(uniqueName);
    evt.target.style.borderImage = "";
    sessionStorage["dragItemlaavor"] = "";
}

function drop(evt) {
    evt.preventDefault();
    var uniqueName = sessionStorage["dragItemlaavor"];
    var elemFather = evt.target;
    var typeElem = elemFather.getAttribute("type");

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
                    else {
                        var sdf = 0;
                    }

                    imgLaavor.setAttribute("idFather", idFather);
                    var divImg = document.getElementsByClassName(imgLaavor.getAttribute("uniqueName_id") + "_div")[0];
                    divImg.setAttribute("idFather", idFather);
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
            }
        }
    }

    sessionStorage["dragItemlaavor"] = "";
}

/*
function dragenter(evt){
	var idFather = evt.target.getAttribute("idFather");
	var elemFather = document.getElementsByClassName(idFather)[0];
  
	if(elemFather !== undefined && elemFather !== null)
	{
		elemFather.style.border = "1px solid blue";
	}
}

function dragleave(evt){
	var idFather = evt.target.getAttribute("idFather");
	var elemFather = document.getElementsByClassName(idFather)[0];
  
	if(elemFather !== undefined && elemFather !== null)
	{
		elemFather.style.border = "";
	}
}*/

function allowDropEvent(ev) {
	/*if (ev.target.className !== "droptarget" ) {
        return false;
    }*/

    ev.preventDefault();
}

function laavorChoiceImageInitAll(choiceImageItem, id) {
    "use strict";
    var uniqueName;
    var uniqueNameLeft = laavorUniqueName("");
    var uniqueNameRight = laavorUniqueName("");

    var indexLeft = 0;
    var indexRight = 1;

    //change side change father
    //try
    //{
    var itemsLeftRight = choiceImageItem.children;
    var itemsLeft = itemsLeftRight[indexLeft].children;
    var itemsRight = itemsLeftRight[indexRight].children;

    itemsLeftRight[indexLeft].addEventListener("drop", drop, true);
    itemsLeftRight[indexLeft].addEventListener("dragover", allowDropEvent, true);
    //itemsLeftRight[indexLeft].addEventListener("dragenter", dragenter, true);
    //itemsLeftRight[indexLeft].addEventListener("dragleave", dragleave, true);
    itemsLeftRight[indexLeft].setAttribute("type", "container");
    itemsLeftRight[indexLeft].setAttribute("idLaavor", uniqueNameLeft);
    itemsLeftRight[indexLeft].classList.add(uniqueNameLeft);

    //uniqueName = laavorUniqueName("");
    //itemsLeftRight[0].setAttribute("uniqueName", uniqueName);

    itemsLeftRight[indexRight].addEventListener("drop", drop, true);
    itemsLeftRight[indexRight].addEventListener("dragover", allowDropEvent, true);
    //itemsLeftRight[indexRight].addEventListener("dragenter", dragenter, true);
    //itemsLeftRight[indexRight].addEventListener("dragleave", dragleave, true);
    itemsLeftRight[indexRight].setAttribute("type", "container");
    itemsLeftRight[indexRight].setAttribute("idLaavor", uniqueNameRight);
    itemsLeftRight[indexRight].classList.add(uniqueNameRight);

    var countItemsLeft = itemsLeft.length;

    var lisTemp = [];
    var listIds = [];

    for (var iItem = 0; iItem < countItemsLeft; iItem++) {

        var dragDropItem = itemsLeft[iItem];

        var elemDiv = document.createElement("div");
        var elemBreakLine = document.createElement("br");

        elemDiv.appendChild(dragDropItem);
        elemDiv.appendChild(elemBreakLine);

        elemDiv.setAttribute("idFather", uniqueNameLeft);

        lisTemp.push(elemDiv);
        countItemsLeft--;
        iItem--;
    }

    //set idfhaetr and type(container/node);
    var countItemsLeft = lisTemp.length;
    for (var iItem = 0; iItem < countItemsLeft; iItem++) {
        uniqueName = laavorUniqueName(id);

        itemsLeftRight[0].appendChild(lisTemp[iItem]);
        itemsLeftRight[0].children[iItem].classList.add(uniqueName + "_div");
        itemsLeftRight[0].children[iItem].children[0].setAttribute("draggable", true);
        itemsLeftRight[0].children[iItem].children[0].setAttribute("uniqueName_id", uniqueName);
        itemsLeftRight[0].children[iItem].children[0].addEventListener("dragstart", dragStart, true);
        itemsLeftRight[0].children[iItem].children[0].addEventListener("dragend", dragEnd, true);
        itemsLeftRight[0].children[iItem].children[0].setAttribute("type", "node");
        itemsLeftRight[0].children[iItem].children[0].setAttribute("idFather", uniqueNameLeft);
    }

    var countItemsRight = itemsRight.length;

    for (var iItem = 0; iItem < countItemsRight; iItem++) {
        uniqueName = laavorUniqueName(id);

        var dragDropItem = itemsRight[iItem];

        dragDropItem.setAttribute("draggable", true);
        dragDropItem.setAttribute("uniqueName_id", uniqueName);
        dragDropItem.addEventListener("dragstart", dragEvent);


    }
    //}
    //catch(e)
    //{

    //}
}