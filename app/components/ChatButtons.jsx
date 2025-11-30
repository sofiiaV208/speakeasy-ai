export default function ChatButtons({ onSelect }) {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => onSelect("Start free lesson")}>
        Start free lesson
      </button>

      <button style={styles.button} onClick={() => onSelect("English level test")}>
        English level test
      </button>

      <button style={styles.button} onClick={() => onSelect("Contact options")}>
        Contact options
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginTop: "10px"
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px"
  }
};
