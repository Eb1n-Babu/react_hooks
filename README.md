React hooks are functions that let you use state and other React features in functional components. 
They were introduced in React 16.8 to make state management and lifecycle features easier without class components. 
Below is a beginner-friendly guide to the basic React hooks, including what they do,
how to use them, and simple examples. I'll keep it clear, concise, and structured for someone new to React.

1. useState
   What it does: Manages state in functional components.
   It lets you add a state variable and a function to update it.

#state: The current state value.
#setState: Function to update the state.
#initialState: The initial value of the state (can be a number, string, object, etc.).

Key Points:

useState triggers a re-render when the state changes.
Don’t mutate state directly; always use setState.
Use multiple useState calls for different state variables.