import "mocha";
import { expect } from "chai";
import { prueba } from "../src/index";

describe("prueba", () => {
  it("should return the sum of two numbers", () => {
    expect(prueba(1, 2)).to.equal(3);
  });
});
