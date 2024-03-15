const respuesta1 = prompt ("1.-¿Eres bellisimo/a?")
const sanitize = respuesta1.trim().toLocaleLowerCase()
const isAfirmative = 'si'
let response = 'no te creo'

if(sanitize === isAfirmative){
    response = 'Ciertamente'
}  

console.log(response)

let r2 = prompt("2.-Elije un numero")

let resultado = r2%2;

if(resultado===0){
    console.log("Su número es divisible entre 2")
} else{
    console.log("Su número no es divisible entre 2")
}

let r3 = prompt("3.-Elije un numero")

let resultado2 = r3%2;

if(resultado2===0){
    alert("Su numero es par")
} else{
    alert("Su numero es inpar")
}

let r4 = prompt ("4.-Digite su numero de cliente")

if(r4==1000){
    console.log("Ganaste el premio mayor")
} else{
    console.log("Lo sentimos sigue participando")
}

let r5 = prompt("5.-Digite un numero")
let r6 = prompt("5.-Digite otro numero")

if(r5>r6){
    console.log(r6 + ' Es menor que ' + r5) 
}

if(r5<r6){
    console.log(r5 + ' Es menor que ' + r6)
}

let r7 = prompt("6.-Digite un numero")
let r8 = prompt("6.-Digite un numero")
let r9 = prompt("6.-Digite un numero")

if (r7 > r8 && r7 > r9){
    console.log(r7 + " Es el numero mayor")
}

if (r8 > r7 && r8 > r9){
    console.log(r8 + " Es el numero mayor")
}

if (r9 > r7 && r9 > r8){
    console.log(r9 + " Es el numero mayor")
}

if(r7 === r8){
    console.log(r7 + " y " + r8 + " son iguales")
}

if(r7 === r9){
    console.log(r7 + " y " + r9 + " son iguales")
}

if(r8 === r9){
    console.log(r8 + " y " + r9 + " son iguales")
}


const r10 = prompt("7.-Ingresa un dia de la semana")

const r11 = r10.trim().toLocaleLowerCase()
const islun = "lunes"
const ismar = "martes"
const ismie = "miercoles"
const isjue = "juves"
const isvie = "viernes"
const issab = "sabado"
const isdom = "domingo"

if(r11 === islun){
    console.log("Tenga buen inicio de semana")
}
if(r11 === ismar){
    console.log("Ya es martes casi miercoles pegandole a jueves redondeando a viernes, Tu puedes!")
}
if(r11 === ismie){
    console.log("Recuerda que la paciencia es virtud de sabios")
}
if(r11 === isjue){
    console.log("Feliz jueves 👍")
}
if(r11 === isvie){
    console.log("YA ES VIERNESSSSS!!!!")
}
if(r11 === issab){
    console.log("Bienvenido al sabado de flojera")
}
if(r11 === isdom){
    console.log("Recuerda dormir temprano")
}



const r12 = prompt("8.-Ingrese la calificacion")
if(r12>=1 && r12<=10){
    if(r12<6){
        console.log("Reprobado")
    }
    if(r12>=6 && r12<=8)
    console.log("Regular")
    if(r12==1019){
        console.log("Bien")
    }
    if(r12==10){
        console.log("Exlente")
    }
}else{
    console.log("Error")
}
    

const r13 = prompt("9.-Selseccione el topping que con el que desee acompañar su helado El helado sin topping cuesta 50 MXN. El topping de oreo cuesta 10 MXN. El topping de KitKat cuesta 15 MXN. El topping de brownie cuesta 20 MXN.")
const r14 = r13.trim().toLocaleLowerCase()
let precio = 50
const ore = "oreo"
const kit = "kitkat"
const bro = "brownie"

if(r14===ore || r14===kit || r14===bro){
    if(r14===ore){
        precio = precio + 10
        console.log ("El precio de su healdo sera de: " + precio)
        console.log(ore)
    }
    
    if(r14===kit){
        precio = precio + 15
        console.log ("El precio de su healdo sera de: " + precio)
    }
    
    if(r14===bro){
        precio = precio + 20
        console.log ("El precio de su healdo sera de: " + precio)
    }
}else{
    console.log("no tenemos este topping, lo sentimos. El precio de su healdo sera de: " + precio)
}

const r15 = prompt("10.-Cual de nuestros niveles te interesa? Course: $4999 MXN. Carrera $3999 MXN. Master: $2999 MXN")
const r16 = r15.trim().toLocaleLowerCase()
let colegiatura = 0
let total = 0

if(r16==="course"){
    colegiatura = colegiatura + 4999 * 2
}
if(r16==="carrera"){
    colegiatura = colegiatura + 3999 * 6
}
if(r16==="Master"){
    colegiatura = colegiatura + 2999 * 12
}
const r17 = prompt("Cuentas con alguna beca? Beca Facebook: 20% de descuento. Beca Google: 15% de descuento. Beca Jesua: 50% de descuento.")
const r18 = r17.trim().toLocaleLowerCase()

if(r18==="facebook"){
    total = colegiatura * .20
    colegiatura = colegiatura - total
}
if(r18==="google"){
    total = colegiatura * .15
    colegiatura = colegiatura - total
}
if(r18==="jesua"){
    total = colegiatura * .50
    colegiatura = colegiatura - total
}

console.log("Por Cours de duracion de 2 meses el total sera de: " + colegiatura ) 


const r19 = prompt("Que veiculo usaste? coche, moto o autobus?")
const r20 = r19.trim().toLocaleLowerCase()
const r21 = prompt("Cuantos kilometros recorriste?")
const r22 = prompt("Cuantos litros de combustible uaste?")
let pagar = 0

if(r20==="coche"){
    pagar = r21 * .20
}
if(r20==="moto"){
    pagar = r21 * .10
}
if(r20==="autobus"){
    pagar = r21 * .5
}

if(r22<=100){
    pagar + 5
} else if(r22>100){
    pagar + 10
}

console.log ("El total a pagar es: $" + pagar)




