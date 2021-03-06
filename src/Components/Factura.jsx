import React from 'react';
import axios from 'axios';
import '../assets/css/Factura.css';



let uri = "";
let destructured = [];


class Factura extends React.Component {
  
constructor (){
    super();
    this.state={
        data:{}
    }
}


async componentDidMount(){
    uri = window.location.href;
    destructured = uri.substr(uri.indexOf("pse_result/")).split("/");
    let data = await axios.post(`https://kieroapi.net/pse_pay_order`,{ order_id: destructured[1] });
    if (data.error) return console.error(data.message);
    this.setState({data});
    
}



    render() {
    
      const { data } = this.state;
     
        
        return(



            <div className='container mt-5 ' >
                
                <div className='row'>

                <div className='col-lg-12 col-sm-12 centro mt-5'>
          
                   
                    <p className='title  fa mt-5'>RESULTADOS DE LA OPERACION</p>
           
                            <div className='row border'>
                            <div className="col s border">Empresa </div>
                            <div className="col a border">Kiero sas</div>
                                                      
                            <div className="w-100"></div>
                            <div className="col s border">NIT </div>
                            <div className="col a border">900575607-2</div>
                            
                            
                            <div className="w-100"></div>
                            <div className="col s border">Fecha </div>
                            <div className="col a border">{ ` ${Object.keys(data).length > 1 && data.data.transactionDate}` }</div>
        
                            <div className="w-100"></div>
                            <div className="col s border">Estado </div>
                            <div className="col a border">{ ` ${Object.keys(data).length > 1 && data.data.state}` }</div>

                            <div className="w-100"></div>
                            <div className="col s border">Referencia de pedido </div>
                            <div className="col a border">{ ` ${Object.keys(data).length > 1 && data.data.code}` }</div>

                            <div className="w-100"></div>
                            <div className="col s border">Referencia de transaccion </div>
                            <div className="col a border">{ ` ${Object.keys(data).length > 1 && data.data.orderID}` }</div>

                            <div className="w-100"></div>
                            <div className="col s border">Referencia de Banco </div>
                            <div className="col a border">{ ` ${Object.keys(data).length > 1 && data.data.transactionID}` }</div>

                            <div className="w-100"></div>
                            <div className="col s border"> Valor </div>
                            <div className="col a border">{ ` $: ${Object.keys(data).length > 1 && data.data.value_transaction}` }</div>

                            </div>
                         
                            <form action="https://kiero.co" className="btnBack">
                                <input className="btnBack btn btn-danger btn-sm mt-3 mb-4"type="submit" value="Volver" />
                            </form>
                            
                            
                           
                            <button type="button" className="btn btn-danger btn-sm mt-3 mb-4"  onClick={window.print} >IMPRIMIR</button>
                       

                    </div>

                    


                    </div>

            </div>
          


        );
    }

}

export default Factura;
