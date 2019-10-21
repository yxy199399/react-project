module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      // 添加ES特性支持，使之能够识别ES6语法
      jsx: true
    }
  },
  parser: 'babel-eslint', //指定一个不同的解析器, 默认esprima
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
