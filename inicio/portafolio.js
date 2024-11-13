document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('mainContent');
  const projectList = document.getElementById('projectList');

  function renderProjects(projects) {
      projectList.innerHTML = '';
      if (projects.length === 0) {
          projectList.innerHTML = '<p>No hay proyectos disponibles.</p>';
          return;
      }
      projects.forEach((project, index) => {
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('project-item');
          projectDiv.innerHTML = `
              <p><strong>Nombre:</strong> ${project.name}</p>
              <p><strong>Estado:</strong> ${project.status}</p>
              <p><strong>Cliente:</strong> ${project.client}</p>
              <button onclick="deleteProject(${index})">Eliminar</button>
          `;
          projectList.appendChild(projectDiv);
      });
  }

  function getProjects() {
      return JSON.parse(localStorage.getItem('projects')) || [];
  }

  function saveProjects(projects) {
      localStorage.setItem('projects', JSON.stringify(projects));
  }

  document.getElementById('btnCrearProyecto').addEventListener('click', () => {
      const projectName = prompt('Ingrese el nombre del proyecto:');
      if (projectName) {
          const projects = getProjects();
          projects.push({ name: projectName, status: 'Creado', client: 'Cliente A' });
          saveProjects(projects);
          alert('Proyecto creado con éxito.');
      }
  });

  document.getElementById('btnProyectosCreados').addEventListener('click', () => {
      const projects = getProjects().filter(project => project.status === 'Creado');
      renderProjects(projects);
  });

  document.getElementById('btnProyectosPendientes').addEventListener('click', () => {
      const projects = getProjects().filter(project => project.status === 'Pendiente');
      renderProjects(projects);
  });

  document.getElementById('btnClientesPorProyecto').addEventListener('click', () => {
      const projects = getProjects();
      projectList.innerHTML = '';
      if (projects.length === 0) {
          projectList.innerHTML = '<p>No hay proyectos disponibles.</p>';
          return;
      }
      projects.forEach(project => {
          const clientDiv = document.createElement('div');
          clientDiv.classList.add('project-item');
          clientDiv.innerHTML = `
              <p><strong>Proyecto:</strong> ${project.name}</p>
              <p><strong>Cliente:</strong> ${project.client}</p>
          `;
          projectList.appendChild(clientDiv);
      });
  });

  document.getElementById('btnResumenCuenta').addEventListener('click', () => {
      const projects = getProjects();
      let summary = '<h3>Resumen de Actividad</h3>';
      if (projects.length === 0) {
          summary += '<p>No hay actividad disponible.</p>';
      } else {
          summary += projects.map(project => `
              <p><strong>${project.name}:</strong> Estado - ${project.status}, Cliente - ${project.client}</p>
          `).join('');
      }
      projectList.innerHTML = summary;
  });

  window.deleteProject = (index) => {
      const projects = getProjects();
      if (index >= 0 && index < projects.length) {
          projects.splice(index, 1);
          saveProjects(projects);
          renderProjects(projects);
          alert('Proyecto eliminado con éxito.');
      }
  };

  renderProjects(getProjects());
});
