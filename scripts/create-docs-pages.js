import fs from 'fs';
import path from 'path';

const componentsJsonPath = './packages/demo-web/static/data/componentList.json';
const docsDir = './packages/demo-web/docs/components';

function readComponentsJson() {
  const jsonData = fs.readFileSync(componentsJsonPath, 'utf-8');
  return JSON.parse(jsonData);
}

function createMdxFile(index, data) {
  const filePath = path.join(docsDir, `${data.title}.mdx`);

  const content = `--- 
title: "${data.title}"
component: "${data.title}"
sidebar_position: ${index + 1}
props: ${JSON.stringify(data.args.props, null, 2)}
events: ${JSON.stringify(data.args.events, null, 2)}
${data.description ? data.description : ''}
---
import {WcWrapper} from '@site/src/components/WcWrapper/WcWrapper';

# ${data.title}

${data.description ? data.description : ''}

## Properties

${
  data.args.props.length > 0
    ? `| Prop Name   | Type   | Default Value  | Other Values                    |
|-------------|--------|----------------|---------------------------------|` +
      data.args.props
        .map((prop) => {
          const otherValues =
            prop.values && prop.values.value.length > 0
              ? prop.values.value.join(', ')
              : 'None';

          return `\n| \`${prop.name}\` | \`${prop.type}\` | \`${
            prop.values.default || 'None'
          }\` | \`${otherValues}\` |`;
        })
        .join('')
    : '`none`'
}

## Events
${
  data.args.events.length > 0
    ? `
| Event Name   | Description                             | Payload                           |
|--------------|-----------------------------------------|-----------------------------------|` +
      data.args.events
        .map(
          (event) =>
            `\n| \`${event.name}\` | ${event.dispatch} | \`${event.payload}\` |`
        )
        .join('')
    : '`none`'
}`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Archivo creado: ${filePath}`);
}

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const componentData = readComponentsJson();

componentData.forEach((data, index) => {
  createMdxFile(index, data);
});

console.log('Proceso completado.');
