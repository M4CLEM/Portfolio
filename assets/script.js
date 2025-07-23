document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.project-container');

    fetch('assets/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(projects => {
            projects.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('project-card');

                const stack = project["technology-stack"];

                card.innerHTML = `
                    <h2>${project.name}</h2>
                    <p><strong>Description:</strong>${project.description || 'N/A'}</p>
                    <p><strong>Development period:</strong> ${project["development-period"] || 'N/A'}</p>
                    <div class="tech-stack">
                        <h3>Technology Stack:</h3>
                        <ul>
                            <li><strong>Frontend: </strong> ${stack.frontend || 'N/A'}</li>
                            <li><strong>Backend: </strong> ${stack.backend || 'N/A'}</li>
                            <li><strong>Frameworks: </strong> ${stack.frameworks || 'N/A'}</li>
                            <li><strong>Version Control: </strong> ${stack["version-control"] || 'N/A'}</li>
                            ${stack["3rd-party-libraries"] ? `<li><strong>3rd Party Libraries: </strong> ${stack["3rd-party-libraries"]}</li>` : ''}
                        </ul>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p>Error loading projects: ${error.message}</p>`;
        });
})