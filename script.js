function showSolution(solution) {
    const solutions = {
        sap: {
            title: 'SAP',
            description: 'A leading ERP solution for finance, supply chain, and workforce automation. SAP provides end-to-end solutions for enterprise resource planning.'
        },
        opentext: {
            title: 'OpenText',
            description: 'OpenText is a powerful ECM (Enterprise Content Management) platform that helps manage, process, and analyze unstructured data effectively.'
        },
        servicenow: {
            title: 'ServiceNow',
            description: 'ServiceNow is an ITSM (IT Service Management) platform that automates workflows and improves IT support efficiency.'
        },
        salesforce: {
            title: 'Salesforce',
            description: 'Salesforce is a CRM (Customer Relationship Management) solution for managing customer interactions, sales automation, and marketing campaigns.'
        }
    };

    const solutionData = solutions[solution];
    document.getElementById('solution-title').innerText = solutionData.title;
    document.getElementById('solution-description').innerText = solutionData.description;
}
