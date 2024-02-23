import { BillExporter } from "./BillExporter";
import { Bill } from "./Bill";

/**
 * Class BillManager that allows to manage the export of a bill
 */
export class BillManager {
  constructor(private exporter: BillExporter) {}

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
  setExporter(exporter: BillExporter): void {
    this.exporter = exporter;
  }
}
