const apiUrlCategory = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
async function categoryList(endpoint) {
    try {
        // Realiza la solicitud HTTP al endpoint proporcionado
        const response = await axios.get(endpoint);

        // Accede a la lista de categorías en los datos
        const meals = response.data.meals;

        // Array para almacenar las categorías
        const categories = [];

        // Itera sobre la lista de comidas y agrega cada categoría al array
        meals.forEach(meal => {
            categories.push(meal.strCategory);
        });

        // Devuelve el array de categorías
        return categories;
    } catch (error) {
        // Manejo de errores
        console.error("Hubo un error al obtener los datos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}

(async () => {
    const categorias = await categoryList(apiUrlCategory);
    console.log(categorias);
})();