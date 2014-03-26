# conosle-macros

A collection of sweet.js macros

---

## as
Convert objects with an easier syntax.

**Usage**

``` javascript
obj as json;
str as string;
'1' as int
'0.2' as float;
```

**Output**

``` javascript
JSON.parse(obj);
JSON.stringify(str);
Number.parseInt('1');
Number.parseFloat('0.2');
```