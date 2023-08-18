import "../styles/navigation.css";
import {createRef, Component} from "react";
import logo from "../images/logo-w.svg";
import logoBlack from "../images/logo-d.svg";

type Props = {};
type State = {};

class Navigation extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <nav className="bg-opacity-80">
                <span className="content">
                    <span className="nav-left">
                        <a href="/">
                            <picture>
                                <source
                                    srcSet={logo}
                                    media="(prefers-color-scheme: dark)"
                                />
                                <img
                                    src={logoBlack}
                                    alt="Browser with large and small images of a coffee cup and plants"
                                />
                            </picture>
                        </a>
                    </span>
                    <span className="nav-right">
                        <a href="/portfolio">Portfolio</a>
                    </span>
                </span>
            </nav>
        )
    }
}

export default Navigation