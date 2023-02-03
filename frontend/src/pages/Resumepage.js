import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

class Resumepage extends React.Component {
    state = {details: [], }

    componentDidMount(){
        let data;
        axios.get('http://localhost:8000')
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className='resume'>
                {this.state.details.map((output, id) => (
                    <div key={id} className="card">
                        <div>
                            <h2>{output.email}</h2>
                            <h2>{output.nickname}</h2>
                            <h2>{output.first_name}</h2>
                            <h2>{output.last_name}</h2>
                            <h2>{output.direction}</h2>
                            <h2>{output.level}</h2>
                            <h2>{output.price}</h2>
                            <h2>{output.status}</h2>
                            <h2>{output.skills}</h2>
                            <h2>{output.age}</h2>
                            <h2>{output.location}</h2>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Resumepage;