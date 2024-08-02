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

const mocha = {
    red: "#d20f39",
    maroon: "#e64553",
    peach: "#fe640b",
    yellow: "#df8e1d",
    green: "#40a02b",
    text: "#4c4f69",
    crust: "#dce0e8",
}

const latte = {
    red: "#f38ba8",
    maroon: "#eba0ac",
    peach: "#fab387",
    yellow: "#f9e2af",
    green: "#a6e3a1",
    text: "#cdd6f4",
    crust: "#11111b",
}
