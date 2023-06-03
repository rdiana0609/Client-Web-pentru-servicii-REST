
// import React from  'react';
// import './UserApp.css'

// function UserRow({user, deleteFunc}){
//     function handleDelete(event){
//         console.log('delete button pentru '+user.id);
//         deleteFunc(user.id);
//     }
//     return (
//         <tr>
//             <td>{user.id}</td>
//             <td>{user.distance}</td>
//             <td>{user.style}</td>
//             <td>{user.noOfParticipants}</td>
//             <td><button  onClick={handleDelete}>Delete</button></td>
//         </tr>
//     );
// }


// /*class UserRow extends React.Component{

//     handleDelete=(event)=>{
//         console.log('delete button pentru '+this.props.user.id);
//         this.props.deleteFunc(this.props.user.id);
//     }

//     render() {
//         return (
//             <tr>
//                 <td>{this.props.user.id}</td>
//                 <td>{this.props.user.name}</td>
//                 <td><button  onClick={this.handleDelete}>Delete</button></td>
//             </tr>
//         );
//     }
// }
// */

// export default function UserTable({users, deleteFunc}){
//     console.log("In UserTable");
//     console.log(users);
//     let rows = [];
//    // let functieStergere=deleteFunc;
//     users.forEach(function(user) {
//         rows.push(<UserRow user={user}  key={user.id} deleteFunc={deleteFunc} />);
//     });
//     return (
//         <div className="UserTable">

//             <table className="center">
//                 <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Diastanta</th>
//                     <th>Categorie Varsta</th>
//                     <th>NoOfParticipants</th>
//                 </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>

//         </div>
//     );
// }

// /*class UserTable extends React.Component {
//     render() {
//         let rows = [];
//         let functieStergere=this.props.deleteFunc;
//         this.props.users.forEach(function(user) {

//             rows.push(<UserRow user={user}  key={user.id} deleteFunc={functieStergere} />);
//         });
//         return (<div className="UserTable">

//             <table className="center">
//                 <thead>
//                 <tr>
//                     <th>Username</th>
//                     <th>Name</th>

//                     <th>Actions</th>
//                 </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>

//             </div>
//         );
//     }
// }

// export default UserTable;*/
import React from 'react';
import './UserApp.css';

function UserRow({ user, deleteFunc }) {
  function handleDelete(event) {
    console.log('delete button for ' + user.id);
    deleteFunc(user.id);
  }

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.distance}</td>
      <td>{user.style}</td>
      <td>{user.noOfParticipants}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default function UserTable({ users, deleteFunc }) {
  let rows = [];
  users.forEach(function (user) {
    rows.push(<UserRow user={user} key={user.id} deleteFunc={deleteFunc} />);
  });

  return (
    <div className="UserTable">
      <table className="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Distanta</th>
            <th>Categorie Varsta</th>
            <th>NoOfParticipants</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}