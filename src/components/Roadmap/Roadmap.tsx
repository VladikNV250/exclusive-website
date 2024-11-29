import { Link } from "react-router-dom";
import classes from "./Roadmap.module.scss";
import React from "react";

interface Props {
    links: {
        name: string, url: string,
    }[]
}

export default function Roadmap({links}: Props) {
    return (
        <div className={classes["roadmap"]}>
            <div className={classes["roadmap-container"]}>
                {links.map(({name, url}, index) => { 
                    const isLast = index === links.length - 1;
                    const linkClass = isLast ? classes["roadmap-link__current"] : classes["roadmap-link"];
                    return (
                        <React.Fragment key={index}>
                            <Link 
                                className={linkClass} 
                                to={url}
                            >
                                {name}
                            </Link>
                            {!isLast && 
                            <div 
                                className={classes["roadmap-separator"]}
                            >
                                /
                            </div>
                            }
                            
                        </React.Fragment>
                    )    
                })}
            </div>
        </div>
    )
}