
    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');

    function toggleLogos() {
        logo1.style.display = logo1.style.display === 'none' ? 'block' : 'none';
        logo2.style.display = logo2.style.display === 'none' ? 'block' : 'none';
    }

    // Initial toggle to show the second logo first
    toggleLogos();

    // Set the interval for the logo switching (e.g., every 3 seconds)
    setInterval(toggleLogos, 3000); 
