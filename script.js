const materials = [
    { name: 'Steel Beams', company: 'Skanska', price: 2000, savings: 300, impact: 20, location: 'north', type: 'steel' },
    { name: 'Concrete Blocks', company: 'Turner', price: 1500, savings: 200, impact: 15, location: 'south', type: 'concrete' },
    { name: 'Recycled Timber', company: 'Bechtel', price: 1000, savings: 400, impact: 30, location: 'north', type: 'wood' },
    { name: 'Glass Panels', company: 'Skanska', price: 2500, savings: 500, impact: 10, location: 'north', type: 'glass' },
    { name: 'PVC Pipes', company: 'AECOM', price: 800, savings: 100, impact: 25, location: 'south', type: 'plastic' },
    { name: 'Metal Roofing', company: 'Balfour Beatty', price: 3200, savings: 450, impact: 18, location: 'north', type: 'metal' },
    { name: 'Bricks', company: 'Fluor', price: 600, savings: 90, impact: 12, location: 'south', type: 'clay' },
    { name: 'Reinforced Concrete', company: 'PCL', price: 1800, savings: 200, impact: 22, location: 'north', type: 'concrete' },
    { name: 'Aluminum Frames', company: 'Jacobs', price: 2700, savings: 300, impact: 15, location: 'south', type: 'aluminum' },
    { name: 'Asphalt Mix', company: 'Kiewit', price: 1300, savings: 100, impact: 28, location: 'north', type: 'asphalt' },
    { name: 'Insulation Foam', company: 'McCarthy', price: 700, savings: 80, impact: 8, location: 'south', type: 'insulation' },
    { name: 'Ceramic Tiles', company: 'Skanska', price: 1500, savings: 150, impact: 10, location: 'north', type: 'tile' },
    { name: 'Fiberglass Panels', company: 'DPR Construction', price: 2200, savings: 400, impact: 18, location: 'south', type: 'glass' },
    { name: 'Plywood Sheets', company: 'Bechtel', price: 900, savings: 100, impact: 5, location: 'north', type: 'wood' },
    { name: 'Cement Bags', company: 'Turner', price: 400, savings: 50, impact: 9, location: 'south', type: 'cement' },
    { name: 'Plastic Nets', company: 'Fluor', price: 300, savings: 40, impact: 4, location: 'north', type: 'plastic' },
    { name: 'Steel Mesh', company: 'Jacobs', price: 1100, savings: 200, impact: 13, location: 'south', type: 'steel' },
    { name: 'Concrete Pipes', company: 'PCL', price: 1700, savings: 250, impact: 20, location: 'north', type: 'concrete' },
    { name: 'Rubber Flooring', company: 'Kiewit', price: 600, savings: 70, impact: 16, location: 'south', type: 'rubber' },
    { name: 'Timber Beams', company: 'Balfour Beatty', price: 1200, savings: 180, impact: 30, location: 'north', type: 'wood' },
    { name: 'Granite Slabs', company: 'DPR Construction', price: 2000, savings: 300, impact: 7, location: 'south', type: 'stone' },
    { name: 'Copper Wiring', company: 'McCarthy', price: 1400, savings: 160, impact: 19, location: 'north', type: 'metal' },
    { name: 'Recycled Plastic Lumber', company: 'AECOM', price: 500, savings: 60, impact: 6, location: 'south', type: 'plastic' },
    { name: 'Insulated Panels', company: 'Skanska', price: 2300, savings: 350, impact: 12, location: 'north', type: 'insulation' }
];

// Updated Filter Function
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
