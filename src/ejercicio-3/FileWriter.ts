import * as fs from "fs";

import { IFileWriter } from "./interfaces";

/**
 * Class that writes a file
 */
export class FileWriter implements IFileWriter {
  /**
   * Writes a file
   * @param filePath - The file path
   * @param data - The file content
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
    }
  }
}
