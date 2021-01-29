// Creando clases, atributos, objetos, metodo e instanciando
class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}`;
  }
  // Metodo
  verInfo() {
    document.write(this.info + "<br>");
  }
}

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = raza;
  }
  static ladrar() {
    alert("WAW!");
  }
}

const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

// llamando al metodo

Perro.ladrar();
gato.verInfo();
pajaro.verInfo();
