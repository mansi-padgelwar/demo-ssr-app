import React from 'react';
import path from 'path';
const fs = require('fs');

function Component({ htmlContent }) {
    console.log("html content",htmlContent);
  return (
    <div>
      <h1>HTML Page</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}


export function readLocalHTMLFile() {
    const filePath = path.join(process.cwd(), 'public', 'mylocalfile.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent;
  }

export async function getStaticProps() {
  // Read the contents of the local HTML file
  const htmlContent = readLocalHTMLFile();
  return {
    props: {
      htmlContent,
    },
  };

}

export default Component;
