import React,{ Component } from 'react'
/* rutas en react */
import { Route } from 'react-router-dom'
import ListMovie from '../movie/list-movie'
import Home from '../home/home'

/*Aqui se declara las rutas de navegacion disponibles*/
class Rutas extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={ Home }/>
        {/*Si navego por la url localhost:3000/populares
          renderea el component Listmovie
          con el url de populares*/}
        <Route exact path="/populares" component={ ()=>(
          <ListMovie
            apiUrl={this.props.popular}
            section="Películas Populares"
            color="#e91e63"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />
        {/*Si navego por la url localhost:3000/populares
          renderea el component Listmovie
          con el url de valorados*/}
        <Route path="/valorados" component={()=>(
          <ListMovie
            apiUrl={this.props.valorados}
            section="Películas Más Valoradas"
            color="#2196F3"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />
        {/*Si navego por la url localhost:3000/populares
          renderea el component Listmovie
          con el url de estrenos*/}
        <Route path="/estrenos" component={()=>(
          <ListMovie
            apiUrl={this.props.proximos}
            section="Próximos Estrenos"
            color="#FFEB3B"
            handleOpen={ this.props.handleOpen }
          />)
        }
      />
    </div>
    )

  }
}

export default Rutas
