document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filter = document.getElementById('filter').value;
    const results = document.getElementById('results');

    // Placeholder data for demo purposes
    const materials = [
        { name: 'Steel Beams', type: 'steel' },
        { name: 'Concrete Blocks', type: 'concrete' },
        { name: 'Recycled Timber', type: 'timber' },
        { name: 'Glass Panels', type: 'glass' },
        { name: 'Aluminum Sheets', type: 'aluminum' }
    ];

    const filteredResults = materials.filter(material =>
        (filter === 'all' || material.type === filter) &&
        material.name.toLowerCase().includes(query)
    );

    results.innerHTML = filteredResults.length
        ? filteredResults.map(item => `<p>${item.name} (${item.type})</p>`).join('')
        : '<p>No results found.</p>';
});
