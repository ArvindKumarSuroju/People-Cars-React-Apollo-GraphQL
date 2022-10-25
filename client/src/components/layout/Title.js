const getStyles = () => ({
  title: {
    fontSize: "50",
    padding: "15px",
    marginBottom: "50px",
  },
});

const Title = () => {
  const styles = getStyles();

  return <h1 style={styles.title}>My App</h1>;
};
export default Title;
