// ==UserScript==
// @name         WaveManager Extended
// @namespace    https://github.com/matvey-dotcom/WaveManager-Extended/
// @version      1.0
// @description  Добавляет опции 150 и 200 в выпадающий список истории треков на WaveManager
// @author       https://github.com/matvey-dotcom
// @match        *://core.waveradio.org/public/tools
// @grant        none
// @run-at       document-end
// ==/UserScript==

var select = document.getElementById('pubtools-history-select-amount');
[150, 200].forEach(num => {
    select.appendChild(new Option(num, num));
});
