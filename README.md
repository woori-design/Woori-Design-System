# woori-design

A React component library for creating beautiful and customizable UI components, including the floating action button (`FloatButton`) and other reusable design elements.

This library is built to help developers quickly integrate modern UI components into their React projects, with a focus on simplicity, customization, and performance.

---

## 📦 Installation

To use `woori-design` in your project, install it via npm or Yarn.

```bash
npm install woori-design

```

Or with Yarn:

```bash
yarn add woori-design

```

---

## 🚀 Usage

Here's an example of how to use the `FloatButton` component:

```jsx
import React from "react";
import { FloatButton } from "woori-design";

const App = () => {
  return (
    <div>
      <h1>Hello, woori-design!</h1>
      <FloatButton label="Click Me" onClick={() => alert("Button Clicked!")} />
    </div>
  );
};

export default App;
```

---

## 🌟 Features

- **Reusable Components**: Prebuilt components to speed up your development.
- **Customizable**: Easily style components using props or external styles.
- **Lightweight**: Minimal dependencies and optimized for performance.

---

## 📘 Components

### FloatButton

A floating action button that can be positioned anywhere on the screen.

### Props:

| Prop      | Type     | Default    | Description                                |
| --------- | -------- | ---------- | ------------------------------------------ |
| `label`   | `string` | Required   | The text displayed inside the button.      |
| `onClick` | `func`   | `() => {}` | Callback triggered when button is clicked. |
| `style`   | `object` | `{}`       | Custom styles to override default styles.  |

---

## 🛠️ Development

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/woorifisa-service-dev-4th/Woori-design
   cd woori-design

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm run dev

   ```

4. Build the package:

   ```bash
   npm run build

   ```

---

## 🔗 Links

- **NPM**: [woori-design](https://www.npmjs.com/package/woori-design)
- **GitHub**: [woori-design repository](https://github.com/woorifisa-service-dev-4th/Woori-design)

---

## 📝 License

This project is licensed under the [MIT License](https://github.com/woorifisa-service-dev-4th/Woori-design?tab=MIT-1-ov-file#readme).
