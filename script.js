
function fazerConta(vitorias, derrotas) {
        vitorias = document.getElementById('vitorias')
        derrotas = document.getElementById('derrotas')
        let somatorio = (vitorias.value) - (derrotas.value)
        
        let nomeDigitado = document.getElementById('nomeJogador')
                                        
        let nivel = somatorio

        let res = document.querySelector('div#res')
                
               
if (nivel <= 10) {
    
        nivel = "Ferro"
                               
} else if (nivel >= 11 && nivel <= 20) {

        nivel = "Bronze"
        
} else if (nivel >= 21 && nivel <= 50) {

        nivel = "Prata"
               
} else if (nivel >= 51 && nivel <= 80) {

        nivel = "Ouro"
          
} else if (nivel >= 81 && nivel <= 90) {

        nivel = "Diamante"
      
} else if (nivel >= 91  && nivel <= 100) {

        nivel = "Lendário"
         
} else if (nivel >= 101) {

        nivel = "Imortal"
          
} else {
        res.innerHTML = `<strong>Sem classificação !</strong>.`
        
}       
        
res.innerHTML = `O ${nomeDigitado.value} tem de saldo de ${somatorio} está no nível de <strong>${nivel}</strong>.`

} 

