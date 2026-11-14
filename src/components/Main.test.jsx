import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Main from "./Main";

describe("Main", () => {
  test("display the meme text lines and image", () => {
    render(<Main />);
    expect(screen.getByText("One does not simply")).toBeInTheDocument();
    expect(screen.getByText("Walk into Mordor")).toBeInTheDocument();
    expect(screen.getByRole("img").src).toBe("https://i.imgflip.com/1bij.jpg");
  });
  test("display meme text inputs and image button", () => {
    render(<Main />);

    expect(screen.getByText("Top Text")).toBeInTheDocument();
    expect(screen.getByText("Bottom Text")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("One does not simply"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Get a new meme image 🖼" }),
    ).toBeInTheDocument();
  });
});
