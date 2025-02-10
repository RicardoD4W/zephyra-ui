import fs from 'fs';
import path from 'path';

const componentsJsonPath = './packages/demo-web/static/data/componentList.json';
const docsDir = './packages/demo-web/docs/components';

function readComponentsJson() {
  const jsonData = fs.readFileSync(componentsJsonPath, 'utf-8');
  return JSON.parse(jsonData);
}

function generateExamples(props, componentName) {
  let examples = `<${componentName}></${componentName}>\n`;

  props.forEach((prop) => {
    const otherValues = prop.values.value;

    otherValues.forEach((value) => {
      if (prop.type === 'Boolean') {
        examples += `<${componentName} ${prop.name}></${componentName}>\n`;
      } else if (prop.name === 'slot') {
        examples += `<${componentName}>${value}</${componentName}>\n`;
      } else {
        examples += `<${componentName} ${prop.name}="${value}"></${componentName}>\n`;
      }
    });
  });

  return examples;
}

function createMdxFile(index, data) {
  const filePath = path.join(docsDir, `${data.title}.mdx`);

  const content = `--- 
id: "${data.title}"
title: "${data.title}"
component: "${data.title}"
sidebar_position: ${index + 1}
props: ${JSON.stringify(data.args.props, null, 2)}
events: ${JSON.stringify(data.args.events, null, 2)}
${data.description ? 'description: ' + data.description : ''} 
--- 
import {WcWrapper} from '@site/src/components/WcWrapper/WcWrapper';
import Translate from '@docusaurus/Translate';
import BrowserOnly from '@docusaurus/BrowserOnly';


# ${data.title}

${data.description ? `<Translate>${data.description}</Translate>\n` : ''}

<br/>

## Properties

${
  data.args.props.length > 0
    ? `| <Translate>Prop Name</Translate>   | <Translate>Type</Translate>   | <Translate>Default Value</Translate>  | <Translate>Other Values</Translate>                    |
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
    : '<Translate>none</Translate>'
}

## <Translate>Events</Translate>
${
  data.args.events.length > 0
    ? `

| <Translate>Event Name<Translate>   | <Translate>Description</Translate>                             | <Translate>Payload</Translate>                           |
|--------------|-----------------------------------------|-----------------------------------|` +
      data.args.events
        .map(
          (event) =>
            `\n| \`${event.name}\` | ${event.dispatch} | \`${event.payload}\` |`
        )
        .join('')
    : '<Translate>none</Translate>'
}

## CSS Parts
${
  data.args.cssParts.length > 0
    ? `

| <Translate>Part name</Translate>  | <Translate>Description</Translate>                             | 
|--------------|-----------------------------------------|` +
      data.args.cssParts
        .map((part) => `\n| \`${part.name}\` | ${part.description} | `)
        .join('')
    : '<Translate>none</Translate>'
}

--- 

## <Translate>Examples of use</Translate>

${
  data.args.props.length > 0
    ? `

    \`\`\`html
${generateExamples(data.args.props, data.title)}
\`\`\`

 <BrowserOnly>
        {() => (
          <WcWrapper html='${generateExamples(data.args.props, data.title)}'/>
        )}
</BrowserOnly>

  `
    : `
    \`\`\`html
    <${data.title}></${data.title}>
    \`\`\` 
    
     <BrowserOnly>
        {() => (
          <WcWrapper html='<${data.title}></${data.title}>'/>
        )}
    </BrowserOnly>

    `
}

`;

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
