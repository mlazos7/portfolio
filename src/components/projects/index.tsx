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
  SiGithub,
} from "react-icons/si";

import { GoLinkExternal } from "react-icons/go";
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
  <div key={item.id} className="card">
    <img
      src={item.thumbail}
      alt={`preview ${item.projectName}`}
      className="card__thumbail"
    />
    <div className="card__body">
      <small>5d ago.</small>
      <h4>{item.projectName}</h4>
      <p>{item.description}</p>
      <div className="info">
        <IconContext.Provider
          value={{
            color: "#5964E0",
            className: "react-icons",
            size: "1.8rem",
          }}
        >
          <div>
            {item.tags.map((tag, index) => (
              <Icon key={index} tag={tag} />
            ))}
          </div>
          <div className="pointer">
            {item.repositoryUrl && (
              <>
                <a
                  href={item.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <SiGithub />
                </a>
                <a
                  href={item.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Website"
                >
                  <GoLinkExternal />
                </a>
              </>
            )}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  </div>
));

const ProjectList = () => <div className="grid-card">{projectList}</div>;

export { ProjectList };
