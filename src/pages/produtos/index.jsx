import axios from "axios"
const Produtos = () => {
    // Consumo de um endpoint com as pizzas
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/index")
    .then(response=>{
        console.log(response.data)
    })
    
    // Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
               {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos