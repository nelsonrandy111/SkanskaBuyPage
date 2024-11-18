// Mock material data
const materials = [
    { name: 'Steel Beams', company: 'Skanska', price: '$2000', savings: '$300', impact: '20%' },
    { name: 'Concrete Blocks', company: 'Turner Construction', price: '$1500', savings: '$200', impact: '15%' },
    { name: 'Recycled Timber', company: 'Bechtel', price: '$1000', savings: '$400', impact: '30%' },
    { name: 'Glass Panels', company: 'Skanska', price: '$2500', savings: '$500', impact: '10%' },
    { name: 'Aluminum Sheets', company: 'Fluor', price: '$1800', savings: '$350', impact: '25%' },
    { name: 'Roof Tiles', company: 'Skanska', price: '$1300', savings: '$200', impact: '15%' },
    { name: 'PVC Pipes', company: 'Jacobs', price: '$900', savings: '$150', impact: '20%' },
    { name: 'Insulation Foam', company: 'AECOM', price: '$2200', savings: '$450', impact: '40%' }
];

// Function to populate the material list
function populateMaterialList(materials) {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = ''; // Clear any existing entries

    materials.forEach((material, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Material:</strong> ${material.name} <br>
            <strong>Company:</strong> ${material.company} <br>
            <strong>Price:</strong> ${material.price} <br>
            <strong>Savings:</strong> ${material.savings} <br>
            <div class="impact">
                <span class="leaf">🌿</span> 
                <strong>Estimated Relative CO2 Emissions:</strong> 
                <span class="arrow">↓</span> 
                <span class="percent">${material.impact}</span>
            </div>
            <a class="details-link">Details</a>
        `;

        // Add hover effect
        li.addEventListener('mouseover', () => {
            li.style.backgroundColor = "#d1f7d1"; // Highlight
        });

        li.addEventListener('mouseout', () => {
            li.style.backgroundColor = ""; // Reset
        });

        materialList.appendChild(li);
    });
}

// Functionality for the search bar (non-functional search simulation)
function setupSearchBar() {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredMaterials = materials.filter(material =>
            material.name.toLowerCase().includes(query) ||
            material.company.toLowerCase().includes(query)
        );

        populateMaterialList(filteredMaterials);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateMaterialList(materials); // Load initial materials
    setupSearchBar(); // Setup search interactivity
});

