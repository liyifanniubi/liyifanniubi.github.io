document.addEventListener("DOMContentLoaded", function() {
    // 加载viewImage.js库
    let viewImage = document.createElement('script');
    viewImage.type = 'text/javascript';
    viewImage.src = 'https://blog.liyifan.xyz/lib/view-image.js';
    document.body.appendChild(viewImage);

    let initial = document.createElement('script');
    initial.type = 'text/javascript';
    initial.textContent = 'window.ViewImage && ViewImage.init(\'img\');';
    document.body.appendChild(initial);
}
