import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import MeuComponent from "../App";

describe("Suíte de Testes para o componente App", () => {
  it("O componente deve estar definido corretamente", () => {
    const componente = render(MeuComponent());

    expect(componente).toBeDefined();
  });

  it("O componente deve estar com a estrutura definida corretamente", () => {
    const componente = render(MeuComponent());

    expect(componente.toJSON()).toMatchSnapshot();
  });

  it("O Componente deve conter um texto específico na tela", () => {
    const { getByText } = render(MeuComponent());
    const componente = getByText("This is my first app");

    expect(componente).toHaveTextContent("This is my first app");
  });
});
