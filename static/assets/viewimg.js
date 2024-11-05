document.addEventListener("DOMContentLoaded", function() {
    // 加载viewImage.js库
    let Script = document.createElement('script');
    Script.type = 'text/javascript';
    Script.src = 'https://blog.liyifan.xyz/lib/view-image.js';
    document.body.appendChild(Script);

    let initial = document.createElement('script');
    initial.type = 'text/javascript';
    initial.textContent = 'window.ViewImage && ViewImage.init(\'img\');';
    document.body.appendChild(initial);
