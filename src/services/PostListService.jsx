export const getAllPosts = () => {
  return fetch("http://localhost:8088/posts").then((res) => res.json());
  // .then((data) => {
  //   // console.log(data);
  //   // return data;
  // }
  // );
};
