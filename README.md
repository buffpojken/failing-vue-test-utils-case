With the current versions in package.json, the test-case passes. 

Replacing the relevant packages with these below makes the same test-case fail:

"vue": "3.0.0",
"vue-jest": "5.0.0-alpha.4",
"@vue/compiler-sfc": "^3.0.0",
"@vue/test-utils": "2.0.0-beta.5",
"jest": "26.4.2",