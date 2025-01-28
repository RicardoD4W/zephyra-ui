import { readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const componentsPath = './packages/components';

function publishComponents() {
  const components = readdirSync(componentsPath);

  components.forEach((component) => {
    const componentPath = path.join(componentsPath, component);

    if (
      statSync(componentPath).isDirectory() &&
      readdirSync(componentPath).includes('package.json')
    ) {
      try {
        console.log(`📦 Publicando ${component}...`);
        execSync('npm install', { cwd: componentPath, stdio: 'inherit' });
        execSync('npm run build', { cwd: componentPath, stdio: 'inherit' });

        execSync('npm publish --access public', {
          cwd: componentPath,
          stdio: 'inherit',
        });
        console.log(`✅ Publicado ${component} con éxito.`);
      } catch (error) {
        console.error(`❌ Error al publicar ${component}:`, error.message);
      }
    } else {
      console.log(`🚫 ${component} no es un paquete válido.`);
    }
  });
}

publishComponents();
