// Project Data
const projects = [
    {
        title: "6 D.O.F Industrial Robotic Arm (Ongoing)",
        category: "Automation",
        image: "image/6 DOF ROBOT ARM.png",
        description: "A 6-DOF industrial robotic arm manipulator designed for precise movements and accurate control of the end-effector’s position and orientation.",
        link: "https://docs.google.com/spreadsheets/d/197hFK90A5LqaXzbLAdKvCSzpT-AuTpc3IZceeHGMIfc/edit?usp=sharing",
        technologies: ["Teensy", "Motors", "Drivers" ,"Sensors"]
    },
    {
        title: "Temperature Monitor with Alarm and Display Modes",
        category: "IoT",
        image: "image/Front.jpg",
        description: "Created an IoT-based environmental monitoring system using IC, LED, BUTTON for data analysis.",
        link: "https://www.linkedin.com/in/ravindu-madushan-57944a301/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAE0hSq0Bp0bRFqy1zWfoF-E3GrGYuUwzHtE",
        technologies: ["ATMega", "Embedded C++",]
    },
    {
        title: "Youth Guild Grand Vesak Lantern (2024)",
        category: "Machine Vision",
        image: "image/Vesak Lantern.jpg",
        description: "The 'Youth Guild Grand Vesak Lantern 2024' symbolizes unity and creativity, blending tradition and innovation in a stunning Vesak celebration.",
        link: "https://drive.google.com/drive/folders/1wUqFGpYFrIM7l3MIdjRlzkZrRcCDMW98?usp=sharing",
        technologies: ["arduino", "all",]
    },
    {
        title: "Automatic WhiteBoard Cleaner",
        category: "Automation",
        image: "image/AUTOMATIC White Board.jpg",
        description: "An automatic whiteboard cleaner is a motorized device that efficiently erases whiteboards using a moving mechanism controlled by a microcontroller.",
        link: "https://drive.google.com/drive/folders/1Xz4vS0lWyMyrhqXMLqem0irS_JPy9Eb3?usp=sharing",
        technologies: ["IC", "Sensors", "Actuators"]
    }
];

// Initialize Projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Create project cards
    function createProjectCard(project) {
        return `
            <div class="project-card" data-category="${project.category}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Project Details</a>
                </div>
            </div>
        `;
    }

    // Render all projects
    function renderProjects(category = 'All') {
        const filteredProjects = category === 'All' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');
    }

    // Add click event listeners to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            renderProjects(btn.dataset.category);
        });
    });

    // Initial render
    renderProjects();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
