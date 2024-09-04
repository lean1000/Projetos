let nome = prompt('Olá jovem aventureiro, me diga como se chama.')
let atq = 10
let defesa = 10
let vida = 15

alert(nome + ', Seja bem-vindo à Caverna Do Dragão...')
alert('Você caiu em um buraco. Ao se levantar, deparou-se com a seguinte escolha')
alert('Ao seu lado direito, você nota uma porta grande de madeira avermelhada e com aspecto de velha caindo aos pedaços. Do lado esquerdo, você nota um corredor longo e escuro, sem conseguir ver o final.')

let escolha = prompt('Qual vai ser sua decisão: \n1 - Você escolhe seguir à direita (Porta Vermelha) \n2 - Você escolhe seguir à esquerda (Corredor Escuro)')

if (escolha == '1') {
    let item = portamisteriosa()

    if (item == 1) {
        atq += 5
        alert('Ao segurar a Catana, você sente uma vontade assassina.')
    } else if (item == 2) {
        defesa += 10
        alert('Ao vestir a Armadura, você sente uma aura em volta do seu corpo.')
    } else if (item == 3) {
        vida += 30
        alert('Ao consumir o Morango, você sente como se tivesse ganhado anos de vida a mais.')
    }

    alert('Você sente sua força aumentando: Ataque: ' + atq + ', Defesa: ' + defesa + ', Vida: ' + vida)
    alert('Como não há mais salas para seguir, você volta ao corredor escuro.')
    corredorEscuro()

} else if (escolha == '2') {
    corredorEscuro()
}

function portamisteriosa() {
    alert('Você abriu a porta e entrou na sala.')
    alert('Ao entrar, havia um baú misterioso e nele haviam 3 itens: uma Catana longa e muito afiada, uma Armadura prateada e reluzente, e um morango estranho cheio de pelos.')
    
    let escolhaItem = parseInt(prompt('Qual item você gostaria de pegar primeiro: \n1 - Catana longa e muito afiada \n2 - Armadura prateada e reluzente \n3 - Morango estranho cheio de pelos.'))
    
    while (escolhaItem < 1 || escolhaItem > 3 || isNaN(escolhaItem)) {
        alert('Opção inválida! Tente de novo!')
        escolhaItem = parseInt(prompt('Escolha uma das opções: \n1 - Catana longa e muito afiada \n2 - Armadura prateada e reluzente \n3 - Morango estranho cheio de pelos.'))
    }
    
    alert('Ao escolher o item, todo o baú se fecha e você não consegue mais abrir ele.')
    
    return escolhaItem
}

function corredorEscuro() {
    alert('Você decidiu seguir o corredor absolutamente escuro. Seguindo o corredor, você vê uma figura misteriosa, um Goblin. Ele te vê e começa a gritar: "VOU TE PEGAR VEM AQUI".')
    alert('Um combate começa em que o mais forte vence.')
    
    let atqGoblin = 12
    let defGoblin = 10
    let vidaGoblin = 20

    while (vida > 0 && vidaGoblin > 0) {
        
        let acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))

        while (acao < 1 || acao > 2 || isNaN(acao)) {
            alert('Opção inválida! Tente novamente.')
            acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))
        }

        if (acao === 1) {
            
            let dano = Math.max(0, atq - defGoblin)
            vidaGoblin -= dano
            
            if (dano > 0) {
                alert(nome + ' deu ' + dano + ' de dano no Goblin.')
            } else {
                alert(nome + ' não conseguiu dar dano no Goblin.')
            }
        } else if (acao === 2) {
            alert(nome + ' se prepara para se defender.')
        }
        
        let danoGoblin = Math.max(0, atqGoblin - defesa)
        vida -= danoGoblin

        if (danoGoblin > 0) {
            alert('Goblin deu ' + danoGoblin + ' de dano em ' + nome + '. Sua vida agora é: ' + vida)
        } else {
            alert('Goblin não conseguiu dar dano em ' + nome + '.')
        }
  
        if (vida <= 0) {
            alert(nome + ' foi derrotado pelo Goblin. Game Over.')
            return 
        } else if (vidaGoblin <= 0) {
            alert(nome + ' derrotou o Goblin.')
            alert('Você nota que atrás do Goblin havia uma porta. Ao decidir entrar na sala, você repara que ela está vazia, mas com duas portas: uma à frente e outra à esquerda.')
            escolherProximaPorta()
        }
    }
}

function escolherProximaPorta() {
    let escolha = parseInt(prompt('Qual porta você deseja escolher? \n1 - Porta à frente \n2 - Porta à esquerda'))

    while (escolha < 1 || escolha > 2 || isNaN(escolha)) {
        alert('Opção inválida! Tente novamente!')
        escolha = parseInt(prompt('Escolha uma das portas: \n1 - Porta à frente \n2 - Porta à esquerda'))
    }

    if (escolha === 1) {
        salaComFonte()
    } else {
        salaComBau()
    }
}

function salaComBau() {
    alert('Você escolheu a porta à esquerda. Ao abri-la, você encontra uma sala com um baú antigo no centro.')
    alert('Ao abrir o baú, você encontra uma "A capa do guerreiro lendario".')

    defesa += 9
    vida += 5

    alert('Você veste a Capa do Guerreiro e sente sua defesa aumentar. Defesa: ' + defesa + ', Vida: ' + vida)
    alert('Ao olhar ao redor, você repara que há uma porta de pedra, pesada e antiga, que leva a uma sala sombria.')
    
    let escolha = prompt('Você deseja entrar na porta de pedra? \n1 - Sim \n2 - Não')
    while (escolha !== '1') {
        alert('Você deve entrar na porta de pedra para continuar a aventura!')
        escolha = prompt('Você deseja entrar na porta de pedra? \n1 - Sim \n2 - Não')
    }

    combateEsqueletinhos()
}

function salaComFonte() {
    alert('Você escolheu a porta à frente. Ao abri-la, você encontra uma sala com uma fonte de água cristalina. Na fonte, há uma moeda dourada brilhando.')

    let chance = Math.random()

    if (chance < 0.5) {
        alert('Você pega a moeda, mas nada acontece. Parece que a sorte não estava ao seu lado desta vez.')
    } else {
        atq += 10
        alert('Ao tocar a moeda, você sente uma energia poderosa percorrendo seu corpo. Seu ataque aumentou! Ataque: ' + atq)
    }

    alert('Ao olhar ao redor, você repara que há uma porta de pedra, pesada e antiga, que leva a uma sala sombria.')

    let escolha = prompt('Você deseja entrar na porta de pedra? \n1 - Sim \n2 - Não')
    while (escolha !== '1') {
        alert('Você deve entrar na porta de pedra para continuar a aventura!')
        escolha = prompt('Você deseja entrar na porta de pedra? \n1 - Sim \n2 - Não')
    }

    combateEsqueletinhos() 
}

function combateEsqueletinhos() {
    alert('Você passa pela porta de pedra e entra em uma sala fria e escura, onde dois esqueletinhos estão esperando por você!')

    
    let atqEsqueletinho1 = 15
    let defEsqueletinho1 = 5
    let vidaEsqueletinho1 = 10

    let atqEsqueletinho2 = 10
    let defEsqueletinho2 = 8
    let vidaEsqueletinho2 = 10

    while (vida > 0 && (vidaEsqueletinho1 > 0 || vidaEsqueletinho2 > 0)) {
        
        if (vidaEsqueletinho1 > 0) {
            let danoEsqueletinho1 = Math.max(0, atqEsqueletinho1 - defesa)
            vida -= danoEsqueletinho1
            alert('O primeiro esqueletinho ataca e causa ' + danoEsqueletinho1 + ' de dano em ' + nome + '. Sua vida agora é: ' + vida)
        }

        if (vidaEsqueletinho2 > 0) {
            let danoEsqueletinho2 = Math.max(0, atqEsqueletinho2 - defesa)
            vida -= danoEsqueletinho2
            alert('O segundo esqueletinho ataca e causa ' + danoEsqueletinho2 + ' de dano em ' + nome + '. Sua vida agora é: ' + vida)
        }
      
        let acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender '))

        while (acao < 1 || acao > 2 || isNaN(acao)) {
            alert('Opção inválida! Tente novamente.')
            acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender '))
        }
        
        if (acao === 1) {
            if (vidaEsqueletinho1 > 0) {
                let dano = Math.max(0, atq - defEsqueletinho1)
                vidaEsqueletinho1 -= dano
                
                if (dano > 0) {
                    alert(nome + ' ataca o primeiro esqueletinho e causa ' + dano + ' de dano.')
                } else {
                    alert(nome + ' tenta atacar, mas não causa dano ao primeiro esqueletinho.')
                }
            }

            if (vidaEsqueletinho2 > 0) {
                let dano = Math.max(0, atq - defEsqueletinho2)
                vidaEsqueletinho2 -= dano
                
                if (dano > 0) {
                    alert(nome + ' ataca o segundo esqueletinho e causa ' + dano + ' de dano.')
                } else {
                    alert(nome + ' tenta atacar, mas não causa dano ao segundo esqueletinho.')
                }
            }
        } else if (acao === 2) {
            alert(nome + ' se prepara para se defender.')
            continue; 
        }

        if (vidaEsqueletinho1 <= 0) {
            alert('Você derrotou o primeiro esqueletinho!')
        }

        if (vidaEsqueletinho2 <= 0) {
            alert('Você derrotou o segundo esqueletinho!')
        }

        
        if (vida <= 0) {
            alert(nome + ' foi derrotado pelos esqueletinhos. Game Over.')
            return 
        }
    }

    alert(nome + ' derrotou os esqueletinhos e está livre para continuar sua aventura!')
    alert('Mas espere! Você nota uma porta com uma alavanca ao lado! O que você fará?')

    interagirComAlavanca() 
}

function interagirComAlavanca() {
    let escolha = prompt('Você deseja puxar a alavanca? \n1 - Sim \n2 - Não')

    while (escolha !== '1') {
        alert('Você precisa puxar a alavanca para abrir a porta e continuar sua aventura!')
        escolha = prompt('Você deseja puxar a alavanca? \n1 - Sim \n2 - Não')
    }

    alert('Você puxou a alavanca e a porta se abre com um barulho estrondoso!')
    alert('Você entra na próxima sala e se depara com um esqueleto gigante, o pai dos esqueletinhos!')

    salaEsqueletoGigante() 
}

function salaEsqueletoGigante() {
    alert('Você entra em uma sala ampla e escura. No centro, há um esqueleto gigante, o pai dos esqueletinhos! Ele olha para você com olhos vazios e diz:')
    alert('"Você derrotou meus filhos, mas isso não vai ficar barato!"')
  
    let atqEsqueletoGigante = 15
    let defEsqueletoGigante = 10
    let vidaEsqueletoGigante = 30

    while (vida > 0 && vidaEsqueletoGigante > 0) {
        
        let acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))

        while (acao < 1 || acao > 2 || isNaN(acao)) {
            alert('Opção inválida! Tente novamente.')
            acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))
        }

        if (acao === 1) {
            let dano = Math.max(0, atq - defEsqueletoGigante)
            vidaEsqueletoGigante -= dano
            
            if (dano > 0) {
                alert(nome + ' ataca o esqueleto gigante e causa ' + dano + ' de dano.')
            } else {
                alert(nome + ' tenta atacar, mas não causa dano ao esqueleto gigante.')
            }
        } else if (acao === 2) {
            alert(nome + ' se prepara para se defender.')
        }

        let danoEsqueletoGigante = Math.max(0, atqEsqueletoGigante - defesa)
        vida -= danoEsqueletoGigante

        if (danoEsqueletoGigante > 0) {
            alert('O esqueleto gigante ataca e causa ' + danoEsqueletoGigante + ' de dano em ' + nome + '. Sua vida agora é: ' + vida)
        } else {
            alert('O esqueleto gigante tenta atacar, mas não consegue causar dano.')
        }
      
        if (vida <= 0) {
            alert(nome + ' foi derrotado pelo esqueleto gigante. Game Over.')
            return 
          
        } else if (vidaEsqueletoGigante <= 0) {
            alert(nome + ' derrotou o esqueleto gigante!')
            alert('Você encontrou um elmo ao lado do esqueleto gigante. Ao pegar o elmo, sente sua defesa aumentar em 8.')
            defesa += 8
            alert('Nova defesa: ' + defesa)

            escolherProximaOpcao()
        }
    }
}

function escolherProximaOpcao() {
    alert('Agora você tem três opções:')
    let escolha = parseInt(prompt('1 - Seguir à esquerda Corredor \n2 - Seguir e entrar na sala a Frente \n3 - Seguir à direita porta de madeira'))

    while (escolha < 1 || escolha > 3 || isNaN(escolha)) {
        alert('Opção inválida! Tente novamente!')
        escolha = parseInt(prompt('Escolha uma das opções: \n1 - Seguir à esquerda Corredor \n2 - Seguir e entrar na sala a Frente \n3 - Seguir à direita porta de madeira'))
    }

    if (escolha === 1) {
        baúArmadilha() 
    } else if (escolha === 2) {
        salaComMago() 
    } else {
        portaGigante() 
    }
}

function baúArmadilha() {
    alert('Você decide seguir à esquerda e se depara com um baú.')
    alert('Ao abrir o baú, uma armadilha se ativa!')

    alert('Você foi amaldiçoado! Todos os seus status foram reduzidos em 10.')
    atq -= 10
    defesa -= 10
    vida -= 10

    alert('Ataque: ' + atq + ', Defesa: ' + defesa + ', Vida: ' + vida)
    
    alert('Você retorna para o local dos restos do esqueleto gigante para decidir o que fazer a seguir.')
    escolherProximaOpcao() 
}

function salaComMago() {
    alert('Você segue em frente e encontra um mago.')
    alert('O mago diz: "Você tem uma moeda da fonte?"')

    let temMoeda = prompt('Você possui a moeda da fonte? \n1 - Sim \n2 - Não')
    
    if (temMoeda === '1') {
        alert('O mago sorri e diz: "Vou te ajudar!"')
        alert('Você recebe um upgrade de +10 em todos os seus status!')
        atq += 10
        defesa += 10
        vida += 10
        alert('Ataque: ' + atq + ', Defesa: ' + defesa + ', Vida: ' + vida)
    } else {
        alert('O mago não fala mais com você.')
    }
    
    alert('Você retorna para o local dos restos do esqueleto gigante para decidir o que fazer a seguir.')
    escolherProximaOpcao() 
}

function portaGigante() {
    alert('Você segue à direita e chega a uma porta gigante e avermelhada, com aspecto de velha.')
    alert('Essa porta me parece familiar...')
    
} salaComPortaGigante()

function salaComPortaGigante() {
    alert('Você se aproxima da porta gigante avermelhada e sente um calafrio. Algo nesta porta parece familiar...')

    alert('No centro da sala, você vê uma mesa com três itens: um anel com uma joia verde e brilhante, um amuleto de bronze com uma estrela azul no meio, e uma poção rosa borbulhante que não parece segura para beber.')

    let escolhaItem = parseInt(prompt('Qual item você deseja pegar? \n1 - Anel com a joia verde \n2 - Amuleto de bronze \n3 - Poção rosa borbulhante'))

    while (escolhaItem < 1 || escolhaItem > 3 || isNaN(escolhaItem)) {
        alert('Opção inválida! Tente de novo!')
        escolhaItem = parseInt(prompt('Escolha um dos itens: \n1 - Anel com a joia verde \n2 - Amuleto de bronze \n3 - Poção rosa borbulhante'))
    }
   
    if (escolhaItem === 1) {
        atq += 5
        alert('Você colocou o anel e sentiu sua força aumentar. Ataque: ' + atq)
    } else if (escolhaItem === 2) {
        defesa += 5
        alert('Você vestiu o amuleto e sentiu uma proteção mágica. Defesa: ' + defesa)
    } else if (escolhaItem === 3) {
        vida += 20
        alert('Você cheirou a poção e sentiu uma onda de energia. Vida: ' + vida)
    }

    alert('De repente, os outros itens desaparecem! As portas gigantes avermelhadas se abrem revelando uma sala cheia de tesouros!')

    alert('Você está na reta final da sua aventura!')

    combateDragao() 
} 

function combateDragao() {
    alert('Diante de você, um dragão colossal surge, suas escamas brilham como ouro, e ele ruge: "Ninguém passa aqui!"')

    
    let atqDragao = 30
    let defDragao = 15
    let vidaDragao = 50

    while (vida > 0 && vidaDragao > 0) {
        
        let acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))

        while (acao < 1 || acao > 2 || isNaN(acao)) {
            alert('Opção inválida! Tente novamente.')
            acao = parseInt(prompt('Escolha sua ação: \n1 - Atacar \n2 - Defender'))
        }

        if (acao === 1) {
            
            let dano = Math.max(0, atq - defDragao)
            vidaDragao -= dano
            
            if (dano > 0) {
                alert(nome + ' ataca o dragão e causa ' + dano + ' de dano.')
            } else {
                alert(nome + ' não consegue causar dano ao dragão.')
            }
        } else if (acao === 2) {
            alert(nome + ' se prepara para se defender.')
        }
      
        let danoDragao = Math.max(0, atqDragao - defesa)
        vida -= danoDragao

        if (danoDragao > 0) {
            alert('O dragão ataca e causa ' + danoDragao + ' de dano em ' + nome + '. Sua vida agora é: ' + vida)
        } else {
            alert('O dragão ataca, mas não consegue causar dano em ' + nome + '.')
        }

        
        if (vida <= 0) {
            alert(nome + ' foi derrotado pelo dragão. Game Over.')
            return 
        } else if (vidaDragao <= 0) {
            alert(nome + ' derrotou o dragão! Você vê um buraco na parede com uma luz brilhante...')
            alert('Você sente um calor em sua pele e ve que é a luz do sol depois de tanto tempo preso na caverna você consegui escapar')
            alert('Parabéns! Você conseguiu sair da caverna!')
            alert('Fim de Jogo')
        }
    }
}
