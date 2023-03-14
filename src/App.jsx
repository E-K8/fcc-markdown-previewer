import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [textEditor, setTextEditor] = useState(`
  # H1 heading

  ## H2 heading

  [link to Kate's portfolio](https://ek8.io) 

  \`code\` 
  
  \`\`\`
  {
    "firstName": "Kate", 
    "lastName": "Platonova",
    "isDeveloper": true
  }
  \`\`\`
    
  - Update CV
  - Follow up with HR
  - LinkedIn post

  > blockquote

  ![EK8 logo](https://ek8.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fe_k8_logo_384x384.7c1f9148.png&w=96&q=75)
  **bold text**
      `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className='App'>
      <h1 className='heading1'>Markdown Previewer</h1>

      <h2 className='heading2'>Editor</h2>

      <textarea
        className='editor'
        id='editor'
        rows='10'
        onChange={(event) => setTextEditor(event.target.value)}
        value={textEditor}
      ></textarea>

      <h2 className='heading2'>Previewer</h2>

      <p
        className='previewer'
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(textEditor),
        }}
      ></p>
    </div>
  );
}

export default App;
