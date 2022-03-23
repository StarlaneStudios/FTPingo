/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	"root": true,
	"extends": [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended"
	],
	"plugins": [
		"unused-imports"
	],
	"env": {
		"vue/setup-compiler-macros": true
	},
	"rules": {
		"semi": 2,
		"unused-imports/no-unused-imports": 1,
		
		// Typescript rules
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/indent": [2, "tab", { "SwitchCase": 0 }],
		"@typescript-eslint/no-explicit-any": 0,
		
		// Vue rules
		"vue/html-indent": [2, "tab"],
		"vue/script-indent": [2, "tab"],
		"vue/max-attributes-per-line": [2, { "singleline": 2, "multiline": 2 }],
	}
};