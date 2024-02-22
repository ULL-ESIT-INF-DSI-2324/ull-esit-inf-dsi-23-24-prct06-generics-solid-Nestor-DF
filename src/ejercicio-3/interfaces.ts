/**
 * Interface for the file reader
 */
export interface IFileReader {
  readFile(filePath: string): string;
}

/**
 * Interface for the file writer
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}