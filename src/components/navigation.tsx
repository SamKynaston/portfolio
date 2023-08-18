import "../styles/navigation.css";
import {createRef, Component} from "react";

type Props = {};
type State = {};

class Navigation extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <nav>
                <span className="content">
                    <span className="nav-left">
                        <a href="/">Kynno</a>
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