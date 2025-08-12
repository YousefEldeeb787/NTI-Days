document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    
    // Validate inputs (additional validation can be added here)
    if (!name || !description || !category) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create an object with the form data
    const formData = {
        name: name,
        description: description,
        category: category
    };
    
    // Display the form data (you could also send it to a server here)
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Description:</strong> ${formData.description}</p>
        <p><strong>Category:</strong> ${formData.category}</p>
    `;
    
    // Reset the form (optional)
    this.reset();
});

// Additional feature: Character counter for description
document.getElementById('description').addEventListener('input', function() {
    const charCount = this.value.length;
    const counter = document.getElementById('charCounter') || document.createElement('div');
    counter.id = 'charCounter';
    counter.textContent = `${charCount} characters`;
    
    if (!document.getElementById('charCounter')) {
        this.parentNode.appendChild(counter);
    }
});