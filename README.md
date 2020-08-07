# Twitch Chat OwO Extension

This is a barebones Chrome extension to translate Twitch chat messages to cutesy ["OwO" (kaomoji)](https://en.wikipedia.org/wiki/Emoticon#UwU) style.

See the article on [PartsNotIncluded.com](https://www.partsnotincluded.com/twitch-chat-owo-browser-extension/) for more information.

## Installation

To add this to Chrome, [download the latest release](../../releases/latest) and extract the zipped files into a new folder. [Open the Chrome extensions page](chrome://extensions/) and turn on "Developer mode" in the upper right-hand corner. Then click the button to "Load unpacked" extension and select the extracted extension files. Click the toggle switch to enable the extension, then refresh any Twitch chat page or window to see the changes.

## Building from Source

If you'd like to experiment with the code yourself, here's how to assemble the sources used by the extension.

### Dependencies

This relies on the [@zuzak/owo](https://github.com/zuzak/owo) package to handle the 'OwO' translations, which can be installed via Node Package Manager:

    npm i @zuzak/owo

This will also install the [random-item](https://www.npmjs.com/package/random-item) and [replace-string](https://www.npmjs.com/package/replace-string) packages used by the translator.

### Bundling

The Node.js modules cannot be used directly in the browser, they need to be 'bundled' with the main code using [browserify](https://github.com/browserify/browserify) before the extension can be used.

    browserify main.js -o twitchowo.js

After the new code has been bundled, reload the extension and refresh the page.

## License

This code is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for more information.
