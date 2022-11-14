let theme = {
	0: {
		keywords: "#ff00ff",
	},
}

let code = {
	lang: 'vb',
	code: `
	Dim name as blah = 12345
	`
}
let l = syntax[code.lang]
let s = theme[l.theme_id]

for (const key in l) {
	console.log(key)
	value = l[key]
	if (value instanceof RegExp) {
		console.log(value, value.exec(code.code))
	} else if (value instanceof Array) {
		for (const exp in value) {
			console.log(exp, 'bruh')
		}
	}
}