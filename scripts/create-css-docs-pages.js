import fs from 'fs';
import path from 'path';

const cssJsonPath = './packages/demo-web/static/data/cssCustomList.json';
const docsDir = './packages/demo-web/docs/styles/custom properties/';

fs.readFile(cssJsonPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    jsonData.forEach((item, index) => {
      const { title, description, content } = item;

      let mdxContent = `--- 
id: "${title}"
title: "${title}"
component: "${title}"
sidebar_position: ${index + 1}
vars:${content.map((val) => ` ${val.name}`)}
${description ? 'description: ' + description : ''} 
--- 
import Translate from '@docusaurus/Translate';
import {WcWrapper} from '@site/src/components/WcWrapper/WcWrapper';
import BrowserOnly from '@docusaurus/BrowserOnly';


# <Translate id="css.title">${title}</Translate>

 ${
   description
     ? `<Translate id="css.description">${description}</Translate>`
     : ''
 }  

<br/>

`;

      if (title === 'Colors') {
        mdxContent += `
| <Translate id="css.name">Name</Translate> | <Translate id="css.light">Light</Translate> | <Translate id="css.value">Value</Translate> | <Translate id="css.dark">Dark</Translate> | <Translate id="css.value">Value</Translate> |
|------|-------|-------|------|-------|
`;
      } else {
        mdxContent += `
| <Translate id="css.name">Name</Translate> | <Translate id="css.value">Value</Translate> |
|------|-------|
`;
      }

      content.forEach((variable) => {
        const { name, values } = variable;
        mdxContent += `| ${name} |`;
        values.forEach((value) => {
          if (title === 'Colors') {
            mdxContent += ` ${value} | <BrowserOnly>{() => (<WcWrapper html='<z-color color="${value}"></z-color>'/>)}</BrowserOnly> | `;
          } else {
            mdxContent += ` ${value} ${values.at(-1) !== value ? ',' : ' '}`;
          }
        });
        mdxContent += '| \n';
      });

      const filePath = path.join(
        docsDir,
        `${title.toLowerCase().replace(/\s+/g, '-')}.mdx`
      );

      fs.writeFileSync(filePath, mdxContent, 'utf-8');
      console.log(`Archivo creado: ${filePath}`);
    });
  } catch (parseErr) {
    console.error('Error al procesar el JSON:', parseErr);
  }
});
