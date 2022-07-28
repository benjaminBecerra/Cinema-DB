const Notification = ({ contenido, setStatus }) => {

  return (
    <div class="notification is-success">
      <button class="delete" onClick={() => setStatus("")}></button>
      {contenido}
    </div>
  )
}

export default Notification