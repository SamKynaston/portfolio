import type React from "react";
import "../styles/tags.css"

let displayNames = {
  "C-sharp":"C#",
}

let icons = {
  "Python":<i className="fa-brands fa-python"></i>,
  "JavaScript":<i className="fa-brands fa-square-js"></i>,
  "React":<i className="fa-brands fa-react"></i>,
  "React.JS":<i className="fa-brands fa-react"></i>,
  "React.TS":<i className="fa-brands fa-react"></i>,
  ".NET":<i className="fa-brands fa-microsoft"></i>,
  "C-sharp":<i className="fa-brands fa-microsoft"></i>,
  "Typescript":<i className="fa-brands fa-microsoft"></i>,
  "HTML5":<i className="fa-brands fa-html5"></i>,
  "CSS":<i className="fa-brands fa-css3-alt"></i>
}

interface Props {
    name: string;
}

const TagItem: React.FC<Props> = ({ name }) => {
  return (
      <p className="tag mx-1" id={name.toLowerCase()}> {icons[name] || null} {displayNames[name] || name} </p>
  );
};

export default TagItem;