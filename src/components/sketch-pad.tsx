import {createRef, Component} from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

type Props = {};
type State = {
    canvas: any;
};

class Canvas extends Component<Props, State> {
    state: State = {
        canvas: createRef()
    }
    
    render() {
        return (
            <ReactSketchCanvas 
                ref={this.state.canvas}
                style={{
                    border: "0.0625rem solid #000"
                }}
                width="100%"
                height="100%"
                strokeWidth={4}
                strokeColor="black"
            />
        )
    }
}

export default Canvas