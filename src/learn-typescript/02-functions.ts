function sayHello (nombre?: string): string | null {
  if (!nombre) return null
  return `Hello ${nombre}`
}

//console.log(sayHello("seba"))
//console.log(sayHello())

const getTodo = async (): Promise<{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}> => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await req.json()
  return data
}

/* getTodo()
  .then(respuesta => {
    console.log(respuesta)
  })

*/