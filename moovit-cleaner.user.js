// ==UserScript==
// @name         Moovit - ניקוי וסידור אוטומטי
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  מסתיר אלמנטים מיותרים, מקטין את הכותרת ומסדר את הטאבים באתר Moovit באופן אוטומטי.
// @author       Generated AI
// @match        *://moovitapp.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moovitapp.com
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/AMAARETS/Scripts/main/moovit-cleaner.user.js
// @downloadURL  https://raw.githubusercontent.com/AMAARETS/Scripts/main/moovit-cleaner.user.js
// ==/UserScript==

(function() {
    'use strict';

    // (כאן מגיע שאר הקוד שכבר כתבנו)
    const style = document.createElement('style');
    style.textContent = `
        /* הסתרת אלמנטים לא רצויים */
        mv-ad-wrapper.additional-ad-banner,
        mv-qr-code-banner,
        mv-mot-banner,
        .heading-navbar {
            display: none !important;
        }

        /* הקטנת גובה הכותרת הראשית */
        mv-header {
            height: 41px !important;
            min-height: 41px !important;
        }

        /* הצמדת הטאבים לחלק העליון של הכותרת */
        .tabs-wrapper {
            position: absolute !important;
            top: 0 !important;
            width: 100% !important;
        }
    `;
    document.documentElement.appendChild(style);

    function clickCloseButtonWhenReady() {
        const interval = setInterval(() => {
            const closeButton = document.querySelector('button.close-nav');
            if (closeButton) {
                closeButton.click();
                clearInterval(interval);
            }
        }, 200);

        setTimeout(() => clearInterval(interval), 10000);
    }

    window.addEventListener('load', clickCloseButtonWhenReady);

})();
