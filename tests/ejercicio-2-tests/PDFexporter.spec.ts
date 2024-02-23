import "mocha";
import { expect } from "chai";
import { PDFexporter } from "../../src/ejercicio-2/PDFexporter";
import { Bill } from "../../src/ejercicio-2/Bill";

describe("PDFexporter", () => {
  describe("exportBill", () => {
    it("should export the bill to PDF", () => {
      const exporter = new PDFexporter();
      const bill = new Bill("123", 100, "2022-01-01");
      const result = exporter.exportBill(bill);
      expect(result).to.equal("Exporting the bill 123 to PDF");
    });
  });
});
