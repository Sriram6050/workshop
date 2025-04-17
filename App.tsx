import React, { useState } from 'react';
import { Github, Mail, Download, Upload, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  role: string;
  link: string;
  technologies: string[];
}

function App() {
  const [file, setFile] = useState<File | null>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
      role: "Lead Frontend Developer",
      link: "https://example.com/project1",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Task Management System",
      description: "Enterprise task management solution with real-time collaboration features and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1280",
      role: "Full Stack Developer",
      link: "https://example.com/project2",
      technologies: ["TypeScript", "React", "Express", "MongoDB"]
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and medical record tracking.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1280",
      role: "Backend Developer",
      link: "https://example.com/project3",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"]
    }
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    // Handle file upload logic here
    console.log('Uploading file:', file.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Y.Sriram</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
            <div className="flex space-x-4">
              <a href="sriramyadlapalli5040@gmail.com" className="flex items-center bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-opacity-90 transition">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a href="https://github.com/Sriram6050" target="_blank" rel="noopener noreferrer" className="flex items-center bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Resume Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Resume</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/path-to-resume.pdf"
                download
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <div className="flex items-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Resume
                </label>
              </div>
            </div>
            {file && (
              <div className="mt-4 text-sm text-gray-600">
                Selected file: {file.name}
                <button
                  onClick={handleUpload}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm font-semibold text-blue-600 mb-2">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;