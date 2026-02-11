import { useState } from 'react';
import { getStateByCep } from '../services/freight.service';
import { handleApiError } from '../utils/handleApiError';

export function useFreight() {
  const [cep, setCep] = useState('');
  const [freight, setFreight] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function calculateFreightByRegion(uf: string): number {
    switch (uf) {
      case 'PR':
      case 'SC':
      case 'RS':
        return 20; // Sul

      case 'SP':
      case 'RJ':
      case 'MG':
      case 'ES':
        return 25; // Sudeste

      case 'DF':
      case 'GO':
      case 'MT':
      case 'MS':
        return 30; // Centro-Oeste

      case 'BA':
      case 'PE':
      case 'CE':
      case 'RN':
      case 'PB':
      case 'AL':
      case 'SE':
      case 'PI':
      case 'MA':
        return 35; // Nordeste

      default:
        return 45; // Norte
    }
  }

  async function handleFreight() {
    try {
      setLoading(true);
      setError(null);

      const uf = await getStateByCep(cep);
      const value = calculateFreightByRegion(uf);

      setFreight(value);
    } catch (err) {
      const appError = handleApiError(err);
      setError(appError.message);
      setFreight(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    freight,
    loading,
    error,
    handleFreight,
  };
}
