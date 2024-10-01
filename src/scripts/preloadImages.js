export function preloadImages(sources, callback) {
    let loadedImages = 0;
    const totalImages = sources.length;
    const images = [];

    sources.forEach((source, index) => {
        images[index] = new Image();
        images[index].src = source;

        images[index].onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };

        images[index].onerror = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
    });
}
