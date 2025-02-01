// Toggle the sidebar for mobile devices
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Show content dynamically for Solutions and other menu items
function showSolution(solution) {
    const solutions = {
        sap: { title: 'SAP', description: 'A leading ERP solution for finance, supply chain, and workforce automation.' },
        opentext: { title: 'OpenText', description: 'Enterprise Content Management (ECM) platform to manage and analyze data.' },
        servicenow: { title: 'ServiceNow', description: 'ITSM platform that automates workflows and enhances IT support.' },
        salesforce: { title: 'Salesforce', description: 'CRM solution for sales automation and customer relationship management.' },
        aem: { title: 'Adobe Experience Manager', description: 'Digital experience management platform for content personalization.' },
        sitecore: { title: 'Sitecore', description: 'Content management and digital commerce platform.' },
        netsuite: { title: 'NetSuite', description: 'Cloud-based ERP solution for business process automation.' },
        dellboomi: { title: 'Dell Boomi', description: 'Cloud integration platform for enterprise data connectivity.' },
        mulesoft: { title: 'MuleSoft', description: 'API and integration platform for connecting applications and business processes.' },
        outsystems: { title: 'OutSystems', description: 'Low-code application development platform for rapid software creation.' }
    };

    const solutionData = solutions[solution];
    const titleElement = document.getElementById('solution-title');
    const descriptionElement = document.getElementById('solution-description');

    if (solutionData) {
        titleElement.innerText = solutionData.title;
        descriptionElement.innerText = solutionData.description;
    } else {
        titleElement.innerText = 'Solution not found';
        descriptionElement.innerText = '';
    }
}

// Lazy load images for better performance
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Use data-src to load images lazily
                img.classList.add("fade-in"); // Add animation
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});

// Fade-in effect for images and sections when they appear on scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".section-image, section");

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("visible");
        }
    });
});
