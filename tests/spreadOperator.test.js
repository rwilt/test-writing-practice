describe("spread operator", () => {
  describe("when an array of objects exists", () => {
    describe("when a clone of those objects is created with the spread operator", () => {
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
  });
});
