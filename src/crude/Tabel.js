import React from 'react';
import { Table } from 'react-bootstrap'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead className="text-center">
                <tr>
                    <th>No</th>
                    <th>Nama Snack</th>
                    <th>QTY</th>
                    <th>Deskripsi Snack</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {bukus.map((buku, index) => {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{buku.nama}</td>
                            <td>{buku.qty} pcs</td>
                            <td>{buku.deskripsi}</td>
                            <td>Rp {buku.harga}</td>
                            <td>
                            <button className="btn btn-warning mr-1" onClick={() => editData (buku.id)}>Edit</button>````
                            <button className="btn btn-danger mr-1" onClick={() => hapusData (buku.id)}>Delete</button>

                            </td>
                        </tr>                    
                    )
                })}

            </tbody>
        </Table>
    )    
}

export default Tabel