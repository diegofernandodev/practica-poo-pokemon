import { Pokemon } from "./pokemon";
import { PokemonFuego } from "./pokemonFuego";
import { TiposPokemon } from "./tipos";

let charizardMovimientos = [
  "Giro fuego",
  "Tajo aéreo",
  "Ataque ala",
  "Dragoaliento",
];
let charizardTipos = [TiposPokemon.Tipos.VOLADOR, TiposPokemon.Tipos.FUEGO];
let charizard = new Pokemon(
  1,
  "charizard",
  charizardTipos,
  charizardMovimientos,
  60,
  45,
  80
);

console.log(charizard);
console.table(charizard);

charizard.corre_vuela(charizardTipos);
charizard.atacar(charizardMovimientos);
charizard.tipoDeAtaque(TiposPokemon.Tipos.FUEGO);

let BlazikenMovimientos = [
  "Pájaro Osado",
  "Sofoco",
  "Patada Ígnea",
  "Roca Afilada Elite",
];
let BlazikenTipos = [TiposPokemon.Tipos.FUEGO, TiposPokemon.Tipos.LUCHA];
let Blaziken = new PokemonFuego(
  2,
  "Blaziken",
  BlazikenTipos,
  BlazikenMovimientos,
  90,
  85,
  78
);

console.table(Blaziken.toString());
console.table(Blaziken);

Blaziken.atacar(BlazikenMovimientos);
Blaziken.corre_vuela(BlazikenTipos);
Blaziken.tipoDeAtaque(TiposPokemon.Tipos.FUEGO);