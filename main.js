// Project Data
const projects = [
    {
        title: "Industrial Automation System",
        category: "Automation",
        image: "/image.webp",
        description: "Developed and implemented a complete industrial automation system for manufacturing process optimization, resulting in 30% efficiency improvement.",
        link: "#",
        technologies: ["PLC", "SCADA", "HMI"]
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
        title: "Smart Environmental Monitoring",
        category: "IoT",
        image: "/image.webp",
        description: "Created an IoT-based environmental monitoring system using sensors and cloud integration for real-time data analysis.",
        link: "#",
        technologies: ["Arduino", "ESP32", "AWS"]
    },
    {
        title: "Automated Quality Control",
        category: "Machine Vision",
        image: "/image.webp",
        description: "Implemented a computer vision system for automated quality control in production lines using advanced image processing.",
        link: "#",
        technologies: ["OpenCV", "Python", "TensorFlow"]
    },
    {
        title: "Process Control System",
        category: "Automation",
        image: "/image.webp",
        description: "Designed and implemented a process control system for chemical plant operations with real-time monitoring.",
        link: "#",
        technologies: ["DCS", "PID Control", "Sensors"]
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
