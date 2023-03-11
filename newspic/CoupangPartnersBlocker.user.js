// ==UserScript==
// @name         CoupangPartnersBlocker
// @namespace    https://github.com/No-Eul
// @version      1.0.0
// @description  쿠팡 파트너스로 등록된 게시물을 쿠팡 사이트 접속 없이 볼 수 있게 합니다.
// @author       NoEul
// @source       https://github.com/No-Eul/scripts
// @supportURL   https://github.com/No-Eul/scripts/issues
// @updateURL    https://github.com/No-Eul/scripts/raw/master/discord/newspic/CoupangPartnersBlocker.user.js
// @downloadURL  https://github.com/No-Eul/scripts/raw/master/discord/newspic/CoupangPartnersBlocker.user.js
// @match        *://m.newspic.kr/*
// @match        *://newspic.kr/*
// @icon         http://newspic.kr/favicon.ico
// ==/UserScript==

(() => {
	let content = document.getElementById("bo_v_atc");
	content.querySelectorAll("div.continue_reading, div.continue_coupang").forEach($ => $.remove());
	content.classList.remove("omit_wrap");
	content.style.removeProperty("max-height");
})();
