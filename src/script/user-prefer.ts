export let dark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    dark = event.matches;
});
