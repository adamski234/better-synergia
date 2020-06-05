// ==UserScript==
// @name         Synergia but better
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Improves librus synergia because it's bad and stupid and shit
// @author       adamski234#7707
// @match        https://synergia.librus.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //Remove the "bezpieczny uczen" bullshit
    document.getElementById("icon-bezpiecznyuczen").parentNode.remove();

    //Remove the "homework" button
    document.getElementById("icon-zadania").parentNode.remove();

    //Useful variable
    const topMenuBar = document.getElementById("main-menu").getElementsByClassName("main-menu-list")[0];

    //Remove the grade button and add it to the uczen menu
    const uczenMenu = topMenuBar.getElementsByTagName("li")[6].getElementsByTagName("ul")[0]; //The list that shows up on hover
    const gradeMenuToAppend = document.createElement("li");
    gradeMenuToAppend.innerHTML = "<a href=\"/przegladaj_oceny/uczen\">Oceny</a>"
    uczenMenu.appendChild(gradeMenuToAppend);
    document.getElementById("icon-oceny").parentNode.remove();

    //Remove the attendance button and add it to the uczen menu
    const attendanceMenuToAppend = document.createElement("li");
    attendanceMenuToAppend.innerHTML = "<a href=\"/przegladaj_nb/uczen\">Frekwencja</a>"
    uczenMenu.appendChild(attendanceMenuToAppend);
    document.getElementById("icon-nb").parentNode.remove();

    //Remove the calendar button and add it to the organization menu
    const orgMenu = topMenuBar.getElementsByTagName("li")[12].getElementsByTagName("ul")[0];
    const calendarMenuToAppend = document.createElement("li");
    calendarMenuToAppend.innerHTML = "<a href=\"/terminarz\">Terminarz</a>";
    orgMenu.appendChild(calendarMenuToAppend);
    document.getElementById("icon-terminarz").parentNode.remove();

    //Remove two unused buttons on the top bar
    topMenuBar.getElementsByTagName("li")[3].remove(); //Books
    topMenuBar.getElementsByTagName("li")[3].remove(); //Polls

    //Create a new top menu bar element for messages and notice board
    const newMenuEntry = document.createElement("li");
    newMenuEntry.innerHTML = "<a href=\"javascript:void(null)\">Informacje</a>";
    newMenuEntry.innerHTML += "<ul></ul>";
    topMenuBar.appendChild(newMenuEntry);

    //Add messages and the notice board to the new element
    const infoMenu = newMenuEntry.getElementsByTagName("ul")[0];

    const messageMenuToAppend = document.createElement("li");
    messageMenuToAppend.innerHTML = "<a href=\"/wiadomosci\">Wiadomości</a>";
    infoMenu.appendChild(messageMenuToAppend);
    document.getElementById("icon-wiadomosci").parentNode.remove();

    const noticeBoardMenuToAppend = document.createElement("li");
    noticeBoardMenuToAppend.innerHTML = "<a href=\"/ogloszenia\">Ogłoszenia</a>";
    infoMenu.appendChild(noticeBoardMenuToAppend);
    document.getElementById("icon-ogloszenia").parentNode.remove();

    //Remove the logo from the top banner
    document.getElementById("top-banner-container").getElementsByTagName("a")[0].remove();
})();
