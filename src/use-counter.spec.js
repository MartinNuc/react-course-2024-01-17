import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe('useCounter', () => {
  it('initializes the initial value', () => {
    const {result} = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it('increments value', () => {
    const {result} = renderHook(() => useCounter(5));
    act(() => result.current.increment());
    expect(result.current.count).toBe(6);
  });

  it('randomizes value', () => {
    const {result} = renderHook(() => useCounter(5));
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
    act(() => result.current.randomize());
    expect(result.current.count).toBe(0.5);
  });
});