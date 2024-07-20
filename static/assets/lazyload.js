document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('data-src', img.src);
        img.src = 'https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png';
    });

    const ob = new IntersectionObserver((entris) => {
        entris.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src;
                ob.unobserve(img);
            }
        });
    },
    {
        rootMargin: '0px 0px 200px 0px',
    });

    const imgs = document.querySelectorAll('img[data-src]');
    imgs.forEach(img => {
        ob.observe(img);
    });
});
