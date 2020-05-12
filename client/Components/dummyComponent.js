import React from 'react';
import Draggable from 'react-draggable';
import { db } from '../firebase';

export class dummyComponent extends React.Component {
	render() {
		return (
			<Draggable>
				<div className="dummyComponent">
					<img draggable="false" id="Moogle" src="Moogle-v1.png" />
					<div>Drag this</div>
				</div>
			</Draggable>
		);
	}
}
export default dummyComponent;
// class SomeComponent extends React.Component {

//   render(){
//     return (
//        <div>Test Component</div>)

//   }
// }

// const mapState = state => {
//   return {
//     property: state.property
//   }
// }
// const mapDispatch = dispatch => {
//   return {
//     method: () => dispatch(thunkCreator())
//   }
// }

// export default connect(mapState,mapDispatch)(SomeComponent);
