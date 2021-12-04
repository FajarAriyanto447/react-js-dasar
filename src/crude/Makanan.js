import React from 'react';
import {Table ,Form} from 'react-bootstrap'

const makanans = [
{
	nama: 'Tic-Tic',
	QTY: 15,
	harga: 5000
}
]

// Reduce
const total_bayar = makanans.reduce((makan, makanan) => makan + makanan.harga, 0)

const Makanan = () => {
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

export default Makanan