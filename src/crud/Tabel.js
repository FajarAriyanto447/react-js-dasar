import React from 'react';
import { Table } from 'react-bootstrap'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead className="text-center">
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {bukus.map((buku, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{buku.nama}</td>
                            <td>{buku.deskripsi}</td>
                            <td>{buku.harga}</td>
                            <td>
                                <button className="btn btn-warning mr-1" onClick={() => editData (buku.id)}>Edit</button>
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