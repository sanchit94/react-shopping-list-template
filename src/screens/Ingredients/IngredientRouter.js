import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// @TODO instead of screens we'll use views folder soon.

//
// import Home        from './screens/Home/Home';



//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here
class IngredientRouter extends Component {
  render() {
    return (
          <Fragment>

            {/*<Route path='/path'     component={Component} />
            <Route path='/path'         component={Component} />
            <Route path='/path'        component={Component} />
            <Route path='/path' component={Component} />
            */}
          </Fragment>
    );
  }
}



export default IngredientRouter;
