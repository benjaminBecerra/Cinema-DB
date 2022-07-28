import { Link } from "react-router-dom";

const Footer = () => {

 const handleTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  return (
    <footer style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(0, 209, 177)', marginTop: "5%"}}>
      <Link to="/">
        <img src="https://i.postimg.cc/R0SznM9x/CINEMADB.png" width="112" height="28" alt="" style={{marginTop: '2%'}}/>
      </Link>
    <h3>Desarrollado por Benjamin Becerra</h3>
    <h3>2022 - all rights reserved</h3>
    <button class={"button is-link"} style={{margin: '1%'}} onClick={()=> handleTop()}><strong>Back to top</strong></button>

    </footer>
  )
}

export default Footer