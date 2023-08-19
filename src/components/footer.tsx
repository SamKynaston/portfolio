import "../styles/footer.css";
import {createRef, Component} from "react";

type Props = {};
type State = {};

class Footer extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <footer>
                Visit me on <a id="link" href="">Github!</a>
            </footer>
        )
    }
}

export default Footer