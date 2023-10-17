export const CounterViews = ({ add, counter, restart, onAdd }) => {
  return (
    <div>
      <button onClick={add}>add</button>
      <h4>{counter}</h4>
      <button onClick={restart}>restart</button>
      <button onClick={() => onAdd(counter)}>Added to shopping cart</button>
    </div>
  );
};
