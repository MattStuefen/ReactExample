let React = require('react');
let DataStore = require('../../utilities/data-store');

const TEXT = "TextBoxComponentFieldData";

export class TextAreaComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textAreaValue: DataStore.getValue(TEXT)
        };

        DataStore.subscribe(TEXT, (value) => {
            this.setState({textAreaValue: value});
        });
    }

    render() {
        return (
            <p className="text-area-style">{this.state.textAreaValue}</p>
        )
    }
}
