
const { createApp } = Vue;

createApp({
  data(){
    return {
      activeIndex: null,
      pokemons: [
        {
          "height": 4,
          "id": 25,
          "name": "pikachu",
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          "stats": [
            {
              "base_stat": 35,
              "effort": 0,
              "name": "hp"
            },
            {
              "base_stat": 55,
              "effort": 0,
              "name": "attack"
            },
            {
              "base_stat": 40,
              "effort": 0,
              "name": "defense"
            },
            {
              "base_stat": 50,
              "effort": 0,
              "name": "special-attack"
            },
            {
              "base_stat": 50,
              "effort": 0,
              "name": "special-defense"
            },
            {
              "base_stat": 90,
              "effort": 2,
              "name": "speed"
            }
          ],
          "weight": 60
        },
        {
          "height": 7,
          "id": 1,
          "name": "bulbasaur",
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          },
          "stats": [
            {
              "base_stat": 45,
              "effort": 0,
              "name": "hp"
            },
            {
              "base_stat": 49,
              "effort": 0,
              "name": "attack"
            },
            {
              "base_stat": 49,
              "effort": 0,
              "name": "defense"
            },
            {
              "base_stat": 65,
              "effort": 0,
              "name": "special-attack"
            },
            {
              "base_stat": 65,
              "effort": 0,
              "name": "special-defense"
            },
            {
              "base_stat": 45,
              "effort": 0,
              "name": "speed"
            }
          ],
          "weight": 69
        },
        {
          "height": 5,
          "id": 7,
          "name": "squirtle",
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          },
          "stats": [
            {
              "base_stat": 44,
              "effort": 0,
              "name": "hp"
            },
            {
              "base_stat": 48,
              "effort": 0,
              "name": "attack"
            },
            {
              "base_stat": 65,
              "effort": 0,
              "name": "defense"
            },
            {
              "base_stat": 50,
              "effort": 0,
              "name": "special-attack"
            },
            {
              "base_stat": 64,
              "effort": 0,
              "name": "special-defense"
            },
            {
              "base_stat": 43,
              "effort": 0,
              "name": "speed"
            }
          ],
          "weight": 90
        },
        {
          "name": "charmander",
          "height": 6,
          "id": 4,
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          },
          "stats": [
            {
              "base_stat": 39,
              "effort": 0,
              "name": "hp",
              
            },
            {
              "base_stat": 52,
              "effort": 0,
              "name": "attack",
              
            },
            {
              "base_stat": 43,
              "effort": 0,
              "name": "defense",
              
            },
            {
              "base_stat": 60,
              "effort": 0,
              "name": "special-attack",
              
            },
            {
              "base_stat": 50,
              "effort": 0,
              "name": "special-defense",
              
            },
            {
              "base_stat": 65,
              "effort": 1,
              "name": "speed",
            }]
        }
      ],
      moves: ['pound',
       'karate-chop',
       'double-slap',
       'comet-punch',
       'mega-punch',
       'pay-day',
       'fire-punch',
       'ice-punch',
       'thunder-punch',
       'scratch',
       'vice-grip',
       'guillotine',
       'razor-wind',
       'swords-dance',
       'cut',
       'gust',
       'wing-attack',
       'whirlwind',
       'fly',
       'bind'],
       generatedPokemon : null
    }
  },

  methods: {
    showPokemon(index){
      console.log(index)
      this.activeIndex = index
    },
    makePikachu(){
      this.search = 'pikahcu'
    },
    generatePokemon(){
      const newPokemon = {...this.pokemons[this.activeIndex]}
      
      //creiamo un nuovo array per le stats, grazie alla funzione .map
      // all'interno del map creiamo un nuovo oggtto che rappresenta la statistica, scollegato
      // dall'oggetto proxy, e modifichiamo solo il valore della statistica di base.
      // restituiamo poi l'oggetto così creato come elemento dell'array
      // in modo da non avere più il collegamento con le statistiche dell'oggetto originario
      newPokemon.stats = newPokemon.stats.map((stat)=>{
        const newStat = {
          ...stat,
          base_stat: this.getRandom(0,255)
        }
        return newStat
      })

      
      newPokemon.moves = []
      for(let i = 0; i <= 3; i++){
        const index = this.getRandom(0,this.moves.length -1);
        newPokemon.moves.push(this.moves[index])
      }
      
      
      this.generatedPokemon = newPokemon;

    },
    getRandom(min,max){
      const random = Math.floor(Math.random() * (max - min + 1) + min)
      return random
    }    



  },




}).mount('#app')

