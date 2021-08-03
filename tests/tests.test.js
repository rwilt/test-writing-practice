import * as Functions from "../functions";

//jest test - sum
describe("sum", () => {
  it("returns the result of adding two numbers together", () => {
    expect(Functions.sum(2, 2)).toEqual(4);
  });
});

//parseInt

describe("parseInt", () => {
  describe("when a string is passed in", () => {
    describe("when the string is a number", () => {
      it("returns a number", () => {
        //arrange/act
        const res = Functions.parseInteger("5");

        //assert
        expect(res).toEqual(5);
        expect(typeof res).toBe("number");
      });

      describe("when the string leading or trailing spaces", () => {
        it("returns a number", () => {
          //arrange/act
          const res = Functions.parseInteger("    5     ");
          //assert
          expect(res).toEqual(5);
          expect(typeof res).toBe("number");
        });
      });

      describe("when the string is not a number", () => {
        it("returns NaN", () => {
          //arrange/act
          const res = Functions.parseInteger("word");
          //assert
          expect(res).toBe(NaN);
        });
      });
    });
  });
});

describe("incrementPost", () => {
  describe("when a number is passed in", () => {
    //arrange/act
    const res = Functions.incrementPost(5);

    it("increases the number by 1", () => {
      //assert
      expect(res.a).toEqual(6);
    });

    it("does not increment b", () => {
      expect(res.b).toEqual(5);
    });
  });
});

describe("incrementPre", () => {
  describe("when a number is passed in", () => {
    //arrange/act
    const res = Functions.incrementPre(5);

    it("increases the number by 1", () => {
      //assert
      expect(res.a).toEqual(6);
    });
    it("alters the passed in argument", () => {
      expect(res.b).toEqual(6);
    });
  });
});
