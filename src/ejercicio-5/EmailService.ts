import { NotificationService } from "./NotificationService";

/**
 * Class EmailService that allows notifications by email to be sent
 */
export class EmailService implements NotificationService {
  /**
   * Method notify
   * @param message string
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
