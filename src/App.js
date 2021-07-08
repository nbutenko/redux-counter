import './App.css';
import {connect} from "react-redux";
import {useState} from "react";

function App(props) {
  const [increment, setIncrement] = useState(2);

  return (
    <div className="App">
      Count: {props.myCount}

      <input value={increment} onChange={e => setIncrement(e.target.value)}/>

      <button onClick={props.minus}>Minus</button>
      <button onClick={() => props.plusIncrement(increment)}>Plus</button>
    </div>
  );
}

const mapStateToProps = state => ({
  myCount: state.count
})

const mapDispatchToProps = dispatch => ({
  plus: () =>  dispatch({type: 'PLUS'}),
  minus: () => dispatch({type: 'MINUS'}),
  plusIncrement: (value) => dispatch({type: 'PLUS_INCREMENT', payload: value})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
