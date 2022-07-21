const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(`${key}`, value)
  } catch (error) {
    console.log(error)
  }
}

export default setLocalStorage