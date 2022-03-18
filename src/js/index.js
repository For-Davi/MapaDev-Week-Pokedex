const listaSelecaoPokemons = document.querySelectorAll('.pokemom')
const pokemonsCard = document.querySelectorAll('.cartao-pokemom')

listaSelecaoPokemons.forEach(pokemom => {pokemom.addEventListener('click',() =>

    {
        const CartaoPokemomAberto = document.querySelector('.aberto')
        CartaoPokemomAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemom.attributes.id.value

        const IdCartaoPokemomParaAbrir = 'cartao-' + idPokemonSelecionado
        const  CartaoPokemomParaAbrir = document.getElementById(IdCartaoPokemomParaAbrir)
        CartaoPokemomParaAbrir.classList.add('aberto')

        const PokemomAtivoNaListagem = document.querySelector('.ativo')
        PokemomAtivoNaListagem.classList.remove('ativo')

        const PokemomSelecionadoNaListagem = document.getElementById( idPokemonSelecionado)
        PokemomSelecionadoNaListagem.classList.add('ativo')
    }) 

})

