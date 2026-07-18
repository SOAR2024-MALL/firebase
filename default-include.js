/*
====================================================
SOAR2024 MALL
Universal Bootstrap Loader
Version: 1.0
====================================================
*/

const SOAR = {

    version: "1.0",

    defaults: {

        theme: "african-eagle",

        banner: "/firebase/SOAR2024-MALL-DEFAULT.png",

        logo: "/firebase/EagleLogoSquare.png",

        favicon: "/firebase/favicon.ico"

    },

    currentStore: null,

    storeData: null

};


/*
====================================
Set Favicon
====================================
*/

function setFavicon(){

    let link=document.querySelector("link[rel='icon']");

    if(!link){

        link=document.createElement("link");

        link.rel="icon";

        document.head.appendChild(link);

    }

    link.href=SOAR.defaults.favicon;

}


/*
====================================
Placeholder Functions
====================================
*/

async function loadStore(){

    console.log("Loading store...");

}

async function loadTheme(){

    console.log("Loading theme...");

}

async function loadIncludes(){

    console.log("Loading includes...");

}

async function loadRenderer(){

    console.log("Loading renderer...");

}


/*
====================================
Initialise
====================================
*/

async function initialiseMall(){

    setFavicon();

    await loadStore();

    await loadTheme();

    await loadIncludes();

    await loadRenderer();

    console.log("SOAR2024 MALL Ready");

}

document.addEventListener(
    "DOMContentLoaded",
    initialiseMall
);
