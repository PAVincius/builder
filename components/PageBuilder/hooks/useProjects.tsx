// hooks/useProjects.js
import { useState, useEffect, useCallback } from "react";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      setError(error);
    }
  });

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return [projects, fetchProjects, error];
};
