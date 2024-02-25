import "mocha";
import { expect } from "chai";
import { Furniture, Appliance } from "../../src/ejercicio-1/ItemExamples";

describe("Furniture", () => {
  it("should create a furniture object with the correct properties", () => {
    const furniture = new Furniture("Chair", "Comfortable chair", 10, false, 100);
    expect(furniture.name).to.equal("Chair");
    expect(furniture.description).to.equal("Comfortable chair");
    expect(furniture.weight).to.equal(10);
    expect(furniture.fragile).to.equal(false);
    expect(furniture.value).to.equal(100);
  });
});

describe("Appliance", () => {
  it("should create an appliance object with the correct properties", () => {
    const appliance = new Appliance("TV", "Television", 20, true, 500);
    expect(appliance.name).to.equal("TV");
    expect(appliance.type).to.equal("Television");
    expect(appliance.weight).to.equal(20);
    expect(appliance.fragile).to.equal(true);
    expect(appliance.value).to.equal(500);
  });
});
