const apiUrlName = "https://www.themealdb.com/api/json/v1/1/search.php?s"
async function namesList(endpoint) {
    try {
        // Realiza la solicitud HTTP al endpoint proporcionado
        const response = await axios.get(endpoint);

        // Accede a la lista de categorías en los datos
        const meals = response.data.meals;

        // Array para almacenar las categorías
        const names = [];

        // Itera sobre la lista de comidas y agrega cada categoría al array
        meals.forEach(meal => {
            names.push(meal.strMeal);
        });

        // Devuelve el array de categorías
        return names;
    } catch (error) {
        // Manejo de errores
        console.error("Hubo un error al obtener los datos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}

(async () => {
    const names = await namesList(apiUrlName);
    console.log(names);
})();