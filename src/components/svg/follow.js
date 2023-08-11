import React from "react";

export default class Follow extends React.Component {
    render() {
        if (!this.props.dir) {
            return (<div id={this.props.id} class="svg-wrap"><svg xmlns="http://www.w3.org/2000/svg" >
            <line x1="0" y1="50%" x2="40%" y2="50%" stroke="rgb(221, 221, 221)" />
            <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="rgb(221, 221, 221)" />
            <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="rgb(221, 221, 221)" />
        </svg></div>)
        } else {
            return (<div id={this.props.id} class="svg-wrap"><svg xmlns="http://www.w3.org/2000/svg" >
            <line x1="0" y1="50%" x2="40%" y2="50%" stroke="rgb(221, 221, 221)" />
            <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="rgb(221, 221, 221)" />
            <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="rgb(221, 221, 221)" />
        </svg></div>)
        }
    }
}