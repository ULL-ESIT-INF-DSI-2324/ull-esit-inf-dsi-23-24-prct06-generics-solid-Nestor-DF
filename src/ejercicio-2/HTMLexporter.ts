import { BillExporter } from "./BillExporter";
import { Bill } from "./Bill";

/**
 * Class HTMLexporter that allows to export a bill to HTML
 */
export class HTMLexporter implements BillExporter {
  /**
   * Method exportBill that exports the bill to HTML
   * @param factura Is the bill to export
   * @returns The bill exported to HTML
   */
  exportBill(factura: Bill): string {
    return `Exporting the bill ${factura.id} to HTML`;
  }
}
