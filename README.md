![Forks](https://img.shields.io/github/forks/VictorMonteiro7/party-time-frontend) ![Stars](https://img.shields.io/github/stars/VictorMonteiro7/party-time-frontend) ![Issues](https://img.shields.io/github/issues/VictorMonteiro7/party-time-frontend)

# Projeto Party-Time

Cadastre as suas festas (públicas ou privadas).

# Descrição

Projeto feito para treinamento, e você pode ver o funcionamento completo aqui -> [Party-Time](https://party-time-frontend.vercel.app/)

# Para instalar na sua máquina:

### Clone o projeto

```bash
git clone https://github.com/VictorMonteiro7/party-time-frontend
```

### Instale as dependências

```bash
npm install
```

### Adicione um arquivo _.dev_ na pasta raíz do projeto, e coloque o link do servidor:

`REACT_APP_API_URL:http://localhost:5000`

> O backend do projeto se encontra neste link -> https://github.com/VictorMonteiro7/party-time-backend

### Para rodar o projeto:

```bash
npm start
```

## Funcionalidades

#### Na página inicial:

- [x] Cadastro
- [x] Login

**Caso o usuário não esteja logado:**

- [x] Feed mostrando todas as festas públicas
- [x] Ao clicar na publicação, será enviado para a tela de login

**Caso o usuário esteja logado:**

- [x] Feed mostrando todas as festas públicas e as suas próprias festas privadas
- [x] Ao clicar em qualquer publicação, será enviado para a página da festa, mostrando mais informações e, caso tenha mais fotos, todas as imagens.

#### Na página do usuário

- [x] Feed contendo as suas próprias festas
- [x] Página de atualização do nome do usuário e/ou senha.
- [x] Página de upload de festas

#### Na página da festa

> Página acessível somente para usuários logados

- [x] Grid com todas as fotos
- [x] Informações sobre a festa

**Caso o usuário seja dono da festa**

- [x] Fieldset para poder apagar a festa.

## Agradecimentos

Agradeço ao curso de [MongoDB](https://www.udemy.com/course/mongodb-do-basico-ao-avancado-c-mongoose-e-projetos/) do [Matheus Battisti](https://www.linkedin.com/in/matheusbattisti/), ao curso de Node da [B7Web](https://b7web.com.br/fullstack/), ao curso de Frontend da [Origamid](http://origamid.com/), e também a todos vocês que vieram até aqui para dar uma olhada ao projeto (vocês deixariam esse dev muito feliz ao dar uma estrelinha nos dois projetos =D).

---

Fiquem à vontade para dar um Fork no projeto, ou, me ajudar a melhorá-lo.

---

**[Victor Monteiro](https://github.com/VictorMonteiro7)**

##### Licença

![MIT](https://img.shields.io/github/license/VictorMonteiro7/party-time-frontend)
