import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';
// import 'prismjs/components/prism-js-extras';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-css';
import './App.css';
// import './prism-okaidia.css';
import './prism-funky.css';

export default function App() {
    const [jsCode, setJsCode] = useState(
        `
function add(a, b) {
    return a + b;
}
`)
const [reactCode, setReactCode] = useState(
    `
function add(a, b) {
    return <div>Hello world</div>
}
`)
const [vueCode, setVueCode] = useState(
    `
<template>
    <div>
        <label>{{ count }}</label>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },

        methods: {
            increment() {
                this.count++
            }
        }
  }
</script>
`)
const [typescriptCode, setTypescriptCode] = useState(
    `
function add(a: string, b: string): boolean {
    return a + b;
}
`)
    const [pythonCode, setPythonCode] = useState(
        `
class TestUM(unittest.TestCase):
    def test_create_date(self):
        self.assertEqual(
            create_date("17/10/1985"),
            datetime.date(1985, 10, 17)
        )
`)
const [javaCode, setJavaCode] = useState(
    `
// Awaiting for evaluation result...
    import java.util.HashMap;
    import org.junit.Test;
    import static org.junit.Assert.assertEquals;
    
    public class HashMapUtilsTest {
    
        @Test
        public void testUser() {
            HashMapUtils hashMapUtils = new HashMapUtils();
            HashMap<String, String> user = new HashMap<String, String>();
    
            user.put("name", "Lucie");
            user.put("location", "Norway");
    
            String name = hashMapUtils.getValueFromKey(user, "name");
            assertEquals(name, "Lucie");
    
            String location = hashMapUtils.getValueFromKey(user, "location");
            assertEquals(location, "Norway");
        }
    }
`)

const [markupCode, setMarkupCode] = useState(`
<div>
    <label>Hello world</label>
    </div>
`)

const [cssCode, setCSSCode] = useState(`
.test {
    background-color: yellow;
    padding: 10px;
}`)

    return (
        <>
            <EditorWrapper language='js' code={jsCode} onChange={setJsCode} />
            <EditorWrapper language='jsx' code={reactCode} onChange={setReactCode} />
            <EditorWrapper language='jsx' code={vueCode} onChange={setVueCode} />
            <EditorWrapper language='typescript' code={typescriptCode} onChange={setTypescriptCode} />
            <EditorWrapper language='python' code={pythonCode} onChange={setPythonCode} />
            <EditorWrapper language='java' code={javaCode} onChange={setJavaCode} />
            <EditorWrapper language='markup' code={markupCode} onChange={setMarkupCode} />
            <EditorWrapper language='css' code={cssCode} onChange={setCSSCode} />
        </>
    );
}


function EditorWrapper({ code, language, onChange }) {
    return (
        <div className="EditorWrapper">
            <h1>{language}</h1>
            <Editor
                value={code}
                onValueChange={onChange}
                tabSize={4}
                insertSpaces={true}
                highlight={code => highlight(code, languages[language])}
                padding={10}
                className="container__editor"
                highlight={code =>
                    highlight(code, languages[language])
                      .split('\n')
                      .map(
                        (line, index) =>
                          `<span class="container_editor_line_number">${line}</span>`
                      )
                      .join('\n')
                  }
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 24,
                    paddingLeft: 35,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                }} />
        </div>
    )
}