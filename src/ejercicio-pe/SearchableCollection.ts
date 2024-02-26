import { Collectable } from "./Collectable";
import { Searchable } from "./Searchable";

/**
 * Abstract class
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(protected items: T[]) {}

  /**
   * Adds an item to the collection
   * @param item The item that is added
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Returns the item that is at index
   * @param index Index
   * @returns The item at index
   */
  getItem(index: number): T | undefined {
    return this.items[index];
  }

  /**
   * Removes the last item
   */
  removeItem(): void {
    this.items.pop();
  }

  /**
   * Get the number of items
   * @returns The number of items in the collection
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Method that returns the collection in string format
   * @returns The collection in string format
   */
  getCollectionString(): string {
    return this.items.toString();
  }

  abstract search(item: T): T[];
}
