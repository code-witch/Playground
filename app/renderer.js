const loader = require('monaco-loader');
const canvas = document.getElementById('main-canvas')
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
    // need a way to access `monacoEditor` from outside this file.. (maybe)
    // exports.getValue = () => monacoEditor.getValue();

    // this might be wrong / weird
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = 'dodgerblue';
    ctx.fillRect(50,50,50,50);
});