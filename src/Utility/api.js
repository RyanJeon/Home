/*
    API for the server requests.
*/
import axios from 'axios';
import querystring from 'querystring';


var baseEndPoint = "https://ryanbacl.herokuapp.com/"; //Base end point



function gettest(requestTest){
    console.log("GETTEST");
    //http://localhost:8000/send/?data=test8
    console.log( axios.get(baseEndPoint + "send/?data="+ requestTest));
    return axios.get(baseEndPoint + "send/?data="+ requestTest);
}

export {gettest}