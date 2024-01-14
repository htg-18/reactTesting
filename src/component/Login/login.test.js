import { render,screen } from "@testing-library/react";
import Login from "./Login";

test('username should be rendered',()=>{
    render(<Login/>)
    const userInputElement=screen.getByPlaceholderText(/username/i);
    expect(userInputElement).toBeInTheDocument()
})

test('password should be rendered',()=>{
    render(<Login/>)
    const passwordInputElement=screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument()
})

test('button should be rendered',()=>{
    render(<Login/>)
    const loginButton=screen.getByRole("button");
    expect(loginButton).toBeInTheDocument()
})