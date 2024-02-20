//DailyVariation.test.tsx

import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import DailyVariation from "../components/DailyVariation";

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalBalance component", () => {
    render(<DailyVariation/>)
    expect(true).toBeTruthy()
})

