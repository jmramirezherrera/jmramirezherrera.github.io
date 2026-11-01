import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Projects from '@/pages/Projects/Projects';
import Project from '@/pages/Project/Project';
import AboutMe from '@/pages/AboutMe/AboutMe';
import Contact from '@/pages/Contact/Contact';
import projects from '@/assets/projects.json';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/projects" element={<Projects projects={projects} />} />
      {projects?.map((project) => (
        <Route
          key={project?.id}
          path={`/projects/${project?.id}`}
          element={<Project project={project} />}
        />
      ))}
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
