import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

const Formulir1 =({nama, deskripsi, qty, harga, handleChange, id, handleSubmit}) => {
	return (
		<div className = "mt-5">
			<Row>
				<Col>
					<h4>{id ? "Edit Data" : "Tambah Data"}</h4>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						 <Form.Group className="mb-3" controlId="formBasicEmail">
						 <Form.Label>Nama Snack</Form.Label>
					     <Form.Control 
					     type="text" 
					     name="nama" 
					     value={nama} 
					     onChange={(event) => handleChange(event)} required/>
						 </Form.Group>


						<Form.Group className="mb-3" controlId="QTY">
						<Form.Label>QTY</Form.Label>
						<Form.Control 
						type="number"
						name="qty"
						value={qty}
						onChange={(event) => handleChange(event)} required/>
						</Form.Group>

						 <Form.Group className="mb-3" controlId="deskripsi">
						 <Form.Label>Deskripsi Snack</Form.Label>
						 <Form.Control
						 as="textarea"
						 rows="3" 
						 name="deskripsi" 
						 value={deskripsi}
						 onChange={(event) => handleChange(event)} required/>
						 </Form.Group>

						<Form.Group className="mb-3" controlId="harga">
						<Form.Label>Harga Snack</Form.Label>
						<Form.Control 
						type="number"
						name="harga"
						value={harga}
						onChange={(event) => handleChange(event)} required/>
						</Form.Group>

						<Button variant="primary" type="submit">
						Add 
						</Button>
					</Form>
				</Col>
			</Row>
		</div>
		)
}
export default Formulir1