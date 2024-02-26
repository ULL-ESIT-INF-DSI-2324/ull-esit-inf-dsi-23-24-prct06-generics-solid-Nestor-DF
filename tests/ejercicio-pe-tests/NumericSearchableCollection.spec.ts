import "mocha";
import { expect } from "chai";
import { NumericSearchableCollection } from "../../src/ejercicio-pe/NumericSearchableCollection";

describe("NumericSearchableCollection", () => {
  const numSearchColl = new NumericSearchableCollection([1, 2, 3, 3, 4, 5, 6, 7, 9, 9, 9]);

  it("should add a item", () => {
    numSearchColl.addItem(10);
    expect(numSearchColl.getCollectionString()).to.equal("1,2,3,3,4,5,6,7,9,9,9,10");
  });

  it("should add a item", () => {
    numSearchColl.addItem(10);
    numSearchColl.addItem(11);
    expect(numSearchColl.getCollectionString()).to.equal("1,2,3,3,4,5,6,7,9,9,9,10,10,11");
  });

  it("should remove the last item", () => {
    numSearchColl.removeItem();
    numSearchColl.removeItem();
    expect(numSearchColl.getCollectionString()).to.equal("1,2,3,3,4,5,6,7,9,9,9,10");
  });

  it("should remove the last item", () => {
    numSearchColl.removeItem();
    expect(numSearchColl.getCollectionString()).to.equal("1,2,3,3,4,5,6,7,9,9,9");
  });

  it("should get the number of items", () => {
    expect(numSearchColl.getNumberOfItems()).to.equal(11);
  });

  it("should get the number of items", () => {
    numSearchColl.removeItem();
    numSearchColl.removeItem();
    expect(numSearchColl.getNumberOfItems()).to.equal(9);
  });

  it("should get the correct ocurrences", () => {
    expect(numSearchColl.search(9)).to.deep.equal([9]);
  });

  it("should get the correct ocurrences", () => {
    expect(numSearchColl.search(3)).to.deep.equal([3, 3]);
  });
});
