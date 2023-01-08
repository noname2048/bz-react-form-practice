import { ReactElement } from "react";
type PropTypes = { text: string; color: string };

const MyButton = ({ text, color }: PropTypes): ReactElement => {
  return (
    <button type="button" color={color}>
      {text}
    </button>
  );
};

export default MyButton;
