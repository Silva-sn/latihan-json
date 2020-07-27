import Layout from '../layouts/layout';

 function kesatu(){
return(
    <div>
        <Layout>
        <h1>Login</h1>
        <p>masuk acaunt anda dan happy shooping</p>
        <hr/>
                <label>Email : </label>
                <input type="email" id="txt_email"/>
                <br/>
                <label>Password : </label>
                <input type="password" id="txt_password"/>
                <p align="center"><a href="ketigabaru.html"><button >MASUK</button></a></p>
        <hr />
        </Layout>
        
    </div>
    
);
}
export default kesatu;