# `@coderabbitai/ast-grep-langs`

[![Node.js CI](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/node.js.yaml/badge.svg)](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/node.js.yaml) [![Coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcoderabbitai.github.io%2Fast-grep-langs%2Fcoverage%2Fcoverage-summary.json&query=total.branches.pct&suffix=%25&logo=vitest&label=coverage&color=acd268)](https://coderabbitai.github.io/ast-grep-langs/coverage) [![GitHub Pages](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/github-pages.yaml) [![Dependabot Updates](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/coderabbitai/ast-grep-langs/actions/workflows/dependabot/dependabot-updates) ![CodeRabbit Reviews](https://img.shields.io/coderabbit/prs/github/coderabbitai/ast-grep-langs?utm_source=oss&utm_medium=github&utm_campaign=coderabbitai%2Fast-grep-langs&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

Exports all first-party ast-grep languages

## Installation

```sh
pnpm i @coderabbitai/ast-grep-langs @ast-grep/napi
```

## Usage

```ts
import { registerDynamicLanguage } from "@ast-grep/napi"
import { langs } from "@coderabbitai/ast-grep-langs"

registerDynamicLanguage(langs)
```
