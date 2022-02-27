var isStoped;
var currentPositionTop;
var itemsScrollGlobal;
var numberVisibleItemsGlobal;
var speedGlobal;
var fatherItemGlobal;
var time;

function LaavorDynamicNews(idFather, object) {
    isStoped = false;

    var fatherItem = document.getElementById(idFather);

    if (fatherItem !== undefined && fatherItem !== null) {
        fatherItemGlobal = fatherItem;

        var defaults = GetDefaults();

        var pauseHover;
        if (object.pauseInHover !== undefined && object.pauseInHover !== null) {
            pauseHover = object.pauseInHover;
        }
        else {
            pauseHover = defaults.pauseInHover;
        }

        if (pauseHover.toString() === "true") {
            fatherItem.onmouseover = MouseOver;
            fatherItem.onmouseleave = MouseLeave;
        }

        var itemHtml;
        if (object.elementItemHtml !== undefined && object.elementItemHtml !== null) {
            itemHtml = object.elementItemHtml;
        }
        else {
            itemHtml = defaults.elementItemHtml;
        }

        var itemsScroll = fatherItem.getElementsByTagName(itemHtml);


        if (itemsScroll !== undefined && itemsScroll !== null) {
            var numberVisibleItems;
            if (object.numberVisibleItems !== undefined && object.numberVisibleItems !== null) {
                numberVisibleItems = object.numberVisibleItems;
            }
            else {
                numberVisibleItems = defaults.numberVisibleItems;
            }
            numberVisibleItemsGlobal = numberVisibleItems;

            for (var iItem = 0; iItem < itemsScroll.length; iItem++) {
                if (iItem + 1 <= numberVisibleItems) {
                    itemsScroll[iItem].style.display = "block";
                }
                else {
                    itemsScroll[iItem].style.display = "none";
                }
            }

            var speed;
            if (object.speed !== undefined && object.speed !== null) {
                speed = object.speed;
            }
            else {
                speed = defaults.speed;
            }
            speedGlobal = speed;

            var allItems = [];
            for (var iItemClone = 0; iItemClone < itemsScroll.length; iItemClone++) {
                allItems.push(itemsScroll[iItemClone].cloneNode(true));
            }
            itemsScrollGlobal = allItems;

            clearTimeout(time);
            currentPositionTop = 0;
            time = setTimeout(function () {
                ChangeItems(1, allItems, numberVisibleItems, speed, fatherItem);
            }, speed);
        }
        else {
            throw new Error("The elementItemHtml 'children' was not found inside the parent.");
        }
    }
    else {
        throw new Error("Item with idFather informed was not found.");
    }
}

function MouseOver() {
    isStoped = true;
}

function MouseLeave() {
    isStoped = false;
}

function LaavorMoveToPrevious() {
    Previous();
}

function LaavorMoveToNext() {
    Next();
}

function Previous() {
    if (currentPositionTop !== undefined && currentPositionTop !== null && itemsScrollGlobal !== undefined && itemsScrollGlobal !== null &&
        numberVisibleItemsGlobal !== undefined && numberVisibleItemsGlobal !== null && speedGlobal !== undefined && speedGlobal !== null &&
        fatherItemGlobal !== undefined && fatherItemGlobal !== null) {
        isStoped = false;
        var previousItem;
        if (currentPositionTop - 1 >= 0) {
            previousItem = currentPositionTop - 1;
        }
        else {
            previousItem = itemsScrollGlobal.length - 1;
        }
        clearTimeout(time);
        ChangeItems(previousItem, itemsScrollGlobal, numberVisibleItemsGlobal, speedGlobal, fatherItemGlobal);
    }
    else {
        throw new Error('Incomplete or invalid data for function call - "LaavorMoveToPrevious".');
    }
}

function Next() {
    if (currentPositionTop !== undefined && currentPositionTop !== null && itemsScrollGlobal !== undefined && itemsScrollGlobal !== null &&
        numberVisibleItemsGlobal !== undefined && numberVisibleItemsGlobal !== null && speedGlobal !== undefined && speedGlobal !== null &&
        fatherItemGlobal !== undefined && fatherItemGlobal !== null) {
        isStoped = false;
        var nextItem;
        if (currentPositionTop + 1 >= itemsScrollGlobal.length) {
            nextItem = 0;
        }
        else {
            nextItem = currentPositionTop + 1;
        }

        clearTimeout(time);
        ChangeItems(nextItem, itemsScrollGlobal, numberVisibleItemsGlobal, speedGlobal, fatherItemGlobal);
    }
    else {
        throw new Error('Incomplete or invalid data for function call - "LaavorMoveToNext".');
    }
}

function ChangeItems(positionTop, itemsScroll, numberVisibleItems, speed, fatherItem) {
    var numberVisebleLocal = 0;
    var iItem = positionTop;
    var isInList = [];
    var countSearch = 0;

    if (isStoped.toString() === "false") {
        fatherItem.innerHTML = "";

        while (countSearch < itemsScrollGlobal.length) {
            if (positionTop >= itemsScrollGlobal.length) {
                break;
            }

            if (isInList.indexOf(iItem) >= 0) {
                break;
            }

            if (isInList.length === numberVisibleItems) {
                break;
            }

            isInList.push(iItem);

            if (numberVisebleLocal < numberVisibleItems) {
                fatherItem.appendChild(itemsScroll[iItem]);
                itemsScroll[iItem].style.display = "block";
            }
            else {
                itemsScroll[iItem].style.display = "none";
            }

            iItem++;
            if (iItem === itemsScroll.length) {
                iItem = 0;
            }

            numberVisebleLocal++;
            countSearch++;
        }

        currentPositionTop = positionTop;

        var nextItem;
        if (positionTop + 1 < itemsScroll.length) {
            nextItem = positionTop + 1;
        }
        else {
            nextItem = 0;
        }

        clearTimeout(time);
        time = setTimeout(function () {
            ChangeItems(nextItem, itemsScroll, numberVisibleItems, speed, fatherItem);
        }, speed);
    }
    else {
        clearTimeout(time);
        time = setTimeout(function () {
            ChangeItems(positionTop, itemsScroll, numberVisibleItems, speed, fatherItem);
        }, speed);
    }
}

function GetDefaults() {
    return {
        speed: 3000,
        pauseInHover: false,
        numberVisibleItems: 3,
        elementItemHtml: 'span'
    };
}