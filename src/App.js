import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

function App() {
  const defaultMarkdownText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`javascript
// this is multi-line code:

console.log("Welcome to my React Markdown Previewer!");
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

  const [text, setText] = useState(defaultMarkdownText);

  return (
    <div className="App">
      <div className="Textbox">
        <div className="Title">
          <p style={{ fontWeight: 600 }}>Editor</p>
        </div>
        <textarea
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            backgroundColor: "#C0D8D8",
            outline: "none",
            height: "300px",
            resize: "none",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div className="Markdownbox">
        <div className="Title">
          <p style={{ fontWeight: 600 }}>Previewer</p>
        </div>
        <div
          id="preview"
          style={{
            width: "100%",
            backgroundColor: "#C0D8D8",
            outline: "none",
            height: "100%",
            overflowY: "auto",
            boxSizing: "border-box",
            padding: "10px",
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
      </div>
      <div className="scroll-box">
        <span className="name">Jasper Duke</span>
      </div>
    </div>
  );
}

export default App;
