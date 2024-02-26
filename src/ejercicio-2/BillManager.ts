import { Bill } from "./Bill";
import { BillExporter } from "./BillExporter";

/**
 * Class BillManager that allows to manage the export of a bill
 */
export class BillManager<T extends BillExporter> {
  constructor(private exporter: T) {}

  /**
   * Method exportBill that exports the bill
   * @param bill Is the bill to export
   * @returns The bill exported
   */
  export(bill: Bill): string {
    return this.exporter.exportBill(bill);
  }

  /**
   * Method setExporter that sets the exporter
   * @param exporter Is the exporter to set
   */
  setExporter(exporter: T): void {
    this.exporter = exporter;
  }
}
