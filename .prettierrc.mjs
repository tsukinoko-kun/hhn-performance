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

    plugins: [
        "prettier-plugin-astro",
        "prettier-plugin-organize-attributes",
        "prettier-plugin-organize-imports",
        "prettier-plugin-tailwindcss",
    ],

    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
