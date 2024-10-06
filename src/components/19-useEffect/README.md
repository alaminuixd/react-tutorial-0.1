# Rules to use React Hooks

### 1. Only Call Hooks at the Top Level

- Do not call hooks inside loops, conditions, or nested functions.
- Always call hooks at the top level of your React function to ensure that they are called in the same order on every render.

### 2. Only Call Hooks in React Functions

- Hooks can only be used in functional components (not class components) or inside custom hooks.
- Do not use hooks in regular JavaScript functions or outside of React components.

### 3. Use useState for State

- Use the useState hook to declare state in functional components.
- Example:

```bash
const [count, setCount] = useState(0);
```

### 4. Use useEffect for Side Effects

- Use the useEffect hook for any side effects such as fetching data, subscriptions, or modifying the DOM.
- Example:

```bash
useEffect(() => {
  // Side effect logic here
}, []);
```

- Provide dependencies (in the array) to control when the effect should run.

### 5. Always Provide Dependencies in useEffect

- If your effect depends on state or props, include them in the dependency array.
- Example:

```bash
useEffect(() => {
  // Effect logic
}, [someState, someProp]); // Add state/props here
```

### 6. Keep Hooks Pure

- Hooks should not cause side effects directly. Avoid doing anything inside the component body that affects the outside world (like changing the DOM directly).
- Side effects should go in useEffect or other similar hooks.

### 7. Follow the Naming Convention

- Custom hooks should start with the prefix use (e.g., useCustomHook) so React can identify them as hooks.
- Example:

```bash
function useCustomHook() {
  // Custom hook logic
}
```

### 8. Don’t Skip the Dependency Array in useEffect (unless intentional)

- Always pass a dependency array in useEffect, useCallback, useMemo, etc. If it's empty, the effect will run only once on mount.
- If you don't pass the dependency array, the effect will run on every render (which is rarely desirable).
