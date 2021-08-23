import React from 'react';
import FunctionComponent from './function-component';
import BasicComponent from './react-basic-component';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            message: this.props.message
        }
    }

    


    render() {
        return(
            <>
                <h1>This is the navbar!</h1>
                <Link className="NavbarLink" to="/">Home    </Link>
                <Link className="NavbarLink" to="/functionComponent">    Function</Link>

                <Switch>
                    <Route exact path="/">
                        <BasicComponent />
                    </Route>
                    <Route exact path="/functionComponent">
                        <FunctionComponent {...this.props} />
                    </Route>
                </Switch>
            </>
        )
    }
}