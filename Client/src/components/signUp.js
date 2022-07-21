import { useState } from "react"
import Notification from "../commons/notification"

const SignUp = ({ handleSignUp, status, setStatus }) => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (<>
    <div class="box columns">
      <div class="column is-half is-offset-one-quarter">
        {status.email ? <Notification contenido={`¡El usuario ${status.email} se ha creado con exito! `} setStatus={setStatus} /> : ""}

        <p class="title is-3">Registrarse</p>

        <form onSubmit={(e) => (e.preventDefault(), handleSignUp(email, pass))}>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input class="input" type="email" placeholder="Ingrese su e-mail" onChange={setEmail} />
            </div>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input class="input" type="password" placeholder="Ingrese su contraseña" onChange={setPass} />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={(e) => (e.preventDefault(), handleSignUp(email, pass))}>Enviar</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </>
  )
}

export default SignUp