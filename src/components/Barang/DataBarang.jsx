import React,{useState, useEffect} from 'react';
import axios from "axios";

const DataBarang = () => {
  const [barang, setBarang] = useState([]);

  const getBarang = async() => {
    const response = await axios.get('http://localhost:5000/barang');
    setBarang(response.data);
  }

  useEffect(() => {
    getBarang();
  }, []);

  return (
    <div>
        <div className="container mt-5">
            <h1 className='is-size-5'>Data Barang</h1>
            <table className="table is-bordered is-striped is-fullwidth mt-5">
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID Barang</th>
                  <th>Nama</th>
                  <th>Satuan</th>
                  <th>Stok Barang</th>
                  <th>Harga Jual</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {barang.map((data, index) => (
                  <tr key={data.id_barang}>
                    <td>{index + 1}</td>
                    <td>{data.id_barang}</td>
                    <td>{data.nama_barang}</td>
                    <td>{data.satuan_barang}</td>
                    <td>{data.stok_barang}</td>
                    <td>{data.harga_barang}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataBarang