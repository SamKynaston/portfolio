import type React from "react";
import TagItem from "./tag";

interface Props {
    name: string;
    languages: any;
    frameworks: any;
    links: any;
}

const PortfolioItem: React.FC<Props> = ({ name, languages, frameworks, links }) => {
  return (
      <section className="column">
          <box className="secondary">
              <h1 id="title">{name}</h1>

              <section className="centered">
                  {languages.map(language => {return (<TagItem name={language}/>)})}
              </section>

              <hr id="main" />
              {links.map(link => {return (<a id="link" href={link[1]} target="_blank">{link[0]}<br /></a>)})}
          </box>
      </section>
  );
};

export default PortfolioItem;