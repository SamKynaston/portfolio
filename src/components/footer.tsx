import "../styles/footer.css";
import {createRef, Component} from "react";

type Props = {};
type State = {};

class Footer extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <footer>
                Visit me on <a id="link" href="https://github.com/SamKynaston/portfolio/" target="_blank">Github!</a>
            </footer>
        )
    }
}

export default Footer