import Link from 'next/link';
function Menu(){
 return (
 <nav className="navbar" role="navigation" arialabel="main navigation">
 <div className="navbar-brand">
 <a className="navbar-item" href="#">
 <img src="/images/ly.jpg" height="300" />
 </a>

 <a role="button" className="navbar-burger burger" arialabel="menu" aria-expanded="false" data-target="navbarBasicExample">
 <span aria-hidden="true"></span>
 <span aria-hidden="true"></span>
 <span aria-hidden="true"></span>
 </a>
 </div>

 <div id="navbarBasicExample" className="navbar-menu">
 <div className="navbar-end">
 <Link href="/"><a className="navbaritem"><i className="fas fa-home fa-fw"></i>Home</a></Link>
 <Link href="/kesatu"><a className="navbaritem"><i className="fas fa-user-circle fa-fw"></i>Login</a></Link>
 <Link href="/kedua"><a className="navbaritem"><i className="fas fa-user-circle fa-fw"></i>Register</a></Link>
 <div className="navbar-item has-dropdown is-hoverable">
 <Link href="/ketiga"><a className="navbarlink"><i className="fas fa-shopping-cart fa-fw"></i>Versi Album</a></Link>
 <div className="navbar-dropdown">
 <Link href="/keempat"><a className="navbaritem"><i className="fas fa-mobile fa-fw"></i>Pemesanan</a></Link>
 <Link href="/kelima"><a className="navbar-item"><i className="fas fa-money-bill-alt fafw"></i>Pembayaran</a></Link>
 </div>
 </div>
 </div>
 </div>
 </nav>
 );
}
export default Menu;