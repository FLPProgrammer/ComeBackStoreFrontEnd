import { 
    CardBox,
    Row,
    Input,
    Checkbox,
    Total
} from './styles';

import { IPaymentProps } from '../../interfaces/interfaces';


export function CardPaymentDetails({ total }: IPaymentProps) {
    return (
        <CardBox>
            <Row>
                <Input placeholder="CVV"/>
                <Input placeholder="MM/AA" />
            </Row>

           <Row>
                <Input placeholder="CVV"/>
                <Input placeholder="Parcelas"/>
           </Row>

           <Checkbox>
                <Input type="checkbox"/>
                <label>Salvar o cartão para compras futuras</label>
           </Checkbox>

           <Checkbox>
                <Input type="checkbox" />
                <label>Titular do cartão é diferente do cadastro</label>
           </Checkbox>


           <Total> Valor: R${total}</Total>
           
           <button>Alterar forma de Pagamento</button> 
        </CardBox>
    )
}