import axios from 'axios';
import { AppError } from '../utils/appError';
import { handleApiError } from '../utils/handleApiError';

type ViaCepResponse = {
  cep: string;
  uf: string;
  erro?: boolean;
};

export async function getStateByCep(cep: string): Promise<string> {
  try {
    const cleanCep = cep.replace(/\D/g, '');

    if (cleanCep.length !== 8) {
      throw new AppError('CEP inválido', 400);
    }

    const { data } = await axios.get<ViaCepResponse>(
      `https://viacep.com.br/ws/${cleanCep}/json/`
    );

    if (data.erro) {
      throw new AppError('CEP não encontrado', 404);
    }

    return data.uf;
  } catch (error) {
    throw handleApiError(error);
  }
}
