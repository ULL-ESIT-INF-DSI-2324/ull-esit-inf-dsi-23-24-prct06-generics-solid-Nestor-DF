import "mocha";
import { expect } from "chai";
import { Bill } from "../../src/ejercicio-2/Bill";

describe("Bill", () => {
  it("should mark the bill as paid", () => {
    const bill = new Bill("1", 100, "2022-01-01");
    bill.markAsPaid();
    expect(bill.isPaid).to.be.true;
  });

  it("should display the bill details", () => {
    const bill = new Bill("1", 100, "2022-01-01");
    const details = "ID: 1\nAmount: $100\nDue Date: 2022-01-01\nStatus: Unpaid";

    expect(bill.getDetails()).to.be.equal(details);
  });
});
