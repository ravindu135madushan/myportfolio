// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typed-text', {
    strings: ['Automation Engineer', 'IoT Developer', 'Robotics Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    cursorChar: '|'
});

// Projects Data
const projects = [

    {
        title: "Safty System For Vehicle",
        category: "IoT",
        image:"image/iot project.jpg",
        description: "A web-based system for real-time sensor monitoring and control with gyroscope, color, and pressure sensors, featuring live data updates and LED control.",
        link: "https://github.com/ravindu135madushan/SaferDashboard",
        technologies: ["ESP32", "Arduino"]
    },

    {
        title: "6 D.O.F Industrial Robotic Arm",
        category: "Automation",
        image: "image/6 DOF ROBOT ARM.png",
        description: "A 6-DOF industrial robotic arm manipulator designed for precise movements and control.",
        link: "https://docs.google.com/spreadsheets/d/197hFK90A5LqaXzbLAdKvCSzpT-AuTpc3IZceeHGMIfc/edit?usp=sharing",
        technologies: ["Teensy", "Motors", "Drivers", "Sensors"]
    },
    {
        title: "Temperature Monitor System",
        category: "IoT",
        image: "image/Front.jpg",
        description: "IoT-based environmental monitoring system with advanced features and real-time alerts.",
        link: "https://www.linkedin.com/in/ravindu-madushan-57944a301/",
        technologies: ["ATMega", "Embedded C++"]
    },
    {
        title: "Youth Guild Vesak Lantern",
        category: "Machine Vision",
        image: "image/Vesak Lantern.jpg",
        description: "An innovative Vesak lantern project combining traditional art with modern technology.",
        link: "https://drive.google.com/drive/folders/1wUqFGpYFrIM7l3MIdjRlzkZrRcCDMW98",
        technologies: ["Arduino", "LED Control", "Automation"]
    },
    {
        title: "Automatic Whiteboard Cleaner",
        category: "Automation",
        image: "image/AUTOMATIC White Board.jpg",
        description: "Smart automated system for efficient whiteboard cleaning using advanced mechanics.",
        link: "https://drive.google.com/drive/folders/1Xz4vS0lWyMyrhqXMLqem0irS_JPy9Eb3",
        technologies: ["IC", "Sensors", "Actuators"]
    }
];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `;
    }

    function renderProjects(category = 'All') {
        const filteredProjects = category === 'All' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');
        AOS.refresh();
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.category);
        });
    });

    renderProjects();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);