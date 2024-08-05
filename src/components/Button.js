export default function Button({ onAction, children }) {
  return (
    <button className="button text-2xl" onClick={onAction}>
      {children}
    </button>
  );
}
