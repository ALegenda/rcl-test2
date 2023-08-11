import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import { useParams } from 'react-router-dom';
import Stat from '../components/stat';
import MatchCard from '../components/matchCard';
import PlayerCard from '../components/playerCard';
import PlayoffCard from '../components/playoffcard';
import Line from '../components/svg/line';
import Bracket from '../components/svg/bracket';
import Follow from '../components/svg/follow';

let playoff;

function Playoff() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const params = useParams();

    useEffect(() => {
        setLoading(true)
        Promise.all([
            fetchHelper(window.apiHost + 'playoff/').then((data) => playoff = data),
        ]).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    console.log(playoff);
    if (typeof playoff != 'undefined') {
        return (<><div class="playoff-wrapper news-page-wrapper">
            <div class="playoff-group" id="group5">
                <div class="playoff-group" id="group9">
                    <div class="playoff-group" id="group8">
                        <div class="playoff-group" id="group7">
                            <div class="playoff-group" id="group3">
                                <div class="playoff-group" id="group1">
                                    <PlayoffCard team1Score={playoff[0].team1Score} team2Score={playoff[0].team2Score} team1Logo={playoff[0].team1.logo} team2Logo={playoff[0].team2.logo} team1Name={playoff[0].team1.name} team2Name={playoff[0].team2.name} team1Id={playoff[0].team1.id} team2Id={playoff[0].team2.id} />
                                    <PlayoffCard team1Score={playoff[1].team1Score} team2Score={playoff[1].team2Score} team1Logo={playoff[1].team1.logo} team2Logo={playoff[1].team2.logo} team1Name={playoff[1].team1.name} team2Name={playoff[1].team2.name} team1Id={playoff[1].team1.id} team2Id={playoff[1].team2.id} />
                                </div>
                                <Bracket id="bracket1" dir={true} />
                                <PlayoffCard team1Score={playoff[4].team1Score} team2Score={playoff[4].team2Score} team1Logo={playoff[4].team1.logo} team2Logo={playoff[4].team2.logo} team1Name={playoff[4].team1.name} team2Name={playoff[4].team2.name} team1Id={playoff[4].team1.id} team2Id={playoff[4].team2.id} />
                            </div>
                            <div class="playoff-group" id="group6">
                                <div class="playoff-group" id="group2">
                                    <PlayoffCard team1Score={playoff[2].team1Score} team2Score={playoff[2].team2Score} team1Logo={playoff[2].team1.logo} team2Logo={playoff[2].team2.logo} team1Name={playoff[2].team1.name} team2Name={playoff[2].team2.name} team1Id={playoff[2].team1.id} team2Id={playoff[2].team2.id} />
                                    <PlayoffCard team1Score={playoff[3].team1Score} team2Score={playoff[3].team2Score} team1Logo={playoff[3].team1.logo} team2Logo={playoff[3].team2.logo} team1Name={playoff[3].team1.name} team2Name={playoff[3].team2.name} team1Id={playoff[3].team1.id} team2Id={playoff[3].team2.id} />
                                </div>
                                <Bracket id="bracket2" dir={true} />
                                <PlayoffCard team1Score={playoff[5].team1Score} team2Score={playoff[5].team2Score} team1Logo={playoff[5].team1.logo} team2Logo={playoff[5].team2.logo} team1Name={playoff[5].team1.name} team2Name={playoff[5].team2.name} team1Id={playoff[5].team1.id} team2Id={playoff[5].team2.id} />
                            </div>
                        </div>
                        <Bracket id="bracket3" dir={true} />
                        <PlayoffCard team1Score={playoff[6].team1Score} team2Score={playoff[6].team2Score} team1Logo={playoff[6].team1.logo} team2Logo={playoff[6].team2.logo} team1Name={playoff[6].team1.name} team2Name={playoff[6].team2.name} team1Id={playoff[6].team1.id} team2Id={playoff[6].team2.id} />
                        <Follow id="follow1" />
                        <PlayoffCard team1Score={playoff[6].team1Score} team2Score={playoff[6].team2Score} team1Logo={playoff[6].team1.logo} team2Logo={playoff[6].team2.logo} team1Name={playoff[6].team1.name} team2Name={playoff[6].team2.name} team1Id={playoff[6].team1.id} team2Id={playoff[6].team2.id} />
                    </div>
                    <div class="playoff-group" id="group4">
                        <PlayoffCard team1Score={playoff[6].team1Score} team2Score={playoff[6].team2Score} team1Logo={playoff[6].team1.logo} team2Logo={playoff[6].team2.logo} team1Name={playoff[6].team1.name} team2Name={playoff[6].team2.name} team1Id={playoff[6].team1.id} team2Id={playoff[6].team2.id} />
                        <Line />
                        <PlayoffCard team1Score={playoff[6].team1Score} team2Score={playoff[6].team2Score} team1Logo={playoff[6].team1.logo} team2Logo={playoff[6].team2.logo} team1Name={playoff[6].team1.name} team2Name={playoff[6].team2.name} team1Id={playoff[6].team1.id} team2Id={playoff[6].team2.id} />
                    </div>
                </div>
                
            </div>
        </div></>);
    } else {
        <div class="status-error">Нет данных</div>
    }
};
/*                {playoff.map((card, index) => (
                    <PlayoffCard team1Score={card.team1Score} team2Score={card.team2Score} team1Logo={card.team1.logo} team2Logo={card.team2.logo} team1Name={card.team1.name} team2Name={card.team2.name} team1Id={card.team1.id} team2Id={card.team2.id}/>
                ))}*/

export default Playoff;