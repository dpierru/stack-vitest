import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,  // <-- rend describe, it, expect globaux
        environment: 'node'
    }
})
