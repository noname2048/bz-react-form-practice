import styled from "styled-components";

const Spinner = (props: {
  spinnerSize?: string;
  color?: string;
  pointColor?: string;
  text?: string;
}) => {
  const {
    spinnerSize = "",
    color = "#535bf2",
    pointColor = "#213547",
    text = "",
  } = props;

  let calculatedSpinnerSize = "30px";
  if (text) calculatedSpinnerSize = "20px";

  return (
    <Container>
      <Circle
        spinnerSize={spinnerSize || calculatedSpinnerSize}
        color={color}
        pointColor={pointColor}
      />
      <p>text</p>
    </Container>
  );
};

export default Spinner;

const Circle = styled.div<{
  spinnerSize: string;
  color: string;
  pointColor: string;
}>`
  width: ${(props) => props.spinnerSize};
  height: ${(props) => props.spinnerSize};
  border-radius: 50%;
  border: 4px solid ${({ color }) => color};
  border-top: 4px solid ${({ pointColor }) => pointColor};

  animation: 1s infinite linear rotate;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
