const apiUrlIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
async function ingredientList(endpoint) {
    try {
        const response = await axios.get(endpoint);
        const meals = response.data.meals;
        const ingredientes = [];

        meals.forEach(meal => {
            ingredientes.push(meal.strIngredient);
        });

        return ingredientes;
    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
        return [];
    }
}

(async () => {
    const ingrediente = await ingredientList(apiUrlIngredients);
    console.log(ingrediente);
})();