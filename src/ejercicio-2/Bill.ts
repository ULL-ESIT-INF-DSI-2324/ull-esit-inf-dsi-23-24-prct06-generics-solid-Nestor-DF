/**
 * Class Bill that allows to create a bill and mark it as paid
 */
export class Bill {
  public id: string;
  public amount: number;
  public dueDate: string;
  public isPaid: boolean;

  constructor(id: string, amount: number, dueDate: string) {
    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.isPaid = false;
  }

  /**
   * Method markAsPaid that marks the bill as paid
   */
  markAsPaid(): void {
    this.isPaid = true;
  }

  /**
   * Method displayDetails that shows the bill details
   */
  getDetails(): string {
    const status: string = this.isPaid ? "Paid" : "Unpaid";
    return `ID: ${this.id}\nAmount: $${this.amount}\nDue Date: ${this.dueDate}\nStatus: ${status}`;
  }
}
