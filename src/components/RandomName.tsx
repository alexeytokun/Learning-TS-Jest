import axios from 'axios';
import * as React from 'react';
import { API_URL } from '../constants';

export interface RandomNameProps {
    setName: (name: string) => any;
}

class RandomName extends React.Component <RandomNameProps, object> {
    public render() {
        return (
            <button onClick={this.handleClick}>Set Random Name</button>
        );
    }

    private handleClick = () => {

        const { setName } = this.props;

        axios(API_URL)
            .then(res => setName(res.data.results[0].name.first))
            .catch(err => console.log(err))
    }
}

export default RandomName;