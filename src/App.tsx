import styled from "styled-components";
import "./styles.css";
import { EffectorLayout } from "sections/effector/layout";
import { ZustandLayout } from "sections/zustand/layout";
import { RTKLayout } from "sections/rtk/layout";
import { Provider } from "react-redux";
import { store } from "sections/rtk/store";

const Section = styled.section`
  min-height: 300px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  > * {
    box-shadow: 0 0 1rem 0.25rem black;
  }
`;

export default function App() {
  return (
    <div className="App">
      <Section>
        <EffectorLayout />
      </Section>
      <Section>
        <ZustandLayout />
      </Section>
      <Section>
        <Provider store={store}>
          <RTKLayout />
        </Provider>
      </Section>
    </div>
  );
}
