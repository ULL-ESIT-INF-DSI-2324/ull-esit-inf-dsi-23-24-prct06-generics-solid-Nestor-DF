import { IFileReader, IFileWriter } from "./interfaces";

/**
 * Class that manages the file
 */
export class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;
  private filePath: string;

  constructor(filePath: string, fileReader: IFileReader, fileWriter: IFileWriter) {
    this.filePath = filePath;
    this.fileReader = fileReader;
    this.fileWriter = fileWriter;
  }

  /**
   * Method that sets the file path
   * @param filePath - The file path
   */
  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  /**
   * Mehod that reads a file
   * @returns The file content
   */
  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  /**
   * Method that writes a file
   * @param data - The file content
   */
  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}
