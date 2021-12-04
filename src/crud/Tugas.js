import React from 'react';
import {Table ,Form} from 'react-bootstrap'

const makanans = [
{
	nama: 'Tic-Tic',
	QTY: 15,
	harga: 5000
},
{
	nama: 'Chitato',
	QTY: 17,
	harga: 6500
},
{
	nama: 'Pocky',
	QTY: 12,
	harga: 6000
},
{
	nama: 'Lays',
	QTY: 13,
	harga: 5000
},
{
	nama: 'Doritos',
	QTY: 11,
	harga: 7000
},
{
	nama: 'Garuda Rosta',
	QTY: 10,
	harga: 10000
},
{
	nama: 'SiiP',
	QTY: 17,
	harga: 3000
},
{
	nama: 'Pillows',
	QTY: 18,
	harga: 6000
},
{
	nama: 'Taro net',
	QTY: 20,
	harga: 8000
},
{
	nama: 'Cheetos',
	QTY: 16,
	harga: 4000
},

]

// Reduce
const total_bayar = makanans.reduce((makan, makanan) => makan + makanan.harga, 0)

const Tugas = () => {
	return(
			<Table hover border="25" striped bordered hover variant="dark">
				<tr>
					<th>No</th>
					<th>Nama</th>
					<th>QTY</th>
					<th>Harga</th>
					<th>Action</th>
				</tr>
					{makanans.map((makanan, index) => (
				<tr>
					<td>{index + 1}.</td>
					<td>{makanan.nama}</td>
					<td>{makanan.QTY}</td>
					<td>{makanan.harga}</td>
					
				</tr>

					))}
					<Form.Group className="mb-5" controlId = "harga">
					</Form.Group>
			</Table>
		)
	}

export default Tugas