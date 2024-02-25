import { Item } from "./Item";
import { Box } from "./Box";

/**
 * Moving class
 */
export class MovingManager<T extends Item> {
  private boxes: Box<T>[] = [];

  /**
   * Method to add a box to the move
   * @param box Is the box to add to the move
   */
  addBox(box: Box<T>): void {
    this.boxes.push(box);
  }

  /**
   * Method to remove a box from the move
   * @param id Is the id of the box to remove from the move
   */
  removeBox(id: number): void {
    this.boxes = this.boxes.filter((box) => box.id !== id);
  }

  /**
   * Method to get the total number of boxes in the move
   * @returns The total number of boxes in the move
   */
  getBoxesCount(): number {
    return this.boxes.length;
  }

  /**
   * Method that returns the boxes in the move in string formar
   * @returns Is the string of boxes
   */
  BoxesString(): string {
    return this.boxes.map((box) => box.listItems()).join("\n");
  }
}
