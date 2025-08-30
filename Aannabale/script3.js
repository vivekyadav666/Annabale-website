setTimeout(function() {
    parent.postMessage({ type: 'navigate', page: 'page4.html' }, '*');
}, 10000);