// try to write a test on hoisting behavior with var /functions
// var - fully hoisted ,variable and assigne dvalue
// let  & const - not hoisted
//functions - partially hoisted

describe("hoisting", () => {
  describe("when a variable is declared with var", () => {
    describe("when it is declared after the function call", () => {
      it("will return the function with the declared variable", () => {
        function test() {
          return teddy;
        }
        var teddy = "bear";
        expect(test()).toEqual("bear");
      });
    });
  });
  describe("when variable is declared with with const", () => {
    describe("when it is declared after the function call", () => {
      it("will throw an error", () => {
        function test() {
          return teddy;
        }
        const teddy = "bear";

        expect(test()).toThrowError();
      });
    });
  });
  //add tests for function declaration, let variable declaration,etc.
});
