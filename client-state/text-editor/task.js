document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const storageKey = 'textEditorContent';
    
    if (localStorage.getItem(storageKey)) {
        editor.value = localStorage.getItem(storageKey);
    }
    
    editor.addEventListener('input', function() {
        localStorage.setItem(storageKey, editor.value);
    });
});