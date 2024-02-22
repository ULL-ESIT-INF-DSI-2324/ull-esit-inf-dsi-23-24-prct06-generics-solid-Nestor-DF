import { Printable } from "./interfaces";

/**
 * Class Printer
 */
export class Printer implements Printable {
  /**
   * Method print
   */
  print(): void {
    console.log("Printing...");
  }
}
