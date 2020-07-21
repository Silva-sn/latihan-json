import Layout from '../layouts/layout';
import data from "../components/data.json"

export default function ketiga(){
return(
    <div>
        <Layout>
        <h1>Versi Album</h1>
        <p>pilih dan tentukan barang yang anda suka </p>
        <hr />

        <div style={{TextAlign: 'center'}}>
         {
            data.map((data,index) => 
            <div key={index} style={{marginButtom: 50}}>
                   <p><h3>toko</h3>:{data.toko}</p>
                   <p><h3>album</h3>:{data.info.album}</p>
                   <p><h3>website</h3>:{data.info.website}</p>
                   <p><h3>kontak</h3>:{data.info.kontak}</p>
            </div>
         )}
    </div>
        
        </Layout>
        <h3>Hubungi kami</h3>
        <p>Alamat : Banyuwangi</p>
        <p>Contac Person : 08634276271</p>
        <p>Email : kpop_store@gmail.com</p>
        <hr />
    </div>
    
);
}
