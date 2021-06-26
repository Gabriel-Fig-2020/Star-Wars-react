import React, { Component } from 'react';

const API = 'https://swapi.dev/api/people/'

class StarWars extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        this.fetchStarWars()
    }

    fetchStarWars = () => {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({people: data.results}))
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <ul>
                    {this.state.people && this.state.people.map(person=><li key={person.name}>{person.name}</li>) }
                    </ul>
            </React.Fragment>
        );
    };
};

export default StarWars ;