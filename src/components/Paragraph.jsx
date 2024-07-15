export const Paragraph = ({ a = 0, b = 0 }) => {
  
  // const first = parseInt(a);
  // const second = parseInt(b);
  
  const result = summarize(a, b);

  return (
    <>
      <p>
        Sum of {a} and {b} is {result}
      </p>
    </>
  );
};

function summarize(a, b) {
  return a + b;
}
