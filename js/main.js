let input = document.getElementById("search-input");
let button = document.getElementById("button");
let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let apiUrlReset = "https://pokeapi.co/api/v2/pokemon/";

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("button").click();
  }
});


function callApi() {
  axios.get(apiUrl).then(response => {
    let data = response.data;
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let pkmnWeight = data.weight * 2.2046;
    let pkmnTypes = data.types;
    let pkmnDataType = "";
    let i;

    let name = document.getElementById("pkmn-name");
    let index = document.getElementById("pkmn-id");
    let pkmnImg = document.getElementById("pkmn-sprite");
    let height = document.getElementById("pkmn-height");
    let weight = document.getElementById("pkmn-weight");
    let types = document.getElementById("pkmn-type");
    let abl1 = document.getElementById("abl1");
    let abl2 = document.getElementById("abl2");
    let abl3 = document.getElementById("abl3");
    let abl4 = document.getElementById("abl4");

    if (0 < data.id && data.id < 10) {
      index.innerHTML = "#00" + data.id;
    } if (9 < data.id && data.id < 100) {
      index.innerHTML = "#0" + data.id;
    } if (99 < data.id) {
      index.innerHTML = "#" + data.id;
    };

    for (let i = 0; i < pkmnTypes.length; i++) {
      pkmnDataType += pkmnTypes[i].type.name.charAt(0).toUpperCase() + pkmnTypes[i].type.name.slice(1) + ", ";
    };

    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' id='pkmn-img'>";
    height.innerHTML = "<strong>Height:</strong> " + Math.floor(feet) + "ft " + Math.floor(Math.floor(inch) / 10) + "in";
    weight.innerHTML = "<strong>Weight:</strong> " + Math.floor(pkmnWeight) / 10 + " lbs";
    types.innerHTML = "<strong>Type(s):</strong> " + pkmnDataType.slice(0, -2);
    abl1.innerHTML = data.moves[3].move.name.charAt(0).toUpperCase() + data.moves[3].move.name.slice(1);
    abl2.innerHTML = data.moves[2].move.name.charAt(0).toUpperCase() + data.moves[2].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name.charAt(0).toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[6].move.name.charAt(0).toUpperCase() + data.moves[6].move.name.slice(1);

  }).catch(error => {
    console.log(error);
  });
}

button.addEventListener("click", () => {
  input = document.getElementById("search-input").value;
  apiUrl = apiUrl + input;
  callApi();
  apiUrl = apiUrlReset;
});
