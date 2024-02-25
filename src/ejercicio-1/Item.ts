/**
 * Interface for items
 */
export interface Item {
  name: string;
  weight?: number;
  fragile?: boolean;
  value?: number;
}
