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
