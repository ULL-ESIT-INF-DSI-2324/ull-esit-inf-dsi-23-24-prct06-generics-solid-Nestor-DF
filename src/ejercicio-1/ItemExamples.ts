import { Item } from "./Item";

/**
 * Class to represent a furniture (mueble)
 */
export class Furniture implements Item {
  name: string;
  weight?: number;
  fragile?: boolean;
  value?: number;
  description: string;

  constructor(name: string, description: string, weight?: number, fragile?: boolean, value?: number) {
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.fragile = fragile;
    this.value = value;
  }
}

/**
 * Class to represent an appliance (electrodoméstico)
 */
export class Appliance implements Item {
  name: string;
  weight?: number;
  fragile?: boolean;
  value?: number;
  type: string;

  constructor(name: string, type: string, weight?: number, fragile?: boolean, value?: number) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.fragile = fragile;
    this.value = value;
  }
}