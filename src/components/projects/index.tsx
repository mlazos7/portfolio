import React from "react";
import projects from "../../data";
import { Tags } from "../../types";
import { IconContext } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { MdDisabledByDefault } from "react-icons/md";

const Icon = ({ tag }: { tag: Tags }) => {
  switch (tag) {
    case "css":
      return <SiCss3 title={tag} />;
    case "html":
      return <SiHtml5 title={tag} />;
    case "js":
      return <SiJavascript title={tag} />;
    case "react":
      return <SiReact title={tag} />;
    case "redux":
      return <SiRedux title={tag} />;
    case "ts":
      return <SiTypescript title={tag} />;
    default:
      return <MdDisabledByDefault />;
  }
};

const projectList = projects.map((item) => (
  <div key={item.id}>
    <img src={item.thumbail} alt={`preview ${item.projectName}`} />
    <div>
      <small className="header">5d ago.</small>
      <h4>{item.projectName}</h4>
      <p>{item.description}</p>
      <div className="tags">
        {item.tags.map((tag, index) => (
          <IconContext.Provider
            key={index}
            value={{
              color: "#5964E0",
              className: "react-icons",
              size: "1.5rem",
            }}
          >
            <Icon tag={tag} />
          </IconContext.Provider>
        ))}
      </div>
    </div>
  </div>
));

const ProjectList = () => <div className="content">{projectList}</div>;

export { ProjectList };
