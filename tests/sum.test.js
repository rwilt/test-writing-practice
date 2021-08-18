//jest test - sum
describe("sum", () => {
  it("returns the result of adding two numbers together", () => {
    expect(2 + 2).toEqual(4);
  });
  describe("when a string is added to a number", () => {
    it("will concatenate the string and number and output a string", () => {
      expect(2 + "rosie").toEqual("2rosie");
    });
  });
  describe("when undefiend is added to a number", () => {
    it("will return NaN", () => {
      expect(2 + undefined).toEqual(NaN);
    });
  });
});
