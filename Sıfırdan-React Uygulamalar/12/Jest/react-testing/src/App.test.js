import {screen,render} from "@testing-library/react"
import App from "./App";

test("renders leran react h1 tag", ()=>{
    render(<App/>)
    const titleElement=screen.getByText(/Lorem/i);
    expect(titleElement).toBeInTheDocument();
}) 