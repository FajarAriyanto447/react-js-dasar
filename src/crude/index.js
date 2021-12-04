import React from 'react';
import Navbare from './Navbare';
import Tabel from './Tabel';
import Formulir1 from './Formulir1'

export default class Crud extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = {
			bukus : [],
			nama : "",
			qty : "",
			deskripsi : "",
			harga : "",
			id : "",
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if(this.state.id === "") {
			this.setState({
			bukus: [
			...this.state.bukus,
			{
				id: this.state.bukus.length+1,
				nama: this.state.nama,
				qty: this.state.qty,
				deskripsi: this.state.deskripsi,
				harga: this.state.harga
			}
		]
	})
		} else {
			const bukuYangSelainDiPilih = this.state.bukus
			.filter((buku) => buku.id !== this.state.id)
			.map((filterBuku) => {
				return filterBuku
			})
			this.setState({
				bukus: [
				...bukuYangSelainDiPilih,
				{
					id: this.state.bukus.length+1,
					nama: this.state.nama,
					qty: this.state.qty,
					deskripsi: this.state.deskripsi,
					harga: this.state.harga
				}
				]
			})
		}
		this.setState({
			nama :"",
			qty :"0",
			deskripsi :"",
			harga :"0",
			id :"",
		})
}

	editData =(id) => {
		const bukuYangDiPilih = this.state.bukus
		.filter((buku) => buku.id === id)
		.map((filterBuku) => {
			return filterBuku
		
	})

		this.setState({
			nama : bukuYangDiPilih[0].nama,
			deskripsi : bukuYangDiPilih[0].deskripsi,
			harga : bukuYangDiPilih[0].harga,
			id : bukuYangDiPilih[0].id,
		})
		console.log("10 :", id)
		}
		// 
		hapusData = (id) => {
			const bukuBaru = this.state.bukus
			.filter((buku) => buku.id !== id)
			.map((filterBuku) => {
				return filterBuku
			})
			this.setState({
				bukus : bukuBaru
			})
		}



	render() {
		console.log(this.state.bukus)
		return(
			<div>
				<div className="container mt-4">
					<Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData}/>
				 	<Formulir1 {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
				</div>
			</div>
		)
	}
}