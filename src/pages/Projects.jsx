import { useState, useEffect } from "react";

function Projects(props) {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  const getProjectsData = async () => {
    try {
      const response = await fetch("./projects.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id}>
        <h1>{project.name}</h1>
        <img src={project.image} alt= {project.name} /> 
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return (
    <div>
      {error ? (
        <h1>Error: {error}</h1>
      ) : projects ? (
        loaded()
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Projects;
