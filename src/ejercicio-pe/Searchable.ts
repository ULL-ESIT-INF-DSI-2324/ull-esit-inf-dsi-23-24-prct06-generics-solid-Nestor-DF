/**
 * Interface Searchable
 */
export interface Searchable<T> {
  search(item: T): T[];
}
