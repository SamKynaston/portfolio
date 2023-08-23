import type React from "react";
import "../styles/tags.css"

let displayNames = {
  "C-sharp":"C#"
}

interface Props {
    name: string;
}

const TagItem: React.FC<Props> = ({ name }) => {
  return (
      <p className="tag mx-1" id={name.toLowerCase()}> {displayNames[name] || name} </p>
  );
};

export default TagItem;