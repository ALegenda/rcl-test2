import React, {
    FC,
    Suspense,
} from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import {
    RecoilRoot,
} from 'recoil';

import {
    Loading,
} from './components/helpers/other';
import Main from './components/Main';

const App: FC = () => {
    return (
        <RecoilRoot>
            <Suspense
                fallback={
                    <Loading isPage={true}/>
                }
            >
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    );
};

export default App;
