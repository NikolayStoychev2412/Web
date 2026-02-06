type Props = {
  first: string;
  second: string;
  sign: string;

  setFirst: (value: string) => void;
  setSecond: (value: string) => void;
  setSign: (value: string) => void;
};

export default function InputComponent(props: Props) {
  return (
    <div>
      <div>
        <label>
          First number:
          <input
            type="text"
            value={props.first}
            onChange={(e) => props.setFirst(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Second number:
          <input
            type="text"
            value={props.second}
            onChange={(e) => props.setSecond(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Operation:
          <select
            value={props.sign}
            onChange={(e) => props.setSign(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
      </div>
    </div>
  );
}