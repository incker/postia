'use strict';

(() => {
    const targetDiv = document.body.querySelector('.image');

    document.querySelector('.btn-download').onclick = () => {
        window.scrollTo(0, 0);
        html2canvas(targetDiv, {
            windowWidth: targetDiv.scrollWidth,
            windowHeight: targetDiv.scrollHeight
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'result.jpg';
            link.href = canvas.toDataURL('image/jpeg', 1.0)
            link.click();
        });
    }
})();


/*
https://emojipedia.org/apple/
https://emojipedia.org/twitter/twemoji-13.0.1/
 */