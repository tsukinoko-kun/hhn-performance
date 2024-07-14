import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
    site: "https://tsukinoko-kun.github.io",
    base: "/hhn-performance",
    trailingSlash: "ignore",
    integrations: [tailwind(), react({ include: ["**/react/*"], experimentalReactChildren: true })],
})
