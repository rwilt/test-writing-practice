//parseInt

describe("parseInt", () => {
  describe("when a string is passed in", () => {
    describe("when the string is a number", () => {
      it("returns a number", () => {
        //arrange/act
        const res = parseInt("5");

        //assert
        expect(res).toEqual(5);
        expect(typeof res).toBe("number");
      });

      describe("when the string leading or trailing spaces", () => {
        it("returns a number", () => {
          //arrange/act
          const res = parseInt("    5     ");
          //assert
          expect(res).toEqual(5);
          expect(typeof res).toBe("number");
        });
      });

      describe("when the string is not a number", () => {
        it("returns NaN", () => {
          //arrange/act
          const res = parseInt("word");
          //assert
          expect(res).toBe(NaN);
        });
      });
    });
  });
});
