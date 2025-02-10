import { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

const POPULAR_FRAMEWORKS = [
  {
    name: 'React',
    extension: 'jsx',
    entryPoint: 'src/components/App.jsx',
    code: `
    import React from 'react';
    import '@zephyra-ui/z-button';
  
      function App() {
        return (
          <div>
            <h1>Hello, React!</h1>
            <z-button>Click Me</z-button>
          </div>
        );
      }
  
      export default App;`,
  },
  {
    name: 'Next',
    extension: 'tsx',
    entryPoint: 'pages/index.tsx',
    code: `
    "use client";
    import '@zephyra-ui/z-button';
  
      export default function Home() {
        return (
          <div>
            <h1>Hello, Next.js!</h1>
            <z-button>Click Me</z-button>
          </div>
        );
      }`,
  },
  {
    name: 'Vue',
    extension: 'html',
    entryPoint: 'src/App.vue',
    code: `
    <template>
        <div>
          <h1>Hello, Vue!</h1>
          <z-button>Click Me</z-button>
        </div>
      </template>
      
      <script>
      import '@zephyra-ui/z-button';
      
      export default {
        name: 'App'
      };
      </script>`,
  },
  {
    name: 'Angular',
    extension: 'ts',
    entryPoint: 'src/app.module.ts',
    code: `
    import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA], // 👈 Allows Web Components
        bootstrap: [AppComponent],
    })
        
    export class AppModule {}

    
    import { Component } from '@angular/core';
    import '@zephyra-ui/z-button';
  
      @Component({
        selector: 'app-root',
        template: \`
          <div>
            <h1>Hello, Angular!</h1>
            <z-button>Click Me</z-button>
          </div>
        \`,
      })
    class AppComponent {}`,
  },
  {
    name: 'Svelte',
    extension: 'html',
    entryPoint: 'src/App.svelte',
    code: `
    <script>
        import '@zephyra-ui/z-button';
        let message = "Hello, Svelte!";
    </script>
  
      <div>
        <h1>{message}</h1>
        <z-button>Click Me</z-button>
      </div>`,
  },
  {
    name: 'Solid',
    extension: 'tsx',
    entryPoint: 'src/App.tsx',
    code: `
    import { createSignal } from 'solid-js';
    import '@zephyra-ui/z-button';
  
      function App() {
        const [message] = createSignal('Hello, Solid!');
        return (
          <div>
            <h1>{message()}</h1>
            <z-button>Click Me</z-button>
          </div>
        );
      }
  
      export default App;`,
  },
  {
    name: 'Lit',
    extension: 'ts',
    entryPoint: 'src/MyComponent.ts',
    code: `
    import { LitElement, html, css } from 'lit';
    import '@zephyra-ui/z-button';
  
      class MyComponent extends LitElement {
        static styles = css\`
          h1 { color: blue; }
        \`;
  
        render() {
          return html\`
            <div>
              <h1>Hello, Lit!</h1>
              <z-button>Click Me</z-button>
            </div>
          \`;
        }
      }
  
      customElements.define('my-component', MyComponent);`,
  },
];

const POPULAR_FRAMEWORKS_STATE = [
  {
    name: 'React',
    extension: 'jsx',
    entryPoint: 'src/components/App.jsx',
    code: `
      import { useState } from 'react';
      import '@zephyra-ui/z-button';
    
      function App() {
        const [variant, setVariant] = useState("info");
  
        return (
          <div>
            <h1>Hello, React!</h1>
            <z-button variant={variant}>Click Me</z-button>
            <button onClick={() => setVariant("warning")}>Change Variant to Warning</button>
          </div>
        );
      }
    
      export default App;`,
  },
  {
    name: 'Next',
    extension: 'tsx',
    entryPoint: 'pages/index.tsx',
    code: `
      "use client";
      import { useState } from 'react';
      import '@zephyra-ui/z-button';
    
      export default function Home() {
        const [variant, setVariant] = useState("danger");
  
        return (
          <div>
            <h1>Hello, Next.js!</h1>
            <z-button variant={variant}>Click Me</z-button>
            <button onClick={() => setVariant("outline")}>Change Variant to Outline</button>
          </div>
        );
      }`,
  },
  {
    name: 'Vue',
    extension: 'html',
    entryPoint: 'src/App.vue',
    code: `
      <template>
          <div>
            <h1>Hello, Vue!</h1>
            <z-button :variant="variant">Click Me</z-button>
            <button @click="changeVariant">Change Variant</button>
          </div>
        </template>
        
        <script>
        import { ref } from 'vue';
        import '@zephyra-ui/z-button';
        
        export default {
          name: 'App',
          setup() {
            const variant = ref("info");
  
            const changeVariant = () => {
              variant.value = "warning";
            };
  
            return {
              variant,
              changeVariant
            };
          }
        };
        </script>`,
  },
  {
    name: 'Angular',
    extension: 'ts',
    entryPoint: 'src/app.module.ts',
    code: `
      import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
  
      @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule],
          schemas: [CUSTOM_ELEMENTS_SCHEMA], // 👈 Allows Web Components
          bootstrap: [AppComponent],
      })
          
      export class AppModule {}
  
      import { Component } from '@angular/core';
      import '@zephyra-ui/z-button';
    
      @Component({
        selector: 'app-root',
        template: \`
          <div>
            <h1>Hello, Angular!</h1>
            <z-button [variant]="variant">Click Me</z-button>
            <button (click)="changeVariant()">Change Variant to Zephyra</button>
          </div>
        \`,
      })
      export class AppComponent {
        variant: string = "outline";
  
        changeVariant() {
          this.variant = "zephyra";
        }
      }`,
  },
  {
    name: 'Svelte',
    extension: 'html',
    entryPoint: 'src/App.svelte',
    code: `
      <script>
          import '@zephyra-ui/z-button';
          let variant = "info";
  
          function changeVariant() {
            variant = "danger";
          }
      </script>
    
      <div>
        <h1>Hello, Svelte!</h1>
        <z-button {variant}>Click Me</z-button>
        <button on:click={changeVariant}>Change Variant</button>
      </div>`,
  },
  {
    name: 'Solid',
    extension: 'tsx',
    entryPoint: 'src/App.tsx',
    code: `
      import { createSignal } from 'solid-js';
      import '@zephyra-ui/z-button';
    
      function App() {
        const [variant, setVariant] = createSignal("info");
  
        return (
          <div>
            <h1>Hello, Solid!</h1>
            <z-button variant={variant()}>Click Me</z-button>
            <button onClick={() => setVariant("warning")}>Change Variant to Warning</button>
          </div>
        );
      }
    
      export default App;`,
  },
  {
    name: 'Lit',
    extension: 'ts',
    entryPoint: 'src/MyComponent.ts',
    code: `
      import { LitElement, html, css, state } from 'lit';
      import '@zephyra-ui/z-button';
    
      class MyComponent extends LitElement {
        @state() variant = 'info';
  
        static styles = css\`
          h1 { color: blue; }
        \`;
  
        render() {
          return html\`
            <div>
              <h1>Hello, Lit!</h1>
              <z-button .variant="\${this.variant}">Click Me</z-button>
              <button @click="\${() =>
                (this.variant = 'warning')}">Change Variant</button>
            </div>
          \`;
        }
      }
    
      customElements.define('my-component', MyComponent);`,
  },
];

export default function Integrations(): ReactNode {
  return (
    <Layout
      title={`Integrations`}
      description="On this page you will learn how to integrate zephyra-ui with your favorite frameworks"
    >
      <main className="flex flex-col p-2 text-center gap-14 md:p-12">
        <hgroup className="pb-5">
          <h1>
            <Translate>
              On this page you will learn how to integrate zephyra-ui with your
              favorite frameworks
            </Translate>
          </h1>
        </hgroup>

        <section>
          <h2>Basic Usage</h2>
          <article
            className="p-5 rounded"
            style={{ backgroundColor: 'var(--integration-color)' }}
          >
            <Tabs>
              {POPULAR_FRAMEWORKS.map((fw) => (
                <TabItem
                  value={fw.name}
                  label={fw.name}
                  className="text-left"
                  key={fw.name}
                >
                  <CodeBlock
                    language={fw.extension}
                    title={fw.entryPoint}
                    showLineNumbers
                  >
                    {fw.code}
                  </CodeBlock>
                </TabItem>
              ))}
            </Tabs>
          </article>
        </section>

        <section>
          <h2>Using Reactive Props</h2>
          <article
            className="p-5 rounded"
            style={{ backgroundColor: 'var(--integration-color)' }}
          >
            <Tabs>
              {POPULAR_FRAMEWORKS_STATE.map((fw) => (
                <TabItem
                  value={fw.name}
                  label={fw.name}
                  className="text-left"
                  key={fw.name}
                >
                  <CodeBlock
                    language={fw.extension}
                    title={fw.entryPoint}
                    showLineNumbers
                  >
                    {fw.code}
                  </CodeBlock>
                </TabItem>
              ))}
            </Tabs>
          </article>
        </section>
      </main>
    </Layout>
  );
}
