# crestron-ch5-webxpanel-vue3
Boilerplate Vue 3/ Vite project for Crestron CrComLib integration with Crestron Web Xpanel support.

## Features
### Pinia State Management
* CrComLib subscription events update Pinia stores

### CH5 Web Xpanel
* starter setup & initialization of the CH5 XPanel (plugins > xpanel > crestronXpanel.js)

### Eruda Developer Tools
* Includes Eruda touscreen dev tools (active by default)

### HEX Alpha to RGBA Build Script
* Crestron TSW panels have issues with transparency in some minified CSS cases, such as when PostCSS converts RGBA to Hex.
* AlphaFixer.js parses all CSS files in ~/dist/assets for hex with alpha and reverts it to rgba()
* fixColor build script has been inluded if this is necessary for your project but has not been inluded with the archive command

## Credits
* Thanks to dvjstefan for prividing an example of how to integrate CrComLib with Vue 3/Vite:
https://github.com/dvjstefan/CH5-VueJS-Vite-Pinia-Example/tree/main
. This template is based on their implementation of CrComLib and adds boiler plate for XPanel connections.

* Thanks to everyone in the Crestron Certified Programmers Discord for being a group of legends.
