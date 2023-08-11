import React from "react";
import Link from "./link";

export default class PlayoffCard extends React.Component {
    render() {
        return (<div class="playoffcard-wrapper">
            <div class="playoff-teams">
                <div class="playoff-team">
                    <a href={"/team/" + this.props.team1Id}><img class="playoff-logo-team" src={this.props.team1Logo} alt="logo"></img></a>
                    {this.props.team1Name}</div>
                <div class="playoff-team">
                    <a href={"/team/" + this.props.team2Id}><img class="playoff-logo-team" src={this.props.team2Logo} alt="logo"></img></a>
                    {this.props.team2Name}</div>
            </div>
            <div class="playoff-scores">
                <div class="playoff-score">{this.props.team1Score}</div>
                <div class="playoff-score">{this.props.team2Score}</div>
            </div>
        </div>)
    }
}