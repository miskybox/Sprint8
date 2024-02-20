//TodayBalance.test.
import { render} from "@testing-library/react";
import { test, expect } from "vitest";
import  TodayBalance from '../components/TodayBalance';

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalBalance component", () => {
    render(<TodayBalance />)
    expect(true).toBeTruthy()
})