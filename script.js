// Selecting elements
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Function to close the mobile menu
function closeMenu() {
    mobileMenu.classList.add('hidden');  // Hide the menu
    overlay.classList.add('hidden');    // Hide the overlay
}

// Optional: You can trigger the mobile menu to open with a menu button (assumed to exist)
// Assuming there is a menu button with the id "menu-button" that toggles the mobile menu
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');  // Toggle the menu visibility
    overlay.classList.toggle('hidden');    // Toggle the overlay visibility
});

// Close the mobile menu if the overlay is clicked
overlay.addEventListener('click', () => {
    closeMenu();  // Close the menu when the overlay is clicked
});




function showDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Project 1",
            description: "Detailed description of Project 1",
            image: "https://via.placeholder.com/600"
        },
        project2: {
            title: "Project 2",
            description: "Detailed description of Project 2",
            image: "https://via.placeholder.com/600"
        },
        project3: {
            title: "Project 3",
            description: "Detailed description of Project 3",
            image: "https://via.placeholder.com/600"
        },
        project4: {
            title: "Project 4",
            description: "Detailed description of Project 4",
            image: "https://via.placeholder.com/600"
        },
        project5: {
            title: "Project 5",
            description: "Detailed description of Project 5",
            image: "https://via.placeholder.com/600"
        },
        project6: {
            title: "Project 6",
            description: "Detailed description of Project 6",
            image: "https://via.placeholder.com/600"
        }
    };

    const details = projectDetails[projectId];
    document.getElementById("project-details").innerHTML = `
        <h2>${details.title}</h2>
        <img src="${details.image}" alt="${details.title}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
        <p>${details.description}</p>
    `;
    document.getElementById("project-details-modal").style.display = "block";
}

function closeDetails() {
    document.getElementById("project-details-modal").style.display = "none";
}


