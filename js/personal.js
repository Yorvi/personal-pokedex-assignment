class Yorvi {
  constructor() {
    this.pokemon = []
  }
  add(added){
    this.pokemon.push(added)
  }
  all() {
    return this.pokemon
  }
  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name == this.pokemon[i].name) {
        return this.pokemon[i]
      }
    }
  }
}

// I create a class called pokemon and store its id#, name, hp, attack, defense, and abilities to be filled in later.
class Pokemon {
  constructor(index, name, hp, attack, defense, abilities) {
    this.index = index;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

axios.get("https://pokeapi.co/api/v2/pokemon/59/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn1");

  let arcanine = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/65/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn2");

  let alakazam = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/143/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn3");

  let snorlax = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/145/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn4");

  let zapdos = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/149/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn5");

  let dragonite = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/3/").then((response) => {

  let data = response.data

  let pkmnImg = document.getElementById("my-pkmn6");

  let venusaur = new Pokemon(
    data.id,
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,

    data.moves[0].move.name,
    data.moves[1].move.name,
    data.moves[2].move.name,
    data.moves[7].move.name,
  )

  pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";

}).catch((error) => {
  console.log(error)
})











// // Axios gets the source of the info im trying to relay onto my page.
// axios.get("https://pokeapi.co/api/v2/pokemon/121/").then((response) => {

//   // Im grabbing a bunch of tags by an id or class that I want to fill with the info from the API.
//   let data = response.data

//   let index = document.querySelector("#id3")
//   let name = document.querySelector("#name3")
//   let hp = document.querySelector("#hp3")
//   let attack = document.querySelector("#attack3")
//   let defense = document.querySelector("#defense3")
//   let abl1 = document.querySelector(".abl1")
//   let abl2 = document.querySelector(".abl2")
//   let abl3 = document.querySelector(".abl3")
//   let abl4 = document.querySelector(".abl4")

//   // Here I ceate a new pokemon to fill in the info in the class Pokemon with API info.
//   let starmie = new Pokemon(
//     // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//     data.id,
//     data.name,
//     data.stats[5].base_stat,
//     data.stats[4].base_stat,
//     data.stats[3].base_stat,
//     data.abilities[0].ability.name,
//     data.abilities[1].ability.name,
//     data.abilities[2].ability.name,
//     data.moves[3].move.name,
//   )

//   // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//   index.innerHTML = "#" + data.id
//   name.innerHTML = data.name
//   hp.innerHTML = "HP: " + data.stats[5].base_stat
//   attack.innerHTML = "ATK: " + data.stats[4].base_stat
//   defense.innerHTML = "DEF: " + data.stats[3].base_stat
//   abl1.innerHTML = data.abilities[0].ability.name
//   abl2.innerHTML = data.abilities[1].ability.name
//   abl3.innerHTML = data.abilities[2].ability.name
//   abl4.innerHTML = data.moves[3].move.name

// }).catch((error) => {
//   console.log(error)
// })
