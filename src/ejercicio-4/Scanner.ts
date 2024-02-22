import { Scannable } from "./interfaces";

/**
 * Class Scanner
 */
export class Scanner implements Scannable {
  /**
   * Method scan
   */
  scan(): void {
    console.log("Scanning...");
  }
}
