import { Paragraph } from "./components/Paragraph.jsx";

export const App = () => (
  <>
    <Paragraph a={2} b={3} />;
    <Paragraph a={-5} b={5} />;
    <Paragraph a={10} b={0} />;
    <Paragraph a={0} b={5} />;
    <Paragraph a={0} b={0} />;
  </>
);
