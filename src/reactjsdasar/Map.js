import React from 'react';

const makanans = [
{
	nama: 'Soto',
	harga: 12000
},
{
	nama: 'Bakso',
	harga: 10000
},
{
	nama: 'Mie Ayam',
	harga: 14000
},
{
	nama: 'Nasi Goreng',
	harga: 15000
}
]

// Reduce
const total_bayar = makanans.reduce((makan, makanan) => makan + makanan.harga, 0)

const Map = () => {
	return(
		<div>
			<h2>Maping</h2>
			<ul>
				{makanans.map((makanan, index) => (
					<p>{index + 1}. {makanan.nama} = Rp {makanan.hargaa}</p>
					))}
			</ul>

			<h2>Map Filter hargaa yang lebih dari 11.000</h2>
			<ul>
				{makanans.filter((makanan) => makanan.hargaa >11000)
					.map((makanan, index) => (
					<li> {index + 1}. {makanan.nama} hargaa {makanan.hargaa}</li>
					))}
			</ul>

			<h3>Total Bayar : {total_bayar}</h3>
		</div>
		)
	}

export default Map