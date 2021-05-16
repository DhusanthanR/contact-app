import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name : "",
        email : "",
    };
    onChangeName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    onChangeEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        this.props.history.push("/"); 
    }

    render() {
        return (
            <div className="ui main" style={{marginTop:'50px'}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label class="form-label">Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div className="field">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>
                    <button class="btn btn-primary">Add</button>
                </form>
                
            </div>
        );
    }
}

export default AddContact;