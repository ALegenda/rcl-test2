import React from "react";

export default class Line extends React.Component {
    render() {
        return (<div class="svg-wrap"><svg xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgb(221, 221, 221)" />
      </svg></div>)
    }
}