const materials = [
    { name: 'Steel Beams', company: 'Skanska', price: 2000, savings: 300, impact: 20, location: 'north', type: 'steel' },
    { name: 'Concrete Blocks', company: 'Turner', price: 1500, savings: 200, impact: 15, location: 'south', type: 'concrete' },
    { name: 'Recycled Timber', company: 'Bechtel', price: 1000, savings: 400, impact: 30, location: 'north', type: 'wood' },
    { name: 'Glass Panels', company: 'Skanska', price: 2500, savings: 500, impact: 10, location: 'north', type: 'glass' }
];

// Filter Materials based on applied filters
function applyFilters() {
    const locationFilter = document.getElementById('location').value;
    const typeFilter = document.getElementById('material-type').value;
    const maxCost = document.getElementById('cost').value;
    const maxImpact = document.getElementById('impact').value;

    const filteredMaterials = materials.filter(material => {
        return (!locationFilter || material.location === locationFilter) &&
            (!typeFilter || material.type === typeFilter) &&
            (!maxCost || material.price <= maxCost) &&
            (!maxImpact || material.impact <= maxImpact);
    });

    populateMaterialList(filteredMaterials);
}

document.getElementById('apply-filters').addEventListener('click', applyFilters);

function populateMaterialList(materials) {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = ''; 
    materials.forEach((material) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Material:</strong> ${material.name} <br>
            <strong>Company:</strong> ${material.company} <br>
            <strong>Price:</strong> $${material.price} <br>
            <strong>Environmental Impact:</strong> ${material.impact}% <br>
        `;
        materialList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateMaterialList(materials);
});
