import Layout from '../layouts/layout';
import data from "../components/data.json"


export default function keempat(){
return(
    <div>
        <Layout>
        <h1>Pemesanan</h1>
        <p>pastikan barang yang anda pilih benar dan sesuai </p>
        <hr />

        <div style={{TextAlign: 'center'}}>
         {
            data.map((data,index) => 
            <div key={index} style={{marginButtom: 50}}>
                   <p><h3>Pemesanan</h3>:{data.pemesanan}</p>
                   <p><h3>produk</h3>:{data.info.produk}</p>
                   <p><h3>harga</h3>:{data.info.harga}</p>
                   <p><h3>total</h3>:{data.info.total}</p>
            </div>
         )}
    </div>

        </Layout>
        
    </div>
    
);
}

