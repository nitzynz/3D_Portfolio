import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, EditorWindow } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Nithyashree Govindarajan
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-dark-muted">
        <p>
          Software Engineer with 3+ years experience in developing solutions for
          a Fortune 500 company.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <EditorWindow filename="skills.json" className="mt-8">
          <div className="flex flex-wrap gap-8">
            {skills.map((skill) => (
              <div className="flex flex-col items-center gap-2" key={skill.name}>
                <div className="block-container w-16 h-16">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <span className="text-xs font-mono text-dark-muted">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </EditorWindow>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-dark-muted">
          <p>
            I've leveled up my skills and teaming up with smart people. Here's
            the rundown:
          </p>
        </div>

        <EditorWindow filename="experience.log" className="mt-8">
          <div className="flex">
            <VerticalTimeline lineColor="#30363d">
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                    boxShadow:
                      "0 0 0 4px #161b22, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "#0d1117",
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #0d1117" }}
                  dateClassName="!text-dark-muted !font-mono"
                >
                  <div>
                    <h3 className="text-white text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-dark-text font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-dark-muted font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </EditorWindow>
      </div>

      <hr className="border-dark-border" />

      <CTA />
    </section>
  );
};

export default About;
