import "mocha";
import { expect } from "chai";
import { Box } from "../../src/ejercicio-1/Box";
import { Furniture, Appliance } from "../../src/ejercicio-1/ItemExamples";

describe("Box", () => {
  const chair = new Furniture("Chair", "A comfortable chair", 10, false, 100);
  const table = new Furniture("Table", "A sturdy table", 20, false, 200);

  const fridge = new Appliance("Fridge", "Refrigerator", 50, true, 500);
  const tv = new Appliance("TV", "Television", 30, false, 1000);

  const box1 = new Box<Furniture>(1);
  const box2 = new Box<Furniture | Appliance>(2);

  it("should add an item to the box", () => {
    box1.addItem(chair);
    expect(box1.listItems()).to.equal("1: Chair");
  });

  it("should remove an item from the box", () => {
    box1.addItem(table);
    box1.removeItem("Chair");
    expect(box1.listItems()).to.equal("1: Table");
  });

  it("should find items that match the filters", () => {
    box2.addItem(fridge);
    box2.addItem(tv);
    box2.addItem(chair);
    box2.addItem(table);
    const filters = { fragile: false };
    expect(box2.findItems(filters)).to.equal("TV, Chair, Table");
  });

  it("should list all items in the box", () => {
    expect(box2.listItems()).to.equal("2: Fridge, TV, Chair, Table");
  });
});
