Prism.languages.tap = {
	fail: /(    )*not ok[^#\{\n]*/,
	pass: /(    )*ok[^#\{\n]*/,
	pragma: /(    )*pragma ([\+-])([a-z]+)/,
	bailout: /(    )*bail out!(.*)/i,
	version: /(    )*TAP version ([0-9]+)/i,
	plan: /(    )*([0-9]+)\.\.([0-9]+)( +#[^\n]*)?/m,
	subtest: {
		pattern: /(    )*# Subtest(?:: (.*))?/,
		greedy: true
	},
	punctuation: /[{}]/,
	directive: /#.*/,
	yamlish: {
		pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
		lookbehind: true,
		inside: Prism.languages.yaml,
		alias: 'language-yaml'
	}
};
