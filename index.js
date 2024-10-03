class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    info() {
        console.log(`Ola aventureiro, o nome do seu herói é ${this.nome}, sua idade é de ${this.idade} e possui a classe ${this.tipo}`)
    }

    atacar() {
        let ataque;

        if(this.tipo == "mago") {
            ataque = "magia"
        } else if(this.tipo = "guerreiro") {
            ataque = "espada"
        } else if(this.tipo == "monge") {
            ataque = "artes marciais"
        } else if(this.tipo == "ninja") {
            ataque = "shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let mago = new heroi("Kodashz", 17, "mago")
mago.info()
mago.atacar()

let guerreiro = new heroi("Nickless", 18, "guerreiro")
guerreiro.info()
guerreiro.atacar()