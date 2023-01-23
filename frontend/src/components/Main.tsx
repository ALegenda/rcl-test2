import React, {
    FC,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import Docs from './Docs';
import Home from './Home';
import Match from './Match';
import Matches from './Matches';
import NotFound from './NotFound';
import Player from './Player';
import Players from './Players';
import Report from './Report';
import Reports from './Reports';
import Team from './Team';
import Teams from './Teams';

import {
    Container,
} from './helpers/other';

const Main: FC = () => {
    return (
        <Container>
            <Routes>
                <Route
                    path={'/'}
                    element={<Home/>}
                />
                <Route
                    path={'/players'}
                    element={<Players/>}
                />
                <Route
                    path={'/players/:id'}
                    element={<Player/>}
                />
                <Route
                    path={'/news'}
                    element={<Reports/>}
                />
                <Route
                    path={'/news/:id'}
                    element={<Report/>}
                />
                <Route
                    path={'/teams'}
                    element={<Teams/>}
                />
                <Route
                    path={'/teams/:id'}
                    element={<Team/>}
                />
                <Route
                    path={'/games'}
                    element={<Matches/>}
                />
                <Route
                    path={'/games/:id'}
                    element={<Match/>}
                />
                <Route
                    path={'/docs'}
                    element={<Docs/>}
                />
                <Route
                    path={'*'}
                    element={<NotFound/>}
                />
            </Routes>
        </Container>
    );
};

export default Main;
