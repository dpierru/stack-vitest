Installation de l'environnement de test.
========================================
npm install -D vitest

Mettre à jour le package.json : 
================================
{
    "devDependencies": {
        "vitest": "^4.0.17"
    },
    "scripts": {
        "test": "vitest",
        "test:watch": "vitest --watch",
        "test:run": "vitest run"
    }
}

Mettre à jour (créer) vitest.config.json
========================================

import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,  // <-- rend describe, it, expect globaux
        environment: 'node'
    }
})

Pour avoir l'auto completion : 
==============================

installer : 
    npm install -D vitest @types/node

Créer le fichier jsconfig.json
{
    "compilerOptions": {
        "checkJs": true,
        "module": "ESNext",
        "target": "ESNext",
        "moduleResolution": "Node",
        "baseUrl": ".",
        "paths": {},
        "types": [
            "vitest/globals"
        ]
    },
    "exclude": [
        "node_modules"
    ]
}


Commandes :
===========

Pour tester tout : 
    npm run test .\src\stack

Pour tester un dossier en particulier : 
    npm run test .\src\stack


Ordre indicatif pour une stack
exist
isEmpty
push