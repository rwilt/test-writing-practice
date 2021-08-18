describe("ternary", () => {
  describe("when the condition is true", () => {
    it("will return the result of the expression to the left of the colon", () => {
      const ternary =
        5 > 2 ? "five is greater than two" : "five is less than two";
      expect(ternary).toEqual("five is greater than two");
    });
  });
  describe("when the condition is false", () => {
    it("will return the result of the expression to the right of the colon", () => {
      const ternary =
        2 > 5 ? "five is greater than two" : "five is less than two";
      expect(ternary).toEqual("five is less than two");
    });
  });
  describe("when the condition is undefined", () => {
    it("will return the result of the expression to the right of the colon", () => {
      const ternary = undefined ? "true" : "false";
      expect(ternary).toEqual("false");
    });
  });
});
