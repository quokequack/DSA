

function inverteLinkedList(head: any){
    let temp = null;

    while(head){
        let proximoNo = head.proximo;
        head.proximo = temp;
        temp = head;
        head = proximoNo;
    }
    return temp;
}