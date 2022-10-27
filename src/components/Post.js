import {useState} from 'react';
import moment from 'moment';
import { addLike } from '../service/data-service';

function Post({createdAt,autor,text,comments,image,likes,id}) {
  const [like, setlike] = useState(likes);
  // const [boo, setboo] = useState(false);

  function pluslike(){
    // if (boo === false) {
    //   setlike(like+1)
    //   setboo(true); 
    // }else{
    //   if (like>0) {
    //     setlike(like-1);
    //     setboo(false)
    //   }
    // }
    let token = (localStorage.getItem("token"));
    setlike(like+1)
    addLike(id,token);
  }
  

  return (
    <div className="col-lg-3 col-md-12 col-sm-12 mt-2">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body row">
          <div className="col-md-6 col-lg-6 col-sm-6">
              <span style={{ opacity: "50%" }}>
                { 
                // createdAt.substring(10,8) 
                moment([createdAt.substring(0,4),createdAt.substring(7,5), createdAt.substring(10,8)]).fromNow() 
                }
            </span>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 text-end">
            <span onClick={pluslike} className="badge bg-danger">
              <i className="fas fa-heart"></i> {like}
            </span>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 mt-2">
            <p className="card-text">{autor}</p>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 mt-2">
            <p className="card-text">{text}</p>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 mt-3">
            <span style={{ opacity: "50%" }}>
              <i className="fas fa-comment"></i> Comments ({comments}
              )
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
