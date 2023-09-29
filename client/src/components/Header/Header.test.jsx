import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from 'react-router-dom'; 


describe("Header component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      );
    
    // Replace these with your actual translations
    expect(getByText("escale")).toBeInTheDocument();
    expect(getByText("airstrip")).toBeInTheDocument();
    expect(getByText("pictures")).toBeInTheDocument();
    expect(getByText("surroundings")).toBeInTheDocument();
    expect(getByText("contactUs")).toBeInTheDocument();
    expect(getByText("reservation")).toBeInTheDocument();
  });

  // Add more test cases as needed for your component's functionality
});
