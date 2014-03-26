# conosle-macros

A collection of sweet.js macros

---

## as
Convert objects with an easier syntax.

**Usage**

``` javascript
str as json;
obj as string;
'1' as int
'0.2' as float;
```

**Output**

``` javascript
JSON.parse(str);
JSON.stringify(obj);
Number.parseInt('1');
Number.parseFloat('0.2');
```