import { Container, Header, Form, Field, Actions } from './styles';
import { useChangePassword } from '../../../hooks/useChangePassword';

export function ChangePasswordTab() {
    
    const {
        currentPassword,
        newPassword,
        confirmPassword,
        setCurrentPassword,
        setNewPassword,
        setConfirmPassword,
        submit,
        loading,
        error,
        success
    } = useChangePassword();

    return (
        <Container>
            <Header>
                <h2>Alterar Senha</h2>
                <p>Preencha os campos abaixo para alterar a senha</p>
            </Header>
            <Form>
                <Field>
                    <label></label>
                    <input type="password" 
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}/>
                    <small>Digite sua senha usada atualmente</small>
                </Field>

                <Field>
                    <label>Nova Senha</label>
                    <input type="password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    <small>Mínimo de 5 caracteres.</small>
                </Field>

                <Field>
                    <label>Confirmação da sua senha</label>
                    <input type="password" 
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <small>Confirme sua senha.</small>
                </Field>

                {error && <p className='error'>{error}</p>}
                {success && <p className='success'>Senha alterada com sucesso!</p>}
            </Form>

            <Actions>
                <button className='cancel' type='button'>Cancelar</button>
                <button className='primary' onClick={submit} disabled={loading}>{loading ? 'Alterando...' : 'Alterar senha'}</button>
            </Actions>
        </Container>
    );
}