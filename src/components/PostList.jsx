import { useEffect, useState } from "react";
import { getAllPosts } from "../services/PostListService";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      setFilteredPosts(postsArray);
      console.log("Posts set!");
    });
  }, []);

  useEffect(() => {
    const foundPosts = allPosts.filter((post) => {
      return (
        post.Title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.Body?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPosts(foundPosts);
  }, [searchTerm, allPosts]);

  return (
    <div>
      <div>
        <h2>Posts</h2>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {console.log(filteredPosts)}
      {filteredPosts.map((postObj) => {
        return (
          <div className="post" key={postObj.Id}>
            <div>
              <div className="post-info">Title</div>
              <div>{postObj.Title}</div>
            </div>
            <div>
              <div className="post-info">Body</div>
              <div>{postObj.Body}</div>
            </div>
            <div>
              <div className="post-info">Date</div>
              <div>{postObj.PostDate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
