```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only updates the count once on mount
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array, runs only once on mount

  return <div>Count: {count}</div>;
}
```