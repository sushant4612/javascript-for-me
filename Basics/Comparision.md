``` javascript
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
```

>The reason is that an equality check == and comparision > < >= <= work differently. Comparisions convert null to a number, treating it as 0. that's why null >= 0 is true and null > 0 is false

### == and ===
== equality check conversion occur\
=== strict equality check (check both value and datatype)