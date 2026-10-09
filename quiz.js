class quiz{
    this.perfil = ""
    this.nivelAtual = "" 

    jogar(){
        let materia = prompt("Escolha uma matéria. Para matemática, digite 0 e para português, digite 1")
        if(materia == 0) {
            this.comecarMatematica()
            let conteudoM = prompt("Escolha um nível, entre 1, 2, 3")
        
        }
    }
    comecarMatematica(){
        let quest = new Questoes("matemática")
  }
}

class Questoes{
    constructor(){
        this.listaMatematica = [
            {
                enuciado: 'Questão 1: \nUma loja de eletrônicos vendeu um smartphone por R$ 1.250,00 à vista. Se o cliente deu R$ 400,00 de entrada, qual é o valor restante a ser pago?',
                alternativas: ['A) R$ 750,00', 'B) R$ 850,00', `C) R$ 900,00`, `D) R$ 950,00`, `E) R$ 1000,00`],
                resposta: alternativas[1]
            },
            {
                enunciado: `Questão 2: \nMaria comprou uma pizza inteira e a dividiu em 8 pedaços iguais. Se ela comeu 3 pedaços, qual fração da pizza sobrou?`,
                alternativas: [`A) 3/8`, `B) 5/8`, `C) 2/7`, `D) 3/5`, `E) 1/8`],
                resposta: alternativas[1]
            },
            {
                enunciado: `Questão 3: \nEm uma turma de 40 alunos, 25% praticam natação. Quantos alunos praticam esse esporte?`,
                alternativas: [`A) 8 alunos`, `B) 10 alunos`, `C) 12 alunos`, `D) 15 alunos`, `E) 17 alunos`],
                resposta: alternativas[1]
            },
            {
                enunciado: `Quetão 4: \nSe 3 operários constroem um muro em 12 dias, quantos dias seriam necessários para 6 operários fazerem o mesmo trabalho (mantendo o mesmo ritmo)?`,
                alternativas: [`A) 4 dias`, `B) 6 dias`, `C) 8 dias`,`D) 18 dias`, `E) 24 dias`],
                resposta: alternativas[1]
            },
            {
                enunciado: `Questão 5: \nQual é a área de um terreno retangular que mede 12 metros de comprimento por 5 metros de largura?`,
                alternativas: [`A) 17m²`, `B) 34m²`, `C) 42m²`, `D) 60m²`, `E) 120m²`],
                resposta: alternativas[3]
            },
            {
                enunciado: `Questão 6: \nUm estudante tirou as seguintes notas em suas quatro avaliações de matemática: 6, 7, 8 e 9. Qual foi a média final dele?`,
                alternativas: [`A) 6,5`, `B) 7,0`, `B) 7,5`, `C) 8,0`, `D) 8,5`],
                resposta: alternativas[2]
            },
            {
                enunciado: `Questão 7: \nQual é o valor da expressão matemática 5² + 3³?`,
                alternativas: [`A) 31`, `B) 38`, `C) 52`,`D) 69`, `E) 125`],
                resposta: alternativas[2]
            },
            {
                enunciado: `Questão 8: \nSe cada pacote de café custa R$ 7,50, quanto gastarei ao comprar 4 pacotes?`,
                alternativas: [`A) R$ 25,00`, `B) R$ 26,50`, `C) R$ 28,00`, `D) R$ 30,00`, `E) R$ 32,50`],
                resposta: alternativas[3]
            },
            {
                enunciado: `Questão 9: \nQual é o valor de x na equação:     2x + 5 = 17`,
                alternativas: [`A) x = 6`, `B) x = 8`, `C) x = 9`, `D) x = 11`, `E) x = 12`],
                resposta: alternativas[0]
            },
            {
                enunciado: `Questão 10: \nUm canteiro de flores tem formato quadrado, com 6 metros de lado. Qual é o comprimento total do arame necessário para cercá-lo com uma única volta?`,
                alternativas: [`A) 12 metros`, `B) 15 metros`, `C) 18 metros`, `D) 24 metros`, `E) 36 metros`],
                resposta: alternativas[3]
            }
        ]
    }
    sortear(){
        questao = Math.ceil(Math.random()*10)
    }
    
}

let jogo = new quiz()
jogo.jogar()

 // git config --global user.email "bernardognoble@gmail.com"
 // git config --global user.name "Bernardo"