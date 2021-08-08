import { expect } from "chai";
import { next, parse, checkNeighbors } from "./engine";
const _ = false;
const o = true;
describe("next", () => {
  it("should return all dead cells given all dead cells", () => {
    expect(
      next([
        [_, _, _],
        [_, _, _],
        [_, _, _],
      ])
    ).to.deep.equal([
      [_, _, _],
      [_, _, _],
      [_, _, _],
    ]);
  });

  it("should be dead if there is no neighbours", () => {
    const result = next([
      [_, _, _],
      [_, o, _],
      [_, _, _],
    ]);
    expect(result[1][1]).to.equal(false);
  });
});

describe("parse", () => {
  it("should return [] given ''", () => {
    expect(parse("")).to.deep.equal([]);
  });
  it("should return [] given '\n\n'", () => {
    expect(parse("")).to.deep.equal([]);
  });
  it("should parse O as true and . as false", () => {
    expect(parse("...\n.O.\n...\n")).to.deep.equal([
      [_, _, _],
      [_, o, _],
      [_, _, _],
    ]);
  });
});

describe("checkNeighbors", () => {
  it("should return 3", () => {
    const array = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
    expect(checkNeighbors(array, 2, 1)).to.equal(3);
  });
  it("should return 8", () => {
    const array = [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ];
    expect(checkNeighbors(array, 1, 1)).to.equal(8);
  });
});
