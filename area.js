const apiUrlArea = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
async function areaList(endpoint) {
    try {
        // Realiza la solicitud HTTP al endpoint proporcionado
        const response = await axios.get(endpoint);

        // Accede a la lista de categorías en los datos
        const meals = response.data.meals;

        // Array para almacenar las categorías
        const areas = [];

        // Itera sobre la lista de comidas y agrega cada categoría al array
        meals.forEach(meal => {
            areas.push(meal.strArea);
        });

        // Devuelve el array de categorías
        return areas;
    } catch (error) {
        // Manejo de errores
        console.error("Hubo un error al obtener los datos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}

(async () => {
    const areas = await areaList(apiUrlArea);
    console.log(areas);
})();