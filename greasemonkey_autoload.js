// ==UserScript==
// @name     HeroSaver for HeroForge
// @version  1
// @match  https://www.heroforge.com/*
// ==/UserScript==

(function() {
    'use strict';

    var observerOptions = {
        childList: true,
        subtree: true
    }

    var observer = new MutationObserver(function(mutationList, observer) {
        mutationList.forEach((mutation) => {
            if (Array.from(mutation.removedNodes).some((element) => {
                return element.className === "loadingScreen";
            })) {
                observer.disconnect();
                var xhr=new XMLHttpRequest;
                xhr.open("get","https://raw.githubusercontent.com/ellieon/herosaver-1/master/herosaver.js",true);
                xhr.onreadystatechange=function(){
                    if (xhr.readyState == 4) {
                        var script=document.createElement("script");
                        script.type="text/javascript";
                        script.text=xhr.responseText;
                        document.body.appendChild(script)
                    }
                };
                xhr.send(null);
            }
        });
    });
    observer.observe(document.querySelector("body"), observerOptions);
})();
