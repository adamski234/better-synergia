// ==UserScript==
// @name         Synergia but better
// @version      0.2
// @description  Improves librus synergia because it's bad and stupid and shit
// @author       adamski234#7707
// @match        https://synergia.librus.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //Remove the "bezpieczny uczen" bullshit
    try {
        document.getElementById("icon-bezpiecznyuczen").parentNode.remove();
    } catch (e) {
        console.error("Error while removing `bezpieczny uczen` button");
    }

    //Remove the "homework" button
    try {
        document.getElementById("icon-zadania").parentNode.remove();
    } catch (e) {
        console.error("Error while removing `zadania` button");
    }
    //Useful variable
    let topMenuBar;
    try {
        const mainMenu = document.getElementById("main-menu");
        if (!mainMenu) {
            throw new Error();
        }
        topMenuBar = mainMenu.getElementsByClassName("main-menu-list")[0];
        if (!topMenuBar) {
            throw new Error();
        }
    } catch (e) {
        console.error("`topMenuBar` not found. Exiting");
        return;
    }

    let uczenMenu = topMenuBar.getElementsByTagName("li")[6].getElementsByTagName("ul")[0]; //The list that shows up on hover
    try {
        const parent = topMenuBar.getElementsByTagName("li")[6];
        if (!parent) {
            throw new Error();
        }
        uczenMenu = parent.getElementsByTagName("ul")[0];
        if (!uczenMenu) {
            throw new Error();
        }
    } catch (e) {
        console.error("`uczenMenu` not found. Exiting.");
        return;
    }

    //Remove the grade button and add it to the uczen menu
    try {
        const gradeMenuToAppend = document.createElement("li");
        gradeMenuToAppend.innerHTML = "<a href=\"/przegladaj_oceny/uczen\">Oceny</a>"
        uczenMenu.appendChild(gradeMenuToAppend);
        document.getElementById("icon-oceny").parentNode.remove();
    } catch (e) {
        console.error("Error while moving the `grades` button");
    }

    //Remove the attendance button and add it to the uczen menu
    try {
        const attendanceMenuToAppend = document.createElement("li");
        attendanceMenuToAppend.innerHTML = "<a href=\"/przegladaj_nb/uczen\">Frekwencja</a>"
        uczenMenu.appendChild(attendanceMenuToAppend);
        document.getElementById("icon-nb").parentNode.remove();
    } catch (e) {
        console.error("Error while moving the `attendance` button");
    }

    let orgMenu;
    try {
        const parent = topMenuBar.getElementsByTagName("li")[12];
        if (!parent) {
            throw new Error();
        }
        orgMenu = parent.getElementsByTagName("ul")[0];
        if (!parent) {
            throw new Error();
        }
    } catch (e) {
        console.error("`orgMenu` not found. Exiting");
        return;
    }
    //Remove the calendar button and add it to the organization menu
    try {
        const calendarMenuToAppend = document.createElement("li");
        calendarMenuToAppend.innerHTML = "<a href=\"/terminarz\">Terminarz</a>";
        orgMenu.appendChild(calendarMenuToAppend);
        document.getElementById("icon-terminarz").parentNode.remove();
    } catch (e) {
        console.error("Error while moving the `grades` button");
    }

    //Remove two unused buttons on the top bar
    try {
        topMenuBar.getElementsByTagName("li")[3].remove(); //Books
    } catch (e) {
        console.error("Couldn't remove the `books` menu. Exiting");
        return;
    }
    try {
        topMenuBar.getElementsByTagName("li")[3].remove(); //Polls
    } catch (e) {
        console.error("Couldn't remove the `polls` menu. Exiting");
        return;
    }

    //Create a new top menu bar element for messages and notice board
    const newMenuEntry = document.createElement("li");
    newMenuEntry.innerHTML = "<a href=\"javascript:void(null)\">Informacje</a>";
    newMenuEntry.innerHTML += "<ul></ul>";
    topMenuBar.appendChild(newMenuEntry);

    //Add messages and the notice board to the new element
    const infoMenu = newMenuEntry.getElementsByTagName("ul")[0];
    if (!infoMenu) {
        console.error("`infoMenu` not found. I don't know what the fuck just happened, exiting");
        return
    }
    const messageMenuToAppend = document.createElement("li");
    messageMenuToAppend.innerHTML = "<a href=\"/wiadomosci\">Wiadomości</a>";
    infoMenu.appendChild(messageMenuToAppend);
    try {
        document.getElementById("icon-wiadomosci").parentNode.remove();
    } catch (e) {
        console.error("Could not remove the `messages` button. Exiting");
        return;
    }

    const noticeBoardMenuToAppend = document.createElement("li");
    noticeBoardMenuToAppend.innerHTML = "<a href=\"/ogloszenia\">Ogłoszenia</a>";
    infoMenu.appendChild(noticeBoardMenuToAppend);
    try {
        document.getElementById("icon-ogloszenia").parentNode.remove();
    } catch (e) {
        console.error("Could not remove the `notice board` button. Exiting");
        return;
    }

    //Remove the logo from the top banner
    try {
        document.getElementById("top-banner-container").remove();
    } catch (e) {
        console.error("Could not remove the top banner container. Not exiting.");
    }
})();
