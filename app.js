document.addEventListener('DOMContentLoaded', function() {
    // Page Navigation
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            pages.forEach(page => page.style.display = 'none');
            document.getElementById(pageId).style.display = 'block';
        });
    });

    // Campaign Management
    const createCampaignBtn = document.getElementById('create-campaign');
    const campaignList = document.getElementById('campaign-list');
    const campaignForm = document.getElementById('campaign-form');
    const newCampaignForm = document.getElementById('new-campaign-form');

    createCampaignBtn.addEventListener('click', function() {
        campaignForm.style.display = 'block';
    });

    newCampaignForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const campaignName = document.getElementById('campaign-name').value;
        const campaignDesc = document.getElementById('campaign-description').value;
        
        const campaignElement = document.createElement('div');
        campaignElement.innerHTML = `<strong>${campaignName}</strong><p>${campaignDesc}</p>`;
        campaignList.appendChild(campaignElement);
        
        saveCampaigns();
        newCampaignForm.reset();
        campaignForm.style.display = 'none';
    });

    // Task Management
    const createTaskBtn = document.getElementById('create-task');
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('task-form');
    const newTaskForm = document.getElementById('new-task-form');

    createTaskBtn.addEventListener('click', function() {
        taskForm.style.display = 'block';
    });

    newTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskDesc = document.getElementById('task-description').value;
        
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `<strong>${taskName}</strong><p>${taskDesc}</p>`;
        taskList.appendChild(taskElement);
        
        saveTasks();
        newTaskForm.reset();
        taskForm.style.display = 'none';
    });

    // Report Generation
    const generateReportBtn = document.getElementById('generate-report');
    const reportDisplay = document.getElementById('report-display');

    generateReportBtn.addEventListener('click', function() {
        const report = generateReport();
        reportDisplay.innerHTML = report;
    });

    // Email Integration
    const emailForm = document.getElementById('email-connect-form');
    const emailStatus = document.getElementById('connected-email-status');
    const emailCampaign = document.getElementById('email-campaign');
    const emailCampaignForm = document.getElementById('email-campaign-form');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email-address').value;
        emailStatus.textContent = `Email connected: ${email}`;
        emailCampaign.style.display = 'block';
        // In a real application, you'd handle the email connection securely here
    });

    emailCampaignForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const subject = document.getElementById('email-subject').value;
        const content = document.getElementById('email-content').value;
        alert(`Email campaign sent!\nSubject: ${subject}\nContent: ${content}`);
        emailCampaignForm.reset();
    });

    // Load saved data
    loadCampaigns();
    loadTasks();

    // Helper Functions
    function saveCampaigns() {
        localStorage.setItem('campaigns', campaignList.innerHTML);
    }

    function loadCampaigns() {
        const savedCampaigns = localStorage.getItem('campaigns');
        if (savedCampaigns) {
            campaignList.innerHTML = savedCampaigns;
        }
    }

    function saveTasks() {
        localStorage.setItem('tasks', taskList.innerHTML);
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            taskList.innerHTML = savedTasks;
        }
    }

    function generateReport() {
        const campaigns = campaignList.children.length;
        const tasks = taskList.children.length;
        return `
            <h3>Marketing Campaign Report</h3>
            <p>Total Campaigns: ${campaigns}</p>
            <p>Total Tasks: ${tasks}</p>
            <p>This is a basic report. In a real application, you would include more detailed analytics and data visualization.</p>
        `;
    }
});
