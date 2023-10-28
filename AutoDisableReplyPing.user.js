// ==UserScript==
// @name         [Discord] Disable Reply Ping Automatically
// @namespace    https://github.com/No-Eul
// @version      1.0.3
// @description  Disable reply ping automatically in your discord!
// @author       NoEul
// @license      MIT License - https://github.com/No-Eul/scripts/raw/master/LICENSE.txt
// @source       https://github.com/No-Eul/scripts
// @supportURL   https://github.com/No-Eul/scripts/issues
// @updateURL    https://github.com/No-Eul/scripts/raw/Discord/AutoDisableReplyPing.user.js
// @downloadURL  https://github.com/No-Eul/scripts/raw/Discord/AutoDisableReplyPing.user.js
// @match        *://discord.com/*
// @grant        none
// ==/UserScript==

new (function() {
	setInterval(() => {
		if (this.__currentUrl__ !== location.href) { // Cached url is not equal to location.href, do the following:
			if (this.observer !== undefined) // If an observer which created at previous is exist,
				this.observer.disconnect(); // disconnect it.
			else { // If it wasn't,
				this.observer = new MutationObserver(() => { // Create new instance to detect insertion of the reply box.
					let $ = document.querySelector('div[class*="mentionButton"]'); // Get ping switch in reply box.
					if ($ !== null) $.click(); // Click if it's not null. Then reply ping will be disable.
				});
			}

			if (document.querySelector('div[class*="channelTextArea"]') !== null) // If the chat box exist,
				this.observer.observe(document.querySelector('div[class*="channelTextArea"]'), { childList: true });
			// Observe that reply box was created above the chat box.

			this.__currentUrl__ = location.href; // Then cache current url.
		}
	}, 50); // I set 50 millis delay for waiting time. This task will be run every 50 milliseconds.
})();
