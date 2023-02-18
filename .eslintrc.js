module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
        "node": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"plugins": [
		"react",
        "prettier"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
