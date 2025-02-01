
// Toggle sidebar on hamburger menu click
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const submenuItems = document.querySelectorAll(".submenu a");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "auto";
    });

    // Close sidebar when clicking outside
document.addEventListener("click", (event) => {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");

    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// Ensure submenu items close sidebar when clicked
document.querySelectorAll(".submenu a").forEach(item => {
    item.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    // Ensure submenu items trigger their content updates
    submenuItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const solutionKey = item.getAttribute("data-solution");
            showSolution(solutionKey);
            sidebar.classList.remove("active"); // Close sidebar after submenu click
            document.body.style.overflow = "auto";
        });
    });
});

// Mock function to show solution content dynamically
function showSolution(solutionKey) {
    const solutions = {
        sap: { title: "SAP", description: "Enterprise solution for managing business operations." },
        opentext: { title: "OpenText", description: "Content management and collaboration platform." },
        servicenow: { title: "ServiceNow", description: "Platform for automating IT service management." },
    };

    const solutionData = solutions[solutionKey];
    const titleElement = document.getElementById("solution-title");
    const descriptionElement = document.getElementById("solution-description");

    if (solutionData) {
        titleElement.textContent = solutionData.title;
        descriptionElement.textContent = solutionData.description;
    } else {
        titleElement.textContent = "Solution not found";
        descriptionElement.textContent = "";
    }
}
