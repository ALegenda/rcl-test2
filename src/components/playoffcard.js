import React from "react";
import Link from "./link";

export default class PlayoffCard extends React.Component {
    render() {
        let date = new Date(this.props.time);
        return (<a href={"/match/" + this.props.matchId}>
            <div class="playoffcard-wrapper">
            <div class="playoff-inner">
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
            </div>
            <div class="playoff-time">{("0" + date.getDate().toString()).slice(-2) + "." + ("0" + (date.getMonth() + 1).toString()).slice(-2) + " " + ("0" + date.getHours().toString()).slice(-2) + ":" + ("0" + date.getMinutes().toString()).slice(-2)}</div>
        </div></a>)
    }
}