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
    document.getElementById('solution-title').innerText = solutionData.title;
    document.getElementById('solution-description').innerText = solutionData.description;
}
