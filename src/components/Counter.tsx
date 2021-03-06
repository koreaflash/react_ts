import * as React from 'react';

interface CounterProps {
    name: String;
}

interface CounterStates {
    count: number;
}

/*
const Counter: React.FC<CounterProps> = props => {
    const { name } = props;
    return <p>{name} counter</p>
}
*/

class Counter extends React.Component<CounterProps, CounterStates>{
    constructor(props: CounterProps) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        setInterval(this.increase, 1000);
    }

    increase = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;
        return (
            <React.Fragment>
                <h1>{name} counter</h1>
                <div>count value: {count}</div>
            </React.Fragment>
        )
    }
}

export default Counter;