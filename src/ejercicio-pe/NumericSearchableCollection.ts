import { SearchableCollection } from "./SearchableCollection";

/**
 * Class SeachCollection for numbers
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Method that returns an array of all ocurrences of the number to search
   * @param item The number to search
   * @returns All ocurrences of the number to search
   */
  search(item: number): number[] {
    return this.items.filter((num) => num === item);
  }
}
