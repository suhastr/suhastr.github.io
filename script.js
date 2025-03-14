const projects = [
    {
        title: "Machine Generated Code Detection",
        description: "Developed an AI model to detect machine-generated code, leveraging the Binoculars research paper. Achieved 92.5% accuracy.",
        stack: "Python, Hugging Face, Transformers, PyTorch",
        link: "https://github.com/suhastr/Machine_Generated_Code_Detection"
    },
    {
        title: "Web Application Development and Containerization",
        description: "Developed a student survey form and class homepage hosted on AWS (S3, EC2). Implemented CI/CD pipelines with Kubernetes and Docker.",
        stack: "AWS, Docker, Kubernetes, Django",
        link: "https://github.com/suhastr/crud_operation_restful_api_using_springboot"
    },
    {
        title: "Django on Docker PostgreSQL Integration",
        description: "Developed and deployed a Django app integrated with PostgreSQL using Docker. Showcased expertise in containerized application development.",
        stack: "Django, PostgreSQL, Docker",
        link: "https://github.com/suhastr/Django_on_Docker"
    },
    {
        title: "Scalable Product Catalog Management System",
        description: "Built a serverless product catalog system using AWS Lambda, DynamoDB, and API Gateway, enabling real-time product metadata discovery.",
        stack: "AWS Lambda, DynamoDB, API Gateway",
        link: "#"
    }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("bg-white", "shadow-lg", "p-6", "rounded-lg", "w-80");
    projectCard.innerHTML = `
        <h3 class="text-xl font-bold">${project.title}</h3>
        <p class="mt-2 text-gray-600">${project.description}</p>
        <p class="mt-2"><b>Tech Stack:</b> ${project.stack}</p>
        <a href="${project.link}" target="_blank" class="block mt-4 bg-blue-600 text-white text-center py-2 rounded">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
