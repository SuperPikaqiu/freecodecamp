module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jquery":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "globals":{
        "angular":true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "off",
            "windows"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-redeclare":"off",
        "no-console":"off"
    }
};