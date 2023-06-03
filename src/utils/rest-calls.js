
import {CHAT_USERS_BASE_URL} from './consts';

function status(response) {
    console.log('response status '+response.status);
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

export function GetUsers(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let myInit = { method: 'GET',
        headers: headers,
         mode: 'cors'
    };
    let request = new Request(CHAT_USERS_BASE_URL, myInit);

    console.log('Inainte de fetch GET pentru '+CHAT_USERS_BASE_URL)

    return fetch(request)
        .then(status)
        .then(json)
        .then(data=> {
            console.log('Request succeeded with JSON response', data);
            return data;
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });

}

export function DeleteUser(username){
    console.log('inainte de fetch delete')
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    let antet = { method: 'DELETE',
        headers: myHeaders,
       mode: 'cors'
    };

    const userDelUrl=CHAT_USERS_BASE_URL+'/'+username;
    console.log('URL pentru delete   '+userDelUrl)
    return fetch(userDelUrl,antet)
        .then(status)
        .then(response=>{
            console.log('Delete status '+response.status);
            return response.text();
        }).catch(e=>{
            console.log('error '+e);
            return Promise.reject(e);
        });

}
// export function DeleteUser(id) {
//     console.log('inainte de fetch delete')
//     let myHeaders = new Headers();
//     myHeaders.append("Accept", "application/json");

//     let antet = { method: 'DELETE',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:5173',
//       },
//        mode: 'cors'
//     };

//     const del=CHAT_USERS_BASE_URL+id;
//     return fetch(del,antet)
//     .then(status)
//     .then(response=>{
//         return response.text();
//     }) .catch(error=>{
//         console.log("Error"+error);
//         return Promise.reject(error);
//     });
//   }

//   export function DeleteContests(id){
//     console.log('inainte de fetch delete')
//     let myHeaders = new Headers();
//     myHeaders.append("Accept", "application/json");

//     let antet = { method: 'DELETE',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:5173',
//       },
//        mode: 'cors'
//     };

//     const del=CHAT_USERS_BASE_URL+id;
//     return fetch(del,antet)
//     .then(status)
//     .then(response=>{
//         return response.text();
//     }) .catch(error=>{
//         console.log("Error"+error);
//         return Promise.reject(error);
//     });
// }

export function UpdateUser(user){
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-Type","application/json");
    let antent={method:"PUT",
    headers: myHeaders,
    mode:'cors',
    body:JSON.stringify(user)
    };
    let request = new Request(CHAT_USERS_BASE_URL+user.id, antent);
    return fetch(request)
        .then(status)
        .then(response=>{
            return response.text();
        }) .catch(error=>{
            console.log("Error"+error);
            return Promise.reject(error);
        });
}

export function AddUser(user){
    console.log('inainte de fetch post'+JSON.stringify(user));

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type","application/json");

    let antet = { method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(user)};

    return fetch(CHAT_USERS_BASE_URL,antet)
        .then(status)
        .then(response=>{
            return response.text();
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });


}

