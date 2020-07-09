[@material-ui/x-grid-modules](../README.md) › [Globals](../globals.md) › ["lib/lodash/isSymbol"](_lib_lodash_issymbol_.md)

# Module: "lib/lodash/isSymbol"

## Index

### Variables

* [symbolTag](_lib_lodash_issymbol_.md#symboltag)

### Lang Functions

* [isSymbol](_lib_lodash_issymbol_.md#issymbol)

## Variables

###  symbolTag

• **symbolTag**: *string* = "[object Symbol]"

*Defined in [packages/grid/x-grid-modules/lib/lodash/isSymbol.js:7](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/lib/lodash/isSymbol.js#L7)*

`Object#toString` result references.

## Lang Functions

###  isSymbol

▸ **isSymbol**(`value`: any): *boolean*

*Defined in [packages/grid/x-grid-modules/lib/lodash/isSymbol.js:26](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/lib/lodash/isSymbol.js#L26)*

Checks if `value` is classified as a `Symbol` primitive or object.

**`static`** 

**`memberof`** _

**`since`** 4.0.0

**`example`** 

_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is a symbol, else `false`.