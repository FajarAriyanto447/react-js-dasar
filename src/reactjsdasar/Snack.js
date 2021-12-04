import React from 'react';

const makanans = [
{
	nama: 'Tic-Tic',
	QTY: 10,
	harga: 5000
},
{
	nama: 'Chitato',
	QTY: 10,
	harga: 6500
},
{
	nama: 'Pocky',
	QTY: 10,
	harga: 6000
},
{
	nama: 'Lays',
	QTY: 10,
	harga: 5000
},
{
	nama: 'Doritos',
	QTY: 10,
	harga: 7000
},
{
	nama: 'Garuda Rosta',
	QTY: 10,
	harga: 10000
},
{
	nama: 'SiiP',
	QTY: 10,
	harga: 3000
},
{
	nama: 'Pillows',
	QTY: 10,
	harga: 6000
},
{
	nama: 'Taro net',
	QTY: 10,
	harga: 8000
},
{
	nama: 'Cheetos',
	QTY: 10,
	harga: 4000
},

]

// Reduce
const total_bayar = makanans.reduce((makan, makanan) => makan + makanan.harga, 0)

const Snack = () => {
	return(
		<div>
			<h2>Toko Mbok Jiyem</h2>
			<table>
				
					<tr>
					<th>No</th>
					<th>Nama</th>
					<th>QTY</th>
					<th>Harga</th>
					<th>Total Harga</th>
					</tr>
					{makanans.map((makanan, index) => (
					<tr>
					<td>{index + 1}.</td>
					 <td>{makanan.nama}</td>
					 <td>{makanan.QTY}</td>
					  <td>= Rp {makanan.harga}</td>
					  <td>Rp {makanan.QTY*makanan.harga}</td>
					  </tr>

					))}
			</table>

			<h2>Snack Promosi Di Bawah 5000</h2>
			<table>
			<tr>
			<th>No</th>
			<th>Nama</th>
			<th>Harga</th>
			</tr>
				{makanans.filter((makanan) => makanan.harga <6000)
					.map((makanan, index) => (
					<tr>
					<td>{index + 1}</td>
					<td>{makanan.nama} =</td>
					<td>Rp {makanan.harga}</td>
					</tr>
					))}
			</table>

			<h3>Total Bayar : Rp {total_bayar}</h3>
		</div>
		)
	}

export default Snack