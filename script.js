console.log("probando")

// document.querySelector("h1").innerText = "Adios"

const myPageNode = document.querySelector("#root")
const root = ReactDOM.createRoot(myPageNode) // donde estará ubicado el dom virtual

let username = "Jorge"

// const someInfo = React.createElement("div", {
//   children: `Hola mi nombre es ${username}`
// })

// const someInfo = React.createElement("div", {
//   children: [
//     React.createElement("h3", { 
//       children: `Hola mi nombre es ${username}`
//     }),
//     React.createElement("p", { 
//       children: `Bienvenidos a mi pagina Legacy de React`
//     }),
//   ]
// })


// JSX => JS y XML
// const someInfo = (
//   <div>
//     <h1>Hola mi nombre es {username}</h1>
//     <p>Bienvenidos a mi pagina Legacy de React</p>
//     <p>la fecha de hoy es: {new Date().toDateString()}</p>
//   </div>
// )


// Components => PascalCasing
function RenderSomething() {

  // hacer mucha logica de codigo

  // retornar un JSX
  return (
    <div>
      <h1>Hola mi nombre es {username}</h1>
      <p>Bienvenidos a mi pagina Legacy de React</p>
      <p>la fecha de hoy es: {new Date().toDateString()}</p>
    </div>
  )
}


// root.render( RenderSomething() )
root.render( 
  <div>
    <RenderSomething />
    <RenderSomething />
    <RenderSomething />
  </div>
 )
