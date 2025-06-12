import { Lang as LangNapi } from "@ast-grep/napi"
import { describe, test } from "vitest"
import { Lang } from "./lang.ts"

/** Languages supported in `@ast-grep/napi@0.33.1`. */
const previous = Object.freeze({
	Html: "Html",
	JavaScript: "JavaScript",
	Tsx: "Tsx",
	Css: "Css",
	TypeScript: "TypeScript",
	Bash: "Bash",
	C: "C",
	Cpp: "Cpp",
	CSharp: "CSharp",
	Go: "Go",
	Elixir: "Elixir",
	Haskell: "Haskell",
	Java: "Java",
	Json: "Json",
	Kotlin: "Kotlin",
	Lua: "Lua",
	Php: "Php",
	Python: "Python",
	Ruby: "Ruby",
	Rust: "Rust",
	Scala: "Scala",
	Sql: "Sql",
	Swift: "Swift",
	Yaml: "Yaml",
})

describe("Lang", () => {
	test("The new enum is compatible with the old one", ({ expect }) => {
		for (const lang of Object.values(previous)) expect(Lang[lang]).equal(lang)
	})

	test("The new enum is compatible with the built-in ones", ({ expect }) => {
		for (const lang of Object.values(LangNapi)) expect(Lang[lang]).equal(lang)
	})
})
