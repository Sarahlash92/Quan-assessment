export const RadioButton = ({ checked }) => (
  <svg width="5rem" height="5rem" viewBox="0 0 24 24" fontSize="50px">
    <circle
      cx="50%"
      cy="50%"
      r="11px"
      stroke="#362a51"
      stroke-width="1px"
      fill="none"
    />
    {checked && <circle cx="50%" cy="50%" r="10px" fill="#362a51" />}
  </svg>
);
