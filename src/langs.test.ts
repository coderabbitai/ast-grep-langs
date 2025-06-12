import { parse, registerDynamicLanguage } from "@ast-grep/napi"
import { beforeAll, describe, test } from "vitest"
import { Lang } from "./lang.ts"
import { langs } from "./langs.ts"

describe("langs", () => {
	beforeAll(() => {
		// @ts-expect-error Type `StaticLangRegistration` is missing the following
		// properties from type `LangRegistration`: `libraryPath`, `extensions`.
		registerDynamicLanguage(langs)
	})

	// A newly supported language
	test(Lang.Dart, ({ expect }) => {
		const sg = parse(Lang.Dart, 'var x = "Hello, world!";"')
		const kind = sg.root().kind()
		expect(kind).equal("program")
	})

	// A previously supported language
	test(Lang.Go, ({ expect }) => {
		const sg = parse(Lang.Go, 'x := "Hello, world!"')
		const kind = sg.root().kind()
		expect(kind).equal("source_file")
	})

	// A built-in language
	test(Lang.TypeScript, ({ expect }) => {
		const sg = parse(Lang.TypeScript, 'const x = "Hello, world!"')
		const kind = sg.root().kind()
		expect(kind).equal("program")
	})
})
