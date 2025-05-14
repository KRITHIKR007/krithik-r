/* WebP Helper Module */

/**
 * Check if the browser supports WebP image format
 * @returns {Promise<boolean>} True if WebP is supported
 */
async function checkWebPSupport() {
    if (localStorage.getItem('webpSupport') !== null) {
        return localStorage.getItem('webpSupport') === 'true';
    }
    
    return new Promise(resolve => {
        const webP = new Image();
        webP.onload = function() {
            const result = (webP.width > 0) && (webP.height > 0);
            localStorage.setItem('webpSupport', result.toString());
            resolve(result);
        };
        webP.onerror = function() {
            localStorage.setItem('webpSupport', 'false');
            resolve(false);
        };
        webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
}

/**
 * Convert image sources to WebP if supported
 * @param {string} path - The path to the image
 * @returns {string} WebP path if supported, otherwise original path
 */
async function getOptimizedImagePath(path) {
    const supportsWebP = await checkWebPSupport();
    
    if (supportsWebP && !path.endsWith('.svg') && !path.endsWith('.webp')) {
        const lastDotIndex = path.lastIndexOf('.');
        if (lastDotIndex !== -1) {
            return path.substring(0, lastDotIndex) + '.webp';
        }
    }
    
    return path;
}

/**
 * Update all images on the page to use WebP if supported
 */
async function optimizeAllImages() {
    const supportsWebP = await checkWebPSupport();
    if (!supportsWebP) return;
    
    const images = document.querySelectorAll('img:not([src$=".svg"])');
    images.forEach(async img => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc && !currentSrc.endsWith('.webp')) {
            const lastDotIndex = currentSrc.lastIndexOf('.');
            if (lastDotIndex !== -1) {
                const webpSrc = currentSrc.substring(0, lastDotIndex) + '.webp';
                
                // Create a test image to see if the WebP version exists
                const testImg = new Image();
                testImg.onload = function() {
                    img.src = webpSrc;
                };
                testImg.onerror = function() {
                    // Keep the original if WebP is not available
                };
                testImg.src = webpSrc;
            }
        }
    });
}

export { checkWebPSupport, getOptimizedImagePath, optimizeAllImages };
