import { useState, useEffect, Key } from "react";

interface Project {
  id: number;
  title: string;
  content: string;
  link: string;
  badge: string[];
  components: string[];
}

export const useProjects = (url: string): [Project[], () => Promise<void>, any] => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data.projects); // Extract the projects array from the data
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return [projects, fetchProjects, error];
};
