//funcion que busca el nombre del plato en el arreglo
async function searchByName(endpoint) {
    try {
        const response = await axios.get(endpoint);
        const data = response.data;
        const array = data.meals;
        const nombrePlato = array[0].strMeal
        const foodName = document.querySelector('.nombrePlato');
        foodName.textContent = nombrePlato;
        return nombrePlato;
    } catch (error) {
        console.error(`fallo la peticion: ${error}`);
    }
}

//funcion que busca los ingredientes en el arreglo
async function searchByIngredients(endpoint) {
    try {
        let cont = 0;
        const response = await axios.get(endpoint);
        const data = response.data;
        const meal = data.meals[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const medida = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== "") {
                cont++;
                ingredients.push(`${ingredient}`);
                const listaIngredientes = document.querySelector('.listaIngredientes');
                const contentIngredient = document.createElement("li")
                contentIngredient.setAttribute("class", "ingrediente")
                contentIngredient.innerHTML = `<p>${cont}) ${medida} ${ingredient}</p>`
                listaIngredientes.appendChild(contentIngredient);
            }
        }
        return ingredients;
    } catch (error) {
        console.error(`fallo la peticion: ${error}`);
    }
}

//funcion que busca la receta en el arreglo
async function searchByRecipe(endpoint) {
    try {
        const response = await axios.get(endpoint);
        const data = response.data;
        const array = data.meals;
        const recipe = array[0].strInstructions;
        const instruction = document.querySelector('.pasoReceta');
        instruction.style.whiteSpace = 'pre-line';
        instruction.textContent = recipe;
        return recipe;
    } catch (error) {
        console.error(`fallo la peticion: ${error}`);
    }
}

async function searchByImage(endpoint) {
    try {
        const logoContainer = document.querySelector('.logoContainer');
        const response = await axios.get(endpoint);
        const data = response.data;
        const array = data.meals;
        const imageUrl = array[0].strMealThumb;
        const imageContainer = document.createElement("img")
        imageContainer.setAttribute("class", "imagenReferencia");
        imageContainer.setAttribute("src", imageUrl);
        logoContainer.appendChild(imageContainer);
        console.log(imageUrl)
        return imageUrl;
    } catch (error) {
        console.error(`fallo la peticion: ${error}`);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    // Obtener el nombre de la comida de los parámetros de la URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nombreComida = urlParams.get('comida');

    // Construir la URL de la API con el nombre de la comida
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nombreComida}`;

    await searchByName(apiUrl);
    await searchByIngredients(apiUrl);
    await searchByRecipe(apiUrl);
    await searchByImage(apiUrl);
});