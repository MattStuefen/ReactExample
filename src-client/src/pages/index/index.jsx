let React = require('react');
let ReactDOM = require('react-dom');

// Html Imports
document.body.innerHTML += require('./index.html');
require('../../components/text-area/style.css');

import {TextBoxComponent} from "../../components/text-box/text-box.jsx";
import {TextAreaComponent} from "../../components/text-area/text-area.jsx";

ReactDOM.render(<TextBoxComponent/>, document.querySelector('#text-box'));
ReactDOM.render(<TextAreaComponent/>, document.querySelector('#text-area'));