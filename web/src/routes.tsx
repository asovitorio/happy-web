import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    
} from "react-router-dom";
import Lading from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanages from './pages/Orphanage'
import CreateOrphaneges from './pages/CreateOrphanage'
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Lading} />
                <Route path='/app' component={OrphanagesMap} />
                <Route path='/orphanages/create' component={CreateOrphaneges} />
                <Route path='/orphanages/:id' exact component={Orphanages} />
            </Switch>
        </BrowserRouter>
    )
}