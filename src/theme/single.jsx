import React from 'react';
import PageSearch from '../pages/page-search';
import useLocalStorage from '../hooks/useLocalStorage';
import useFetch from '../hooks/useFetch';

const layoutBase = () => {
  //Exemplo de criação no Local Storage com o Hook useLocalStorage
  const [ativoDigital, setAtivoDigital] = useLocalStorage(
    'AtivoDigital',
    'Nome do ativo digital',
  );

  //Exemplo de Fetch com o Hook useFetch
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      console.log(response);
    }
    fetchData();
  }, [request]);

  if (error) {
    console.log(error);
  } else if (loading) {
    console.log('Carregando...');
  } else if (data) {
    console.log(data);
  } else {
    null;
  }

  return (
    <>
      <PageSearch />
    </>
  );
};

export default layoutBase;
