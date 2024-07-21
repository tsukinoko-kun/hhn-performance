import type { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { mocha } from "./PrismCatppuccinTheme"

export function Code(props: { code: string }): ReactNode {
    return (
        <SyntaxHighlighter language="java" style={mocha} showLineNumbers>
            {props.code}
        </SyntaxHighlighter>
    )
}
