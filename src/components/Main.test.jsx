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
});
