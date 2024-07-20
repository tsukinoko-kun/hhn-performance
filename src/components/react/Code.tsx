import type { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { catppuccin as prismStyle } from "./PrismCatppuccinTheme"

export function Code(props: { code: string }): ReactNode {
    return (
        <SyntaxHighlighter language="java" style={prismStyle()} showLineNumbers>
            {props.code}
        </SyntaxHighlighter>
    )
}
