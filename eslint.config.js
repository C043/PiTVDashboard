import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  // Base Vue rules
  ...pluginVue.configs["flat/essential"],
  ...pluginVue.configs["flat/strongly-recommended"],

  // Override stylistic rules to disable them
  {
    rules: {
      // Disable Vue-specific formatting/stylistic rules
      "vue/html-indent": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-self-closing": "off",
      "vue/attribute-hyphenation": "off",
      "vue/require-default-prop": "off",

      // Treat only breaking rules as warnings
      "vue/no-unused-vars": "warn",
      "vue/no-mutating-props": "warn",
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
];
