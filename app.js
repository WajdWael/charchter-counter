/* ===== COUNTER WORD ===== */
let inputTextArea = document.getElementById('input-textarea');
let charaCount = document.getElementById('charac__count');
let wordCount = document.getElementById('word__count');

inputTextArea.addEventListener('input', () => {
    charaCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(" ").filter((item) => item).length;
});