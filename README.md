Herosaver
=========

Save Configuration and STL of https://www.heroforge.com/

Usage
-----

You can use HeroSaver in one of two fashions. Either you let it load as soon as you visit HeroForge (You need a browser extension for that), or you load it manually through your browsers console (No extension needed).

### Automatically

You can automatically load HeroSaver when you visit HeroForge by adding a GreaseMonkey/TamperMonkey script. For that you need to install GreaseMonkey or TamperMonkey (Click [here](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [here](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) for Firefox, or [here](https://chrome.google.com/webstore/detail/tampermonkey/) for Chrome, and install the addon).

Now click on the GreaseMonkey or TamperMonkey icon in your browser, and select something like "New Script" or "New Userscript" and paste the contents of the following file: 

<https://raw.githubusercontent.com/ellieon/herosaver/master/greasemonkey_autoload.js>

Hit save and you are done.

*Note:* There is a version of TamperMonkey for Opera Next, Safari and Edge, but I never tried them. It is very much possible, that the same workflow works for those browsers.

### Manually

Alternatively you can load the HeroSaver manually everytime you visit HeroForge.

  1. Go to https://www.heroforge.com/
  2. Open the Javascript Console [F12], then click on Console
  3. Paste the following
  
```
var xhr=new XMLHttpRequest;xhr.open("get","https://raw.githubusercontent.com/ellieon/herosaver-1/master/herosaver.js",true);xhr.onreadystatechange=function(){if(xhr.readyState==4){var script=document.createElement("script");script.type="text/javascript";script.text=xhr.responseText;document.body.appendChild(script)}};xhr.send(null);
```


### Buttons

Once HeroSaver is loaded, you have these additional buttons on the top bar: 

* Export Model (STL) - Exports the current model and downloads a STL of it.
* Export (JSON) - Exports the current model settings in a JSON format.
* Import (JSON) - Imports a previously exported JSON file with model settings.

Limitations
-----------

Some details of the figures are implemented via shaders. These are not exported :( This is also the reason, the exported figures look a bit _blocky_. If you want hight quality exports, consider purchasing the stl files from heroforge :)
