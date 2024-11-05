document.addEventListener("DOMContentLoaded", function() {
    // 加载viewImage.js库
    let viewImage = document.createElement('script');
    viewImage.src = 'https://blog.liyifan.xyz/lib/view-image.js';
    document.body.appendChild(viewImage);

    let initial = document.createElement('script');
    initial.textContent = 'window.ViewImage && ViewImage.init(\'#content img\');';
    document.body.appendChild(initial);
});
