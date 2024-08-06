import type { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { catppuccin } from "./PrismCatppuccinTheme"

export function Code(props: { code: string; language?: string | undefined }): ReactNode {
    return (
        <SyntaxHighlighter language={props.language || "java"} style={catppuccin()} showLineNumbers>
            {props.code.trim()}
        </SyntaxHighlighter>
    )
}
