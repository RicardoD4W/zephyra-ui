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
title: "${title}"
component: "${title}"
sidebar_position: ${index + 1}
vars:${content.map((val) => ` ${val.name}`)}
${description ? 'description: ' + description : ''} 
--- 

# ${title}

${description}

`;

      if (title === 'Colors') {
        mdxContent += `
| Name | Light | Value | Dark | Value |
|------|-------|-------|------|-------|
`;
      } else {
        mdxContent += `
| Name | Value |
|------|-------|
`;
      }

      content.forEach((variable) => {
        const { name, values } = variable;
        mdxContent += `| ${name} |`;
        values.forEach((value) => {
          if (title === 'Colors') {
            mdxContent += ` ${value} | <z-color color="${value}"></z-color> | `;
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
