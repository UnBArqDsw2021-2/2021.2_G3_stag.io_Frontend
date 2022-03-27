# Stag.io Front-end

Repositório focado no front-end da aplicação stag.io

# Requisitos

- Node 16.13.2
- NPM 8.1.2

# Instalação

- #### Instalação do Node no Windows

    Basta ir ao [site oficial do Node.js](https://nodejs.org/) e baixar o instalador.
Além disso, certifique-se de ter o "git" disponível em seu PATH, o "npm" pode precisar dele (Você pode encontrar o git [aqui](https://git-scm.com/)).

- #### Instalação do Node no Ubuntu

  Você pode instalar nodejs e npm facilmente com o apt install, basta executar os seguintes comandos.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Outros sistemas operacionais
  Você pode encontrar mais informações sobre a instalação no [site oficial Node.js](https://nodejs.org/) e no [site oficial NPM](https://npmjs.org/).


# Como rodar ?

1. Faça o clone deste repositório

    ```sh
    git clone https://github.com/UnBArqDsw2021-2/2021.2_G3_stag.io_Frontend.git
    ```

2. Acesse a pasta 'stag.io'

    ```sh
    cd stag.io/
    ```
3. Instale os pacotes necessários
    
    Este comando só precisa ser feito uma vez, caso instale um novo pacote, o arquivo package.json será atualizado.

    ```bash
    npm install
    ```
4. Rodar a aplicação

    ```bash
    npm start
    ```

Agora a aplicação estará rodando na porta 3000, por padrão, basta acessar <a href='http://localhost:3000/'>aqui</a>