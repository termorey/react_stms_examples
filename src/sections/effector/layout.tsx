import { Indicator, Layout, Number, Row } from "styled/components";
import { Controls } from "components/controls";
import { useStore } from "effector-react";
import { $store, increase, decrease, reset, fetchTodosFx } from "./store";

export const EffectorLayout = () => {
  const store = useStore($store);

  return (
    <Layout>
      <h2>{"Effector"}</h2>
      <Number>{store.value}</Number>
      <Controls
        onIncrease={increase}
        onDecrease={decrease}
        onReset={reset}
        onFetch={fetchTodosFx}
      />
      <Row style={{ alignItems: "center", color: "white", cursor: "default" }}>
        <Indicator active={!!store.todos.length} />{" "}
        {`${store.todos.length} todos`}
      </Row>
    </Layout>
  );
};
