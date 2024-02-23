import { BillExporter } from "./BillExporter";
import { Bill } from "./Bill";

/**
 * Class PDFexporter that allows to export a bill to PDF
 */
export class PDFexporter implements BillExporter {
  /**
   * Method exportBill that exports the bill to PDF
   * @param factura Is the bill to export
   * @returns The bill exported to PDF
   */
  exportBill(factura: Bill): string {
    return `Exporting the bill ${factura.id} to PDF`;
  }
}
