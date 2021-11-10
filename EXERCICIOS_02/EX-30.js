const mediaDasNotas = objeto => {
    let values = Object.values(objeto)
    let names = Object.keys(objeto)
    
    let medias = values.map(function(valor){
        let media = 0
        for(let i = 0; i < valor.length; i++){
            media += valor[i] / valor.length
        }
        return media
    })
    
    let notaMaior = 0
    let indice = 0
    
    for(let i = 0; i < medias.length; i++){
        if(notaMaior < medias[i]){
            indice = i
            notaMaior = medias[i]
        }
    }

    let melhorAluno = {nome: names[indice], media: notaMaior}
    
    return console.log(melhorAluno)
}


mediaDasNotas({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }