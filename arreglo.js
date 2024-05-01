const main = document.querySelector("main");

async function searchNameImage(arreglo) {
    try {
        const tarjetBox = document.createElement("div");
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer")
        tarjetBox.setAttribute("class", "tarjetBox"); // Añadir clase tarjetBox al contenedor principal
        document.body.appendChild(tarjetBox); // Añadir el contenedor principal al cuerpo del documento

        let row; // Variable para almacenar la fila actual
        // Itera hasta el límite máximo o la longitud del arreglo, lo que ocurra primero
        for (let cont = 0; cont < arreglo.length && cont < 18; cont++) {
            if (cont % 6 === 0) {
                row = document.createElement("div");
                row.setAttribute("class", "row");
                tarjetBox.appendChild(row);
            }

            const tarjetContainer = document.createElement("a");
            tarjetContainer.setAttribute("class", "tarjetContainer");
            tarjetContainer.setAttribute("href", `informacion.html?comida=${encodeURIComponent(arreglo[cont][0])}`)
            const tarjetName = document.createElement("h2");
            tarjetName.setAttribute("class", "tarjetName");
            tarjetName.textContent = arreglo[cont][0];
            const imageContainer = document.createElement("div");
            imageContainer.setAttribute("class", "imageContainer");
            const image = document.createElement("img");
            image.setAttribute("src", arreglo[cont][1]);
            image.setAttribute("class", "tarjetImage");
            imageContainer.appendChild(image);
            tarjetContainer.appendChild(imageContainer);
            tarjetContainer.appendChild(tarjetName);
            row.appendChild(tarjetContainer);
            rowContainer.appendChild(row)
            main.appendChild(rowContainer)
        }
    } catch (error) {
        console.error("Hubo un error:", error);
        return [];
    }
}

async function arregloList(typeSearch, num) {
    try {
        let apiUrlArray;
        if (num === 0) {
            apiUrlArray = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeSearch}`;
        } else if (num === 1) {
            apiUrlArray = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${typeSearch}`;
        } else if (num === 2) {
            apiUrlArray = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${typeSearch}`;
        }
        const response = await axios.get(apiUrlArray);
        const meals = response.data.meals;
        const array = [];

        meals.forEach(meal => {
            const nameImage = [];
            nameImage.push(meal.strMeal);
            nameImage.push(meal.strMealThumb);
            array.push(nameImage);
        });
        return array;
    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoriaComida = urlParams.get('categoria');
    const ingredienteComida = urlParams.get('ingrediente');
    const areaComida = urlParams.get('area');
    if (categoriaComida != null) {
        const arreglo = await arregloList(categoriaComida, 0)
        await searchNameImage(arreglo);
    } else if (ingredienteComida != null) {
        const arreglo = await arregloList(ingredienteComida, 1)
        await searchNameImage(arreglo);
    } else if (areaComida != null) {
        const arreglo = await arregloList(areaComida, 2)
        await searchNameImage(arreglo);
    }
});