import { NotificationService } from "./NotificationService";

/**
 * Class that makes use of different types of services to perform notifications
 */
export class Notifier {
  constructor(private notificationService: NotificationService) {}

  /**
   * Method that sends a notification
   * @param message string
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
