import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextDisplay from "./TextDisplay";

describe("TextDisplay component", () => {
  test("renders Hello Word as a text", () => {
    //Arrange
    render(<TextDisplay />);
    //Act

    //....

    //Assert
    const helloWordElement = screen.getByText("Hello Word");
    expect(helloWordElement).toBeInTheDocument();
  });

  test("renders p tag ", () => {
    render(<TextDisplay />);
    const outputElement = screen.getByText("How are you ?");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked ", async() => {
    //Arranged
    render(<TextDisplay />);

    //Act
    const buttonElement=screen.getByRole("button")
    await userEvent.click(buttonElement);


    //Assert
    const outputElement = screen.getByText("changed!", {exact:false});
    expect(outputElement).toBeInTheDocument();
  });
});
