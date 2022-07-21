import { useState } from "react"

const Login = ({ handleLogIn, user }) => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (<>
    <div class="box columns">
      <div class="column is-half is-offset-one-quarter">

        <p class="title is-3">Ingresar</p>
        <form onSubmit={(e) => (e.preventDefault(), handleLogIn(email, pass))}>
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
              <button class="button is-link" >Enviar</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </>
  )
}
export default Login