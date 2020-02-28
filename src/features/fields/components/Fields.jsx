import React from "react";
import jsonCanchas from "./jobs_cancha.json"
import Table from 'react-bootstrap/Table'

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    }

    console.log("jsonCanchas", this.state.fields)
  }

  componentDidMount() {
    // peticion a servidor para traer todas las canchas
    this.setState({
      fields: jsonCanchas    
    })
  }

  handleRedirect(field) {
    this.props.history.push(`fields/${field.id}`)
  }

  render() {
    // let fields = this.state.fields.map((field) => <h1 onClick={() => this.handleRedirect(field)} key={field.id}>{field.nombre}</h1>)

    // console.log("fields", fields)
    // return (
    //   <div>
    //     {fields}
    //   </div>
    // )
    let rows = this.state.fields.map((field) => <tr onClick={() => this.handleRedirect(field)} key={field.id}>
      <td>{field.nombre}</td><td>{field.distrito}</td><td>{field.teléfono}</td><td>{field.costo_por_hora}</td><td>{field.jugadores_por_equipo}</td>
    </tr>)
    return (
      <div>
        {/* <Field /> */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Distrito</th>
              <th>Teléfono</th>
              <th>Costo por hora</th>
              <th>Jugadores por equipo</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
        {/* {games} */}
      </div>
    )
  }
}

export {
  Field
}