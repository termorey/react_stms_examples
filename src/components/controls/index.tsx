import React from "react";
import { Row, Button } from "styled/components";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
  onFetch: () => void;
}

export const Controls: React.FC<Props> = ({
  onIncrease,
  onDecrease,
  onReset,
  onFetch
}) => {
  return (
    <Row>
      <Button approve onClick={() => onIncrease()}>
        {"increase"}
      </Button>
      <Button error onClick={onDecrease}>
        {"decrease"}
      </Button>
      <Button onClick={onReset}>{"reset"}</Button>
      <Button onClick={onFetch}>{"fetch"}</Button>
    </Row>
  );
};
