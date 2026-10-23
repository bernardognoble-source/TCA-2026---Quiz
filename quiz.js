class quiz{
    perfil = ""

    jogar(){
        let materia = prompt("Escolha uma matéria. Para matemática, digite 0 e para português, digite 1")
        if(materia == "0") {
            let conteudoM = prompt("Escolha um nível, entre 1, 2 e 3")
            if(conteudoM == "1"){
                let quest = this.comecarMatematica()
                let i = 0
                while(i < quest.listaMatematica.length){
                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                i++
                }
            }
        }
        else
        {
            let conteudoP = prompt("Escolha um nível, entre 1, 2 e 3")
            if(conteudoP == 1){
                let quest = this.comecarPortugues()
                console.log(quest[0].enunciado + "\n" + quest[0].alternativas.join("\n"))
            }
        }
    }
    comecarMatematica(){
        let quest = new Questoes()
        quest = quest.listaMatematica
        return quest
    }
    comecarPortugues(){
        let quest = new Questoes()
        quest = quest.listaPortugues
        return quest
    }
}

class Questoes{
    constructor(){
        this.listaMatematica = [
            {
                enunciado: 'Questão 1: \nUma loja de eletrônicos vendeu um smartphone por R$ 1.250,00 à vista. Se o cliente deu R$ 400,00 de entrada, qual é o valor restante a ser pago?',
                alternativas: ['A) R$ 750,00', 'B) R$ 850,00', `C) R$ 900,00`, `D) R$ 950,00`, `E) R$ 1000,00`],
                resposta: 1
            },
            {
                enunciado: `Questão 2: \nMaria comprou uma pizza inteira e a dividiu em 8 pedaços iguais. Se ela comeu 3 pedaços, qual fração da pizza sobrou?`,
                alternativas: [`A) 3/8`, `B) 5/8`, `C) 2/7`, `D) 3/5`, `E) 1/8`],
                resposta: 1
            },
            {
                enunciado: `Questão 3: \nEm uma turma de 40 alunos, 25% praticam natação. Quantos alunos praticam esse esporte?`,
                alternativas: [`A) 8 alunos`, `B) 10 alunos`, `C) 12 alunos`, `D) 15 alunos`, `E) 17 alunos`],
                resposta: 1
            },
            {
                enunciado: `Quetão 4: \nSe 3 operários constroem um muro em 12 dias, quantos dias seriam necessários para 6 operários fazerem o mesmo trabalho (mantendo o mesmo ritmo)?`,
                alternativas: [`A) 4 dias`, `B) 6 dias`, `C) 8 dias`,`D) 18 dias`, `E) 24 dias`],
                resposta: 1
            },
            {
                enunciado: `Questão 5: \nQual é a área de um terreno retangular que mede 12 metros de comprimento por 5 metros de largura?`,
                alternativas: [`A) 17m²`, `B) 34m²`, `C) 42m²`, `D) 60m²`, `E) 120m²`],
                resposta: 3
            },
            {
                enunciado: `Questão 6: \nUm estudante tirou as seguintes notas em suas quatro avaliações de matemática: 6, 7, 8 e 9. Qual foi a média final dele?`,
                alternativas: [`A) 6,5`, `B) 7,0`, `B) 7,5`, `C) 8,0`, `D) 8,5`],
                resposta: 2
            },
            {
                enunciado: `Questão 7: \nQual é o valor da expressão matemática 5² + 3³?`,
                alternativas: [`A) 31`, `B) 38`, `C) 52`,`D) 69`, `E) 125`],
                resposta: 2
            },
            {
                enunciado: `Questão 8: \nSe cada pacote de café custa R$ 7,50, quanto gastarei ao comprar 4 pacotes?`,
                alternativas: [`A) R$ 25,00`, `B) R$ 26,50`, `C) R$ 28,00`, `D) R$ 30,00`, `E) R$ 32,50`],
                resposta: 3
            },
            {
                enunciado: `Questão 9: \nQual é o valor de x na equação:     2x + 5 = 17`,
                alternativas: [`A) x = 6`, `B) x = 8`, `C) x = 9`, `D) x = 11`, `E) x = 12`],
                resposta: 0
            },
            {
                enunciado: `Questão 10: \nUm canteiro de flores tem formato quadrado, com 6 metros de lado. Qual é o comprimento total do arame necessário para cercá-lo com uma única volta?`,
                alternativas: [`A) 12 metros`, `B) 15 metros`, `C) 18 metros`, `D) 24 metros`, `E) 36 metros`],
                resposta: 3
            }
        ]
        this.listaPortugues = [
            {
                enunciado: `Questão 1: \nLeia a frase: "Embora estivesse cansada, Mariana continuou estudando para a prova." \nPor que Mariana continuou estudando?`,
                alternativas: [`A) Porque não estava cansada.`, `B) Porque queria terminar a prova naquele momento.`, `C) Apesar de estar cansada, ela decidiu continuar estudando.`, `D) Porque já havia terminado de estudar.`, `E) Porque não precisava fazer a prova.`],            
                resposta: 2
            },
            {
                enunciado: `Questâo 2: \nAssinale a alternativa em que todas as palavras estão escritas corretamente.`,
                alternativas: [`A) Excessão, pesquisa, análise.`, `B) Exceção, pesquisa, análise.`, `C) Exceção, pesquiza, análize.`, `D) Excessão, pesquiza, análise.`, `E) Esceção, pesquisa, análize.`],
                resposta: 1
            },
            {
                enunciado: `Questão 3: \nNa frase "O aluno estudou bastante para a prova", a palavra bastante indica:`,
                alternativas: [`A) Um substantivo.`, `B) Uma ação.`, `C) Uma intensidade.`, `D) Uma característica física.`, `E) Um pronome pessoal.`],
                resposta: 2
            },
            {
                enunciado: `Questão 4: \nAssinale a frase que apresenta concordância verbal correta.`,
                alternativas: [`A) Os meninos brinca no parque.`, `B) As meninas chegou cedo.`, `C) Os professores explicaram a matéria.`, `D) Nós estudaram ontem.`, `E) Eles foi ao cinema.`],
                resposta: 2
            },
            {
                enunciado: `Questão 5: \nComplete corretamente a frase: "Não fui à escola ______ estava doente."`,
                alternativas: [`A) Por que`, `B) Por quê`, `C) Porque`, `D) Porquê`, `E) Porquê que`],
                resposta: 2
            },
            {
                enunciado: `Questão 6: \nAssinale a alternativa com pontuação adequada.`,
                alternativas: [`A) João compre pão leite e queijo.`, `B) João, compre pão, leite e queijo.`, `C) João compre, pão leite, e queijo.`, `D) João compre pão, leite e, queijo.`, `E) João compre pão leite, e queijo.`],
                resposta: 1
            },
            {
                enunciado: `Questão 7: \nQual palavra tem o significado mais próximo de persistente?`,
                alternativas: [`A) Desistente.`, `B) Determinado.`, `C) Desatento.`, `D) Indiferente.`, `E) Distraído.`],
                resposta: 1
            },
            {
                enunciado: `Questão 8: \nNa frase "Nós viajaremos nas próximas férias", o verbo viajaremos está no:`,
                alternativas: [`A) Presente do indicativo.`, `B) Pretérito perfeito.`, `C) Futuro do presente do indicativo.`, `D) Pretérito imperfeito.`, `E) Futuro do pretérito.`],
                resposta: 2
            },
            {
                enunciado: `Questão 9: \nAssinale a alternativa que apresenta concordância nominal correta.`,
                alternativas: [`A) As meninas estavam cansado.`, `B) Os alunos estavam preparada.`, `C) Os livros eram interessante.`, `D) A professora estava animados.`, `E) As casas eram bonitas.`],
                resposta: 4
            },
            {
                enunciado: `Questão 10: \nLeia a frase: "Pedro estudou muito, portanto conseguiu uma boa nota." \nA palavra portanto expressa uma ideia de:`,
                alternativas: [`A) Oposição.`, `B) Dúvida.`, `C) Comparação.`, `D) Conclusão.`, `E) Condição.`],
                resposta: 3
            }
        ]
    }
}

let jogo = new quiz()
jogo.jogar()

 // git config --global user.email "bernardognoble@gmail.com"
 // git config --global user.name "Bernardo"