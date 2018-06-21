![](cryptonics.png)
# Cryptonics
A small module that ruins base64 encoding with offsetting characters to make them look like they're actually encrypted!

## Install
`npm i @dillonchr/cryptonics`

## Usage
You've got two options. Encrypt and decrypt. They both behave the same way just in opposite directions. Each takes two parameters. The first parameter is the offset count a number greater than 1. I mean you can do 1 but then it's just base64 encoding. I mean I guess that's all it's doing anyway. Yeah, go ahead if you like.

## Example
```js
const cryptonics = require('@dillonchr/cryptonics');
const secret = cryptonics.encrypt(5, 'hey');
//  results in 'gBup'
const plainText = cryptonics.decrypt(5, secret);
//  results back in 'hey'
```
