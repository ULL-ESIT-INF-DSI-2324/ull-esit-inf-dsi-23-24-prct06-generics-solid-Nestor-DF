import "mocha";
import { expect } from "chai";
import { StringSearchableCollection } from "../../src/ejercicio-pe/StringSearchableCollection";

describe("StringSearchableCollection", () => {
  const numSearchColl = new StringSearchableCollection(["hi", "hello", "halo", "meow"]);

  it("should get an item", () => {
    expect(numSearchColl.getItem(2)).to.equal("halo");
  });

  it("should add a item", () => {
    numSearchColl.addItem("the cat says meow");
    expect(numSearchColl.getCollectionString()).to.equal("hi,hello,halo,meow,the cat says meow");
  });

  it("should add a item", () => {
    numSearchColl.addItem("dog");
    numSearchColl.addItem("woof");
    expect(numSearchColl.getCollectionString()).to.equal("hi,hello,halo,meow,the cat says meow,dog,woof");
  });

  it("should remove the last item", () => {
    numSearchColl.removeItem();
    numSearchColl.removeItem();
    expect(numSearchColl.getCollectionString()).to.equal("hi,hello,halo,meow,the cat says meow");
  });

  it("should remove the last item", () => {
    numSearchColl.removeItem();
    expect(numSearchColl.getCollectionString()).to.equal("hi,hello,halo,meow");
  });

  it("should get the number of items", () => {
    expect(numSearchColl.getNumberOfItems()).to.equal(4);
  });

  it("should get the number of items", () => {
    numSearchColl.addItem("the dog doesnt say meow");
    numSearchColl.addItem("meowmeow");
    expect(numSearchColl.getNumberOfItems()).to.equal(6);
  });

  it("should get the correct ocurrences", () => {
    expect(numSearchColl.search("lo")).to.deep.equal(["hello", "halo"]);
  });

  it("should get the correct ocurrences", () => {
    expect(numSearchColl.search("meow")).to.deep.equal(["meow", "the dog doesnt say meow", "meowmeow"]);
  });
});
