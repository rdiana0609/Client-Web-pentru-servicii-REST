
import React, {useEffect} from 'react';
import { useState } from 'react';
import UserTable from './UserTable.jsx';
import './UserApp.css'
import UserForm from "./UserForm.jsx";
import {GetUsers, DeleteUser, UpdateUser,AddUser} from './utils/rest-calls'


export default function UserApp(){
    // const [users, setUsers] = useState([""])
	const [users, setUsers] = useState([{
        "id": 39,
        "distance": "SHORT",
        "style": "COPII",
        "noOfParticipants": 10
      }]);
    //const [users, setUsers] = useState([]);

	function addFunc(user){
		console.log('inside add Func '+user);
		AddUser(user)
			.then(res=> GetUsers())
			.then(users=>setUsers(users))
			.catch(erorr=>console.log('eroare add ',erorr));
	}
    function updateFunc(user) {
        console.log('update func', user);
        UpdateUser(user)
          .then(res => GetUsers())
          .then(users => setUsers(users))
          .catch(error => console.log('error update', error));
      }
	function deleteFunc(user){
		console.log('inside deleteFunc '+user);
		DeleteUser(user)
			.then(res=> GetUsers())
			.then(users=>setUsers(users))
			.catch(error=>console.log('eroare delete', error));
	}
    // export function deleteFunc(user) {
    //     return fetch(`${BASE_URL}/contest/contests/39`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': 'http://localhost:5173',
    //       },
    //       body: JSON.stringify(user),
    //     })
    //       .then(response => response.json())
    //       .catch(error => console.log('Error deleting user:', error));
    //   }
    // useEffect(()=>{
    //     console.log('use effect');
    //     GetContests().then(users=>setShows(users));
    //   },[])
	useEffect(()=>{
		console.log('inside useEffect')
		GetUsers().then(users=>setUsers(users));},[]);

	return (<div className="UserApp">
		<h1>  </h1>
		<UserForm addFunc={addFunc} updateFunc={updateFunc}/>
		<br/>
		<br/>
		<UserTable users={users} deleteFunc={deleteFunc}/>
	</div>);
}
/*
class UserApp extends React.Component{
    constructor(props){
        super(props);
             this.state={users:[{"passwd":"maria","name":"Marinescu Maria","id":"maria"}]}
        //deleteFunc:this.deleteFunc.bind(this);
         //addFunc:this.addFunc.bind(this);
        console.log('UserApp constructor')
    }

    addFunc=(user)=>{
        console.log('inside add Func '+user);
        AddUser(user)
            .then(res=> GetUsers())
            .then(users=>this.setState({users}))
            .catch(erorr=>console.log('eroare add ',erorr));
    }


    deleteFunc=(user)=>{
        console.log('inside deleteFunc '+user);
        DeleteUser(user)
            .then(res=> GetUsers())
            .then(users=>this.setState({users}))
            .catch(error=>console.log('eroare delete', error));
    }


    componentDidMount(){
        console.log('inside componentDidMount')
        GetUsers().then(users=>this.setState({users}));
    }

    render(){
        return(
            <div className="UserApp">
                <h1>Chat User Management</h1>
                <UserForm addFunc={this.addFunc}/>
                <br/>
                <br/>
                 <UserTable users={this.state.users} deleteFunc={this.deleteFunc}/>
            </div>
        );
    }
}

export default UserApp;*/
