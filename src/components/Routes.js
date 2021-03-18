import React from 'react';
import { Route } from "react-router-dom";
import Registry from "./Registry.js";
import Photos from "./photos";
import Story from './Story'
import Updates from "./update";
import Zoom from "./zoom";
import Carousel from "./Carousel";

const Routes = () => {
    return (
        <div className="Content">
            <Route exact path="/" component={Carousel} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/updates" component={Updates} />
            <Route exact path="/zoom" component={Zoom} />
          </div>
    )
}

export default Routes;
