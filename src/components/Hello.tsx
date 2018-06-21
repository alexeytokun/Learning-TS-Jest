import * as React from 'react';
import './Hello.css';
import RandomName from './RandomName';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

// function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }
//
//     return (
//         <div className='hello'>
//             <div className='greeting'>
//                 Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </div>
//     );
// }

class Hello extends React.Component<Props, object> {

    public render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <RandomName setName={this.handleSetName}/>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <span>!</span>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        );
    }

    private handleSetName = (name: string) => {
        console.log(name);
        return name;
    }
}

export default Hello;

function getExclamationMarks(numCharts: number) {
    return Array(numCharts + 1).join('!');
}

