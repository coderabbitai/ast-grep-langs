import { test } from "vitest"
import * as index from "./index.ts"

test("index", ({ expect }) => {
	expect(Object.prototype.toString.call(index)).toBe("[object Module]")
})
