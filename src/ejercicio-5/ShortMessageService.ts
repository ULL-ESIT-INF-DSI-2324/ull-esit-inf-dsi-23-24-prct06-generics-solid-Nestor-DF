import { NotificationService } from "./NotificationService";

/**
 * Class that allows notifications by SMS to be sent
 */
export class ShortMessageService implements NotificationService {
  /**
   * Method notify
   * @param message string
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
