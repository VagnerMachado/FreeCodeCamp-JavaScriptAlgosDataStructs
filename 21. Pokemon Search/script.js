document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("pokemon-name").innerText =
        data.name.toUpperCase();
      document.getElementById("pokemon-id").innerText = `#${data.id}`;
      document.getElementById("weight").innerText = `Weight: ${data.weight}`;
      document.getElementById("height").innerText = `Height: ${data.height}`;
      document.getElementById("hp").innerText = `${data.stats[0].base_stat}`;
      document.getElementById(
        "attack"
      ).innerText = `${data.stats[1].base_stat}`;
      document.getElementById(
        "defense"
      ).innerText = `${data.stats[2].base_stat}`;
      document.getElementById(
        "special-attack"
      ).innerText = `${data.stats[3].base_stat}`;
      document.getElementById(
        "special-defense"
      ).innerText = `${data.stats[4].base_stat}`;
      document.getElementById("speed").innerText = `${data.stats[5].base_stat}`;
    })
    .catch((error) => {
      alert(error.message);
    });
});
