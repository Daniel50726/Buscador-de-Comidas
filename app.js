function realizarBusquedaPorNombre() {
    const nombrePlato = document.getElementById('searchInput').value;
    window.location.href = `informacion.html?comida=${encodeURIComponent(nombrePlato)}`;
}

function realizarBusquedaPorCategoria() {
    const categoriaPlato = document.getElementById('searchInput').value;
    window.location.href = `galeria.html?categoria=${encodeURIComponent(categoriaPlato)}`;
}

function realizarBusquedaPorIngrediente() {
    const ingredientePlato = document.getElementById('searchInput').value;
    window.location.href = `galeria.html?ingrediente=${encodeURIComponent(ingredientePlato)}`;
}

function realizarBusquedaPorArea() {
    const areaPlato = document.getElementById('searchInput').value;
    window.location.href = `galeria.html?area=${encodeURIComponent(areaPlato)}`;
}

function changePlaceholderAndFunction(opcionSeleccionada) {
    const searchInput = document.getElementById('searchInput');
    // Cambiar el placeholder del input
    searchInput.placeholder = `Buscar por ${opcionSeleccionada}`;
    const dropButton = document.querySelector('.dropButton');
    dropButton.textContent = `Buscar por ${opcionSeleccionada}`;

    if (opcionSeleccionada === 'Nombre del Plato') {
        // Cambiar la función onclick del botón de búsqueda
        document.querySelector('.searchButton').onclick = realizarBusquedaPorNombre;
    } else if (opcionSeleccionada === 'Categoría') {
        document.querySelector('.searchButton').onclick = realizarBusquedaPorCategoria;
    } else if (opcionSeleccionada === 'Ingrediente Principal') {
        document.querySelector('.searchButton').onclick = realizarBusquedaPorIngrediente;
    } else if (opcionSeleccionada === 'Área') {
        document.querySelector('.searchButton').onclick = realizarBusquedaPorArea;
    } else {
        // Restaurar la función original onclick del botón de búsqueda
        document.querySelector('.searchButton').onclick = function () {
            alert('Opción de búsqueda no implementada');
        }
    }
}
