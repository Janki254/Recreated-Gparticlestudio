import AOS from 'aos';
import {useEffect} from 'react';

import AllRoutes from './routes/AllRoutes';

const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <AllRoutes />;
};

export default App;
