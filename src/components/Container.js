import React from 'react';
import axios from 'axios';


import PollContainer from './PollContainer';
import Error404 from './Error404';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: []
        }
    }
    componentDidMount () {
        axios.get('http://localhost:5500/poll/')
            .then (response => {
                this.setState({ polls: response.data })
            })
            .catch ( (err) => { console.log(err) })
    }
    render() {
        // console.log(this.state.polls)
    return (
        <div className="ContainerSec">

            <div className="text-center pt-3">
                {/* Home 
                Trending 
                Voted  */}
                <h1 className="heading">Polls</h1>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    {
                        ( this.state.polls.length === 0 )?
                            <Error404 />
                        :
                            this.state.polls.map(poll => {
                                // console.log(poll)
                                return(
                                    <PollContainer key={poll._id} id={poll._id} question={poll.question} options={poll.options} />
                                )
                            })
                    }
                    
                    
                </div>
            </div>
        </div >
    )
    }
}

export default Container;
