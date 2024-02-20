//GraphicData.test.tsx
import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import GraphicData from "../components/GraphicData";

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalBalance component", () => {
    render(<GraphicData />)
    expect(true).toBeTruthy()
})