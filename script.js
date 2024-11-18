const materials = [
    { name: 'Steel Beams', company: 'Skanska', price: 2000, savings: 300, impact: 20, location: 'brooklyn', type: 'steel' },
    { name: 'Concrete Blocks', company: 'Turner', price: 1500, savings: 200, impact: 15, location: 'manhattan', type: 'concrete' },
    { name: 'Recycled Timber', company: 'Bechtel', price: 1000, savings: 400, impact: 30, location: 'brooklyn', type: 'wood' },
    { name: 'Glass Panels', company: 'Skanska', price: 2500, savings: 500, impact: 10, location: 'brooklyn', type: 'glass' },
    { name: 'PVC Pipes', company: 'AECOM', price: 800, savings: 100, impact: 25, location: 'manhattan', type: 'plastic' },
    { name: 'Metal Roofing', company: 'Balfour Beatty', price: 3200, savings: 450, impact: 18, location: 'brooklyn', type: 'metal' },
    { name: 'Bricks', company: 'Fluor', price: 600, savings: 90, impact: 12, location: 'manhattan', type: 'clay' },
    { name: 'Reinforced Concrete', company: 'PCL', price: 1800, savings: 200, impact: 22, location: 'brooklyn', type: 'concrete' },
    { name: 'Aluminum Frames', company: 'Jacobs', price: 2700, savings: 300, impact: 15, location: 'manhattan', type: 'aluminum' },
    { name: 'Asphalt Mix', company: 'Kiewit', price: 1300, savings: 100, impact: 28, location: 'brooklyn', type: 'asphalt' },
    { name: 'Insulation Foam', company: 'McCarthy', price: 700, savings: 80, impact: 8, location: 'manhattan', type: 'insulation' },
    { name: 'Ceramic Tiles', company: 'Skanska', price: 1500, savings: 150, impact: 10, location: 'brooklyn', type: 'tile' },
    { name: 'Fiberglass Panels', company: 'DPR Construction', price: 2200, savings: 400, impact: 18, location: 'manhattan', type: 'glass' },
    { name: 'Plywood Sheets', company: 'Bechtel', price: 900, savings: 100, impact: 5, location: 'brooklyn', type: 'wood' },
    { name: 'Cement Bags', company: 'Turner', price: 400, savings: 50, impact: 9, location: 'manhattan', type: 'cement' },
    { name: 'Plastic Nets', company: 'Fluor', price: 300, savings: 40, impact: 4, location: 'brooklyn', type: 'plastic' },
    { name: 'Steel Mesh', company: 'Jacobs', price: 1100, savings: 200, impact: 13, location: 'manhattan', type: 'steel' },
    { name: 'Concrete Pipes', company: 'PCL', price: 1700, savings: 250, impact: 20, location: 'brooklyn', type: 'concrete' },
    { name: 'Rubber Flooring', company: 'Kiewit', price: 600, savings: 70, impact: 16, location: 'manhattan', type: 'rubber' },
    { name: 'Timber Beams', company: 'Balfour Beatty', price: 1200, savings: 180, impact: 30, location: 'brooklyn', type: 'wood' },
    { name: 'Granite Slabs', company: 'DPR Construction', price: 2000, savings: 300, impact: 7, location: 'manhattan', type: 'stone' },
    { name: 'Copper Wiring', company: 'McCarthy', price: 1400, savings: 160, impact: 19, location: 'brooklyn', type: 'metal' },
    { name: 'Recycled Plastic Lumber', company: 'AECOM', price: 500, savings: 60, impact: 6, location: 'manhattan', type: 'plastic' },
    { name: 'Insulated Panels', company: 'Skanska', price: 2300, savings: 350, impact: 12, location: 'brooklyn', type: 'insulation' }
];

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

function handleSearchInput(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredMaterials = materials.filter(material => {
        return (
            material.name.toLowerCase().includes(searchText) ||
            material.company.toLowerCase().includes(searchText) ||
            material.location.toLowerCase().includes(searchText)
        );
    });
    populateMaterialList(filteredMaterials);
}

document.getElementById('apply-filters').addEventListener('click', applyFilters);
document.getElementById('search-bar').addEventListener('input', handleSearchInput);

function populateMaterialList(materials) {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = ''; 
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

document.addEventListener('DOMContentLoaded', () => {
    populateMaterialList(materials);
});

