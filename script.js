document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
  
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
