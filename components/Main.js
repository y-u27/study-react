import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export function Main(props) {
  return (
    <main>
      <Headline page={props.page}>
        <code>pages/{props.page}</code>
      </Headline>
      <Links />
    </main>
  );
}
