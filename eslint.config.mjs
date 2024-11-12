import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
			"curly": ["error", "multi"],
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
			"indent": ["error", "tab", { SwitchCase: 1 }],
			"linebreak-style": ["error", "unix"],
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];