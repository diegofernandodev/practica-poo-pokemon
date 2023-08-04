import { Pokemon } from "./pokemon";
import { TiposPokemon } from "./tipos";

export class PokemonFuego extends Pokemon {
  constructor(
    id: number,
    nombre: string,
    tipo: Array<string>,
    movimientos: Array<string>,
    ataque: number,
    defensa: number,
    velocidad: number
  ) {
    super(id, nombre, tipo, movimientos, ataque, defensa, velocidad);
  }
  public tipoDeAtaque(ataque: string) {
    if (ataque === TiposPokemon.Tipos.FUEGO) {
      console.log(`${this.getPokemonNombre()} ha quemado al oponente`);
    } else {
      console.log(`${this.getPokemonNombre()} ha atacado al oponente`);
    }
  }
}