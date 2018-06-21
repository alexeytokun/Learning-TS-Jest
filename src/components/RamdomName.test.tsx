import { shallow } from 'enzyme';
import * as React from 'react';
import RandomName from './RandomName';

const callback = () => { return };

it('renders without crashing', () => {
    shallow(<RandomName setName={callback}/>);
});

it('should match snapshot', () => {
    const randomName = shallow(<RandomName setName={callback}/>);
    expect(randomName).toMatchSnapshot();
});

it('should handle button click correctly', (done) => {
    const mockCb = jest.fn();
    const randomName = shallow(<RandomName setName={mockCb}/>);
    randomName.find('button').simulate('click');
    setTimeout(() => {
        expect(mockCb.mock.calls.length).toBe(1);
        expect(typeof mockCb.mock.calls[0][0]).toBe('string');
        done();
    }, 1000);
});

