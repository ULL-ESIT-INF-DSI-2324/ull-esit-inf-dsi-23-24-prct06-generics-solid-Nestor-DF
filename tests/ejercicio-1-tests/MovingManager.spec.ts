import "mocha";
import { expect } from "chai";
import { MovingManager } from "../../src/ejercicio-1/MovingManager";
import { Furniture } from "../../src/ejercicio-1/ItemExamples";
import { Box } from "../../src/ejercicio-1/Box";

describe("MovingManager", () => {
  let movingManager: MovingManager<Furniture>;

  beforeEach(() => {
    movingManager = new MovingManager<Furniture>();
  });

  it("should add a box to the move", () => {
    const box: Box<Furniture> = new Box<Furniture>(1);
    const furniture: Furniture = new Furniture("Chair", "A comfortable chair");
    box.addItem(furniture);

    movingManager.addBox(box);

    expect(movingManager.BoxesString()).to.equal("1: Chair");
  });

  it("should remove a box from the move", () => {
    const box: Box<Furniture> = new Box<Furniture>(2);
    const furniture: Furniture = new Furniture("Table", "A sturdy table");
    box.addItem(furniture);
    const box2: Box<Furniture> = new Box<Furniture>(1);
    const furniture2: Furniture = new Furniture("Chair", "A comfortable chair");
    box2.addItem(furniture2);

    movingManager.addBox(box);
    movingManager.addBox(box2);

    movingManager.removeBox(1);

    expect(movingManager.BoxesString()).to.equal("2: Table");
  });

  it("should get the number of boxes correctly", () => {
    const box: Box<Furniture> = new Box<Furniture>(2);
    const furniture: Furniture = new Furniture("Table", "A sturdy table");
    box.addItem(furniture);
    const box2: Box<Furniture> = new Box<Furniture>(1);
    const furniture2: Furniture = new Furniture("Chair", "A comfortable chair");
    box2.addItem(furniture2);

    movingManager.addBox(box);
    movingManager.addBox(box2);

    expect(movingManager.getBoxesCount()).to.equal(2);
  });
});
