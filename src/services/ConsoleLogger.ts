import { ILogger } from "../interfaces/ILogger";

// КТ3: SOLID - DIP (конкретная реализация)
export class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}