//TotalBalance.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TotalBalance from '../components/TotalBalance';
import { ContextProvider } from '../context/Context';

describe("TotalBalance", () => {
  test("should render TotalBalance component", () => {
    render(
      <ContextProvider>
        <TotalBalance />
      </ContextProvider>
    );

    expect(screen.getByText("Total Balance")).toBeDefined;
  });
});