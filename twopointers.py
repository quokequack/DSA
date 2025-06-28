lista = [1,2,3,4,5,6,7,8,9];
alvo = 14;

esquerda = 0;
direita = len(lista) - 1;

while esquerda < direita:
    soma = lista[esquerda] + lista[direita];
    
    if soma == alvo:
        print(lista[esquerda], lista[direita]);
        break;
    elif soma < alvo:
        esquerda += 1
    else:
        direita -= 1
