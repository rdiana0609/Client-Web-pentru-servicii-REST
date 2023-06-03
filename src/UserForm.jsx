
// import React from  'react';
// import { useState } from 'react';
// export default function UserForm({addFunc}){

//     const [id, setId] = useState('');
//     const [distance, setDist] = useState('');
//     const [varsta, setVarsta] = useState('');


//    function handleSubmit (event){

//         let user={id: 1,
//         distance: distance,
//         style: varsta,
//         noOfParticipants: 0
//         }
//         console.log('A user was submitted: ');
//         console.log(user);
//          addFunc(user);
//         event.preventDefault();
//     }
//     return(
//     <form onSubmit={handleSubmit}>
//         {/* <label>
//             Id:
//             <input type="text" value={id} onChange={e=>setId(e.target.value)} />
//         </label><br/> */}
//         <label>
//            Categorie Varsta:
//             <input type="text" value={varsta} onChange={e=>setVarsta(e.target.value)} />
//         </label><br/>
//         <label>
//             Distanta:
//             <input type="text" value={distance} onChange={e=>setDist(e.target.value)} />
//         </label><br/>

//         <input type="submit" value="Add user" />
//     </form>);
// }
// /*class UserForm extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {username: '', name:'', passwd:''};

//       //  this.handleChange = this.handleChange.bind(this);
//        // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleUserChange=(event) =>{
//         this.setState({username: event.target.value});
//     }

//     handleNameChange=(event) =>{
//        this.setState({name: event.target.value});
//     }

//     handlePasswdChange=(event) =>{
//         this.setState({passwd: event.target.value});
//     }
//     handleSubmit =(event) =>{

//         let user={id:this.state.username,
//                 name:this.state.name,
//                 passwd:this.state.passwd
//         }
//         console.log('A user was submitted: ');
//         console.log(user);
//         this.props.addFunc(user);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Username:
//                     <input type="text" value={this.state.username} onChange={this.handleUserChange} />
//                 </label><br/>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.name} onChange={this.handleNameChange} />
//                 </label><br/>
//                 <label>
//                     Passwd:
//                     <input type="password" value={this.state.passwd} onChange={this.handlePasswdChange} />
//                 </label><br/>

//                 <input type="submit" value="Add user" />
//             </form>
//         );
//     }
// }
// export default UserForm;*/
import React, { useState } from 'react';

export default function UserForm({ addFunc }) {
  const [distance, setDistance] = useState('');
  const [style, setStyle] = useState('');
  const [noOfParticipants, setNoOfParticipants] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      id:1,
      distance: distance,
      style: style,
      noOfParticipants: 0,
    };

    console.log('A user was submitted: ', user);
    addFunc(user);

    // Reset the form fields
    setDistance('');
    setStyle('');
    setNoOfParticipants('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Distanta:
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <br />
      <label>
        Categorie Varsta:
        <input
          type="text"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
      </label>
      <br />
      {/* <label>
        Numar de participanti:
        <input
          type="number"
          value={noOfParticipants}
          onChange={(e) => setNoOfParticipants(e.target.value)}
        />
      </label> */}
      <br />

      <input type="submit" value="Add " />
    </form>
  );
}