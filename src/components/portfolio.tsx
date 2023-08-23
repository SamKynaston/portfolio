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
          <box className="main w-full">
              <h1 id="title">{name}</h1>

              <section className="centered">
                {languages.length > 0 ? 
                  <div className="column-grow">
                    <h2 id="subtitle">Language(s) used</h2>
                    <div className="centered">
                      {languages.map(language => {return (<TagItem name={language}/>)})}
                    </div>
                  </div> 
                : false}

                {frameworks.length > 0 ?
                  <div className="column-grow">
                    <h2 id="subtitle">Framework(s) used</h2>
                    <div className="centered">
                      {frameworks.map(framework => {return (<TagItem name={framework}/>)})}
                    </div>
                  </div>
                : false }
              </section>

              <hr id="main" />
              <div className="centered">
                {links.map(link => {return (<a className="column-grow" id="link" href={link[1]} target="_blank">{link[0]}<br /></a>)})}
              </div>
          </box>
      </section>
  );
};

export default PortfolioItem;