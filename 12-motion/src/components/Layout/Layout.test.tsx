import renderer from "react-test-renderer";
import Layout from "./Layout";

test("Draw Layout clearly with children", () => {
  const component = renderer.create(<Layout>test</Layout>);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
