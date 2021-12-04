import React from 'react';
import Operan from './Operan';

export default class StateProps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			makanan : 'BMW,Verari,Lamborghini'
		}
	}

	gantiMakanan = (makanan_baru) => {
		this.setState({
			makanan: makanan_baru
		})
	}

	render() {
		return (
			<div>
			 <h2>{this.state.makanan}</h2>
			 <button onClick={() => this.gantiMakanan("BMW,Verari")}>Ganti Mobil</button>
			 <Operan makanan = { this.state.makanan}/>
			</div>
			)
	}
}