type confFalseType = {
  maiusculo: boolean;
  minusculo: boolean;
  numero: boolean;
  caracteres: boolean;
};
type conferenciaType = (senha: string) => true | confFalseType;

export const useConfereSenha: conferenciaType = (senha) => {
  const maiusculo = /[A-Z]/;
  const minusculo = /[a-z]/;
  const numero = /[0-9]/;
  const caracteres = /[!@#$%&*]/;
  const senhaValida =
    senha.length >= 8 &&
    senha.match(maiusculo) &&
    senha.match(minusculo) &&
    senha.match(numero) &&
    senha.match(caracteres);
  if (senhaValida) {
    return true;
  }
  let confFalse: confFalseType = {
    minusculo: false,
    maiusculo: false,
    numero: false,
    caracteres: false,
  };
  if (!senha.match(maiusculo)) {
    confFalse.maiusculo = true;
  }
  if (!senha.match(minusculo)) {
    confFalse.minusculo = true;
  }
  if (!senha.match(numero)) {
    confFalse.numero = true;
  }
  if (!senha.match(caracteres)) {
    confFalse.caracteres = true;
  }
  return confFalse;
};
