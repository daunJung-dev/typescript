import renderer from "react-test-renderer";
import Button from "./Button";

test("MenuType Button", () => {
  const component = renderer.create(<Button.Menu title={"image"} />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
