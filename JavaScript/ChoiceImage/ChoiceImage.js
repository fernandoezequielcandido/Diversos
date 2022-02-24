function lvCI01(lvCI42) {
    "use strict";
    var lvCI02 = "";
    var lvCI03 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var lvCI04 = 0; lvCI04 < 15; lvCI04++)
        lvCI02 += lvCI03.charAt(Math.floor(Math.random() * lvCI03.length));

    if (lvCI42 !== undefined && lvCI42 !== null) {
        lvCI02 += "_" + lvCI42;
    }

    return lvCI02;
}

window.onload = function () {
    "use strict";
    var lvCI05 = document.getElementsByClassName("laavorChoiceImage");

    if (lvCI05 === undefined || lvCI05 === null || lvCI05.length === 0) {

    }
    else {
        for (var lvCI06 = 0; lvCI06 < lvCI05.length; lvCI06++) {
            var lvCI07 = lvCI05[lvCI06];
            lvCI08(lvCI07, lvCI06);
        }
    }

}

function lvCI09(lvCI11) {
    var lvCI10 = lvCI11.target.getAttribute("lvCI41");
    lvCI11.target.classList.add(lvCI10);
    lvCI11.target.style.borderImage = "1px solid gren";
    sessionStorage["lvCI24"] = lvCI10;
}

function dragEnd(lvCI12) {
    var lvCI10 = lvCI12.target.getAttribute("lvCI41");
    lvCI12.target.classList.remove(lvCI10);
    lvCI12.target.style.borderImage = "";
    sessionStorage["lvCI24"] = "";
}

function drop(lvCI14) {
    lvCI14.preventDefault();
    var lvCI10 = sessionStorage["lvCI24"];
    var lvCI13 = lvCI14.target;
    var lvCI15 = lvCI13.getAttribute("type");

    if (lvCI15 !== "node") {
        if (lvCI15 !== undefined && lvCI15 !== null) {
            if (lvCI10 !== undefined && lvCI10 !== null) {
                var lvCI16 = document.getElementsByClassName(lvCI10)[0];

                var lvCI17 = lvCI14.target.getAttribute("lvCI39");
                var lvCI18 = lvCI16.getAttribute("lvCI40");

                if (lvCI18 !== undefined && lvCI18 !== null && lvCI17 !== lvCI18) {
                    lvCI14.target.appendChild(document.getElementsByClassName(lvCI10 + "_div")[0]);

                    lvCI16.setAttribute("lvCI40", lvCI17);
                    var lvCI19 = document.getElementsByClassName(lvCI16.getAttribute("lvCI41") + "_div")[0];
                    lvCI19.setAttribute("lvCI40", lvCI17);
                }
            }
        }
        else {
            var lvCI17 = lvCI14.target.getAttribute("lvCI17");
            if (lvCI17 !== undefined && lvCI17 !== null) {
                var lvCI13 = document.getElementsByClassName(lvCI17)[0];
                var lvCI16 = document.getElementsByClassName(lvCI10)[0];

                var lvCI18 = lvCI16.getAttribute("lvCI40");

                if (lvCI18 !== undefined && lvCI18 !== null && idFather !== lvCI18) {
                    if (lvCI13 !== undefined && lvCI13 !== null) {
                        lvCI13.appendChild(document.getElementsByClassName(lvCI10 + "_div")[0]);
                    }
                    else {
                        var sdf = 0;
                    }

                    lvCI16.setAttribute("lvCI40", lvCI17);
                    var lvCI19 = document.getElementsByClassName(lvCI16.getAttribute("lvCI41") + "_div")[0];
                    lvCI19.setAttribute("lvCI40", lvCI17);
                }

            }
        }
    }
    else {
        var lvCI17 = lvCI14.target.getAttribute("lvCI40");
        if (lvCI17 !== undefined && lvCI17 !== null) {
            var lvCI13 = document.getElementsByClassName(lvCI17)[0];
            var lvCI16 = document.getElementsByClassName(lvCI10)[0];

            var lvCI18 = lvCI16.getAttribute("lvCI40");

            if (lvCI18 !== undefined && lvCI18 !== null && lvCI17 !== lvCI18) {
                lvCI13.appendChild(document.getElementsByClassName(lvCI10 + "_div")[0]);

                lvCI16.setAttribute("lvCI40", lvCI17);
                var lvCI19 = document.getElementsByClassName(lvCI16.getAttribute("lvCI41") + "_div")[0];
                lvCI19.setAttribute("lvCI40", lvCI17);
            }
        }
    }

    sessionStorage["lvCI24"] = "";
}

function allowDropEvent(lvCI20) {
    lvCI20.preventDefault();
}

function lvCI08(lvCI21, lvCI22) {
    "use strict";
    var lvCI23;
    var lvCI25 = lvCI01("");
    var lvCI26 = lvCI01("");

    var lvCI27 = 0;
    var lvCI28 = 1;

    var lvCI29 = lvCI21.children;
    var lvCI30 = lvCI29[lvCI27].children;
    var lvCI31 = lvCI29[lvCI28].children;

    lvCI29[lvCI27].addEventListener("drop", drop, true);
    lvCI29[lvCI27].addEventListener("dragover", allowDropEvent, true);
    lvCI29[lvCI27].setAttribute("type", "container");
    lvCI29[lvCI27].setAttribute("lvCI39", lvCI25);
    lvCI29[lvCI27].classList.add(lvCI25);

    lvCI29[lvCI28].addEventListener("drop", drop, true);
    lvCI29[lvCI28].addEventListener("dragover", allowDropEvent, true);
    lvCI29[lvCI28].setAttribute("type", "container");
    lvCI29[lvCI28].setAttribute("lvCI39", lvCI26);
    lvCI29[lvCI28].classList.add(lvCI26);

    var lvCI32 = lvCI30.length;

    var lvCI33 = [];
    var listIds = [];

    for (var lvCI34 = 0; lvCI34 < lvCI32; lvCI34++) {

        var lvCI35 = lvCI30[lvCI34];

        var lvCI36 = document.createElement("div");
        var lvCI37 = document.createElement("br");

        lvCI36.appendChild(lvCI35);
        lvCI36.appendChild(lvCI37);

        lvCI36.setAttribute("lvCI40", lvCI25);

        lvCI33.push(lvCI36);
        lvCI32--;
        lvCI34--;
    }

    var lvCI32 = lvCI33.length;
    for (var lvCI34 = 0; lvCI34 < lvCI32; lvCI34++) {
        lvCI23 = lvCI01(lvCI22);

        lvCI29[0].appendChild(lvCI33[lvCI34]);
        lvCI29[0].children[lvCI34].classList.add(lvCI23 + "_div");
        lvCI29[0].children[lvCI34].children[0].setAttribute("draggable", true);
        lvCI29[0].children[lvCI34].children[0].setAttribute("lvCI41", lvCI23);
        lvCI29[0].children[lvCI34].children[0].addEventListener("dragstart", lvCI09, true);
        lvCI29[0].children[lvCI34].children[0].addEventListener("dragend", dragEnd, true);
        lvCI29[0].children[lvCI34].children[0].setAttribute("type", "node");
        lvCI29[0].children[lvCI34].children[0].setAttribute("lvCI40", lvCI25);
    }

    var lvCI38 = lvCI31.length;

    for (var lvCI34 = 0; lvCI34 < lvCI38; lvCI34++) {
        lvCI23 = lvCI01(lvCI22);

        var lvCI35 = lvCI31[lvCI34];

        lvCI35.setAttribute("draggable", true);
        lvCI35.setAttribute("lvCI41", lvCI23);
        lvCI35.addEventListener("dragstart", dragEvent);
    }
}