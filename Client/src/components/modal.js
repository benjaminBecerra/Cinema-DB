import ModalCard from "../commons/modalCard"
import { useState, useEffect } from "react"

const Modal = ({ movies }) => {
  const [active, setActive] = useState('is-active')

  useEffect(() => { setActive("is-active") },
    [movies])

  return (
    <div class={`modal ${active}`}>
      <div class="modal-background"></div>
      <div class="modal-content">
        <ModalCard data={movies} setActive={setActive} />
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={() => { setActive("") }}></button>
    </div>
  )
}

export default Modal