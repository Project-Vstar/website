import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,  // process.env available in API routes and Next.js server code
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Next.js 15 uses the automatic JSX runtime — React does not need to be in scope
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // Project uses plain JS — no PropTypes convention, types are inferred from usage
      "react/prop-types": "off",
      // Apostrophes in JSX content are safe here — no l10n/sanitisation concerns
      "react/no-unescaped-entities": "off",
    },
  },
]);
