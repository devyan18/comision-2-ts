// primitivos
let str: string = "Hello World";
let num: number = 42;
let big: bigint = 42n;
let bool: boolean = true;
let undef: undefined = undefined;
let nul: null = null;
let sym: symbol = Symbol("foo");

// estructurados
let obj: object = {};
let persona: {
  nombre: string,
  friends: { nombre: string }[]
} = {
  nombre: "hola",
  friends: [{
    nombre: "juan"
  }]
}

let strArr: string[] = ["asdas", "hola"]
let nysArr: Array<string | number> = ["asdas", 123123]
let tupla: [string, boolean]

tupla = ["true", true]

tupla.push(false)