/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

//before each needs to be included when testing dom elements
beforeEach(() => {
    //fs node module unpacks the whole html file which elements would be tested
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
   test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
   });
   test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
   })
})
