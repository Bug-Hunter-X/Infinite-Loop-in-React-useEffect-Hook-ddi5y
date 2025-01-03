```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will trigger an infinite loop
    setCount(count + 1);
  }, [count]); // count is in dependency array, causing infinite loop

  return <div>Count: {count}</div>;
}
```