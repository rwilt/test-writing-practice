describe("spread operator", () => {
  describe("when a clone of an array of objects is created with the spread operator", () => {
    describe("when an object in the clone array is mutated", () => {
      it("will update the original array also", () => {
        //arrange/act
        let arr = [{ a: 1 }, { b: 2 }];
        let arr2 = [...arr];
        arr2[0].a = 3;
        //assert
        expect(arr[0].a).toEqual(3);
      });
    });
  });
  describe("when a clone of an array of variables is created with the spread operator", () => {
    describe("when an variable in the clone array is mutated", () => {
      it("will not update the original array", () => {
        //arrange/act
        let a = "string";
        let b = "string2";
        let c = "string3";
        let arr = [a, b, c];
        let arr2 = [...arr];
        arr2[0] = "string1";
        //assert
        expect(a).toEqual("string");
      });
    });
  });
});
