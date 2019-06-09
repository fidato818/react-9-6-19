import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';

class Signup extends React.Component {
    state = {
        todos: [],
        name: ''
    }

    async componentDidMount() {
        this.props.update_todos();

        if(this.props.user && this.props.user.name) {
            this.props.afterLogin();
        }
    }

    login() {
        
        //firebase api
        
        const user = { 
            name: '', 
            age: '', 
            // profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        }



        console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        this.props.afterLogin();
    }
    handleChange(event){
        this.setState({
            name: event.target.value
        })
    }
    render() {
        const { todos } = this.props;

        return (
            <div>
                <h1>Signup</h1>
                <input placeholder="Full name" value={this.state.name} onChange={this.handleChange.bind(this)} /><br/>
                <input placeholder="Gender" /><br/>
                <input placeholder="Age" /><br/>
                <input placeholder="Country" /><br/>
                <input placeholder="City" /><br/>
                <input placeholder="Email" /><br/>
                <input placeholder="Password" /><br/>
                <input placeholder="Confrim Password" /><br/>
                <button onClick={this.login.bind(this)}>Signup</button>

                {todos.map(elem => {
                    return <h1>{elem.text}</h1>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user)),
        update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
