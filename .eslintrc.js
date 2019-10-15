module.exports = {
  "root": true,
  "extends": [
    'prettier',
    'eslint:recommended'
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion":6,
    "sourceType":"module"
  },
  "plugins": ['prettier'],
  "rules": {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}