class quiz {
    constructor() {
        this.quest = new Questoes()
    }


    jogar() {

        alert("Bem-vindo ao Quiz!")
        alert("Vamos criar seu perfil?")

        let nome = prompt("Digite seu nome")
        let idade = prompt("Digite sua idade")
        let p = new Perfil(nome, idade)

        let acertosM1 = 0
        let acertosM2 = 0
        let acertosM3 = 0
        let acertosM4 = 0

        let acertosP1 = 0
        let acertosP2 = 0
        let acertosP3 = 0
        let acertosP4 = 0

        let acertosG1 = 0
        let acertosG2 = 0
        let acertosG3 = 0
        let acertosG4 = 0

        let acertosH1 = 0
        let acertosH2 = 0
        let acertosH3 = 0
        let acertosH4 = 0

        let acertosFis1 = 0
        let acertosFis2 = 0
        let acertosFis3 = 0
        let acertosFis4 = 0

        let acertosQ1 = 0
        let acertosQ2 = 0
        let acertosQ3 = 0
        let acertosQ4 = 0

        let acertosFil1 = 0
        let acertosFil2 = 0
        let acertosFil3 = 0
        let acertosFil4 = 0

        let continuar = true
        while (continuar == true) {
            let menu = prompt("Escolha uma opção:\n1 - Jogar\n2 - Ver Médias\n3 - Adicionar Questão\n4 - Sair")
            if (menu == "1") {
                let materia = prompt("Escolha uma matéria.\nMatemática\nPortuguês\nGeografia\nHistória\nFísica\nQuímica\nFilosofia")
                if (materia) {
                    materia = materia.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
                if (materia == "matematica") {
                    let conteudoM = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoM == "1") {
                        acertosM1 = 0
                        let quest = this.comecarMatematica1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosM1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosM1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosM1 + "/10")
                    } else if (conteudoM == "2") {
                        acertosM2 = 0
                        let quest = this.comecarMatematica2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosM2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosM2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosM2 + "/10")
                    } else if (conteudoM == "3") {
                        acertosM3 = 0
                        let quest = this.comecarMatematica3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosM3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosM3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosM3 + "/10")
                    } else if (conteudoM == "4") {
                        acertosM4 = 0
                        let quest = this.comecarMatematica4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosM4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosM4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosM4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "portugues") {
                    let conteudoP = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoP == 1) {
                        acertosP1 = 0
                        let quest = this.comecarPortugues1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosP1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosP1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosP1 + "/10")
                    } else if (conteudoP == 2) {
                        acertosP2 = 0
                        let quest = this.comecarPortugues2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosP2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosP2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosP2 + "/10")
                    } else if (conteudoP == 3) {
                        acertosP3 = 0
                        let quest = this.comecarPortugues3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosP3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosP3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosP3 + "/10")
                    } else if (conteudoP == "4") {
                        acertosP4 = 0
                        let quest = this.comecarPortugues4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosP4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosP4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosP4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "geografia") {
                    let conteudoG = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoG == 1) {
                        acertosG1 = 0
                        let quest = this.comecarGeografia1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosG1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosG1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosG1 + "/10")
                    } else if (conteudoG == 2) {
                        acertosG2 = 0
                        let quest = this.comecarGeografia2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosG2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosG2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosG2 + "/10")
                    } else if (conteudoG == 3) {
                        acertosG3 = 0
                        let quest = this.comecarGeografia3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosG3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosG3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosG3 + "/10")
                    } else if (conteudoG == "4") {
                        acertosG4 = 0
                        let quest = this.comecarGeografia4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosG4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosG4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosG4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "historia") {
                    let conteudoH = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoH == 1) {
                        acertosH1 = 0
                        let quest = this.comecarHistoria1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosH1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosH1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosH1 + "/10")
                    } else if (conteudoH == 2) {
                        acertosH2 = 0
                        let quest = this.comecarHistoria2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosH2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosH2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosH2 + "/10")
                    } else if (conteudoH == 3) {
                        acertosH3 = 0
                        let quest = this.comecarHistoria3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosH3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosH3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosH3 + "/10")
                    } else if (conteudoH == "4") {
                        acertosH4 = 0
                        let quest = this.comecarHistoria4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosH4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosH4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosH4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "fisica") {
                    let conteudoFis = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoFis == 1) {
                        acertosFis1 = 0
                        let quest = this.comecarFisica1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFis1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFis1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFis1 + "/10")
                    } else if (conteudoFis == 2) {
                        acertosFis2 = 0
                        let quest = this.comecarFisica2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFis2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFis2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFis2 + "/10")
                    } else if (conteudoFis == 3) {
                        acertosFis3 = 0
                        let quest = this.comecarFisica3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFis3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFis3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFis3 + "/10")
                    } else if (conteudoFis == "4") {
                        acertosFis4 = 0
                        let quest = this.comecarFisica4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFis4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosFis4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosFis4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "quimica") {
                    let conteudoQ = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoQ == 1) {
                        acertosQ1 = 0
                        let quest = this.comecarQuimica1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosQ1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosQ1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosQ1 + "/10")
                    } else if (conteudoQ == 2) {
                        acertosQ2 = 0
                        let quest = this.comecarQuimica2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosQ2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosQ2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosQ2 + "/10")
                    } else if (conteudoQ == 3) {
                        acertosQ3 = 0
                        let quest = this.comecarQuimica3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosQ3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosQ3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosQ3 + "/10")
                    } else if (conteudoQ == "4") {
                        acertosQ4 = 0
                        let quest = this.comecarQuimica4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosQ4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosQ4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosQ4 + " questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                } else if (materia == "filosofia") {
                    let conteudoFil = prompt("Escolha um nível, entre 1, 2, 3 ou 4(questões adicionadas)")
                    if (conteudoFil == 1) {
                        acertosFil1 = 0
                        let quest = this.comecarFilosofia1()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFil1++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFil1++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFil1 + "/10")
                    } else if (conteudoFil == 2) {
                        acertosFil2 = 0
                        let quest = this.comecarFilosofia2()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFil2++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFil2++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFil2 + "/10")
                    } else if (conteudoFil == 3) {
                        acertosFil3 = 0
                        let quest = this.comecarFilosofia3()
                        for (let i = 0; i < quest.length; i++) {
                            console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                            let L = ['A', 'B', 'C', 'D', 'E']
                            let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                            if (tentativa != -1) {
                                if (tentativa == quest[i].resposta) {
                                    alert("Você acertou")
                                    acertosFil3++
                                } else {
                                    alert("Você errou")
                                }
                            } else {
                                alert("Essa alternativa não existe")
                                let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFil3++
                                    } else {
                                        alert("Você errou")
                                    }
                                }
                            }
                        }
                        alert("Você acertou " + acertosFil3 + "/10")
                    } else if (conteudoFil == "4") {
                        acertosFil4 = 0
                        let quest = this.comecarFilosofia4()
                        if (quest.length != 0) {
                            for (let i = 0; i < quest.length; i++) {
                                console.log(quest[i].enunciado + "\n" + quest[i].alternativas.join("\n"))
                                let L = ['A', 'B', 'C', 'D', 'E']
                                let tentativa = L.indexOf(prompt('Digite a alternativa').toUpperCase())
                                if (tentativa != -1) {
                                    if (tentativa == quest[i].resposta) {
                                        alert("Você acertou")
                                        acertosFil4++
                                    } else {
                                        alert("Você errou")
                                    }
                                } else {
                                    alert("Essa alternativa não existe")
                                    let tentativa = L.indexOf(prompt('Digite uma alternativa existente').toUpperCase())
                                    if (tentativa != -1) {
                                        if (tentativa == quest[i].resposta) {
                                            alert("Você acertou")
                                            acertosFil4++
                                        } else {
                                            alert("Você errou")
                                        }
                                    }
                                }
                            }
                            alert("Você acertou " + acertosFil4 + "questões")
                        } else {
                            alert("Ainda não há questões adicionadas para essa matéria")
                        }
                    }
                }

                p.mediaM1 = (acertosM1)
                p.mediaM2 = (acertosM2)
                p.mediaM3 = (acertosM3)
                p.mediaMG = (Math.trunc(((acertosM1 + acertosM2 + acertosM3) / 3) * 100)) / 100

                p.mediaP1 = (acertosP1)
                p.mediaP2 = (acertosP2)
                p.mediaP3 = (acertosP3)
                p.mediaPG = (Math.trunc(((acertosP1 + acertosP2 + acertosP3) / 3) * 100)) / 100

                p.mediaG1 = (acertosG1)
                p.mediaG2 = (acertosG2)
                p.mediaG3 = (acertosG3)
                p.mediaGG = (Math.trunc(((acertosG1 + acertosG2 + acertosG3) / 3) * 100)) / 100

                p.mediaH1 = (acertosH1)
                p.mediaH2 = (acertosH2)
                p.mediaH3 = (acertosH3)
                p.mediaHG = (Math.trunc(((acertosH1 + acertosH2 + acertosH3) / 3) * 100)) / 100

                p.mediaFis1 = (acertosFis1)
                p.mediaFis2 = (acertosFis2)
                p.mediaFis3 = (acertosFis3)
                p.mediaFisG = (Math.trunc(((acertosFis1 + acertosFis2 + acertosFis3) / 3) * 100)) / 100

                p.mediaQ1 = (acertosQ1)
                p.mediaQ2 = (acertosQ2)
                p.mediaQ3 = (acertosQ3)
                p.mediaQG = (Math.trunc(((acertosQ1 + acertosQ2 + acertosQ3) / 3) * 100)) / 100

                p.mediaFil1 = (acertosFil1)
                p.mediaFil2 = (acertosFil2)
                p.mediaFil3 = (acertosFil3)
                p.mediaFilG = (Math.trunc(((acertosFil1 + acertosFil2 + acertosFil3) / 3) * 100)) / 100

                p.mediaGeral = (Math.trunc(((p.mediaM1 + p.mediaM2 + p.mediaM3 + p.mediaP1 + p.mediaP2 + p.mediaP3 + p.mediaG1 + p.mediaG2 + p.mediaG3 + p.mediaH1 + p.mediaH2 + p.mediaH3 + p.mediaFis1 + p.mediaFis2 + p.mediaFis3 + p.mediaQ1 + p.mediaQ2 + p.mediaQ3 + p.mediaFil1 + p.mediaFil2 + p.mediaFil3) / 21) * 100)) / 100

            } else if (menu == "2") {
                let materia = prompt("Digite a matéria que deseja ver o desempenho: \nMatemática \nPortuguês \nGeografia \nHistória \nFísica \nQuímica \nFilosofia\nGeral")
                if (materia) {
                    materia = materia.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
                if (materia == "matematica") {
                    alert("Médias do aluno " + p.nome + "\nMédia Matemática 1: " + p.mediaM1 + "\nMédia Matemática 2: " + p.mediaM2 + "\nMédia Matemática 3: " + p.mediaM3 + "\nMédia Matemática Geral: " + p.mediaMG)
                }
                if (materia == "portugues") {
                    alert("Médias do aluno " + p.nome + "\nMédia Português 1: " + p.mediaP1 + "\nMédia Português 2: " + p.mediaP2 + "\nMédia Português 3: " + p.mediaP3 + "\nMédia Português Geral: " + p.mediaPG)
                }
                if (materia == "geografia") {
                    alert("Médias do aluno " + p.nome + "\nMédia Geografia 1: " + p.mediaG1 + "\nMédia Geografia 2: " + p.mediaG2 + "\nMédia Geografia 3: " + p.mediaG3 + "\nMédia Geografia Geral: " + p.mediaGG)
                }
                if (materia == "historia") {
                    alert("Médias do aluno " + p.nome + "\nMédia História 1: " + p.mediaH1 + "\nMédia História 2: " + p.mediaH2 + "\nMédia História 3: " + p.mediaH3 + "\nMédia História Geral: " + p.mediaHG)
                }
                if (materia == "fisica") {
                    alert("Médias do aluno " + p.nome + "\nMédia Física 1: " + p.mediaFis1 + "\nMédia Física 2: " + p.mediaFis2 + "\nMédia Física 3: " + p.mediaFis3 + "\nMédia Física Geral: " + p.mediaFisG)
                }
                if (materia == "quimica") {
                    alert("Médias do aluno " + p.nome + "\nMédia Química 1: " + p.mediaQ1 + "\nMédia Química 2: " + p.mediaQ2 + "\nMédia Química 3: " + p.mediaQ3 + "\nMédia Química Geral: " + p.mediaQG)
                }
                if (materia == "filosofia") {
                    alert("Médias do aluno " + p.nome + "\nMédia Filosofia 1: " + p.mediaFil1 + "\nMédia Filosofia 2: " + p.mediaFil2 + "\nMédia Filosofia 3: " + p.mediaFil3 + "\nMédia Filosofia Geral: " + p.mediaFilG)
                }
                if (materia == "geral") {
                    alert("Média geral do aluno " + p.nome + "\nMédia Geral: " + p.mediaGeral)
                }
            } else if (menu == "3") {
                let materia = prompt("Digite a matéria que deseja adicionar uma questão: \nMatemática \nPortuguês \nGeografia \nHistória \nFísica \nQuímica \nFilosofia")
                if (materia) {
                    materia = materia.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
                if (materia == "matematica") {
                    this.quest.adicionarMatematica()
                }
                if (materia == "portugues") {
                    this.quest.adicionarPortugues()
                }
                if (materia == "geografia") {
                    this.quest.adicionarGeografia()
                }
                if (materia == "historia") {
                    this.quest.adicionarHistoria()
                }
                if (materia == "fisica") {
                    this.quest.adicionarFisica()
                }
                if (materia == "quimica") {
                    this.quest.adicionarQuimica()
                }
                if (materia == "filosofia") {
                    this.quest.adicionarFilosofia()
                }
            } else if (menu == "4") {
                alert("Obrigado por jogar!")
                continuar = false
            }
        }
    }


    comecarMatematica1() {
        let quest = new Questoes()
        quest = quest.listaMatematica1
        return quest
    }
    comecarMatematica2() {
        let quest = new Questoes()
        quest = quest.listaMatematica2
        return quest
    }
    comecarMatematica3() {
        let quest = new Questoes()
        quest = quest.listaMatematica3
        return quest
    }
    comecarMatematica4() {
        let quest = this.quest.listaMatematicaAdd
        return quest
    }

    comecarPortugues1() {
        let quest = new Questoes()
        quest = quest.listaPortugues1
        return quest
    }
    comecarPortugues2() {
        let quest = new Questoes()
        quest = quest.listaPortugues2
        return quest
    }
    comecarPortugues3() {
        let quest = new Questoes()
        quest = quest.listaPortugues3
        return quest
    }
    comecarPortugues4() {
        let quest = this.quest.listaPortuguesAdd
        return quest
    }

    comecarGeografia1() {
        let quest = new Questoes()
        quest = quest.listaGeografia1
        return quest
    }
    comecarGeografia2() {
        let quest = new Questoes()
        quest = quest.listaGeografia2
        return quest
    }
    comecarGeografia3() {
        let quest = new Questoes()
        quest = quest.listaGeografia3
        return quest
    }
    comecarGeografia4() {
        let quest = this.quest.listaGeografiaAdd
        return quest
    }

    comecarHistoria1() {
        let quest = new Questoes()
        quest = quest.listaHistoria1
        return quest
    }
    comecarHistoria2() {
        let quest = new Questoes()
        quest = quest.listaHistoria2
        return quest
    }
    comecarHistoria3() {
        let quest = new Questoes()
        quest = quest.listaHistoria3
        return quest
    }
    comecarHistoria4() {
        let quest = this.quest.listaHistoriaAdd
        return quest
    }

    comecarFisica1() {
        let quest = new Questoes()
        quest = quest.listaFisica1
        return quest
    }
    comecarFisica2() {
        let quest = new Questoes()
        quest = quest.listaFisica2
        return quest
    }
    comecarFisica3() {
        let quest = new Questoes()
        quest = quest.listaFisica3
        return quest
    }
    comecarFisica4() {
        let quest = this.quest.listaFisicaAdd
        return quest
    }

    comecarQuimica1() {
        let quest = new Questoes()
        quest = quest.listaQuimica1
        return quest
    }
    comecarQuimica2() {
        let quest = new Questoes()
        quest = quest.listaQuimica2
        return quest
    }
    comecarQuimica3() {
        let quest = new Questoes()
        quest = quest.listaQuimica3
        return quest
    }
    comecarQuimica4() {
        let quest = this.quest.listaQuimicaAdd
        return quest
    }

    comecarFilosofia1() {
        let quest = new Questoes()
        quest = quest.listaFilosofia1
        return quest
    }
    comecarFilosofia2() {
        let quest = new Questoes()
        quest = quest.listaFilosofia2
        return quest
    }
    comecarFilosofia3() {
        let quest = new Questoes()
        quest = quest.listaFilosofia3
        return quest
    }
    comecarFilosofia4() {
        let quest = this.quest.listaFilosofiaAdd
        return quest
    }

    normalizarTexto(texto) {
        if (!texto) return ""
        return texto
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    }
}

class Perfil {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.mediaM1 = 0
        this.mediaM2 = 0
        this.mediaM3 = 0
        this.mediaMG = 0
        this.mediaP1 = 0
        this.mediaP2 = 0
        this.mediaP3 = 0
        this.mediaPG = 0
        this.mediaG1 = 0
        this.mediaG2 = 0
        this.mediaG3 = 0
        this.mediaGG = 0
        this.mediaH1 = 0
        this.mediaH2 = 0
        this.mediaH3 = 0
        this.mediaHG = 0
        this.mediaFis1 = 0
        this.mediaFis2 = 0
        this.mediaFis3 = 0
        this.mediaFisG = 0
        this.mediaQ1 = 0
        this.mediaQ2 = 0
        this.mediaQ3 = 0
        this.mediaQG = 0
        this.mediaFil1 = 0
        this.mediaFil2 = 0
        this.mediaFil3 = 0
        this.mediaFilG = 0
        this.mediaGeral = 0
    }
}

class Questoes {
    constructor() {
        this.listaMatematica1 = [{
                enunciado: 'Questão 1: \nUma loja de eletrônicos vendeu um smartphone por R$ 1.250,00 à vista. Se o cliente deu R$ 400,00 de entrada, qual é o valor restante a ser pago?',
                alternativas: ['A) R$ 750,00', 'B) R$ 850,00', `C) R$ 900,00`, `D) R$ 950,00`, `E) R$ 1000,00`],
                resposta: 1
            },
            {
                enunciado: `Questão 2: \nMaria comprou uma pizza inteira e a dividiu em 8 pedaços iguais. Se ela comeu 3 pedaços, qual fração da pizza que sobrou?`,
                alternativas: [`A) 3/8`, `B) 5/8`, `C) 2/7`, `D) 3/5`, `E) 1/8`],
                resposta: 1
            },
            {
                enunciado: `Questão 3: \nEm uma turma de 40 alunos, 25% praticam natação. Quantos alunos praticam esse esporte?`,
                alternativas: [`A) 8 alunos`, `B) 10 alunos`, `C) 12 alunos`, `D) 15 alunos`, `E) 17 alunos`],
                resposta: 1
            },
            {
                enunciado: `Questão 4: \nSe 3 operários constroem um muro em 12 dias, quantos dias seriam necessários para 6 operários fazerem o mesmo trabalho (mantendo o mesmo ritmo)?`,
                alternativas: [`A) 4 dias`, `B) 6 dias`, `C) 8 dias`, `D) 18 dias`, `E) 24 dias`],
                resposta: 1
            },
            {
                enunciado: `Questão 5: \nQual é a área de um terreno retangular que mede 12 metros de comprimento por 5 metros de largura?`,
                alternativas: [`A) 17m²`, `B) 34m²`, `C) 42m²`, `D) 60m²`, `E) 120m²`],
                resposta: 3
            },
            {
                enunciado: `Questão 6: \nUm estudante tirou as seguintes notas em suas quatro avaliações de matemática: 6, 7, 8 e 9. Qual foi a média final dele?`,
                alternativas: [`A) 6,7`, `B) 7,0`, `C) 7,5`, `D) 7,6`, `E) 8,5`],
                resposta: 2
            },
            {
                enunciado: `Questão 7: \nQual é o valor da expressão matemática 5² + 3³?`,
                alternativas: [`A) 31`, `B) 38`, `C) 52`, `D) 69`, `E) 125`],
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
        this.listaMatematica2 = [{
                enunciado: 'Questão 1: \nUm produto custa R$ 200,00 e sofreu um desconto de 15%. Qual passou a ser o preço final do produto?',
                alternativas: ['A) R$ 160,00', 'B) R$ 170,00', 'C) R$ 175,00', 'D) R$ 180,00', 'E) R$ 185,00'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nQual é o comprimento de uma circunferência cujo raio mede 7 cm? (Utilize \u03c0 = 22/7)',
                alternativas: ['A) 22 cm', 'B) 44 cm', 'C) 50 cm', 'D) 88 cm', 'E) 154 cm'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nEm uma jarra, há 3 partes de suco para cada 2 partes de água. Se a jarra tem um total de 500 ml nessa proporção, quantos mililitros de suco há?',
                alternativas: ['A) 200 ml', 'B) 250 ml', 'C) 300 ml', 'D) 350 ml', 'E) 400 ml'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nQual é o valor de x na equação a seguir:\n3(x - 2) = 2x + 4',
                alternativas: ['A) x = 6', 'B) x = 8', 'C) x = 10', 'D) x = 12', 'E) x = 14'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nQual é o valor da expressão numérica:\n\u221a144 + 3\u00b2 - 5',
                alternativas: ['A) 12', 'B) 14', 'C) 16', 'D) 18', 'E) 20'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nSe 5 máquinas produzem 100 peças em 4 horas, quantas peças 3 máquinas iguais produzirão no mesmo período de 4 horas?',
                alternativas: ['A) 40 peças', 'B) 50 peças', 'C) 60 peças', 'D) 80 peças', 'E) 120 peças'],
                resposta: 2
            },
            {
                enunciado: 'Questão 7: \nUm aluno tirou nota 6,0 na prova (peso 2) e nota 7,5 no trabalho (peso 1). Qual foi a sua média ponderada?',
                alternativas: ['A) 6,0', 'B) 6,3', 'C) 6,5', 'D) 6,8', 'E) 7,0'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nQual é a área de um triângulo cuja base mede 10 cm e a altura correspondente mede 8 cm?',
                alternativas: ['A) 20 cm²', 'B) 30 cm²', 'C) 40 cm²', 'D) 80 cm²', 'E) 100 cm²'],
                resposta: 2
            },
            {
                enunciado: 'Questão 9: \nQuanto é a metade de 3/4 somada com 1/4?',
                alternativas: ['A) 1/2', 'B) 3/8', 'C) 5/8', 'D) 4/8', 'E) 1/4'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nSe você aplicar R$ 500,00 a uma taxa de juros simples de 2% ao mês, qual será o valor dos juros acumulados após 4 meses?',
                alternativas: ['A) R$ 20,00', 'B) R$ 30,00', 'C) R$ 40,00', 'D) R$ 50,00', 'E) R$ 60,00'],
                resposta: 2
            }
        ]
        this.listaMatematica3 = [{
                enunciado: 'Questão 1: \nQual é a soma de todos os termos de uma progressão geométrica infinita cujo primeiro termo é 10 e a razão é 1/2?',
                alternativas: ['A) 15', 'B) 20', 'C) 25', 'D) 30', 'E) 40'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nSe log₂(x) + log₂(x - 2) = 3, qual é o valor real de x?',
                alternativas: ['A) x = 2', 'B) x = 3', 'C) x = 4', 'D) x = 5', 'E) x = 8'],
                resposta: 2
            },
            {
                enunciado: 'Questão 3: \nQual é o valor da derivada da função f(x) = 4x³ - 5x² + 7x - 2 no ponto x = 2?',
                alternativas: ['A) 21', 'B) 25', 'C) 31', 'D) 35', 'E) 41'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nQuantas senhas de 4 dígitos distintos podem ser formadas utilizando apenas os algarismos 1, 2, 3, 4, 5 e 6?',
                alternativas: ['A) 120', 'B) 240', 'C) 360', 'D) 720', 'E) 1296'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nQual é a soma das raízes da equação quadrática 2x² - 8x + 6 = 0?',
                alternativas: ['A) -4', 'B) -3', 'C) 3', 'D) 4', 'E) 6'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nEm um triângulo retângulo, a hipotenusa mede 10 cm e um dos catetos mede 6 cm. Qual é o valor do seno do ângulo oposto ao menor cateto?',
                alternativas: ['A) 0,6', 'B) 0,8', 'C) 3/5', 'D) 4/5', 'E) 3/4'],
                resposta: 2
            },
            {
                enunciado: 'Questão 7: \nQual é o vigésimo termo (a₂₀) de uma Progressão Aritmética onde o primeiro termo a₁ = 3 e a razão r = 4?',
                alternativas: ['A) 73', 'B) 76', 'C) 79', 'D) 81', 'E) 83'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nQual é o determinante da matriz 2x2 a seguir:\n| 3  5 |\n| 2  7 |',
                alternativas: ['A) 10', 'B) 11', 'C) 12', 'D) 21', 'E) 31'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nQual é a probabilidade de obter exatamente 2 caras ao lançar uma moeda honesta 4 vezes consecutivas?',
                alternativas: ['A) 1/8', 'B) 1/4', 'C) 3/8', 'D) 1/2', 'E) 3/4'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nSe f(x) = 2x + 3 e g(x) = x² - 1, qual é o valor da função composta f(g(3))?',
                alternativas: ['A) 11', 'B) 15', 'C) 17', 'D) 21', 'E) 25'],
                resposta: 2
            }
        ]
        this.listaPortugues1 = [{
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
        this.listaPortugues2 = [{
                enunciado: 'Questão 1: \nEm qual das frases abaixo a regência verbal está CORRETA de acordo com a norma-padrão?',
                alternativas: ['A) O médico assistiu o paciente com cuidado.', 'B) Nós aspiramos a um futuro melhor.', 'C) O filme que assistimos ontem era excelente.', 'D) Mariana obedeceu o regulamento da escola.', 'E) Eu prefiro mais cinema do que teatro.'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nAssinale a opção em que a crase foi empregada CORRETAMENTE:',
                alternativas: ['A) Entreguei o relatório à uma secretária.', 'B) Ele voltou à caminhar no parque.', 'C) Chegamos à cidade antes do anoitecer.', 'D) Fomos à pé até o supermercado.', 'E) Ela se referiu à pessoas desconhecidas.'],
                resposta: 2
            },
            {
                enunciado: 'Questão 3: \nQual a figura de linguagem presente na frase: "O vento uivava durante a tempestade"?',
                alternativas: ['A) Metáfora', 'B) Hipérbole', 'C) Prosopopeia (Personificação)', 'D) Eufemismo', 'E) Metonímia'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nIdentifique o sujeito da oração: "Choveu muito forte durante a madrugada."',
                alternativas: ['A) Oração sem sujeito', 'B) Sujeito simples (madrugada)', 'C) Sujeito oculto (ele)', 'D) Sujeito indeterminado', 'E) Sujeito composto'],
                resposta: 0
            },
            {
                enunciado: 'Questão 5: \nNa frase "O aluno que estudou tirou boa nota", a oração destacada é:',
                alternativas: ['A) Subordinada substantiva objetiva direta', 'B) Subordinada adjetiva explicativa', 'C) Subordinada adjetiva restritiva', 'D) Subordinada adverbial causal', 'E) Coordenada assindética'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nAssinale a alternativa que apresenta um verbo no Pretérito Mais-Que-Perfeito do Indicativo:',
                alternativas: ['A) Eu estudara a lição quando ele chegou.', 'B) Nós estudávamos diariamente.', 'C) Eles estudaram para a avaliação.', 'D) Vós estudareis amanhã.', 'E) Se eu estudasse, passaria.'],
                resposta: 0
            },
            {
                enunciado: 'Questão 7: \nAssinale a opção em que TODAS as palavras são paroxítonas:',
                alternativas: ['A) Café, lápis, mesa.', 'B) Caráter, amável, janela.', 'C) Lâmpada, médico, ônibus.', 'D) Caju, tuiuiú, urubu.', 'E) Árvore, relógio, cipó.'],
                resposta: 1
            },
            {
                enunciado: 'Questão 8: \nQual é o antônimo adequado da palavra "efêmero"?',
                alternativas: ['A) Passageiro', 'B) Duradouro', 'C) Rápido', 'D) Fugaz', 'E) Provisório'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nNa frase "Comprei livros, cadernos e canetas", a função sintática das palavras destacadas é:',
                alternativas: ['A) Sujeito', 'B) Predicativo do sujeito', 'C) Objeto direto', 'D) Objeto indireto', 'E) Complemento nominal'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nQual das palavras abaixo possui um hífen empregado CORRETAMENTE segundo o Novo Acordo Ortográfico?',
                alternativas: ['A) Auto-estima', 'B) Anti-semita', 'C) Micro-onda', 'D) Contra-indicado', 'E) Anti-inflamatório'],
                resposta: 4
            }
        ]
        this.listaPortugues3 = [{
                enunciado: 'Questão 1: \nAssinale a alternativa em que a colocação pronominal (ênclise, próclise ou mesóclise) segue estritamente a norma-padrão:',
                alternativas: ['A) Me empreste a caneta, por favor.', 'B) Jamais entregar-te-ei os documentos.', 'C) Não me fale sobre esse assunto agora.', 'D) Diria-se que ele estava cansado.', 'E) Quem avisou-me do acidente?'],
                resposta: 2
            },
            {
                enunciado: 'Questão 2: \nQual das orações abaixo apresenta uma função sintática de APOTO?',
                alternativas: ['A) Carlos, venha aqui imediatamente!', 'B) Pelé, o rei do futebol, marcou mais de mil gols.', 'C) As ruas da cidade estavam desertas.', 'D) O livro foi lido pelos alunos.', 'E) Ele agiu com rapidez e eficiência.'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nNa frase "Conquanto estivesse chovendo, fomos ao parque", a conjunção destacada estabelece relação de:',
                alternativas: ['A) Causa', 'B) Concessão', 'C) Condição', 'D) Consequência', 'E) Proporção'],
                resposta: 1
            },
            {
                enunciado: 'Questão 4: \nAssinale a alternativa em que o verbo destacado está no Modo Subjuntivo:',
                alternativas: ['A) Se ele contasse a verdade, todos entenderiam.', 'B) Nós faremos a apresentação amanhã.', 'C) Eles estudaram bastante durante a noite.', 'D) Cante uma música para nós.', 'E) Eu lia livros clássicos na infância.'],
                resposta: 0
            },
            {
                enunciado: 'Questão 5: \nQual é o processo de formação da palavra "girassol"?',
                alternativas: ['A) Derivação prefixal', 'B) Derivação sufixal', 'C) Composição por aglutinação', 'D) Composição por justaposição', 'E) Parasíntese'],
                resposta: 3
            },
            {
                enunciado: 'Questão 6: \nAssinale a alternativa que contém erro de concordância nominal:',
                alternativas: ['A) Seguem anexas as documentações solicitadas.', 'B) A aluna estava meio confusa com as instruções.', 'C) É necessário paciência para lidar com o público.', 'D) Elas mesmas organizaram todo o evento.', 'E) A professora declarou que eram bastantes motivos.'],
                resposta: 4
            },
            {
                enunciado: 'Questão 7: \nEm "Faz dois anos que não o vejo", o verbo fazer é impessoal. O que acontece se trocarmos "dois anos" por "dez anos"?',
                alternativas: ['A) O verbo vai para o plural: "Fazem dez anos..."', 'B) O verbo permanece no singular: "Faz dez anos..."', 'C) O verbo aceita ambas as formas.', 'D) O verbo vai para o futuro: "Farão dez anos..."', 'E) Torna-se obrigatório o uso do verbo haver.'],
                resposta: 1
            },
            {
                enunciado: 'Questão 8: \nQual a função sintática do pronome "nos" em: "Ele nos ofereceu uma excelente oportunidade"?',
                alternativas: ['A) Objeto direto', 'B) Objeto indireto', 'C) Sujeito', 'D) Predicativo', 'E) Agente da passiva'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nAssinale a opção em que a palavra "que" funciona como Pronome Relativo:',
                alternativas: ['A) Espero que você venha cedo.', 'B) Que dia lindo faz hoje!', 'C) O casaco que comprei é muito quente.', 'D) Quase que eu caio da escada.', 'E) Ele fala que fala e não diz nada.'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nNa frase "O juiz julgou o réu culpado", o termo "culpado" exerce a função sintática de:',
                alternativas: ['A) Predicativo do sujeito', 'B) Predicativo do objeto', 'C) Adjunto adnominal', 'D) Objeto direto', 'E) Complemento nominal'],
                resposta: 1
            }
        ]
        this.listaGeografia1 = [{
                enunciado: `Questão 1: \nQual é o maior país do mundo em extensão territorial?`,
                alternativas: ["A) Canadá", "B) Rússia", "C) China", "D) Estados Unidos", "E) Brasil"],
                resposta: 1
            },
            {
                enunciado: `Questão 2: \nQuantos continentes existem no modelo de seis continentes?`,
                alternativas: ["A) 4", "B) 5", "C) 6", "D) 7", "E) 8"],
                resposta: 2
            },
            {
                enunciado: `Questão 3: \nQual é a capital da Austrália?`,
                alternativas: ["A) Sydney", "B) Melbourne", "C) Camberra", "D) Perth", "E) Brisbane"],
                resposta: 2
            },
            {
                enunciado: `Questão 4: \nQual é o maior oceano do planeta?`,
                alternativas: ["A) Atlântico", "B) Índico", "C) Ártico", "D) Pacífico", "E) Antártico"],
                resposta: 3
            },
            {
                enunciado: `Questão 5: \nEm qual continente fica o Egito?`,
                alternativas: ["A) Ásia", "B) África", "C) Europa", "D) Oceania", "E) América"],
                resposta: 1
            },
            {
                enunciado: `Questão 6: \nQual é o rio mais extenso do Brasil?`,
                alternativas: ["A) Rio São Francisco", "B) Rio Paraná", "C) Rio Amazonas", "D) Rio Tocantins", "E) Rio Paraguai"],
                resposta: 2
            },
            {
                enunciado: `Questão 7: \nQual linha imaginária divide a Terra em hemisférios Norte e Sul?`,
                alternativas: ["A) Trópico de Câncer", "B) Meridiano de Greenwich", "C) Linha do Equador", "D) Trópico de Capricórnio", "E) Círculo Polar Ártico"],
                resposta: 2
            },
            {
                enunciado: `Questão 8: \nQual é o menor país do mundo em território?`,
                alternativas: ["A) Mônaco", "B) Vaticano", "C) Malta", "D) Luxemburgo", "E) Andorra"],
                resposta: 1
            },
            {
                enunciado: `Questão 9: \nQual é a capital do Canadá?`,
                alternativas: ["A) Toronto", "B) Vancouver", "C) Montreal", "D) Ottawa", "E) Quebec"],
                resposta: 3
            },
            {
                enunciado: `Questão 10: \nQual destes países não faz parte da América do Sul?`,
                alternativas: ["A) Chile", "B) Colômbia", "C) México", "D) Peru", "E) Argentina"],
                resposta: 2
            }
        ]
        this.listaGeografia2 = [{
                enunciado: 'Questão 1: \nQual bioma brasileiro é considerado a savana mais rica em biodiversidade do mundo e sofre fortemente com a expansão da fronteira agrícola?',
                alternativas: ['A) Caatinga', 'B) Cerrado', 'C) Pantanal', 'D) Mata Atlântica', 'E) Pampa'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nQual é o processo de deslocamento populacional diário entre municípios vizinhos, muito comum em regiões metropolitanas por motivos de trabalho ou estudo?',
                alternativas: ['A) Transumância', 'B) Êxodo rural', 'C) Migração pendular', 'D) Nomadismo', 'E) Migração sazonal'],
                resposta: 2
            },
            {
                enunciado: 'Questão 3: \nA camada da estrutura interna da Terra composta por rochas fundidas e sobre a qual flutuam as placas tectônicas é o:',
                alternativas: ['A) Núcleo interno', 'B) Núcleo externo', 'C) Manto', 'D) Litosfera', 'E) Crosta continental'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nQual tipo de clima predominante no Nordeste brasileiro é caracterizado por baixas precipitações e chuvas mal distribuídas ao longo do ano?',
                alternativas: ['A) Equatorial', 'B) Subtropical', 'C) Semiárido', 'D) Tropical de altitude', 'E) Litoral úmido'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nO bloco econômico criado pelo Tratado de Assunção em 1991, formado originalmente por Brasil, Argentina, Paraguai e Uruguai, é o:',
                alternativas: ['A) NAFTA', 'B) União Europeia', 'C) Mercosul', 'D) Pacto Andino', 'E) BRICS'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nO fenômeno climático caracterizado pelo aquecimento anormal das águas superficiais do Oceano Pacífico Equatorial é chamado de:',
                alternativas: ['A) La Niña', 'B) El Niño', 'C) Inversão térmica', 'D) Efeito estufa', 'E) Ciclone extratropical'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nQual é a principal fonte de energia da matriz elétrica brasileira?',
                alternativas: ['A) Termelétrica (carvão)', 'B) Eólica', 'C) Hidrelétrica', 'D) Nuclear', 'E) Solar'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nA linha imaginária horizontal que divide a Terra nos hemisférios Norte e Sul é conhecida como:',
                alternativas: ['A) Meridiano de Greenwich', 'B) Trópico de Câncer', 'C) Trópico de Capricórnio', 'D) Linha do Equador', 'E) Círculo Polar Ártico'],
                resposta: 3
            },
            {
                enunciado: 'Questão 9: \nO conceito demográfico que indica o número médio de filhos que uma mulher teria ao longo de seu período fértil é a taxa de:',
                alternativas: ['A) Natalidade', 'B) Fecundidade', 'C) Mortalidade infantil', 'D) Crescimento vegetativo', 'E) Expectativa de vida'],
                resposta: 1
            },
            {
                enunciado: 'Questão 10: \nQual processo geológico é responsável pelo desgaste, transporte e deposição de rochas e solos pela ação da água ou do vento?',
                alternativas: ['A) Tectonismo', 'B) Vulcanismo', 'C) Erosão', 'D) Metamorfismo', 'E) Intemperismo químico'],
                resposta: 2
            }
        ]
        this.listaGeografia3 = [{
                enunciado: 'Questão 1: \nQual teoria demográfica defendia que o crescimento populacional ocorria em progressão geométrica, enquanto a produção de alimentos crescia em progressão aritmética?',
                alternativas: ['A) Teoria Reformista', 'B) Teoria Neomalthusiana', 'C) Teoria Malthusiana', 'D) Teoria Ecomalthusiana', 'E) Transição Demográfica'],
                resposta: 2
            },
            {
                enunciado: 'Questão 2: \nO conceito geográfico que se refere à junção física das malhas urbanas de duas ou mais cidades vizinhas devido ao seu crescimento horizontal é:',
                alternativas: ['A) Megalópole', 'B) Conurbação', 'C) Metropolização', 'D) Gentrificação', 'E) Rede urbana'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nQual projeção cartográfica preserva as formas dos continentes, mas distorce consideravelmente as suas áreas (especialmente nas altas latitudes), sendo muito associada ao período das Grandes Navegações?',
                alternativas: ['A) Projeção de Peters', 'B) Projeção de Mercator', 'C) Projeção de Robinson', 'D) Projeção Azimutal', 'E) Projeção Cônica'],
                resposta: 1
            },
            {
                enunciado: 'Questão 4: \nO domínio morphoclimático brasileiro caracterizado por relevo de mares de morros, vegetação tropical e clima quente e úmido é o domínio das:',
                alternativas: ['A) Araucárias', 'B) Caatingas', 'C) Faixas de Transição', 'D) Áreas Subtropicais', 'E) Mares de Morros (Mata Atlântica)'],
                resposta: 4
            },
            {
                enunciado: 'Questão 5: \nA Zona de Convergência Intertropical (ZCIT) desempenha papel fundamental na dinâmica atmosférica global por ser uma área de:',
                alternativas: ['A) Alta pressão e subsidência do ar', 'B) Baixa pressão e convergência dos ventos alísios', 'C) Divergência de ventos ocidentais', 'D) Massas de ar polares estáticas', 'E) Formação de massas secas continentais'],
                resposta: 1
            },
            {
                enunciado: 'Questão 6: \nQual fenômeno espacial urbano descreve o processo de valorização imobiliária de uma área periférica ou degradada, resultando na expulsão da população de menor renda local?',
                alternativas: ['A) Periurbanização', 'B) Segregação socioespacial', 'C) Gentrificação', 'D) Macrocefalia urbana', 'E) Desmetropolização'],
                resposta: 2
            },
            {
                enunciado: 'Questão 7: \nO modelo de produção industrial que introduziu a automação flexível, a produção sob demanda (*just-in-time*) e o trabalho em equipe foi o:',
                alternativas: ['A) Taylorismo', 'B) Fordismo', 'C) Toyotismo', 'D) Volvismo', 'E) Keynesianismo'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nQual acordo internacional, assinado em 2015, tem como objetivo central manter o aumento da temperatura média global bem abaixo dos 2 °C em relação aos níveis pré-industriais?',
                alternativas: ['A) Protocolo de Kyoto', 'B) Acordo de Paris', 'C) Protocolo de Montreal', 'D) Conferência de Estocolmo', 'E) Rio+20'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nA estrutura geológica predominante no território brasileiro, responsável pela ocorrência de minério de ferro e manganês no Quadrilátero Ferrífero (MG) e em Carajás (PA), é formada por:',
                alternativas: ['A) Bacias sedimentares recentes', 'B) Dobramentos modernos', 'C) Escudos cristalinos (ou maciços antigos)', 'D) Derrames basálticos terciários', 'E) Fossas tectônicas marinha'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nQual estreito estratégico conecta o Golfo Pérsico ao Oceano Índico, sendo uma das rotas marítimas mais importantes do mundo para o transporte de petróleo?',
                alternativas: ['A) Estreito de Gibraltar', 'B) Estreito de Malaca', 'C) Estreito de Bósforo', 'D) Estreito de Ormuz', 'E) Canal de Suez'],
                resposta: 3
            }
        ]
        this.listaHistoria1 = [{
                enunciado: `Questão 1: \nEm que ano ocorreu a chegada dos portugueses ao Brasil?`,
                alternativas: ["A) 1492", "B) 1500", "C) 1530", "D) 1822", "E) 1889"],
                resposta: 1
            },
            {
                enunciado: `Questão 2: \nQuem foi o primeiro imperador do Brasil?`,
                alternativas: ["A) Dom Pedro I", "B) Dom Pedro II", "C) Getúlio Vargas", "D) Marechal Deodoro da Fonseca", "E) Tiradentes"],
                resposta: 0
            },
            {
                enunciado: `Questão 3: \nEm que ano começou a Revolução Francesa?`,
                alternativas: ["A) 1776", "B) 1808", "C) 1789", "D) 1815", "E) 1848"],
                resposta: 2
            },
            {
                enunciado: `Questão 4: \nQual civilização construiu as famosas pirâmides de Gizé?`,
                alternativas: ["A) Romanos", "B) Gregos", "C) Maias", "D) Egípcios", "E) Persas"],
                resposta: 3
            },
            {
                enunciado: `Questão 5: \nQuem foi o líder da Alemanha nazista durante a Segunda Guerra Mundial?`,
                alternativas: ["A) Benito Mussolini", "B) Adolf Hitler", "C) Josef Stalin", "D) Winston Churchill", "E) Napoleão Bonaparte"],
                resposta: 1
            },
            {
                enunciado: `Questão 6: \nEm que ano a escravidão foi oficialmente abolida no Brasil?`,
                alternativas: ["A) 1822", "B) 1850", "C) 1871", "D) 1888", "E) 1889"],
                resposta: 3
            },
            {
                enunciado: `Questão 7: \nQual acontecimento desencadeou a Primeira Guerra Mundial?`,
                alternativas: ["A) A invasão da Polônia", "B) A Revolução Russa", "C) O assassinato do arquiduque Francisco Ferdinando", "D) A queda do Muro de Berlim", "E) A Revolução Francesa"],
                resposta: 2
            },
            {
                enunciado: `Questão 8: \nEm qual cidade surgiu a democracia na Grécia Antiga?`,
                alternativas: ["A) Esparta", "B) Roma", "C) Alexandria", "D) Corinto", "E) Atenas"],
                resposta: 4
            },
            {
                enunciado: `Questão 9: \nQuem proclamou a República no Brasil, em 1889?`,
                alternativas: ["A) Dom Pedro II", "B) Juscelino Kubitschek", "C) Getúlio Vargas", "D) Marechal Deodoro da Fonseca", "E) Dom Pedro I"],
                resposta: 3
            },
            {
                enunciado: `Questão 10: \nEm qual país começou a Revolução Industrial?`,
                alternativas: ["A) França", "B) Alemanha", "C) Inglaterra", "D) Estados Unidos", "E) Itália"],
                resposta: 2
            }
        ]
        this.listaHistoria2 = [{
                enunciado: 'Questão 1: \nQual foi o evento histórico que marcou o início da Idade Contemporânea em 1789 com a queda da Bastilha?',
                alternativas: ['A) Revolução Industrial', 'B) Revolução Francesa', 'C) Independência dos EUA', 'D) Primeira Guerra Mundial', 'E) Reforma Protestante'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nNo Brasil Colônia, qual foi o primeiro grande ciclo econômico baseado no cultivo em grande escala para exportação?',
                alternativas: ['A) Ciclo do Ouro', 'B) Ciclo do Café', 'C) Ciclo da Borracha', 'D) Ciclo do Açúcar', 'E) Ciclo do Algodão'],
                resposta: 3
            },
            {
                enunciado: 'Questão 3: \nQual imperador romano promulgou o Edito de Milão em 313 d.C., concedendo liberdade de culto aos cristãos?',
                alternativas: ['A) Júlio César', 'B) Augusto', 'C) Nero', 'D) Constantino', 'E) Calígula'],
                resposta: 3
            },
            {
                enunciado: 'Questão 4: \nO período da história brasileira entre 1930 e 1945, sob o governo de Getúlio Vargas, ficou conhecido como:',
                alternativas: ['A) República Velha', 'B) Era Vargas', 'C) Segundo Reinado', 'D) República Nova', 'E) Ditadura Militar'],
                resposta: 1
            },
            {
                enunciado: 'Questão 5: \nQual movimento de contestação religiosa do século XVI foi liderado por Martinho Lutero na Alemanha?',
                alternativas: ['A) Contrarreforma', 'B) Iluminismo', 'C) Reforma Protestante', 'D) Renascimento', 'E) Inquisição'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nA disputa ideológica, política e econômica entre Estados Unidos e União Soviética após a Segunda Guerra Mundial foi a:',
                alternativas: ['A) Guerra Fria', 'B) Guerra dos Cem Anos', 'C) Guerra da Coreia', 'D) Guerra do Vietnã', 'E) Guerra dos Trinta Anos'],
                resposta: 0
            },
            {
                enunciado: 'Questão 7: \nEm 1888, a Princesa Isabel assinou a lei que aboliu definitivamente a escravidão no Brasil. Essa lei é a:',
                alternativas: ['A) Lei Eusébio de Queirós', 'B) Lei do Ventre Livre', 'C) Lei dos Sexagenários', 'D) Lei Áurea', 'E) Lei de Terras'],
                resposta: 3
            },
            {
                enunciado: 'Questão 8: \nQual civilização da antiguidade foi responsável pela criação do Código de Hamurábi, uma das leis escritas mais antigas do mundo?',
                alternativas: ['A) Egípcia', 'B) Babilônica (Mesopotâmia)', 'C) Grega', 'D) Romana', 'E) Fenícia'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nO tratado assinado em 1494 entre Portugal e Espanha para dividir as terras descobertas no Novo Mundo foi o:',
                alternativas: ['A) Tratado de Versalhes', 'B) Tratado de Tordesilhas', 'C) Tratado de Madri', 'D) Tratado de Utrecht', 'E) Tratado de Petrópolis'],
                resposta: 1
            },
            {
                enunciado: 'Questão 10: \nQuem foi o primeiro imperador do Brasil, responsável por proclamar a Independência em 1822?',
                alternativas: ['A) Dom Pedro II', 'B) Dom João VI', 'C) Dom Pedro I', 'D) Marechal Deodoro da Fonseca', 'E) Dom Miguel'],
                resposta: 2
            }
        ]
        this.listaHistoria3 = [{
                enunciado: 'Questão 1: \nQual conflito armado ocorreu no sertão da Bahia no final do século XIX, liderado por Antônio Conselheiro e destruído pelo exército brasileiro?',
                alternativas: ['A) Revolta da Vacina', 'B) Guerra dos Canudos', 'C) Guerra do Contestado', 'D) Revolta da Chibata', 'E) Balaiada'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nO tratado internacional que pôs fim oficial à Primeira Guerra Mundial e impôs severas sanções à Alemanha foi o:',
                alternativas: ['A) Tratado de Utrecht', 'B) Tratado de Versalhes', 'C) Pacto Molotov-Ribbentrop', 'D) Tratado de Brest-Litovsk', 'E) Tratado de Viena'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nNa Grécia Antiga, o período de guerras entre a Liga de Delos (liderada por Atenas) e a Liga do Peloponeso (liderada por Esparta) foi a:',
                alternativas: ['A) Guerra Médica', 'B) Guerra do Peloponeso', 'C) Guerra Púnica', 'D) Guerra de Troia', 'E) Guerra Macedônica'],
                resposta: 1
            },
            {
                enunciado: 'Questão 4: \nDurante a República Velha no Brasil, a política de alternância no poder federal entre as oligarquias de São Paulo e Minas Gerais era chamada de:',
                alternativas: ['A) Política dos Governadores', 'B) Coronelismo', 'C) Política do Café com Leite', 'D) Encilhamento', 'E) Convênio de Taubaté'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nQual evento ocorrido em 1968 marcou o endurecimento da Ditadura Militar no Brasil, autorizando o fechamento do Congresso e a suspensão de garantias constitucionais?',
                alternativas: ['A) AI-1', 'B) AI-2', 'C) AI-5', 'D) Constituição de 1967', 'E) Diretas Já'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nA Revolução Gloriosa (1688-1689) na Inglaterra resultou no fim do absolutismo monárquico e no estabelecimento de qual sistema político?',
                alternativas: ['A) República Presidencialista', 'B) Monarquia Parlamentarista', 'C) Ditadura Militar', 'D) Império Teocrático', 'E) Anarquia Feudal'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nQuem era o Secretário-Geral do Partido Comunista da União Soviética que implementou as reformas da *Perestroika* e da *Glasnost* nos anos 1980?',
                alternativas: ['A) Nikita Khrushchev', 'B) Joseph Stalin', 'C) Mikhail Gorbachev', 'D) Leonid Brezhnev', 'E) Boris Yeltsin'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nQual revolta nativista ocorrida em Pernambuco em 1645 visava expulsar os holandeses do Nordeste brasileiro?',
                alternativas: ['A) Insurreição Pernambucana', 'B) Guerra dos Mascates', 'C) Revolta de Beckman', 'D) Sabinada', 'E) Cabanagem'],
                resposta: 0
            },
            {
                enunciado: 'Questão 9: \nO processo de unificação alemã na segunda metade do século XIX foi liderado pelo chanceler prussiano:',
                alternativas: ['A) Otto von Bismarck', 'B) Klemens von Metternich', 'C) Giuseppe Garibaldi', 'D) Guilherme II', 'E) Friedrich Engels'],
                resposta: 0
            },
            {
                enunciado: 'Questão 10: \nA crise econômica global de 1929 teve seu ponto de partida no colapso de qual instituição financeira nos Estados Unidos?',
                alternativas: ['A) Banco Central Americano', 'B) Bolsa de Valores de Nova York (Wall Street)', 'C) Banco da Inglaterra', 'D) Tesouro dos EUA', 'E) Bolsa de Chicago'],
                resposta: 1
            }
        ]
        this.listaFisica1 = [{
                enunciado: `Questão 1: \nQual é a unidade de medida de força no Sistema Internacional (SI)?`,
                alternativas: ["A) Joule", "B) Newton", "C) Watt", "D) Pascal", "E) Metro"],
                resposta: 1
            },
            {
                enunciado: `Questão 2: \nQual é a fórmula da velocidade média?`,
                alternativas: ["A) Vm = ΔS / ΔT", "B) Vm = ΔT / ΔS", "C) Vm = m × a", "D) Vm = F / m", "E) Vm = ΔS × ΔT"],
                resposta: 0
            },
            {
                enunciado: `Questão 3: \nQual é aproximadamente o valor da aceleração da gravidade na superfície da Terra?`,
                alternativas: ["A) 5,8 m/s²", "B) 8,2 m/s²", "C) 9,8 m/s²", "D) 12,5 m/s²", "E) 15 m/s²"],
                resposta: 2
            },
            {
                enunciado: `Questão 4: \nQual cientista formulou as três leis fundamentais do movimento?`,
                alternativas: ["A) Albert Einstein", "B) Galileu Galilei", "C) Nikola Tesla", "D) Isaac Newton", "E) James Watt"],
                resposta: 3
            },
            {
                enunciado: `Questão 5: \nQual é a unidade de medida de energia no Sistema Internacional?`,
                alternativas: ["A) Newton", "B) Joule", "C) Watt", "D) Ampere", "E) Volt"],
                resposta: 1
            },
            {
                enunciado: `Questão 6: \nUm carro percorre 100 metros em 20 segundos. Qual é sua velocidade média?`,
                alternativas: ["A) 2 m/s", "B) 4 m/s", "C) 5 m/s", "D) 10 m/s", "E) 20 m/s"],
                resposta: 2
            },
            {
                enunciado: `Questão 7: \nSegundo a Primeira Lei de Newton, um corpo em movimento tende a:`,
                alternativas: ["A) Parar imediatamente", "B) Aumentar sua velocidade", "C) Mudar sua direção", "D) Continuar em movimento retilíneo uniforme, se a força resultante for zero", "E) Diminuir sua massa"],
                resposta: 3
            },
            {
                enunciado: `Questão 8: \nQual é a fórmula da Segunda Lei de Newton?`,
                alternativas: ["A) F = m × a", "B) F = m / a", "C) F = a / m", "D) F = m + a", "E) F = m × v"],
                resposta: 0
            },
            {
                enunciado: `Questão 9: \nQual é a unidade de medida de potência no Sistema Internacional?`,
                alternativas: ["A) Joule", "B) Newton", "C) Watt", "D) Pascal", "E) Quilograma"],
                resposta: 2
            },
            {
                enunciado: `Questão 10: \nUm objeto possui massa de 5 kg. Considerando a gravidade igual a 10 m/s², qual é o seu peso?`,
                alternativas: ["A) 5 N", "B) 10 N", "C) 25 N", "D) 50 N", "E) 100 N"],
                resposta: 3
            }
        ]
        this.listaFisica2 = [{
                enunciado: 'Questão 1: \nUm carro se desloca com velocidade constante de 72 km/h. Qual é essa velocidade convertida para o Sistema Internacional (m/s)?',
                alternativas: ['A) 15 m/s', 'B) 20 m/s', 'C) 25 m/s', 'D) 30 m/s', 'E) 36 m/s'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nQual é a força resultante necessária para acelerar um bloco de massa 5 kg com uma aceleração de 3 m/s²?',
                alternativas: ['A) 8 N', 'B) 10 N', 'C) 15 N', 'D) 20 N', 'E) 25 N'],
                resposta: 2
            },
            {
                enunciado: 'Questão 3: \nUm corpo de massa 2 kg é abandonado do alto de um prédio. Qual é a sua energia potencial gravitacional a 10 metros de altura? (Considere g = 10 m/s²)',
                alternativas: ['A) 20 J', 'B) 50 J', 'C) 100 J', 'D) 200 J', 'E) 500 J'],
                resposta: 3
            },
            {
                enunciado: 'Questão 4: \nUm resistor de 10 \u03a9 é submetido a uma d.d.p. de 20 V. Qual é a corrente elétrica que circula por esse resistor?',
                alternativas: ['A) 0,5 A', 'B) 1,0 A', 'C) 2,0 A', 'D) 4,0 A', 'E) 10 A'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nQual fenômeno óptico é responsável pela formação do arco-íris quando a luz solar atravessa as gotas de chuva?',
                alternativas: ['A) Reflexão simples', 'B) Difração', 'C) Refratação e dispersão', 'D) Polarização', 'E) Interferência'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nQual é a frequência de uma onda eletromagnética que possui comprimento de onda de 3 m e velocidade de propagação de 300 m/s?',
                alternativas: ['A) 10 Hz', 'B) 50 Hz', 'C) 100 Hz', 'D) 300 Hz', 'E) 900 Hz'],
                resposta: 2
            },
            {
                enunciado: 'Questão 7: \nUm recipiente de 500 g de água é aquecido de 20 °C para 40 °C. Sabendo que o calor específico da água é 1 cal/g°C, quanto calor foi fornecido?',
                alternativas: ['A) 5.000 cal', 'B) 10.000 cal', 'C) 15.000 cal', 'D) 20.000 cal', 'E) 25.000 cal'],
                resposta: 1
            },
            {
                enunciado: 'Questão 8: \nEm um espelho plano, qual é a distância entre um objeto colocado a 3 metros do espelho e a sua respectiva imagem virtual?',
                alternativas: ['A) 1,5 m', 'B) 3 m', 'C) 4,5 m', 'D) 6 m', 'E) 9 m'],
                resposta: 3
            },
            {
                enunciado: 'Questão 9: \nDois resistores de 6 \u03a9 estão ligados em PARALELO em um circuito. Qual é a resistência equivalente dessa associação?',
                alternativas: ['A) 3 \u03a9', 'B) 6 \u03a9', 'C) 9 \u03a9', 'D) 12 \u03a9', 'E) 36 \u03a9'],
                resposta: 0
            },
            {
                enunciado: 'Questão 10: \nQual Leis de Kepler afirma que os planetas descrevem órbitas elípticas ao redor do Sol, ocupando este um dos focos?',
                alternativas: ['A) Primeira Lei de Kepler', 'B) Segunda Lei de Kepler', 'C) Terceira Lei de Kepler', 'D) Lei da Gravitação Universal', 'E) Lei da Inércia'],
                resposta: 0
            }
        ]
        this.listaFisica3 = [{
                enunciado: 'Questão 1: \nUm projétil é lançado com velocidade inicial v\u2080 a um ângulo de 30° com a horizontal. Sabendo que sin(30°) = 0,5 e g = 10 m/s², qual é o tempo total de voo se v\u2080 = 40 m/s?',
                alternativas: ['A) 2 s', 'B) 4 s', 'C) 6 s', 'D) 8 s', 'E) 10 s'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nUm bloco de massa m = 4 kg desliza por um plano inclinado a 30° com atrito. Se sin(30°) = 0,5 e cos(30°) = 0,86, qual é o valor da força normal aplicada pelo plano no bloco? (g = 10 m/s²)',
                alternativas: ['A) 20 N', 'B) 34,4 N', 'C) 40 N', 'D) 68,8 N', 'E) 80 N'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nQual é o trabalho realizado por uma força centrípeta exercida sobre um corpo em movimento circular uniforme ao completar uma volta inteira?',
                alternativas: ['A) Depende do raio', 'B) Depende da massa', 'C) Zero', 'D) Igual à energia cinética', 'E) Igual à força vezes o perímetro'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nUm gás ideal realiza uma transformação ISOBÁRICA à pressão de 200 Pa, expandindo seu volume de 2 m³ para 5 m³. Qual foi o trabalho realizado pelo gás?',
                alternativas: ['A) 200 J', 'B) 400 J', 'C) 600 J', 'D) 1000 J', 'E) 1400 J'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nUma carga q = 2 \u03bcC é colocada em uma região onde existe um campo elétrico E = 5 \u00d7 10\u2074 N/C. Qual é a intensidade da força elétrica sofrida por ela?',
                alternativas: ['A) 0,01 N', 'B) 0,1 N', 'C) 1,0 N', 'D) 10 N', 'E) 100 N'],
                resposta: 1
            },
            {
                enunciado: 'Questão 6: \nQual é a frequência fundamental de vibração de uma corda de comprimento L = 1 m fixa nas duas pontas, sob tração com velocidade de onda v = 100 m/s?',
                alternativas: ['A) 25 Hz', 'B) 50 Hz', 'C) 100 Hz', 'D) 200 Hz', 'E) 400 Hz'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nUm transformador ideal possui 200 espiras no primário e 1000 espiras no secundário. Se aplicarmos 120 V de tensão alternada no primário, qual será a tensão no secundário?',
                alternativas: ['A) 24 V', 'B) 60 V', 'C) 240 V', 'D) 600 V', 'E) 1200 V'],
                resposta: 3
            },
            {
                enunciado: 'Questão 8: \nDe acordo com a Teoria da Relatividade Restrita de Einstein, qual das seguintes grandezas NÃO é absoluta e depende do referencial do observador?',
                alternativas: ['A) A velocidade da luz no vácuo', 'B) O intervalo de tempo entre dois eventos', 'C) A carga elétrica fundamental', 'D) A constante gravitacional G', 'E) O número de prótons de um átomo'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nQual fenômeno óptico comprova a natureza ondulatória da luz ao demonstrar a passagem de frentes de onda por fendas duplas (Experimento de Young)?',
                alternativas: ['A) Efeito Fotoelétrico', 'B) Interferência', 'C) Reflexão Total', 'D) Dispersão Newtoniana', 'E) Efeito Compton'],
                resposta: 1
            },
            {
                enunciado: 'Questão 10: \nUm objeto é posicionado a 20 cm de uma lente convergente de distância focal f = 10 cm. A imagem formada por essa lente será:',
                alternativas: ['A) Virtual, direta e menor', 'B) Real, invertida e do mesmo tamanho', 'C) Real, invertida e maior', 'D) Virtual, direta e maior', 'E) Não haverá formação de imagem (imagem imprópria)'],
                resposta: 1
            }
        ]
        this.listaQuimica1 = [{
                enunciado: `Questão 1: Qual é o símbolo químico do ouro?`,
                alternativas: ["A) Ag", "B) Au", "C) Fe", "D) O", "E) Cu"],
                resposta: 1
            },
            {
                enunciado: `Questão 2: Qual é a fórmula química da água?`,
                alternativas: ["A) CO2", "B) O2", "C) H2O", "D) NaCl", "E) H2SO4"],
                resposta: 2
            },
            {
                enunciado: `Questão 3: Qual é o número atômico do carbono?`,
                alternativas: ["A) 4", "B) 5", "C) 6", "D) 8", "E) 12"],
                resposta: 2
            },
            {
                enunciado: `Questão 4: Qual partícula subatômica possui carga elétrica negativa?`,
                alternativas: ["A) Próton", "B) Nêutron", "C) Núcleo", "D) Elétron", "E) Átomo"],
                resposta: 3
            },
            {
                enunciado: `Questão 5: Qual é o gás mais abundante na atmosfera terrestre?`,
                alternativas: ["A) Oxigênio", "B) Nitrogênio", "C) Gás carbônico", "D) Hidrogênio", "E) Hélio"],
                resposta: 1
            },
            {
                enunciado: `Questão 6: Qual é o pH de uma solução considerada neutra a 25 °C?`,
                alternativas: ["A) 0", "B) 3", "C) 5", "D) 7", "E) 14"],
                resposta: 3
            },
            {
                enunciado: `Questão 7: Qual elemento químico possui o símbolo Fe?`,
                alternativas: ["A) Flúor", "B) Fósforo", "C) Ferro", "D) Frâncio", "E) Enxofre"],
                resposta: 2
            },
            {
                enunciado: `Questão 8: Como é chamada a passagem do estado líquido para o estado gasoso?`,
                alternativas: ["A) Fusão", "B) Solidificação", "C) Condensação", "D) Sublimação", "E) Vaporização"],
                resposta: 4
            },
            {
                enunciado: `Questão 9: Qual é a principal característica de uma ligação iônica?`,
                alternativas: ["A) Compartilhamento de elétrons", "B) Transferência de elétrons", "C) Compartilhamento de prótons", "D) Transferência de nêutrons", "E) Ausência de elétrons"],
                resposta: 1
            },
            {
                enunciado: `Questão 10: Qual é o símbolo químico da prata?`,
                alternativas: ["A) Au", "B) Pt", "C) Ag", "D) Pb", "E) Al"],
                resposta: 2
            }
        ]
        this.listaQuimica2 = [{
                enunciado: 'Questão 1: \nQual é a massa molar aproximada do dióxido de carbono (CO₂)? (Dados: C = 12 g/mol, O = 16 g/mol)',
                alternativas: ['A) 28 g/mol', 'B) 32 g/mol', 'C) 44 g/mol', 'D) 56 g/mol', 'E) 64 g/mol'],
                resposta: 2
            },
            {
                enunciado: 'Questão 2: \nSegundo a tabela periódica, qual é a família (ou grupo) dos elementos flúor, cloro, bromo e iodo?',
                alternativas: ['A) Metais Alcalinos', 'B) Metais Alcalino-Terrosos', 'C) Calcogênios', 'D) Halogênios', 'E) Gases Nobres'],
                resposta: 3
            },
            {
                enunciado: 'Questão 3: \nQual é a concentração em quantidade de matéria (molaridade) de uma solução aquosa que contém 0,5 mol de soluto dissolvidos em um volume total de 2 litros de solução?',
                alternativas: ['A) 0,25 mol/L', 'B) 0,5 mol/L', 'C) 1,0 mol/L', 'D) 2,0 mol/L', 'E) 4,0 mol/L'],
                resposta: 0
            },
            {
                enunciado: 'Questão 4: \nQual das alternativas abaixo representa uma reação de neutralização ácido-base?',
                alternativas: ['A) H₂ + Cl₂ → 2HCl', 'B) HCl + NaOH → NaCl + H₂O', 'C) 2H₂O → 2H₂ + O₂', 'D) CaCO₃ → CaO + CO₂', 'E) Zn + 2HCl → ZnCl₂ + H₂'],
                resposta: 1
            },
            {
                enunciado: 'Questão 5: \nQual é a geometria molecular da molécula de água (H₂O) segundo a teoria da repulsão dos pares de elétrons da valência?',
                alternativas: ['A) Linear', 'B) Trigonal planar', 'C) Piramidal', 'D) Angular', 'E) Tetraédrica'],
                resposta: 3
            },
            {
                enunciado: 'Questão 6: \nQual é o nox (número de oxidação) do enxofre na molécula do ácido sulfúrico (H₂SO₄)?',
                alternativas: ['A) +2', 'B) +4', 'C) +6', 'D) -2', 'E) 0'],
                resposta: 2
            },
            {
                enunciado: 'Questão 7: \nQual é a função orgânica da substância etanol (CH₃-CH₂-OH)?',
                alternativas: ['A) Aldeído', 'B) Cetona', 'C) Álcool', 'D) Ácido carboxílico', 'E) Éter'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nEm uma reação química endotérmica, o que ocorre com a entalpia e com a sensação térmica do recipiente onde ela acontece?',
                alternativas: ['A) Libera calor e o recipiente esquenta', 'B) Absorve calor e o recipiente esfria', 'C) Libera calor e o recipiente esfria', 'D) Absorve calor e o recipiente esquenta', 'E) Não há variação de calor'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nQual é o nome oficial IUPAC para o composto orgânico de cadeia aberta com 3 carbonos e apenas ligações simples terminado em grupo carboxílico (-COOH)?',
                alternativas: ['A) Propanol', 'B) Propanona', 'C) Ácido propanoico', 'D) Propano', 'E) Propanal'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nQuantos átomos de hidrogênio existem em uma molécula de glicose (C₆H₁₂O₆)?',
                alternativas: ['A) 6', 'B) 12', 'C) 18', 'D) 24', 'E) 48'],
                resposta: 1
            }
        ]
        this.listaQuimica3 = [{
                enunciado: 'Questão 1: \nQual é a constante de equilíbrio em termos de concentração (K_c) para a síntese da amônia:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)\nsabendo que no equilíbrio as concentrações são [N₂] = 1 mol/L, [H₂] = 2 mol/L e [NH₃] = 2 mol/L?',
                alternativas: ['A) 0,25 L²/mol²', 'B) 0,50 L²/mol²', 'C) 1,00 L²/mol²', 'D) 2,00 L²/mol²', 'E) 4,00 L²/mol²'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nQual é o pH de uma solução aquosa cuja concentração de íons hidrônio [H₃O⁺] é igual a 1 × 10⁻⁴ mol/L a 25 °C?',
                alternativas: ['A) 2', 'B) 4', 'C) 7', 'D) 10', 'E) 14'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nNa eletrólise ígnea do cloreto de sódio (NaCl fundido), qual substância é formada no cátodo (polo negativo)?',
                alternativas: ['A) Gás cloro (Cl₂)', 'B) Gás hidrogênio (H₂)', 'C) Sódio metálico (Na)', 'D) Oxigênio gasoso (O₂)', 'E) Água (H₂O)'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nQual é a hibridização do átomo de carbono central na molécula de etino (acetileno - C₂H₂)?',
                alternativas: ['A) sp³', 'B) sp²', 'C) sp', 'D) sp³d', 'E) sp³d²'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nDada a reação genérica de 1ª ordem em relação ao reagente A, se a velocidade inicial da reação duplica quando a concentração de A é duplicada, o que acontece se triplicarmos a concentração de A?',
                alternativas: ['A) A velocidade triplica', 'B) A velocidade quadruplica', 'C) A velocidade permanece igual', 'D) A velocidade é reduzida pela metade', 'E) A velocidade multiplica por nove'],
                resposta: 0
            },
            {
                enunciado: 'Questão 6: \nQual das seguintes substâncias apresenta isomeria óptica (atividade óptica)?',
                alternativas: ['A) Clorometano', 'B) Ácido lático (contendo carbono assimétrico / quiral)', 'C) Eteno', 'D) Propano', 'E) Ácido acético'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nQual é a variação de entalpia (\u2206H) para a combustão do metano (CH₄ + 2O₂ → CO₂ + 2H₂O), dadas as energias de ligação:\nC-H = 413 kJ/mol; O=O = 495 kJ/mol; C=O = 799 kJ/mol; O-H = 463 kJ/mol?',
                alternativas: ['A) -808 kJ/mol', 'B) -1652 kJ/mol', 'C) +808 kJ/mol', 'D) -2642 kJ/mol', 'E) +1652 kJ/mol'],
                resposta: 0
            },
            {
                enunciado: 'Questão 8: \nQual é o nome do efeito pelo qual a adição de um íon comum a uma solução eletrolítica diminui a solubilidade de um sal POUCO solúvel?',
                alternativas: ['A) Efeito Tyndall', 'B) Efeito Estufa', 'C) Efeito do Íon Comum', 'D) Efeito Fotoelétrico', 'E) Efeito Joule'],
                resposta: 2
            },
            {
                enunciado: 'Questão 9: \nQual dos seguintes compostos orgânicos apresenta isomeria geométrica (cis-trans ou E-Z)?',
                alternativas: ['A) Propano', 'B) 2-metilpropreno', 'C) 2-buteno', 'D) 1-buteno', 'E) Etano'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nSegundo a teoria de Brønsted-Lowry, o que caracteriza uma base?',
                alternativas: ['A) Substância que libera íons H⁺ em água', 'B) Substância que aceita um próton (íon H⁺)', 'C) Substância que doa um par de elétrons', 'D) Substância que libera íons OH⁻', 'E) Substância apolar'],
                resposta: 1
            }
        ]
        this.listaFilosofia1 = [{
                enunciado: `Questão 1: Qual é o significado da palavra Filosofia?\n`,
                alternativas: ["A) Amor à sabedoria", "B) Estudo da natureza", "C) Busca pela riqueza", "D) Amor à ciência", "E) Estudo da religião"],
                resposta: 0
            },
            {
                enunciado: `Questão 2: Quem é considerado um dos primeiros filósofos da Grécia Antiga?\n`,
                alternativas: ["A) Platão", "B) Tales de Mileto", "C) Aristóteles", "D) Sócrates", "E) Epicuro"],
                resposta: 1
            },
            {
                enunciado: `Questão 3: Qual filósofo ficou conhecido pela frase "Só sei que nada sei"?\n`,
                alternativas: ["A) Platão", "B) Aristóteles", "C) Sócrates", "D) Descartes", "E) Kant"],
                resposta: 2
            },
            {
                enunciado: `Questão 4: Qual era uma das principais características do método de Sócrates?\n`,
                alternativas: ["A) A observação dos planetas", "B) A realização de experimentos", "C) A escrita de poemas", "D) O diálogo e os questionamentos", "E) A criação de leis"],
                resposta: 3
            },
            {
                enunciado: `Questão 5: Quem foi o mestre de Aristóteles?\n`,
                alternativas: ["A) Sócrates", "B) Platão", "C) Tales de Mileto", "D) Heráclito", "E) Descartes"],
                resposta: 1
            },
            {
                enunciado: `Questão 6: Qual é um dos principais objetivos da Filosofia?\n`,
                alternativas: ["A) Memorizar informações", "B) Encontrar respostas definitivas para tudo", "C) Evitar questionamentos", "D) Defender apenas opiniões pessoais", "E) Refletir criticamente sobre a realidade"],
                resposta: 4
            },
            {
                enunciado: `Questão 7: Qual filósofo escreveu a obra "A República"?\n`,
                alternativas: ["A) Platão", "B) Sócrates", "C) Aristóteles", "D) Epicuro", "E) René Descartes"],
                resposta: 0
            },
            {
                enunciado: `Questão 8: O que significa ética na Filosofia?\n`,
                alternativas: ["A) Estudo dos números", "B) Estudo dos seres vivos", "C) Reflexão sobre o certo e o errado", "D) Estudo dos astros", "E) Estudo da linguagem"],
                resposta: 2
            },
            {
                enunciado: `Questão 9: Qual filósofo é conhecido pela frase "Penso, logo existo"?\n`,
                alternativas: ["A) Immanuel Kant", "B) Friedrich Nietzsche", "C) Aristóteles", "D) René Descartes", "E) Platão"],
                resposta: 3
            },
            {
                enunciado: `Questão 10: O que é o pensamento crítico?\n`,
                alternativas: ["A) Aceitar todas as informações sem questionar", "B) Analisar informações e questionar ideias", "C) Repetir opiniões de outras pessoas", "D) Evitar debates", "E) Acreditar apenas no que já conhecemos"],
                resposta: 1
            }
        ]
        this.listaFilosofia2 = [{
                enunciado: 'Questão 1: \nQual filósofo grego é famoso pelo método da maiêutica (a "arte de dar à luz" ideias) e pela frase "Só sei que nada sei"?',
                alternativas: ['A) Aristóteles', 'B) Platão', 'C) Sócrates', 'D) Heráclito', 'E) Parmênides'],
                resposta: 2
            },
            {
                enunciado: 'Questão 2: \nNa Teoria das Ideias (ou Formas) de Platão, o mundo sensível é uma cópia imperfeita de qual outro mundo?',
                alternativas: ['A) O mundo material', 'B) O mundo inteligível (das Ideias)', 'C) O mundo subterrâneo', 'D) O mundo caótico', 'E) O mundo natural'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nQual filósofo moderno inaugurou o racionalismo com a célebre frase "Penso, logo existo" (*Cogito, ergo sum*)?',
                alternativas: ['A) John Locke', 'B) David Hume', 'C) René Descartes', 'D) Thomas Hobbes', 'E) Jean-Jacques Rousseau'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nPara o filósofo contratualista Thomas Hobbes, em seu estado de natureza, o ser humano é visto como:',
                alternativas: ['A) Bom por natureza, corrompido pela sociedade', 'B) Um "bom selvagem"', 'C) O lobo do próprio homem (violento e egoísta)', 'D) Um ser puramente racional e cooperativo', 'E) Neutro, sem nenhuma inclinação'],
                resposta: 2
            },
            {
                enunciado: 'Questão 5: \nQual corrente filosófica defende que o conhecimento verdadeiro deriva exclusivamente da experiência sensorial e da observação empírica?',
                alternativas: ['A) Racionalismo', 'B) Empirismo', 'C) Idealismo alemão', 'D) Escolástica', 'E) Existencialismo'],
                resposta: 1
            },
            {
                enunciado: 'Questão 6: \nSegundo Aristóteles, o ser humano é um "animal político" (*zoon politikon*). O que isso significa?',
                alternativas: ['A) Que o homem nasceu para governar os outros', 'B) Que o homem só realiza sua natureza vivendo em sociedade/pólis', 'C) Que a política é uma atividade corrupta', 'D) Que os animais também fazem leis', 'E) Que o homem prefere ficar isolado'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nQual filósofo iluminista francês defendeu a separação dos poderes do Estado em Executivo, Legislativo e Judiciário?',
                alternativas: ['A) Voltaire', 'B) Jean-Jacques Rousseau', 'C) Montesquieu', 'D) Denis Diderot', 'E) Jean-Paul Sartre'],
                resposta: 2
            },
            {
                enunciado: 'Questão 8: \nO conceito de "Mais-Valia", que explica a exploração do trabalhador no sistema capitalista, foi desenvolvido por:',
                alternativas: ['A) Adam Smith', 'B) Karl Marx', 'C) Max Weber', 'D) Émile Durkheim', 'E) Auguste Comte'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nQual escola filosófica helenística defendia que o objetivo da vida humana é alcançar a ataraxia (ausência de paixões/transtornos) através do controle dos prazeres e da dor?',
                alternativas: ['A) Estoicismo', 'B) Cinismo', 'C) Ceticismo', 'D) Epicurismo', 'E) Neoplatonismo'],
                resposta: 3
            },
            {
                enunciado: 'Questão 10: \nO pai da sociologia e fundador do Positivismo, que propôs que a humanidade passa por três estados (teológico, metafísico e positivo), foi:',
                alternativas: ['A) Karl Marx', 'B) Auguste Comte', 'C) Friedrich Nietzsche', 'D) Immanuel Kant', 'E) Thomas Hobbes'],
                resposta: 1
            }
        ]
        this.listaFilosofia3 = [{
                enunciado: 'Questão 1: \nQual é o princípio ético fundamental criado por Immanuel Kant que orienta que devemos agir de modo que nossa máxima possa se tornar uma lei universal?',
                alternativas: ['A) Utilitarismo moral', 'B) Imperativo Categórico', 'C) Ética das virtudes', 'D) Contrato Social', 'E) Moral hedonista'],
                resposta: 1
            },
            {
                enunciado: 'Questão 2: \nNa filosofia de Friedrich Nietzsche, o conceito do "Super-homem" (*Übermensch*) representa:',
                alternativas: ['A) O homem submisso aos valores tradicionais cristãos', 'B) O ser humano capaz de criar seus próprios valores e superar o niilismo', 'C) Um tirano político com poder absoluto', 'D) O estágio científico final da sociedade', 'E) A volta aos deuses da mitologia grega'],
                resposta: 1
            },
            {
                enunciado: 'Questão 3: \nQual filósofo existencialista afirmou que "a existência precede a essência", significando que o ser humano primeiro existe, se depara no mundo e depois se define?',
                alternativas: ['A) Martin Heidegger', 'B) Albert Camus', 'C) Jean-Paul Sartre', 'D) Søren Kierkegaard', 'E) Friedrich Nietzsche'],
                resposta: 2
            },
            {
                enunciado: 'Questão 4: \nA "Escola de Frankfurt", expoente da Teoria Crítica, cunhou o conceito de "Indústria Cultural" para descrever:',
                alternativas: ['A) O incentivo do governo à cultura popular autêntica', 'B) A mercantilização e padronização da cultura produzida em massa para o consumo de massa', 'C) O fim das desigualdades sociais através da arte', 'D) A valorização do folclore regional nas escolas', 'E) O desenvolvimento tecnológico das indústrias'],
                resposta: 1
            },
            {
                enunciado: 'Questão 5: \nQual filósofo contratualista argumentou que a propriedade privada foi a origem de todas as desigualdades sociais e da corrupção do "bom selvagem"?',
                alternativas: ['A) Thomas Hobbes', 'B) John Locke', 'C) Jean-Jacques Rousseau', 'D) Baruch Spinoza', 'E) René Descartes'],
                resposta: 2
            },
            {
                enunciado: 'Questão 6: \nSegundo a teoria ética utilitarista de Jeremy Bentham e John Stuart Mill, uma ação é considerada moralmente correta se:',
                alternativas: ['A) Cumpre o dever formal estabelecido por leis divinas', 'B) Maximiza a felicidade e o bem-estar para o maior número de pessoas', 'C) É motivada exclusivamente pela boa intenção do indivíduo', 'D) Segue rigorosamente a tradição dos antepassados', 'E) Promove o auto sacrifício individual'],
                resposta: 1
            },
            {
                enunciado: 'Questão 7: \nO conceito de "Biopolítica" e a análise de como o poder moderno disciplina e controla os corpos da população foram desenvolvidos por:',
                alternativas: ['A) Michel Foucault', 'B) Jürgen Habermas', 'C) Walter Benjamin', 'D) Hannah Arendt', 'E) Gilles Deleuze'],
                resposta: 0
            },
            {
                enunciado: 'Questão 8: \nEm sua obra "A Condição Humana", qual filósofa analisou os conceitos de labor, trabalho e ação, além de cunhar a expressão "a banalidade do mal"?',
                alternativas: ['A) Simone de Beauvoir', 'B) Hannah Arendt', 'C) Hypatia', 'D) Judith Butler', 'E) Rosa Luxemburgo'],
                resposta: 1
            },
            {
                enunciado: 'Questão 9: \nQual filósofo empirista escocês desafiou a causalidade tradicional ao afirmar que a relação de causa e efeito é apenas um hábito mental baseado na repetição?',
                alternativas: ['A) John Locke', 'B) Francis Bacon', 'C) David Hume', 'D) George Berkeley', 'E) Thomas Hobbes'],
                resposta: 2
            },
            {
                enunciado: 'Questão 10: \nNa filosofia política de Karl Marx, o processo pelo qual o trabalhador se afasta do produto do seu trabalho, da sua própria atividade e da sua humanidade é chamado de:',
                alternativas: ['A) Mais-valia', 'B) Luta de classes', 'C) Alienação (ou Estranhamento)', 'D) Materialismo histórico', 'E) Fetichismo da mercadoria'],
                resposta: 2
            }
        ]
        this.listaMatematicaAdd = [

        ]
        this.listaPortuguesAdd = [

        ]
        this.listaGeografiaAdd = [

        ]
        this.listaHistoriaAdd = [

        ]
        this.listaFisicaAdd = [

        ]
        this.listaQuimicaAdd = [

        ]
        this.listaFilosofiaAdd = [

        ]
    }
    adicionarMatematica() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaMatematicaAdd.push(quest)
    }
    adicionarPortugues() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaPortuguesAdd.push(quest)
    }
    adicionarGeografia() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaGeografiaAdd.push(quest)
    }
    adicionarHistoria() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaHistoriaAdd.push(quest)
    }
    adicionarFisica() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaFisicaAdd.push(quest)
    }
    adicionarQuimica() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaQuimicaAdd.push(quest)
    }
    adicionarFilosofia() {
        let quest = {
            enunciado: "Questão:\n",
            alternativas: [],
            resposta: -1
        }
        quest.enunciado = quest.enunciado + prompt("Digite apenas o enunciado da sua questão")
        let alternativa1 = prompt("Digite a alternativa A da sua questão(modelo: A) (alternativa))")
        let alternativa2 = prompt("Digite a alternativa B da sua questão(modelo: B) (alternativa))")
        let alternativa3 = prompt("Digite a alternativa C da sua questão(modelo: C) (alternativa))")
        let alternativa4 = prompt("Digite a alternativa D da sua questão(modelo: D) (alternativa))")
        let alternativa5 = prompt("Digite a alternativa E da sua questão(modelo: E) (alternativa))")
        quest.alternativas.push(alternativa1)
        quest.alternativas.push(alternativa2)
        quest.alternativas.push(alternativa3)
        quest.alternativas.push(alternativa4)
        quest.alternativas.push(alternativa5)
        quest.resposta = prompt("Digite a resposta da sua questão(A = 0, B = 1, C = 2, D = 3, E = 4)")
        this.listaFilosofiaAdd.push(quest)
    }
}


let jogo = new quiz()
jogo.jogar()