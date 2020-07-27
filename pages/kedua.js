import Layout from '../layouts/layout';

function kedua(){
    return(
    <div>
        <Layout >
        <h1>Register</h1>
        <p> lakukan register</p>
        <hr />
        <label>Nama : </label>
                      <input type="text" id="txt_nama"/> 
                      <br/>
                    <label>Alamat : </label>
                      <input type="text" id="txt_alamat"/> 
                      <br/> 
                    <label>Email : </label>
                      <input type="email" id="txt_email"/>
                      <br/>
                    <label>Password : </label>
                    <input type="password" id="txt_password"/>
                    <p align="center"><a href="ketiga.js"><button >LOG IN</button></a></p>
                    <hr/>
        </Layout>
    </div>
    );
    }

export default kedua;