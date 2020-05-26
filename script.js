class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isHovered: false
    };
  }

  render() {
    return <div>ha</div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
