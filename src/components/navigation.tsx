import "../styles/navigation.css";
import {createRef, Component} from "react";
import logo from "../../images/logo-w.svg";
import logoBlack from "../../images/logo-d.svg";

type Props = {};
type State = {};

class Navigation extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <nav className="bg-opacity-80">
                <span className="nav-content">
                    <span className="nav-left">
                        <a href="/">
                            <picture className="p-0.5">
                                <source
                                    srcSet={logo}
                                    media="(prefers-color-scheme: dark)"
                                />
                                <img
                                    src={logoBlack}
                                    alt="Kynno"
                                />
                            </picture>
                        </a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/devices">Devices</a>
                    </span>
                    <span className="nav-right">
                        
                    </span>
                </span>
            </nav>
        )
    }
}

export default Navigation