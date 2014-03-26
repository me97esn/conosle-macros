# conosle-macros

A collection of sweet.js macros

---

## asJSON
Simple syntax for using JSON.parse().

**Usage**

``` javascript
var obj = {
    a: 'property',
    here: '!'
};

obj asJSON;
```

**Output**

``` javascript
var obj = {
    a: 'property',
    here: '!'
};

JSON.parse(obj);
```