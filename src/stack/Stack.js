// First In Last Out (filo)
// Le premier entré est le dernier sorti
// Exemple : une pile d'assiette, celles du haut servent toujours plus
//           pile de "undo" dans un logiciel


export default class Stack {
    size = 0
    elements = []
    
    // Facultatif, classe d'erreur spécifique
    static UnderflowError = class extends Error {
        constructor(message = "On ne peux pas faire de pop sur une stack vide") {
            super(message)
            this.name = "UnderflowError"
        }
    }

    isEmpty() {
        return this.size == 0
    }

    push(value) {
        this.elements[this.size++] = value
    }

    pop() {
        if (this.isEmpty()) {
            throw new Stack.UnderflowError;
        }
        this.size--
        return this.elements[this.size]
    }
}