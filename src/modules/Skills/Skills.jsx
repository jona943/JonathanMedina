import React from 'react';
import './Skills.css';

export const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Python', icon: 'py' },
    { name: 'FastAPI', icon: 'fastapi' },
    { name: 'Git', icon: 'git' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Bash Scripting', icon: 'bash' },
    { name: 'Google Cloud Platform', icon: 'gcp' },
    { name: 'VS Code', icon: 'vscode' },
  ];

  return (
    <section id="habilidades">
      <h2>Tecnologías & Herramientas</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name} title={skill.name}>
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              className="skill-icon"
              loading="lazy"
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
