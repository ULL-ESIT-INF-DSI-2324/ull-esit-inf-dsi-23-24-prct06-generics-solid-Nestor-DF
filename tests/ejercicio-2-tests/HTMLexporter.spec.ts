import "mocha";
import { expect } from "chai";
import { HTMLexporter } from "../../src/ejercicio-2/HTMLexporter";
import { Bill } from "../../src/ejercicio-2/Bill";

describe("HTMLexporter", () => {
  describe("exportBill", () => {
    it("should export the bill to HTML", () => {
      const exporter = new HTMLexporter();
      const bill = new Bill("123", 100, "2022-01-01");
      const result = exporter.exportBill(bill);
      expect(result).to.equal("Exporting the bill 123 to HTML");
    });
  });
});
