import axios from 'axios';
const instance = axios.create({
 baseURL: 'https://react-my-burger-228f1-default-rtdb.firebaseio.com/'
});

export default instance;