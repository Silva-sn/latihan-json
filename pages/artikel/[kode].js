import dummyData from '../../dataset/dummy.json';
import DaftarArtikel from '../../components/daftarartikel';
const Artikel = (props) => {
 return (
 <div className="container">
 <DaftarArtikel />
 <hr />
 <h1 className="title">{props.judul}</h1>
 <p>{props.isi}</p>
 </div>
 );
}
export async function getServerSideProps(context){
 let kode = context.params.kode;
 let data = dummyData.find(x => x.id == kode);
 
 let { judul, isi } = data;
 return {
 props : {
 
 judul, isi
 }
 }
}
export default Artikel;