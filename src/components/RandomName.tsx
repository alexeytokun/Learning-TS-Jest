import axios from 'axios';
import * as React from 'react';
import { API_URL } from '../constants';

export interface RandomNameProps {
    setName: (name: string) => any;
}

class RandomName extends React.Component <RandomNameProps, object> {
    public render() {
        return (
            <button onClick={this.handleClick}>Random Name</button>
        );
    }

    private capitalizeFirstLetter = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
};

    private handleClick = () => {
        const { setName } = this.props;
        axios(API_URL)
            .then(res => res.data.results[0].name.first)
            .then(res => this.capitalizeFirstLetter(res))
            .then(res => setName(res))
            .catch(err => console.log(err))
    }
}

export default RandomName;