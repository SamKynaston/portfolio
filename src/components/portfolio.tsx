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
      <section className="column-grow">
          <box className="secondary">
              <h1 id="title">{name}</h1>

              <section className="centered">
                <div className="column">
                  <h2 id="subtitle">Language(s) used</h2>
                  <div className="centered">
                    {languages.map(language => {return (<TagItem name={language}/>)})}
                  </div>
                </div>

                <div className="column">
                  <h2 id="subtitle">Framework(s) used</h2>
                  <div className="centered">
                    {frameworks.map(framework => {return (<TagItem name={framework}/>)})}
                  </div>
                </div>
              </section>

              <hr id="main" />
              <div className="centered">
                {links.map(link => {return (<a className="column" id="link" href={link[1]} target="_blank">{link[0]}<br /></a>)})}
              </div>
          </box>
      </section>
  );
};

export default PortfolioItem;