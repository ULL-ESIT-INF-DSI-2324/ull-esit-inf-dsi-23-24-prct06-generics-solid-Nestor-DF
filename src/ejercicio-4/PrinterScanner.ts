import { Printable, Scannable } from "./interfaces";

/**
 * Class PrinterScanner
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Method print
   */
  print(): void {
    console.log("Printing...");
  }

  /**
   * Method scan
   */
  scan(): void {
    console.log("Scanning...");
  }
}
