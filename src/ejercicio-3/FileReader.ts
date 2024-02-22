import * as fs from "fs";

import { IFileReader } from "./interfaces";

/*
* Class that reads a file
*/
export class FileReader implements IFileReader {
  /**
   * Reads a file
   * @param filePath - The file path
   * @returns The file content
   */
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
      return "";
    }
  }
}
