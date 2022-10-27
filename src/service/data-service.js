// import data from "../data/post.json";
import axios from "axios";

export function getData(token) {
  // return new Promise((resolve,reject)=>{
  //     window.setTimeout(()=>{
  //         resolve(data.posts);
  //     },3000)
  // });
  return axios
    .get("https://three-points.herokuapp.com/api/posts", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
}

export function login(username, password) {
  return axios
    .post("https://three-points.herokuapp.com/api/login", {
      username,
      password,
    })
    .then((response) => response.data);
}

export function getProfile(){
  return axios
    .get("https://three-points.herokuapp.com/api/users/613693fc24d622245e104493", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response)=>response.data );
}

export function addLike(id,token){
  return axios
    .post(`https://three-points.herokuapp.com/api/posts/${id}/like`,{}, {
      headers: { authorization: `Bearer ${token}` },
    }).then((response)=>response);
}
