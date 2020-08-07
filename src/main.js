/*
 *  Project     Twitch Chat OwO Extension
 *  @author     David Madison
 *  @link       github.com/dmadison/TwitchChatOwO
 *  @license    MIT - Copyright (c) 2020 David Madison
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


var TwitchOwO = (function() {
	const owo = require('@zuzak/owo');

	function chatOwO(mutationsList, observer) {
		for(let mutation of mutationsList) {
			if (!mutation.addedNodes) continue;  // no added node, skip

			for(let node of mutation.addedNodes) {
				if(!node.dataset) continue;  // skip nodes without datasets

				// Chat Messages
				if(node.dataset.aTarget === 'chat-line-message') {
					let fragments = node.querySelectorAll("[data-a-target='chat-message-text']");
					for(let msg of fragments) {
						if(msg.innerText.length === 0 || msg.innerText === ' ') continue;  // empty, no translation
						msg.innerText = owo(msg.innerText);
					}
				}

				// Welcome Message
				else if(node.dataset.aTarget === 'chat-welcome-message') {
					node.innerText = owo(node.innerText);
				}
			}
		}
	}

	const owoFinder = new MutationObserver(chatOwO);
	owoFinder.observe(document.body, { childList: true, subtree: true });

	console.log("[Twitch Chat OwO] (v1.0.0) " + owo("Twitch Chat OwO Extension is now Loaded"));

})();

