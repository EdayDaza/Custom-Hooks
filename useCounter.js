import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const decrement = (value = 1) => {
        if (counter === 0) return;

        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialState)
    }

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    return {
        counter,
        decrement,
        reset,
        increment
    }
}
