function filterMaterials() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value.toLowerCase();
    const priceFilter = document.getElementById('price-filter').value.toLowerCase();

    const materials = document.querySelectorAll('.material');

    materials.forEach(material => {
        const materialName = material.querySelector('h3').textContent.toLowerCase();
        const materialCategory = material.getAttribute('data-category').toLowerCase();
        const materialPrice = material.getAttribute('data-price').toLowerCase();

        const matchesSearch = materialName.includes(searchTerm);
        const matchesCategory = categoryFilter ? materialCategory === categoryFilter : true;
        const matchesPrice = priceFilter ? materialPrice === priceFilter : true;

        if (matchesSearch && matchesCategory && matchesPrice) {
            material.style.display = 'block';
        } else {
            material.style.display = 'none';
        }
    });
}

