import { Link } from "react-router-dom";

import { CTA, EditorWindow } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const toFileName = (name) =>
  name
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") + ".jsx";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-dark-muted mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, here are my
        favourites:
      </p>

      <div className="flex flex-wrap my-20 gap-8">
        {projects.map((project) => (
          <EditorWindow
            key={project.name}
            filename={toFileName(project.name)}
            className="lg:w-[400px] w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="block-container w-12 h-12 shrink-0">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <h4 className="text-xl font-poppins font-semibold text-white">
                {project.name}
              </h4>
            </div>

            <p className="text-sm font-mono leading-relaxed text-dark-muted">
              <span className="text-[#5c6370]">{"// "}</span>
              {project.description}
            </p>

            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-semibold text-[#61afef] hover:text-[#82cfff] transition-colors"
            >
              open ./repo
              <img src={arrow} alt="" className="w-4 h-4 object-contain" />
            </Link>
          </EditorWindow>
        ))}
      </div>

      <hr className="border-dark-border" />

      <CTA />
    </section>
  );
};

export default Projects;
