import type React from "react";
import "../styles/tags.css"

interface Props {
    name: string;
}

const TagItem: React.FC<Props> = ({ name }) => {
  return (
      <p className="tag mx-1" id={name.toLowerCase()}> {name} </p>
  );
};

export default TagItem;