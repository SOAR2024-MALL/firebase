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

    }

};


/*
====================================
Set Favicon
====================================
*/

function setFavicon() {

    let link = document.querySelector("link[rel='icon']");

    if (!link) {

        link = document.createElement("link");

        link.rel = "icon";

        document.head.appendChild(link);

    }

    link.href = SOAR.defaults.favicon;

}


/*
====================================
Bootstrap
====================================
*/

document.addEventListener("DOMContentLoaded", () => {

    setFavicon();

    console.log("SOAR Bootstrap Ready");

    if (typeof Renderer !== "undefined") {

        Renderer.initialise();

    }

});
