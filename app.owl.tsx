import { press, takeScreenshot } from "react-native-owl";

describe("App.tsx", () => {
  it("takes a screenshot of the first screen", async () => {
    const screen = await takeScreenshot("homescreen");

    expect(screen).toMatchBaseline();
  });

  it("presses a button, then takes a screenshot", async () => {
    await press("button");

    const screen = await takeScreenshot("afterButtonPress");

    expect(screen).toMatchBaseline();
  });
});
