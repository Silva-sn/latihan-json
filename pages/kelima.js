import Layout from '../layouts/layout';
import data from "../components/data.json"

export default function kelima(){
return(
    <div>
        <Layout>
        <h1>Pembayaran</h1>
        <p>lakukan pembayaran dengan metode yang anda pilih </p>
        <hr />

        <div style={{TextAlign: 'center'}}>
         {
            data.map((data,index) => 
            <div key={index} style={{marginButtom: 50}}>
                   <p><h3>pembayaran</h3>:{data.pembayaran}</p>
                   <p><h3>nama pemesan</h3>:{data.info.nama}</p>
                   <p><h3>alamat lengkap</h3>:{data.info.alamat}</p>
                   <p><h3>no hp</h3>:{data.info.nohp}</p>
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
