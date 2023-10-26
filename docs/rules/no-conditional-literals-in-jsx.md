# Browser auto-translation will break if pieces of text nodes are be rendered conditionally (`translate-breaks-ref-patch/no-conditional-literals-in-jsx`)

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

<!-- end auto-generated rule header -->

## Fail

```jsx
<>
  <div>text {conditional && 'string'}</div>
  <div>text {conditional || 'string'}</div>
  <div>{conditional && 'string'} text</div>
  <div>{conditional || 'string'} text</div>
  <div>text {(conditional1 && conditional2) || 'string'}</div>
  <div>{property} {conditional && 'string'}</div>
  <div>{object.property} {conditional && 'string'}</div>
</>
```

## Pass

```jsx
<>
  <div>{conditional && 'string'}</div>
  <div>{conditional || 'string'}</div>
  <div>{conditional ? 'a' : 'b'}</div>
  <div>text {conditional && <div>wrapped is ok</div>}</div>
  <Avatar alt={conditional && 'string'} />
  <div>
    {conditional && 'string'}
  </div>
</>
```
