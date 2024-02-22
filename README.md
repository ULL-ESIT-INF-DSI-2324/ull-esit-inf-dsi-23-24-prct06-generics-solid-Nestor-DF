# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
- Autor: Néstor Delgado Feliciano
- Correo: alu0101488998@ull.edu.es


[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Nestor-DF/badge.svg)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Nestor-DF)


## **Índice**




## **Introducción**
En esta práctica resolveré una serie de ejercicios de programación que me permitirán conocer más en profundidad las clases e interfaces genéricas y los principios SOLID.




## **Ejercicio 3**
El principio que no se está siguiendo es el principio SOLID de Responsabilidad Única (Single Responsibility Principle) ya que `FileManager` tiene dos responsabilidades distintas: la lectura de archivos y la escritura de archivos.

Una mejor forma de estructurar este código según SOLID sería crear dos interfaces `IFileReade` e `IFileWriter` para encapsular las responsabilidades de lectura y escritura de archivos y dos clases `FileReader` y `FileWriter` que implementan estas interfaces. Por último, la clase `FileManager` se encargaría únicamente de gestionar esas operaciones y no de su implementación.

```ts
export interface IFileReader {
  readFile(filePath: string): string;
}

export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}

export class FileReader implements IFileReader {
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

export class FileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
    }
  }
}

export class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;
  private filePath: string;

  constructor(filePath: string, fileReader: IFileReader, fileWriter: IFileWriter) {
    this.filePath = filePath;
    this.fileReader = fileReader;
    this.fileWriter = fileWriter;
  }

  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}
```




## **Ejercicio 4 - Impresoras y escáneres**
El principio que no se esta siguiendo es el de segregación de interfaces (Interface Segregation Principle) de SOLID. Básicamente, sugiere que es mejor tener un número elevado de interfaces simples y específicas que tener una interfaz compleja y genérica y que una clase no debe verse obligada a implementar interfaces que no utiliza. En este caso, la clase `Printer` implementa la interfaz `PrintableScannable` pero no utiliza el método `scan()`, y la clase `Scanner` implementa la misma interfaz pero no utiliza el método `print()`.

Una mejor implementación sería dividir la interfaz `PrintableScannable` en dos interfaces separadas, una para la impresión y otra para el escaneo y así conseguir que no se implementen métodos vacíos:

```ts
export interface Printable {
  print(): void;
}

export interface Scannable {
  scan(): void;
}

export class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

export class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}
```




## **Ejercicio 5 - Servicio de mensajería**
El principio que se está violando es el de inversión de dependencia (Dependency Inversion Principle) de SOLID. Este principio sugiere que las clases deberían depender de la abstracción y no de la particularización. Lo que viene a significar es que el código de alto nivel que desarrollamos no debería depender de implementaciones concretas de clases, sino de aquellas abstracciones, ya sean clases o interfaces, que luego, se particularicen en implementaciones de las mismas. 

En el ejercicio la clase `Notifier` depende directamente de las implementaciones concretas `EmailService` y `ShortMessageService`, en lugar de depender de abstracciones. Una mejor implementación sería introducir una interfaz o clase abstracta que represente la abstracción de los servicios de notificación, y luego hacer que `EmailService` y `ShortMessageService` implementen esa abstracción. La clase `Notifier` debería depender de esa abstracción en lugar de las implementaciones concretas:

```ts
export interface NotificationService {
  notify(message: string): void;
}

export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

xeport class Notifier {
  constructor(private notificationService: NotificationService) {
  }

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```




## **Conclusiones**
En conclusión, la resolución de los ejercicios de programación me han ayudado a conocer más en profundidad las clases e interfaces genéricas y los principios SOLID.




## **Recursos Empleados**

1. OpenAI Chat: [https://chat.openai.com/](https://chat.openai.com/)

2. W3Schools JavaScript Reference: [https://www.w3schools.com/jsrEF/default.asp](https://www.w3schools.com/jsrEF/default.asp)

3. MDN Web Docs - JavaScript Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)