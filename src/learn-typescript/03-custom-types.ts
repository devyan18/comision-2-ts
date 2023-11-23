// TYPES

type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const getTodo2 = async (): Promise<Todo> => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await req.json()
  return data
}

type Car = {
  model: string
  year: number
  brand: string
}

type Person = {
  nombre: string
  age: number
}

type PersonWithCar = Person & Car

type Code = {
  lenguage: string
}

type Programmer = Partial<Person> & Code

const favio: Programmer  = {
  nombre: "favio",
  lenguage: "Javascript",
}

type UUID = `${string}-${string}-${string}`

let id1: UUID = "asdasd-asdasdasa-sdasd"

// ENUMS

enum DAYS {
  LUNES = "lunes",
  MARTES = "martes",
  MIERCOLES = "miercoles",
  JUEVES = "jueves",
  VIERNES = "viernes"
}

let myBirthday: DAYS = DAYS.MIERCOLES


enum ROLES {
  SUPERADMIN,
  ADMIN,
  USER 
}

type User = {
  _id: string,
  username: string,
  role: ROLES
}

const newUser: User = {
  _id: "adfasklhdfajshdf",
  username: "devyan18",
  role: ROLES.SUPERADMIN
}