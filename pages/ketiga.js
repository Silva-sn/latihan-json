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
    <ul>
                        <li>
                            <span><a href="y.html">BTS</a></span>
                        <div class="divclass">
                            <div>
                                <img src="images/map.jpg"/>
                                <img src="images/b1.jpg"/>
                                <img src="images/d.jpg"/>
                            </div>
                            <div class="divclass">
                                <div class="div_label_bts">
                                    <label class="label_album_bts">Album : Persona</label>
                                    <label class="label_album_bts">Paket : Ls Army</label>
                                    <label class="label3_album_bts">Poster : BTS Love Yourself</label>
                                </div>
                            </div>
                            <div class="divclass">
                                <div class="div_label_bts">
                                    <label class="label_price_bts">Price : Rp. 1.500.000</label>
                                    <label class="label_price_bts">Price Ls: Rp. 700.000</label>
                                    <label class="label3_price_bts"> Price : Rp. 500.000</label>
                                </div>
                            </div>
                        </div>
                    </li>
                        <li>
                            <span><a href="x.html">Blackpink</a></span>
                        <div class="divclass">
                            <div>
                                <a href="#"><img src="images/bp1.jpg"/></a>
                                <a href="#"><img src="images/bp4.jpg"/></a>
                                <a href="#"><img src="images/e.jpg"/></a>
                            </div>
                            <div class="divclass">
                                <div class="div_label_bp">
                                    <label class="label_album_bp">Album : As If Its Your Last</label>
                                    <label class="label_album_bp">Paket : Ls Blink + Kantong Ls</label>
                                    <label class="label3_album_bp">Poster : Bp Square Up</label>
                                </div>
                            </div>
                            <div class="divclass">
                                <div class="div_label_bp">
                                    <label class="label_price_bp">Price : Rp. 1.000.000</label>
                                    <label class="label_price_bp">Price Ls: Rp. 800.000</label>
                                    <label class="label3_price_bp">Price : Rp. 400.000</label>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                        <li>
                            <span><a href="z.html">Exo</a></span>
                        <div class="divclass">
                            <div>
                                <img src="images/As (2).jpg"/>
                                <img src="images/exo.jpg"/>
                                <img src="images/c.jpg"/>
                            </div>
                            <div class="divclass">
                                <div class="div_label_exo">
                                    <label class="label_album_exo">Album : Exodus</label>
                                    <label class="label_album_exo">Paket : Ls ExoL</label>
                                    <label class="label3_album_exo">Poster : Exo</label>
                                </div>
                            </div>
                            <div class="divclass">
                                <div class="div_label_exo">
                                    <label class="label_price_exo">Price : Rp. 1.000.000</label>
                                    <label class="label_price_exo">Price Ls: Rp. 800.000</label>
                                    <label class="label3_price_exo">Price : Rp. 300.000</label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                );
            
        
        </Layout>
    </div>
    
);
}
