---
title: "Styles"
sidebar_position: 1
---

## Understanding zephyra-ui

***zephyra-ui* is not a simple collection of arbitrary components**, they are carefully made to integrate **with any system and in any way**, *zephyra-ui* also includes **its own design system** based on `CSS Custom Properties` also named `CSS variables` that you can use in **any part of your app** from the first moment you use any *zephyra component*, **you can override these variables to adapt your own theme** or if you do not want to use it and simply want to change the style of one or more specific components you can do it from of the `parts`, in the following pages I will show you how you can do it and what you have at your disposal.

## FOUC

To prevent FOUC, it is recommended to use the following CSS fragment in case you are going to use it directly in HTML files or without javascript frameworks

```css
z-alert:not(:defined),z-avatar:not(:defined),z-button:not(:defined),z-icon:not(:defined),z-toggle-theme:not(:defined),z-vscroller:not(:defined){display: none;}
```
