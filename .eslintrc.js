module.exports = {
	"env": {
		"browser": true,
		"node" : true,
		"mocha": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	"parserOptions": {
		"ecmaVersion" : 7 ,
		"sourceType": "module"
	},
	"rules": {
		"no-console" : "warn",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		// "semi": [
		// 	"warn",
		// 	"never"
		// ]
	}
};
