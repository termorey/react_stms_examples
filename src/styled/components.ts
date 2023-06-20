import styled from "styled-components";

export const Layout = styled.div`
  min-height: 300px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: rgba(90, 90, 90, 0.5);
  padding: 1rem;
  backdrop-filter: blur(1rem);
  border-radius: 0.25rem;
`;
export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;

  > * {
    flex: 0 1 20%;
  }
`;
export const Number = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 1);
  padding: 1rem;
  color: green;
  font-weight: bold;
  border-radius: 0.25rem;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background: ${({ approve, error }) =>
    approve ? "rgba(230,190,0,1)" : error ? "rgba(210,70,0,1)" : "#111"};
  padding: 0.5rem;
  color: ${({ approve }) => (approve ? "#222" : "rgb(230, 230, 230)")};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Indicator = styled.span.attrs((props) => ({
  size: "1rem"
}))`
  min-height: ${({ size }) => size};
  min-width: ${({ size }) => size};
  background: ${({ active }) => (active ? "yellow" : "red")};
  border-radius: 50%;
  filter: blur(2px);
  transition: all 0.3s;
`;
