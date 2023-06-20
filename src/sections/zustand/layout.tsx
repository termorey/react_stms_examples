import { Layout, Number, Row, Indicator } from "styled/components";
import { Controls } from "components/controls";
import { useStore } from "./store";

export const ZustandLayout = () => {
  const store = useStore((state) => state);
  const { increment, decrement, reset, fetchTodos } = useStore(
    (state) => state
  );

  return (
    <Layout>
      <h2>{"Zustand"}</h2>
      <Number>{store.value}</Number>
      <Controls
        onIncrease={increment}
        onDecrease={decrement}
        onReset={reset}
        onFetch={fetchTodos}
      />
      <Row style={{ alignItems: "center", color: "white", cursor: "default" }}>
        <Indicator active={!!store.todos.length} />{" "}
        {`${store.todos.length} todos`}
      </Row>
    </Layout>
  );
};
