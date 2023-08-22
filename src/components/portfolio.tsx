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

              <h2 id="subtitle">Language(s) used</h2>
              <section className="centered">
                  {languages.map(language => {return (<TagItem name={language}/>)})}
              </section>

            <h2 id="subtitle">Framework(s) used</h2>
              <section className="centered">
                  {frameworks.map(framework => {return (<TagItem name={framework}/>)})}
              </section>

              <hr id="main" />
              {links.map(link => {return (<a id="link" href={link[1]} target="_blank">{link[0]}<br /></a>)})}
          </box>
      </section>
  );
};

export default PortfolioItem;