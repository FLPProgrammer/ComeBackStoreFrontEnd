import { Container, OrderCard } from './styles';
import { IOrder } from '../../../interfaces/interfaces'


const ordersMock: IOrder[] = [
  {
    id: 6804,
    date: '08/12/2025 09:09',
    status: 'Pago',
    total: 17.99,
  },
];

export function OrdersTab() {
  if (ordersMock.length === 0) {
    return <p>Você ainda não realizou nenhum pedido.</p>;
  }

  return (
    <Container>
      {ordersMock.map(order => (
        <OrderCard key={order.id}>
          <p>
            <strong>Número</strong>
            {order.id}
          </p>

          <p>
            <strong>Data</strong>
            {order.date}
          </p>

          <p>
            <strong>Situação</strong>
            <span className="status">{order.status}</span>
          </p>

          <p>
            <strong>Valor</strong>
            R$ {order.total.toFixed(2)}
          </p>

          <button>Visualizar pedido completo</button>
        </OrderCard>
      ))}
    </Container>
  );
}
