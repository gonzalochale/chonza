# Chonza - Your UI Library Docs template

## Introduction

This project is a starter template designed to help you create and showcase your own UI components library using React, NextJS, MDX, and TailwindCSS. The template provides a structured and efficient way to build, document, and display your custom components.

## Features

- **React & NextJS**: Leverage the power of React and the framework capabilities of NextJS.
- **MDX**: Write markdown and embed React components to create interactive documentation.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Component Previews**: Live previews of components within the documentation.
- **Code Blocks with Copy Button**: Easily shareable code snippets with a copy button for convenience.

## Getting Started

Follow these steps to create and showcase your UI components:

### Step 1: Create Your Component

Create your component within the `/components/examples/` folder. This is where you will define the functionality and styling of your component.

### Step 2: Create Your Documentation File

Create a `.mdx` file for your component inside the `content/library/` folder. This file will serve as the documentation and preview for your component. You can include:

- **Component Preview**: Embed your component to show how it looks and behaves.
- **Code Blocks**: Add code snippets with a copy button for users to easily copy the code.

### Step 3: Update Navigation

To make your new component accessible within the app, update the navigation configuration:

1. Open the `site.ts` file located in the `/config/` folder.
2. Add your component to the appropriate navigation section.

This will ensure that your components are visible and navigable in the application.

## Example

Here's a quick example to illustrate the process:

### Step 1: Create a Button Component

Create a file named `Button.tsx` inside `components/examples`:

```tsx
// /components/examples/component-example.tsx
import React from "react";

const ComponentExample = () => {
  return <div>component-example</div>;
};

export default ComponentExample;
```

### Step 2: Create documentation for the new component

Our new component file is called `component-example.tsx` so this .mdx needs to be called `component-example.mdx`

Refer to the `component-example.mdx` file located in the `/content/library` folder to learn how to display a component as both a code block and a preview

### Step 3: Update the site.ts file

Update this file to show your new component on the navigation components

```ts
...
components: [
    {
      title: "Component example",
      path: "/components/component-example",
      new: true,
    },
  ],
...
```
