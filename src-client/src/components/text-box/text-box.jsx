let React = require('react');
let DataStore = require('../../utilities/data-store');

const TEXT = "TextBoxComponentFieldData";

export class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);

        DataStore.setValue(TEXT, "Hello world!");

        this.state = {
            textBoxValue: DataStore.getValue(TEXT)
        };

        DataStore.subscribe(TEXT, (value) => {
            this.setState({textBoxValue: value});
        });
    }

    render() {
        return (
            <input type="text" value={this.state.textBoxValue}
                   onChange={TextBoxComponent.onChanged.bind(this)}
                   onDoubleClick={TextBoxComponent.onDoubleClick.bind(this)}/>
        )
    }

    static onChanged(e) {
        DataStore.setValue(TEXT, e.target.value);
    }

    static onDoubleClick(e) {
        DataStore.revertValue(TEXT);
    }
}
