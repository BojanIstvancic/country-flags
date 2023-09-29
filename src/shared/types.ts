export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export enum PokemonType {
  WATER = "water",
  FIRE = "fire",
  GRASS = "grass",
  BUG = "bug",
  NORMAL = "normal",
  ELECTRIC = "electric",
  POISON = "poison",
  GROUND = "ground",
  FAIRY = "fairy",
  FIGHTING = "fighting",
  PSYCHIC = "psychic",
}

type Type = {
  slot: number;
  type: {
    name:
      | PokemonType.WATER
      | PokemonType.FIRE
      | PokemonType.GRASS
      | PokemonType.BUG
      | PokemonType.NORMAL
      | PokemonType.ELECTRIC
      | PokemonType.POISON
      | PokemonType.GROUND
      | PokemonType.FAIRY
      | PokemonType.FIGHTING
      | PokemonType.PSYCHIC;
    url: string;
  };
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: Type[];
  abilities: Ability[];
};
