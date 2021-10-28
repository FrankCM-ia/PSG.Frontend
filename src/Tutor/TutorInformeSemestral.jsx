import React from 'react'
import Tutorbar from '../Tutor/Tutorbar'
import { Col,Row } from 'react-bootstrap'
import '../styles/TutorInformeSemestral.css'
const TutorInformeSemestral = () => {
    return (
        <div>
            <Tutorbar  nombrePage={"Informe Semestral"}/>
            <div className="contenido">
                <div className="Principala">
                    <div className=" part1Info">
                       <Row>
                           <Col className="col-6">
                                <h4 className="titulo" >Cuadro resumen</h4>
                           
                           </Col>
                           <Col className="col-2">
                                <h4 className="titulo"> Semestre :</h4>                            
                           </Col>
                           <Col className="col-4">
                           <select className="form-select form-select-sm mb-2 alturaDrop" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                       </Row>
                       <div className=" alt altur">
                            <table class=" table-bordered anchotab ">
                                    <thead style={{backgroundColor:'#85b7e9'}}>
                                        <tr>
                                        <th scope="col-6">Indicador</th>
                                        <th scope="col-3">Cantidad</th>
                                        <th scope="col-3">Porcetaje</th>
                                        
                                        </tr>
                                    </thead >
                                    <tbody className="alturaTabla">
                                        <tr className="alturaCelda">
                                            <td>Tutorados total</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            
                                        </tr>
                                        <tr className="alturaCelda">
                                            <td>Estudiantes con tutorias realizadas a inicio de semestre</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            
                                        </tr>
                                        <tr className="alturaCelda">
                                            <td>Estudiantes con tutorias realizadas a medio semestre</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            
                                        </tr>
                                        <tr className="alturaCelda">
                                            <td>Estudiantes con tutorias realizadas a final de semestre</td>

                                            <td>Mark</td>
                                            <td>Otto</td>
                                            
                                        </tr>
                                    </tbody>
                                    </table>
                       </div>
                    </div>
                    </div>
                    <div>
                    <div className=" part2Info">
                        <Col>
                            <Row className="mx-1" >
                                <h6>Casos de Tutoria que implican mas de dos sesiones</h6>
                            </Row>
                            <Row>
                                <Col className="col-1 mx-3">
                                   <b>Tutorado :</b>
                                </Col>
                                <Col className="col-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </Col >
                                <Col className="col-2">
                                    <button className="btnAdd">
                                        Añadir
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                        <div className="col tableScrollSe alt"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead style={{backgroundColor:'#85b7e9'}}>
                                            <tr>
                                                <th>Nro</th>
                                                <th>Curso</th>
                                                <th>Estudiante</th>
                                                <th>Detalles</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                    <div className=" part3Info">
                    <Col>
                    <Row className="mx-1" >
                                <h6>Casos de Tutoria que implican mas de dos sesiones</h6>
                            </Row>
                            <Row>
                                <Col className="col-1 mx-3">
                                   <b>Tutorado :</b>
                                </Col>
                                <Col className="col-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </Col >
                                <Col className="col-2">
                                    <button className="btnAdd">
                                        Añadir
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                        <div className="col tableScrollSe alt"> 
                                    <table  className="table table-bordered bg-light ">
                                        <thead style={{backgroundColor:'#85b7e9'}}>
                                            <tr>
                                                <th>Nro</th>
                                                <th>Curso</th>
                                                <th>Estudiante</th>
                                                <th>Detalles</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                    <button className="btnEnviar">
                        Enviar
                    </button>
                </div>
            </div>
       </div>
    )
}

export default TutorInformeSemestral
