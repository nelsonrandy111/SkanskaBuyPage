// Function to populate the material list
function populateMaterialList(materials) {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = ''; // Clear previous entries

    materials.forEach((material) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Material:</strong> ${material.name} <br>
            <strong>Company:</strong> ${material.company} <br>
            <strong>Location:</strong> ${material.location} <br>
            <strong>Price:</strong> $${material.price} <br>
            <strong>Environmental Impact:</strong> ${material.impact}% <br>
        `;
        materialList.appendChild(li);
    });
}

// Apply filters based on user input
function applyFilters() {
    const locationFilter = document.getElementById('location').value;
    const typeFilter = document.getElementById('material-type').value;
    const maxCost = document.getElementById('cost').value;
    const minImpact = document.getElementById('impact').value;

    const filteredMaterials = materials.filter(material => {
        return (!locationFilter || material.location === locationFilter) &&
            (!typeFilter || material.type === typeFilter) &&
            (!maxCost || material.price <= maxCost) &&
            (!minImpact || material.impact >= minImpact);
    });

    populateMaterialList(filteredMaterials);
}

document.getElementById('apply-filters').addEventListener('click', applyFilters);

// Initial population
document.addEventListener('DOMContentLoaded', () => {
    populateMaterialList(materials);
});
