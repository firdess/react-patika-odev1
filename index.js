import axios from "axios";

const getUsers = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    resolve(user);
  });

};

const getPosts = async (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${user_id}`);
    resolve(post);
  });


};

async function getData(user_id) {
  try {
    const user = await getUsers(user_id);
    const post = await getPosts(user_id);
    const array = { user, 'posts': [post] }
    return array;

  } catch (error) {
    console.log(e)
  }

}
export default getData;