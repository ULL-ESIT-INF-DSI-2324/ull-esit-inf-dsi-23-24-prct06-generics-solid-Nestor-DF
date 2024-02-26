import { SearchableCollection } from "./SearchableCollection";

/**
 * Class SeachCollection for strigs
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * Method that return all string in the collection that contains the substring
   * @param substring The substring the method searches in the string collection
   * @returns String that contains the substring
   */
  search(substring: string): string[] {
    const regex = new RegExp(substring, "d");
    return this.items.filter((item) => regex.test(item));
  }
}
