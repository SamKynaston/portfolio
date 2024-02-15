import "../styles/footer.css";
import {createRef, Component} from "react";

let d = new Date()
let yearToDisplay = d.getFullYear()

type Props = {};
type State = {};

class Footer extends Component<Props, State> {
    state: State = {}
    
    render() {
        return (
            <footer>
                Samuel Kynaston © {yearToDisplay}
                <br />
                Visit me on <a id="link" href="https://github.com/SamKynaston/portfolio/" target="_blank"><i className="fa-brands fa-github"></i> Github!</a>
            </footer>
        )
    }
}

export default Footer