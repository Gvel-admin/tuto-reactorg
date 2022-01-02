function FancyBorder(props) {
  return (
    <div style={{ color: props.color }}>
      <p>Children:</p>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color={'red'}>
      <p>Hello World</p>
    </FancyBorder>
  );
}

export default WelcomeDialog;
