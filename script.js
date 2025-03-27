document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const clearBtn = document.getElementById('clear-btn');

    // Configure marked.js
    marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, code).value;
                } catch (e) {
                    console.error('Error highlighting code:', e);
                }
            }
            return hljs.highlightAuto(code).value;
        }
    });

    // Default markdown content
    const defaultMarkdown = '';

    // Initialize editor with default content
    editor.value = defaultMarkdown;
    preview.innerHTML = marked.parse(defaultMarkdown);

    // Real-time preview update
    editor.addEventListener('input', () => {
        preview.innerHTML = marked.parse(editor.value);
    });

    // Clear button functionality
    clearBtn.addEventListener('click', () => {
        editor.value = '';
        preview.innerHTML = '';
    });


});