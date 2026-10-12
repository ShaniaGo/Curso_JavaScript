
// Aca se esta trabajando la abstraccion 
class empleados {
    constructor (name, secondName, id, phone){
        if(new.target === empleados){
            throw new Error (`No se puede instanciar esta clase`)  
            //Al agregar este error evito que se instancie directamente la clase padre, 
            // permitiendo que solo sea utilizada a través de la herencia por sus subclases   
        }
        this.name = name
        this.secondName = secondName
        this.id = id
        this.phone = phone
    }

    empleadoFijo(){
        throw new Error(`Epa aqui no es, crea una subclase`)
    }

    empleadoContratado(){
         throw new Error(`Epa aqui no es, crea una subclase`)
    }
}

//Aca se esta viendo todo lo que es el tema de las herencias con el metodo extends
class Fijo extends empleados {
    empleadoFijo(horas){
        const salarioHora = 10;
        this.horas = horas
        let sueldoMensual = this.horas * salarioHora

        console.log(`Sr(a) ${this.name} Cobrara este mes ${sueldoMensual}$`)
    } // aca se esta implementando el polimorfismo ya que estoy tomando una funcion de la clase padre y la estoy modificando para que realice una accion en especifico
}

class Contratado extends empleados {
      empleadoContratado(horas){
        const salarioHora = 7;
        this.horas = horas
        let sueldoMensual = this.horas * salarioHora

        console.log(`Sr(a) ${this.name} Cobrara este mes ${sueldoMensual}$`)
    } // aca se esta implementando el polimorfisma ya que estoy tomando una funcion de la clase padre y la estoy modificando para que realice una accion en especifico
}

const fijo = new Fijo(`Shania`, `Gomez`, 21332453, 41478989) // Ejemplo de que se hereda los campos que solicita la clase
//console.log(fijo)
fijo.empleadoFijo(40)

const contratado = new Contratado(`Jim`, `Byrne`, 2345443, 3455634235) // Ejemplo de que se hereda los campos que solicita la clase
//console.log(contratado)
contratado.empleadoContratado(50)