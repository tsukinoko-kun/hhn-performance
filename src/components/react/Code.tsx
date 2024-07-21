import type { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { catppuccin } from "./PrismCatppuccinTheme"

export function Code(props: { code: string }): ReactNode {
    return (
        <SyntaxHighlighter language="java" style={catppuccin()} showLineNumbers>
            {props.code}
        </SyntaxHighlighter>
    )
}
