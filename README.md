# **Zephyra UI**

Zephyra UI es una librería de componentes web reutilizables, moderna y accesible, diseñada para facilitar el desarrollo de interfaces de usuario con componentes de alto rendimiento. Construida con Lit, TypeScript y Vite, Zephyra UI ofrece un conjunto de componentes listos para usar que pueden integrarse fácilmente en cualquier aplicación web. Su diseño modular y ligero permite a los desarrolladores personalizar y extender cada componente según sus necesidades.

---

## Features

- Los componentes están creados con **Lit + TypeScript**.
- El desarrollo y el empaquetamineto con **Vite**

## Estructura del Proyecto

Este repositorio está organizado como un monorepo utilizando **npm workspaces** y contiene los siguientes paquetes:

- Tres paquetes dentro del monorepo:
  - **`/packages`**
    1. **`/components`**: Contiene los componentes reutilizables.
    2. **`/demo-web`**: Sirve para probar la integración de los componentes en diferentes frameworks y como demo.
    3. **`/docs`**: Usa Storybook para documentar y visualizar los componentes.

---

## Instalación y uso (próximamente)

```bash
npm install "@zephyra-ui/componente-elegido"
```

```html
<script type="module">
  import '@zephyra-ui/componente-elegido';
</script>

<div>
  <componente-elegido></componente-elegido>
</div>
```
