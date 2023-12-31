const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-conditional-literals-in-jsx");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const errors = [{ messageId: "unexpected" }];

ruleTester.run("no-conditional-literals-in-jsx", rule, {
  valid: [
    {
      code: `<div>{conditional && 'string'}</div>`,
      errors,
    },
    {
      code: `<div>{conditional || 'string'}</div>`,
      errors,
    },
    {
      // The error happens when DOM elements are added or removed; swapping
      // is ok
      code: `<div>{conditional ? 'a' : 'b'}</div>`,
      errors,
    },
    {
      // As long as conditionally-rendered stuff is wrapped in div or span, it's fine
      code: `<div>text {conditional && <div>wrapped is ok</div>}</div>`,
      errors,
    },
    {
      // Logic within an attribute doesn't affect the DOM
      code: `<Avatar alt={conditional && 'string'} />`,
      errors,
    },
    {
      // JSX auto-adds whitespace when there are newlines. Make sure they don't trigger
      code: `<div>
          {conditional && 'string'}
        </div>`,
      errors,
    },
  ],
  invalid: [
    {
      code: `<div>text {conditional && 'string'}</div>`,
      errors,
    },
    {
      code: `<div>text {conditional || 'string'}</div>`,
      errors,
    },
    {
      code: `<div>{conditional && 'string'} text</div>`,
      errors,
    },
    {
      code: `<div>{conditional || 'string'} text</div>`,
      errors,
    },
    {
      // More complicated logic
      code: `<div>text {(conditional1 && conditional2) || 'string'}</div>`,
      errors,
    },
    {
      // This results in 2 text nodes with no JSX containers -- dangerous
      code: `<div>{property} {conditional && 'string'}</div>`,
      errors,
    },
    {
      // This results in 2 text nodes with no JSX containers -- dangerous
      code: `<div>{object.property} {conditional && 'string'}</div>`,
      errors,
    },
  ],
});
