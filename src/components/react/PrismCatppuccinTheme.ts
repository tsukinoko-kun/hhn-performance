import { useEffect, useState } from "react"

const darkQuery = "window" in globalThis ? window.matchMedia?.("(prefers-color-scheme: dark)") : null

export function catppuccin() {
    const [style, setStyle] = useState(darkQuery?.matches ? mocha : latte)
    useEffect(() => {
        function onColorSchemeChange(event: MediaQueryListEvent) {
            setStyle(event.matches ? mocha : latte)
        }
        darkQuery.addEventListener("change", onColorSchemeChange)
        return () => {
            darkQuery.removeEventListener("change", onColorSchemeChange)
        }
    })
    return style
}

export const mocha = {
    'code[class*="language-"]': {
        color: "#cdd6f4",
        fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.5",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
    },
    'pre[class*="language-"]': {
        color: "white",
        fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.5",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
        padding: "1em",
        margin: "0.5em 0",
        overflow: "auto",
        background: "#1e1e2e",
    },
    'pre[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'pre[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'code[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'code[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'pre[class*="language-"]::selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'pre[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'code[class*="language-"]::selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    'code[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#9399b240",
    },
    ':not(pre) > code[class*="language-"]': {
        color: "white",
        background: "#1e1e2e",
        padding: "0.1em",
        borderRadius: "0.3em",
        whiteSpace: "normal",
    },
    variable: {
        color: "#CDD6F4",
    },
    regex: {
        color: "#CDD6F4",
    },
    punctuation: {
        color: "#94E2D5",
    },
    operator: {
        color: "#94E2D5",
    },
    comment: {
        color: "#6C7086",
        fontStyle: "italic",
    },
    string: {
        color: "#A6E3A1",
    },
    inserted: {
        color: "#A6E3A1",
    },
    char: {
        color: "#F5C2E7",
    },
    constant: {
        color: "#F5C2E7",
    },
    number: {
        color: "#FAB387",
    },
    builtin: {
        color: "#FAB387",
    },
    boolean: {
        color: "#FAB387",
    },
    changed: {
        color: "#FAB387",
    },
    keyword: {
        color: "#CBA6F7",
    },
    tag: {
        color: "#CBA6F7",
    },
    function: {
        color: "#89B4FA",
        fontStyle: "italic",
    },
    "class-name": {
        color: "#F9E2AF",
        fontStyle: "italic",
    },
    "attr-name": {
        color: "#F38BA8",
    },
    selector: {
        color: "#F38BA8",
    },
    deleted: {
        color: "#F38BA8",
    },
    property: {
        color: "#89B4FA",
    },
    symbol: {
        color: "#EBA0AC",
    },
    important: {
        fontWeight: "bold",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
} as const

export const latte = {
    'code[class*="language-"]': {
        color: "#4c4f69",
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.5",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
    },
    'pre[class*="language-"]': {
        color: "white",
        fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.5",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
        padding: "1em",
        margin: "0.5em 0",
        overflow: "auto",
        background: "#eff1f5",
    },
    'pre[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'pre[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'code[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'code[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'pre[class*="language-"]::selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'pre[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'code[class*="language-"]::selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    'code[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#7c7f934d",
    },
    ':not(pre) > code[class*="language-"]': {
        color: "white",
        background: "#eff1f5",
        padding: "0.1em",
        borderRadius: "0.3em",
        whiteSpace: "normal",
    },
    variable: {
        color: "#4C4F69",
    },
    regex: {
        color: "#4C4F69",
    },
    punctuation: {
        color: "#179299",
    },
    operator: {
        color: "#179299",
    },
    comment: {
        color: "#9CA0B0",
        fontStyle: "italic",
    },
    string: {
        color: "#40A02B",
    },
    inserted: {
        color: "#40A02B",
    },
    char: {
        color: "#EA76CB",
    },
    constant: {
        color: "#EA76CB",
    },
    number: {
        color: "#FE640B",
    },
    builtin: {
        color: "#FE640B",
    },
    boolean: {
        color: "#FE640B",
    },
    changed: {
        color: "#FE640B",
    },
    keyword: {
        color: "#8839EF",
    },
    tag: {
        color: "#8839EF",
    },
    function: {
        color: "#1E66F5",
        fontStyle: "italic",
    },
    "class-name": {
        color: "#DF8E1D",
        fontStyle: "italic",
    },
    "attr-name": {
        color: "#D20F39",
    },
    selector: {
        color: "#D20F39",
    },
    deleted: {
        color: "#D20F39",
    },
    property: {
        color: "#1E66F5",
    },
    symbol: {
        color: "#E64553",
    },
    important: {
        fontWeight: "bold",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
} as const
