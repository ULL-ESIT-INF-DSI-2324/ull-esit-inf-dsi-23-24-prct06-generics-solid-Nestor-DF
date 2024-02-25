import { Item } from "./Item";

/**
 * Box class
 */
export class Box<T extends Item> {
  private items: T[] = [];
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  /**
   * Method to add an item to the box
   * @param item Is the item to add to the box
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Method to remove an item from the box
   * @param name Is the name of the item to remove from the box
   */
  removeItem(name: string): void {
    this.items = this.items.filter((item) => item.name !== name);
  }

  /**
   * Method to find the items in the box
   * @param filters Is the filters to apply to the items
   * @returns Is the items that match the filters
   */
  findItems(filters: { name?: string; weight?: number; fragile?: boolean; value?: number }): string {
    const result = this.items.filter(
      (element) =>
        (!filters.name || element.name.includes(filters.name)) &&
        (!filters.weight || element.weight === filters.weight) &&
        (filters.fragile === undefined || element.fragile === filters.fragile) &&
        (!filters.value || element.value === filters.value)
    );
    return result.map((item) => item.name).join(", ");
  }

  /**
   * Method to list the items in the box
   */
  listItems(): string {
    const result = `${this.id}: ${this.items.map((item) => item.name).join(", ")}`;
    return result;
  }
}
