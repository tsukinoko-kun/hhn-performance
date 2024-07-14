/** @type {import("prettier").Config} */
export default {
    singleQuote: false,
    trailingComma: "all",
    arrowParens: "always",
    endOfLine: "lf",
    semi: false,
    quoteProps: "as-needed",
    tabWidth: 4,
    printWidth: 120,

    plugins: ["prettier-plugin-astro"],

    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
