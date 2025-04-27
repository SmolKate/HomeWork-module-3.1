import axios, { AxiosError } from 'axios'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface ResponceDataItem {
    postId: number
    id: number
    email: string
    body: string
}

const getData = (url: string) => {
    const response = axios.get<ResponceDataItem[]>(url)  
    return response
}

getData(COMMENTS_URL)
  .then(data => {
    data.data.forEach(({ id, email }) => {
        console.log(`ID: ${id}, Email: ${email}`)
  })})
  .catch((error: AxiosError) => {
    console.error('error: ', error.message)
  })

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */