import type React from "react";
import TagItem from "./tag";

interface Props {
    name: string,
    specifications: any
}

const PortfolioItem: React.FC<Props> = ({ name, specifications }) => {
    return (
        <section className="column-grow box h-full w-full my-2">
            {specifications.length > 0 ? 
                <>
                    <h2 id="subtitle" className="my-0 mb-5">{name}</h2>
                    <section className="column-grow box h-full">
                        <section className="xl:grid xl:grid-cols-1 centered-xl xl:gap-4">
                            <h2 id="subtitle">Device Specifications</h2>
                            <ul className="md:text-left text-center">
                                {specifications.map(specification => {
                                    return <>
                                        <li className="my-2">{specification.type}: {specification.link ? <b><a href="" id="link">{specification.name}</a></b> :  <b>{specification.name}</b> }</li>   
                                    </>  
                                })}
                            </ul> 
                        </section>
                    </section>
                </>
            : false}
        </section>
    )
}

export default PortfolioItem