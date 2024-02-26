/**
 * Interface Collectable
 */
export interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T | undefined;
  removeItem(): void;
  getNumberOfItems(): number;
}
