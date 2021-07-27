import axios from 'axios'

const getTodos = async () => {
  const { data } = await axios.get('http://localhost:5000/todos')
  return data
}

export default getTodos
