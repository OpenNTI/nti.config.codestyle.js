
const DEV = process.env.NODE_ENV !== 'production' || 'ATOM_HOME' in process.env;

module.exports = {
	extends: 'eslint:recommended',

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			impliedStrict: true,
			globalReturn: false
		}
	},

	env: {
		es6: true,
		node: true,
		browser: true,
		jest: true
	},
	
	plugins: [
		'import'
	],

	rules: {
		'camelcase': ['error', {'properties': 'always'}],
		'curly': ['error', 'all'],
		'eqeqeq': ['error', 'allow-null'],
		'guard-for-in': 'error',
		'indent': ['error', 'tab'],
		'no-caller': 'error',
		'no-console': DEV ? 'warn' : 'error',
		'no-debugger': DEV ? 'warn' : 'error',
		'no-multiple-empty-lines': ['warn', {'max': 3, 'maxBOF': 3, 'maxEOF': 1}],
		'no-new': 'error',
		'no-shadow': ['warn', {'builtinGlobals': false, 'hoist': 'never', 'allow': ['done']}],
		'no-throw-literal': 'error',
		'no-unused-vars': DEV ? 'warn' : 'error',
		'no-use-before-define': ['error', 'nofunc'],
		'no-var': 'error',
		'quotes': ['warn', 'single'],
		'radix': 'error',
		'semi': 'error',
		'space-before-blocks': ['warn', 'always'],
		'space-before-function-paren': ['warn', {'anonymous': 'always', 'named': 'always'}],
		'space-infix-ops': ['error', {'int32Hint': true}],
		'space-unary-ops': ['warn', { 'words': true, 'nonwords': false }],
		'strict': ['error', 'never'],
		'valid-jsdoc': 'warn',
		'wrap-iife': ['error', 'any'],
		
		'import/no-duplicates': 'warn',
		'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/test/*.js', '**/*.spec.js']}],
		'import/no-unresolved': ['error', {'commonjs': true}],
		'import/order': ['warn', {'newlines-between': 'always', 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']}],
		'import/no-amd': 'error',
		'import/no-commonjs': 'error',
		'import/no-webpack-loader-syntax': 'error'
	}
};
