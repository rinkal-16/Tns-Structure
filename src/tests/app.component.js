var reflect = require("reflect-metadata");
var component = require("../app.component");

describe("Tests for app/app.component.ts", function () {
  var appComponent;
  beforeEach(function () {
    appComponent = new component.AppComponent();
  });
  it("Verify default message", function () {
    expect(appComponent.message).toBe("16 taps left");
  });
  it("Decrease the tap count", function () {
    appComponent.onTap();
    expect(appComponent.message).toBe("16 taps left");
  });
});
