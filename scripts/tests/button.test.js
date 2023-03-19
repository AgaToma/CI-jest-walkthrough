/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

//before each needs to be included when testing dom elements
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});

describe("DOM tests", () => {
   test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
   });
})
