const fs = require('fs')
const path = require('path')
const WaitForTemplate = 0
const ReadTemplate = 1
const FuncNameExpression = /\[([^\]]+)\]/

const expandFuncTemplate = function(funcNameTemplate, vars) {
	let results = []
	if (!vars) {
		vars = []
	}
	if (!FuncNameExpression.test(funcNameTemplate)) {
		return [ [ funcNameTemplate, vars ] ]
	} else {
		let variants = FuncNameExpression.exec(funcNameTemplate)[1].split(',')
		variants.forEach((variant) => {
			results = results.concat(
				expandFuncTemplate(funcNameTemplate.replace(FuncNameExpression, variant), vars.concat(variant))
			)
		})
	}
	return results
}

const compileFunction = function(funcNameTemplate, funcImplementation) {
	let lines = []
	expandFuncTemplate(funcNameTemplate).forEach((data) => {
		let vars = [ data[0] ].concat(data[1])
		funcImplementation.forEach((line) => {
			vars.forEach((v, i) => {
				let varNameRegexp = new RegExp('\\$' + i.toString(), 'g')
				line = line.replace(varNameRegexp, v)
			})
			lines.push(line)
		})
	})
	return lines
}

const compile = function(template) {
	let result = []
	let state = WaitForTemplate
	let funcNameTemplate
	let funcImplementation

	template.split('\n').forEach((line) => {
		if (state === WaitForTemplate) {
			let idx = line.indexOf('#BEGIN ')
			if (idx >= 0) {
				funcNameTemplate = line.slice(idx + 7).trim()
				funcImplementation = []
				state = ReadTemplate
			} else {
				result.push(line)
			}
		} else if (state === ReadTemplate) {
			if (line.indexOf('#END') >= 0) {
				result = result.concat(compileFunction(funcNameTemplate, funcImplementation))
				state = WaitForTemplate
			} else {
				funcImplementation.push(line)
			}
		}
	})
	if (state === ReadTemplate) {
		throw 'Unexpected end of file while reading function template'
	}
	return result.join('\n')
}

let template = fs.readFileSync(path.resolve(__dirname, 'z80.js.tmpl'))
let compiled = compile(template.toString())
fs.writeFileSync(path.resolve(__dirname, 'z80.js'), compiled)
