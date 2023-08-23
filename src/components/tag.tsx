import type React from "react";
import "../styles/tags.css"

let displayNames = {
  "C-sharp":"C#",
}

let icons = {
  "Python":<i class="fa-brands fa-python"></i>,
  "JavaScript":<i class="fa-brands fa-square-js"></i>,
  "React":<i class="fa-brands fa-react"></i>,
  "React.JS":<i class="fa-brands fa-react"></i>,
  ".NET":<i class="fa-brands fa-microsoft"></i>,
  "C-sharp":<i class="fa-brands fa-microsoft"></i>,
  "Typescript":<i class="fa-brands fa-microsoft"></i>,
  "HTML5":<i class="fa-brands fa-html5"></i>,
  "CSS":<i class="fa-brands fa-css3-alt"></i>
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