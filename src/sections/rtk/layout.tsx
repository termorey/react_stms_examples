import { Layout, Number, Row, Indicator } from "styled/components";
import { Controls } from "components/controls";
import { useDispatch, useSelector } from "./store";
import { increase, decrease, reset, fetchTodos } from "./reducer";

export const RTKLayout = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  return (
    <Layout>
      <h2>{"RTK"}</h2>
      <Number>{store.value}</Number>
      <Controls
        onIncrease={() => {
          dispatch(increase());
        }}
        onDecrease={() => {
          dispatch(decrease());
        }}
        onReset={() => {
          dispatch(reset());
        }}
        onFetch={() => {
          dispatch(fetchTodos());
        }}
      />
      <Row style={{ alignItems: "center", color: "white", cursor: "default" }}>
        <Indicator active={!!store.todos.length} />{" "}
        {`${store.todos.length} todos`}
      </Row>
    </Layout>
  );
};
