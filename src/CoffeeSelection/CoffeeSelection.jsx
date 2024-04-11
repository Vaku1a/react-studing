export default function CoffeeSelection({
  name,
  value,
  checked,
  onChange,
  label,
}) {
  return (
    <>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </>
  );
}
