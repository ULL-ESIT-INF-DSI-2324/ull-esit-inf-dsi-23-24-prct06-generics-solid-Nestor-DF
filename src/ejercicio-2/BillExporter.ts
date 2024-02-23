import { Bill } from "./Bill";

/**
 * Interface BillExporter with the method exportBill
 */
export interface BillExporter {
  exportBill(factura: Bill): string;
}
