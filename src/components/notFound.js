import {useNavigate} from "react-router-dom";

const NotFound = () => {

 let navigate = useNavigate()

  return (
    <div style={{marginTop: '3%', height: "100vh"}}>
      <div style={{padding: '20%', textAlign: "center"}}>
        <p class='title is-1'> 404 - Not Found </p>
        <button class={"button is-primary"} onClick={()=> navigate("/")}>Back to Home</button>
        </div>
    </div>
  )
}

export default NotFound