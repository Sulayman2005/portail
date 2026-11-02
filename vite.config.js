import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        services: resolve(import.meta.dirname, 'services.html'),
        service: resolve(import.meta.dirname, 'service.html'),
        demande: resolve(import.meta.dirname, 'demande.html'),
        espace: resolve(import.meta.dirname, 'espace.html'),
      },
    },
  },
})