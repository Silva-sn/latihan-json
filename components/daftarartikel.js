import Link from 'next/link';
import artikel from '../dataset/dummy.json';
const DaftarArtikel = () => (
 <p>
 Daftar artikel : <br />
 <ul>
 {artikel.map((data)=>(
 <li><Link href="/artikel/[kode]" as={`/artikel/${data.id}`}><a
>{data.judul}</a></Link></li>
 ))}
 </ul>
 </p>
)
export default DaftarArtikel;
