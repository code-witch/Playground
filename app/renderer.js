const loader = require('monaco-loader');
let monacoEditor;

loader().then((monaco) => {
    const div = document.getElementById('editor')
    monacoEditor = monaco.editor.create(div, {
        language: "javascript",
        theme: 'vs-dark',
        automaticLayout: true,
        value: "let help = 'me';"
    }); 
}).then(() => {  
    // need a way to access `monacoEditor` from outside this file..
    // exports.getValue = () => monacoEditor.getValue();
});