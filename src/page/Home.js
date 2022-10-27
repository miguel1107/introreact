import SearchBar from "../components/SearchBar";
import PostList from "../components/PostLis";
import { useEffect, useState } from "react";
import { getData } from "../service/data-service";

const initialState = [];

function Home({ search, doSearch, token }) {
  const [posts, setposts] = useState(initialState);

  useEffect(() => {
    getData(token).then((data) => {
      window.setTimeout(() => {
        console.log(data);
        setposts(data);
      }, 1000);
    });
  }, []);

  return (
    <div className="Home">
      <div className="col-lg-12 col-md-12 col-xs-12 p-4 mt-5">
        <SearchBar search={search} doSearch={doSearch}></SearchBar>
      </div>
      <div className="col-lg-12 col-md-12 col-xs-12">
        {posts === initialState  ? (
          "Loading.."
        ) : (
          <PostList posts={posts} search={search}></PostList>
        )}
      </div>
    </div>
  );
}

export default Home;
