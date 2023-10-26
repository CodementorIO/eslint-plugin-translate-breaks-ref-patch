# eslint-plugin-translate-breaks-ref-patch

Hint and auto fix for conditional literals in jsx.

- Why we want to fix conditional literals in jsx?

  > React - a very very popular web development framework - breaks when Google Translate runs across a page.

  - [discussions](https://github.com/facebook/react/issues/11538)
  - [chromium bug report](https://bugs.chromium.org/p/chromium/issues/detail?id=872770)

- Rule inspired by [this gist](https://gist.github.com/azirbel/51518d919de979197a7c5c25c54a56d6) and [eslint-plugin-sayari](https://github.com/sayari-analytics/eslint-plugin-sayari/blob/main/lib/rules/no-unwrapped-jsx-text.js).

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-translate-breaks-ref-patch`:

```sh
npm install eslint-plugin-translate-breaks-ref-patch --save-dev
```

## Usage

Add `translate-breaks-ref-patch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["translate-breaks-ref-patch"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "translate-breaks-ref-patch/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

💡 Manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

| Name                                                                           | Description                                                                                | 💡 |
| :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- | :- |
| [no-conditional-literals-in-jsx](docs/rules/no-conditional-literals-in-jsx.md) | Browser auto-translation will break if pieces of text nodes are be rendered conditionally. | 💡 |

<!-- end auto-generated rules list -->
