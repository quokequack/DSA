class No {
    valor: number;
    proximo?: No | null;
    anterior?: No | null;


    constructor(valor: number){
        this.valor = valor;
    }

}

class DoublyLinkedList {
    head?: No | null;
    tail?: No | null;


    public addToFront(valor: number) { // adiciona um novo no na frentezinha da lista tipo aqui->OOOOO
        let novoNo: No = new No(valor);
        novoNo.proximo = this.head;
        if(this.head){
            this.head.anterior = novoNo;
        } else {
            this.tail = novoNo;
        }

        this.head = novoNo;
        this.printaResultados(novoNo);

    }

    public addToEnd(valor: number) {
        let novoNo: No = new No(valor);
        novoNo.anterior = this.tail;
        if(this.tail){
            this.tail.proximo = novoNo;
        } else {
            this.head = novoNo;
        }
        this.tail = novoNo;
        this.printaResultados(novoNo);

    }

    public removeFromFront(): number {
        if(!this.head){
            return -1;
        }
        let valorRemovido = this.head.valor;
        this.head = this.head.proximo;
        if(this.head){
            this.head.anterior = null;
        } else {
            this.tail = null;
        }
        return valorRemovido;
        
    }

    public removeFromBack(): number {
        if(!this.tail){
            return -1;
        }
        let valorRemovido = this.tail.valor;
        this.tail = this.tail.anterior;
        if(this.tail){
            this.tail.anterior = null;
        } else {
            this.head = null;
        }
        return valorRemovido;
    }


    public toArray(): number[] {
        const resultado: number[] = [];
        let atual = this.head;
        while(atual){
            resultado.push(atual.valor);
            atual = atual.proximo;
        }
        return resultado;
    }

    public printaResultados(no: No) {
        if(no.proximo){
            console.log(`Próximo: ${no.proximo.valor}`);
        } else {
            console.log(`Próximo: Ainda não definido`);
        }
        if(no.anterior){
            console.log(`Anterior: ${no.anterior.valor}`);

        } else {
            console.log(`Anterior: Ainda não definido.`);
        }

    }
}

let dll = new DoublyLinkedList();

dll.addToFront(3);
dll.addToFront(6);
dll.addToEnd(2);
dll.addToEnd(64);
dll.addToFront(33);

console.log(dll.toArray());

