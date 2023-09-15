function loadApi(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText))
            document.getElementById("name").innerHTML =
                JSON.parse(this.responseText).name;
        }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id);
    xhttp.send();
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("pokemon").value;
    console.log(id);
    loadApi(id)
});

//-----------------------------------------------

const loadApiPais = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/brazil");
    if (response.status === 200) {
        const data = await response.json();
        document.getElementById("nomePais").innerHTML =
            data[0].name.nativeName.por.official + "<br>" + data[0].capital;
        document.getElementById("flag").src = data[0].flags.png;
    }
}

document.getElementById("apiPaisButton").addEventListener("click", loadApiPais);

