function middleNode(head: ListNode | null): ListNode | null {
    let ahead = head;

    while(ahead && ahead.next){
        ahead = ahead.next.next;
        head = head.next;
    }
    return head;
};