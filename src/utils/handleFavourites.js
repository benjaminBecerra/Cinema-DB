import axios from "axios"

const handleFavourites = (data, setUser, user) => {
   let url = "http://localhost:3000/api"

    if(user.favourites.find((mov) => mov.movie_id == data.id)){
    axios.delete(`${url}/user/deletefavs`, 
    {data: {movie_id: `${data.id}`,
     userId: `${user.id}`}})
      .then(()=> axios.get(`${url}/user/search/${user.id}`)
      .then(res=>(localStorage.setItem('user',JSON.stringify(res.data[0])), setUser(res.data[0]))))
    }else{
    axios.post(`${url}/user/favs`, {
      movie_id: data.id,
      userId: user.id,
      movie_media: data.name?"tv":"movie"
    })
      .then(()=> axios.get(`${url}/user/search/${user.id}`)
      .then(res=>(localStorage.setItem('user',JSON.stringify(res.data[0])), setUser(res.data[0]))))}
  }


export default handleFavourites