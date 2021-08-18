describe("post increment operator", () => {
  it("increases the number by 1", () => {
    let x = 5;
    //assert
    expect(x++).toEqual(5);
    expect(x).toEqual(6);
  });
});

describe("pre increment operator", () => {
  it("increases the number by 1", () => {
    let x = 5;
    //assert
    expect(++x).toEqual(6);
    expect(x).toEqual(6);
  });
});
