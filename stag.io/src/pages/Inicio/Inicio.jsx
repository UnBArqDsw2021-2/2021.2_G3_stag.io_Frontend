import './Inicio.css';

function Inicio() {
  return (
    <div className="Inicio">
      
      <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
            <img className="img-fluid" 
              src={`${process.env.PUBLIC_URL}/logo/logo-white.png`} width = "50" alt="logo"/>
            </a>
            <div class="collapse navbar-collapse">
                <ul>
                  <h2 class="title">Stag.io</h2>
                </ul>
            </div>
            <form class="d-flex">
              <button class="btn btn-dark buttonLoggin" type="submit">Login</button>
            </form>
        </nav>

    </div>
  );
}

export default Inicio;
