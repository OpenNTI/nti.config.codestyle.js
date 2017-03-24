module.exports = {
	"extends": "eslint:recommended",

	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"impliedStrict": true,
			"globalReturn": false
		}
	},

	"env": {
		"node": true,
		"browser": true,
		"jasmine": true,
		"es6": true
	},
	
	"plugins": [
		"import"
	],

	"rules": {
		"camelcase": [2, {"properties": "always"}],
		"consistent-return": 0,
		"curly": [2, "all"],
		"eqeqeq": [2, "allow-null"],
		"indent": [2, "tab"],
		"guard-for-in": 2,
		"new-cap": 0,
		"no-bitwise": 2,
		"no-caller": 2,
		"no-console": 2,
		"no-extend-native": 2,
		"no-multiple-empty-lines": [1, {"max": 3, "maxBOF": 0, "maxEOF": 1}],
		"no-new": 2,
		"no-shadow": [1, {"builtinGlobals": false, "hoist": "never"}],
		"no-throw-literal": 2,
		"no-underscore-dangle": 1,
		"no-use-before-define": [2, "nofunc"],
		"no-var": 2,
		"quotes": [1, "single"],
		"radix": 2,
		"semi": 2,
		"space-before-blocks": [1, "always"],
		"space-before-function-paren": [1, {"anonymous": "always", "named": "always"}],
		"space-infix-ops": [2, {"int32Hint": true}],
		"space-unary-ops": [1, { "words": true, "nonwords": false }],
		"strict": [2, "never"],
		"wrap-iife": [2, "outside"],
		"valid-jsdoc": 1,
		
		"import/no-duplicates": 1,
		"import/no-extraneous-dependencies": [2, {"devDependencies": ["**/test/*.js", "**/*.spec.js"]}],
		"import/no-unresolved": [2, {"commonjs": true}],
		"import/order": [1, {"newlines-between": "always", "groups": ["builtin", "external", "internal", "parent", "sibling", "index"]}]
	}
};
