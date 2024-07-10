import { Links } from "./Links";
import { Headline } from "./Headline";

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