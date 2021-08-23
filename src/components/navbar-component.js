import React from 'react';

export class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'local prop default name',
            message: 'This is the local prop default message.'
        }
    }

    


    render() {
        return(
            <>
                <h1>This is the navbar!</h1>
                <p>Hello, {this.state.name}. {this.state.message}</p>
            </>
        )
    }
}