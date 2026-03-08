import { Container } from './styles';
import { useMyAccountTab } from '../../../hooks/useMyAccountTab';


export function MyAccountTab(){

    const {
      name,
      email,
      phone,
      setName,
      setEmail,
      setPhone,
      saveProfile,
      loading,
    } = useMyAccountTab();

  return (
    <Container>
      <h2>Minha Conta</h2>

      <section>
        <div>
          <strong>Nome:</strong> Felipe José de Lima
          <div><input value={name} onChange={e => setName(e.target.value)} /></div>
        </div>
        <div >
          <strong>Email:</strong> lplpwr@gmail.com
          <div><input value={email} onChange={e => setEmail(e.target.value)} /></div>
        </div>
        <div>
          <strong>Telefone:</strong> (42) 99903-3921
          <div><input value={phone} onChange={e => setPhone(e.target.value)} /></div>
        </div>
      </section>

      <div className="actions">

        <button
        className='primary'
        onClick={saveProfile}
        disabled={loading}
        >
          {loading ? 'Salvando...' : 'Salvar alterações'}
        </button>
      </div>
    </Container>
  );
}
