function contactUs() {
    alert('Thank you for your interest! Please fill out the contact form below.');
}

function showSolution(solution) {
    const solutionData = {
        'servicenow': {
            title: 'ServiceNow',
            description: 'IT Service Management (ITSM) platform that automates workflows and enhances IT support efficiency.'
        },
        'sap': {
            title: 'SAP',
            description: 'A leading ERP solution for finance, supply chain, and business process automation.'
        },
        'opentext': {
            title: 'OpenText',
            description: 'Enterprise Content Management (ECM) solution that enhances document automation and workflow efficiency.'
        },
        'salesforce': {
            title: 'Salesforce',
            description: 'Customer Relationship Management (CRM) system for sales automation and customer engagement.'
        }
    };

    document.getElementById('solution-title').innerText = solutionData[solution].title;
    document.getElementById('solution-description').innerText = solutionData[solution].description;
}

function showIndustry(industry) {
    const industryData = {
        'banking': {
            title: 'Banking',
            description: 'AI-powered financial automation, fraud detection, and customer analytics for banking institutions.'
        },
        'insurance': {
            title: 'Insurance',
            description: 'Automated claims processing, risk analysis, and AI-enhanced policy recommendations.'
        },
        'retail': {
            title: 'Retail',
            description: 'AI-driven customer personalization, demand forecasting, and inventory optimization.'
        }
    };

    document.getElementById('industry-title').innerText = industryData[industry].title;
    document.getElementById('industry-description').innerText = industryData[industry].description;
}
