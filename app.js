document.addEventListener('DOMContentLoaded', function() {
    // Campaign Creation
    const createCampaignBtn = document.getElementById('create-campaign');
    const campaignList = document.getElementById('campaign-list');

    createCampaignBtn.addEventListener('click', function() {
        const campaignName = prompt('Enter campaign name:');
        if (campaignName) {
            const campaignElement = document.createElement('div');
            campaignElement.textContent = campaignName;
            campaignList.appendChild(campaignElement);
            saveCampaigns();
        }
    });

    // Load saved campaigns
    loadCampaigns();

    // Task Creation
    const taskList = document.getElementById('task-list');
    const createTaskBtn = document.createElement('button');
    createTaskBtn.textContent = 'Create New Task';
    taskList.parentNode.insertBefore(createTaskBtn, taskList);

    createTaskBtn.addEventListener('click', function() {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const taskElement = document.createElement('div');
            taskElement.textContent = taskName;
            taskList.appendChild(taskElement);
            saveTasks();
        }
    });

    // Load saved tasks
    loadTasks();

    // Email Integration
    const emailForm = document.getElementById('email-connect-form');
    const emailStatus = document.getElementById('connected-email-status');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email-address').value;
        emailStatus.textContent = `Email connected: ${email}`;
        // In a real application, you'd handle the email connection securely here
    });

    // Local Storage Functions
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
});