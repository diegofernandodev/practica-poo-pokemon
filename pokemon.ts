export class Pokemon {
    private id: number;
    private nombre: string;
    private tipo: Array<string>;
    private movimientos: Array<string>;
    private ataque: number;
    private defensa: number;
    private velocidad: number;
    constructor(
      id: number,
      nombre: string,
      tipo: Array<string>,
      movimientos: Array<string>,
      ataque: number,
      defensa: number,
      velocidad: number
    ) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.movimientos = movimientos;
      this.ataque = ataque;
      this.defensa = defensa;
      this.velocidad = velocidad;
    }
    /**
     * toString
   : string[]  */
    public toString(): string[] {
      return [
        `Pokemon ID: ${this.id}`,
        `Pokemon NOMBRE: ${this.nombre}`,
        `Pokemon TIPO: ${this.tipo}`,
        `Pokemon MOVIMIENTOS: ${this.movimientos}`,
        `Pokemon ATAQUE: ${this.ataque}`,
        `Pokemon DEFENSA: ${this.defensa}`,
        `Pokemon VELOCIDAD: ${this.velocidad}`,
      ];
    }
    setPokemonId(id: number) {
      this.id = id;
    }
    setPokemonNombre(nombre: string) {
      this.nombre = nombre;
    }
    setPokemonTipo(tipo: Array<string>) {
      this.tipo = tipo;
    }
    setPokemonMovimientos(movimientos: Array<string>) {
      this.movimientos = movimientos;
    }
    setPokemonAtaque(ataque: number) {
      this.ataque = ataque;
    }
    setPokemonDefensa(defensa: number) {
      this.defensa = defensa;
    }
    setPokemonVelocidad(velocidad: number) {
      this.velocidad = velocidad;
    }
    getPokemonId(): number {
      return this.id;
    }
    getPokemonNombre(): string {
      return this.nombre;
    }
    getPokemonTipo(): Array<string> {
      return this.tipo;
    }
    getPokemonMovimientos(): Array<string> {
      return this.movimientos;
    }
    getPokemonAtaque(): number {
      return this.ataque;
    }
    getPokemonDefensa(): number {
      return this.defensa;
    }
    getPokemonVelocidad(): number {
      return this.velocidad;
    }
    public atacar(movimientos: Array<string>) {
      let random = Math.round(Math.random() * 3);
      console.log(`${this.nombre} usa ${movimientos[random]}`);
    }
    public corre_vuela(tipo: Array<string>) {
      if (tipo[0] === "volador" || tipo[1] === "volador") {
        console.log(
          `${this.nombre} esta volando a una velocidad de ${this.velocidad}`
        );
      } else {
        console.log(
          `${this.nombre} esta corriendo a una velocidad de ${this.velocidad}`
        );
      }
    }
    public tipoDeAtaque(ataque: string) {
      console.log(`El tipo de ataque es ${ataque}`);
    }
  }