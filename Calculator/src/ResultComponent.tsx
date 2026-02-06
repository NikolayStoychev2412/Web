type Props = {
  result: number | null;
  error: string;
};

export default function ResultComponent(props: Props) {
  return (
    <div>
      <h3>Result</h3>

      {props.error !== "" ? (
        <p>{props.error}</p>
      ) : (
        <p>{props.result}</p>
      )}
    </div>
  );
}