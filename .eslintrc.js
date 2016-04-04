module.exports = {
  'extends': ['eslint:recommended'],
  // 'ecmaFeatures': {
  //   'arrowFunctions ': true,
  //   'classes': true,
  //   'defaultParams ': true,
  //   'destructuring': true,
  //   'generators': true,
  //   'restParams': true,
  //   'spread': true,
  //   'templateStrings': true,
  //   'jsx': true,
  //   'forOf': true,
  //   'blockBindings': true,
  //   'modules': true
  // },
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'env': {
    // 'jquery': true,
    // 'mocha': true,
    // 'jasmine': true,
    // 'phantomjs': true,
    // 'protractor': true,
    // 'browser': true,
    'node': true,
    'es6': true
  },
  'globals': {
    // 'angular': true
  },
  'rules': {
    'no-unused-vars': [
      0, {
        'vars': 'local'
      }
    ],
    'no-console': 0,
    'quotes': [
      0, 'single'
    ],
    'indent': [
      2, 2
    ]
  }
};
