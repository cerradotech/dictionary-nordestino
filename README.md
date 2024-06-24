# React Template

Este é um projeto de pré configurado de uma aplicação Next.js com o intuito de acelerar o processo de desenvolvimento fornecendo um escopo já inicializado. Este projeto contém uma base de código considerável que podem ajudar na produção de código novo

Estamos abertos a mudanças! Sinta-se à vontade para contribuir conosco, abrindo um Pull Request para propor alterações. Juntos, podemos tornar este projeto ainda melhor. É nois 🧡.

## Contribuindo

Todas as contribuições são bem-vindas! Se você possui correções, melhorias ou novas funcionalidades para adicionar, não hesite em abrir um pull request. 🤹🏽‍♀️🤹🏽‍♀️🤹🏽‍♀️🤹🏽‍♀️

## Como Começar

1. Clone este repositório localmente pelo terminal da sua máquina (cmd/bash):

   ```bash
   git clone https://github.com/cerradotech/react-template.git
   ```

2. Em seguida, acesse o diretório do projeto:

   ```bash
   cd react-template
   ```

3. Dentro do diretório, instale as dependências necessárias:

   ```bash
   yarn install
   ```

   ou, utilizando npm:

   ```bash
   npm install
   ```

   > **Atenção:** Este é um passo inicial obrigatório. Após a instalação das dependências, serão executados comandos pré-configurados para preparar o ambiente de desenvolvimento.

4. Após a instalação das dependências, inicie o servidor local da aplicação:

   ```bash
   yarn dev
   ```

   ou, com npm:

   ```bash
   npm run dev
   ```

5. Agora é só ser feliz e iniciar a magia 🧙🏽‍♀️🧙🏽‍♀️🧙🏽‍♀️.

## Scripts

Este projeto inclui vários scripts listados no `package.json`:

- `commit`: Executa a rotina de commit, aplicando as regras configuradas no husky.
- `postinstall`: Configura o ambiente do projeto após a instalação das dependências.
- `start`: Inicia um servidor limpo para a aplicação, sem as configurações usadas no ambiente de desenvolvimento.
- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria uma build da aplicação com ambiente de produção.
- `build:dev`: Cria uma build da aplicação com ambiente de desenvolvimento.
- `lint:check`: Executa o linter e busca por erros que violam as regras de linting.
- `lint:fix`: Executa o linter e corrige problemas automaticamente, quando possível.
- `pretty:check`: Executa o code formatter e busca por erros que violam as regras de formatação.
- `pretty:write`: Executa o code formatter e corrige problemas de formatação automaticamente.
- `generate:component`: Gera um novo componente.
- `generate:page:public`: Gera uma nova página pública.
- `generate:page:private`: Gera uma nova página privada.
- `generate:store`: Gera uma nova store do MobX.

Para executar qualquer um desses scripts, utilize o seguinte comando:

```bash
yarn run <nome do script>
```

## Diretrizes de Arquitetura do Projeto

### Módulo _components_

- Este diretório abriga todos os componentes desenvolvidos no projeto.
- Optamos por adotar a estratégia de separar os componentes em módulos distintos para proporcionar uma orientação mais clara durante o desenvolvimento. Assim, eles foram organizados em módulos relevantes para cada contexto. Caso haja necessidade de criar um novo módulo, sinta-se à vontade para fazê-lo 🫶🏽.
- Ao criar um novo módulo, é fundamental exportá-lo no arquivo index do diretório **components**.
- Quanto à nomenclatura dos componentes, seguimos a seguinte prática com o intuito de facilitar a orientação durante o desenvolvimento e garantir maior facilidade na localização dos componentes à medida que o projeto evolui. A convenção adotada é a seguinte:
  - O arquivo principal do componente é nomeado como: **nome.component.tsx**
  - Os estilos associados ao componente são nomeados como: **nome.styles.ts**

### Módulo _core_

- Este diretório é responsável por abrigar todos os arquivos essenciais em relação ao projeto, logo arquivos de configuração, configuração de startup, os arquivos de contexto (as stores do mobx) e o tema estão presentes neste módulo.
- O arquivo de **bootstrap** É responsável por abrigar as configurações de startup necessárias para a aplicação rodar, como por exemplo podemos alocar a buscas de dados de um remote config, uma configuração de token global, a importação de estilos estática de libs externas ou etc...
- O diretório **contexts** abriga os arquivos de contextos feitos apartir do engine de contextos do react, e que posteriormente serão externalizados para um hook param poderem ser utilizados.
- O diretório **config** É responsável por abrigar os arquivos de configuração que algumas libs necessitam.
- O diretório **stores** É responsável por abrigar os arquivos de contextos que armazenam dados transitórios da aplicação, aqui nós optamos por utilizar o Mobx como gerenciador de contexto por ele ter uma curva de configuração e utilização muito simples.
- O diretório **theme** É responsável por abrigar os arquivos que compõem o tema, modificações nesse diretório não são muito indicadas pois o tema é um módulo a parte que funciona por si só. Só são indicadas modificações muito específicas.
  - O **tema** é baseado em cima de uma biblioteca do **FIGMA** chamada **Figma Tokens** ou **Figma Token Studio**, assim para alterar a composição do tema é recomendado importar o **theme.json** que está dentro do diretório theme no **Figma Token Studio** alterar por essa biblioteca os tokens de cores, tokens de tamanhos, tokens de sombra e etc...
  - **Atenção:** Se alguns dos tokens forem alterados, será necessário alterar os arquivos de tipagens que estão dentro da pasta `/theme/types` referentes ao token que foi alterado.
  - A tipagem de tamanho segue por padrão o esquema de tamanhos alfanuméricos, então por padrão temos como unidade de tamanho: `xxs, xs, sm, md, lg, xl, xxl`
  - A tipagem de cores segue por padrão o esquema de escala definida pelo Material Design do google, logo temos como escala de cores valores que são: `50,100,200,300,400,500,600,700,800,900`, e com dois tipos um para cor `fade` e outro pra cor `contrast`

### Módulo _infra_

- Este é o diretório responsável por abrigar tudo aquilo que leva a aplicação a algo externo ou que coisa lidem com algo externo a aplicação.
- A pasta de **api** contém o arquivos que lidam com chamada às gateways externos, com api handler estamo utilizando o axios
  - na pasta de providers, estão os arquivos de configurações de chamada aos provedores onde foram pré definidas algumas regras para o _api caller_ padrão. Dentro deste diretório também se encontram os arquivos de interceptos.
  - Como estamos utilizando **Next.js** foram pré-configurados dois provedores padrões, uma para chamadas externas e outro para chamadas internas (usado pra chamar as API Routes do next). Também optamos por utilizar dois diretórios específicos para armazenar os arquivos com funções de chamadas a api, um para chamadas remotas `/remote` e um para chamadas locais `/local`.
- A pasta **dto** é utilizada para armazenar os arquivos com funções que vão formatar os dados coletados pela apis.
- A pasta **etties** é onde armazenamos os arquivos de classes (ou as entidades) padrões da nossa aplicação.
- O diretório de **middlewares** é onde alocamos os arquivos com funções que podem ser usadas como reguladores das requisições feitas nas apis locais.
- O diretório de **services** é onde armazenamos os módulos de integração com serviço externos, e a partir deles disponibilizamos um ajuntado de funções que nos permitam utilizar esses serviços externos que muitas vezes são advindos de um sdk e não de uma chamada a uma api.
  - Neste diretório temos uma pasta especifica chamada **api** que serve para abrigar blocos de funções que usamos nas api routes para assim não poluir muito esses arquivos, assim segregamos as responsabilidades de abrigar muitos códigos de regras para outros arquivos externos.

### Módulo _modules_

- Ele é único e exclusivamente usado para abrigar todas as importações de libs instaladas no projeto.

### Módulo _pages_

- É onde estão centralizadas todas as páginas da aplicação, como estamos usando next com pages routes cada diretório criado neste módulo automaticamente vira uma página da aplicação
- Quanto à nomenclatura das páginas, seguimos essa prática com o intuito de facilitar a orientação durante o desenvolvimento e garantir maior facilidade na localização das páginas à medida que o projeto evolui. A convenção adotada é a seguinte:
  - O nome do diretório deve sempre ser em letra minúsculas (lowercase).
  - **index.page.tsx**: É o arquivo principal da página, esse é o arquivo que irá ditar todas as regras impostas naquela página como: o que será renderizado, e quais serão as regras de negócio relativa aquela página em específico
  - **nome.view.tsx**: É o arquivo onde iremos construir a interface relativa a aquela página, optamos por seguir assim pois deste modo segregamos tudo aquilo que regras de negócio de tudo aquilo que é interface de usuário
  - **nome.styles.ts**: São estilos associados a interface.
  - **nome.form.ts**: É um arquivo que pode ou não existir, se houver algum formulário presente naquela página, esse arquivo armazena as validações e a estrutura que o formulário deve seguir.

### Módulo _utils_

- É onde estão todos os utilitarios do projetos como algumas funções de ajuda, arquivos estaticos imagens, icones, tipagens, hooks e etc..
- A pasta **assets** é onde estão centralizados todos os recursos visuais da aplicação, como animações, icones, images e etc..
- A pasta **enums** é onde alocamos valores padrões que geralmente são imutaveis e serão utilizados em diversos lugares, assim gerantimos uma maior equidade e assetividade na utilização dos mesmos.
- A pasta **helpers** é onde alocamos arquivos com funções gerais ou abstrações de códigos que executam rotinas espécifcas e que geralemente são utilizadas repetidamente e em diversos lugares.
- A pasta **hooks** é onde estão os hooks customizados do projeto ou os hooks feitos apartir dos contextos disponibilizados no modulo _core_.
- A pasta **locales** é onde fica o arquivo de string com as traduções da aplicação
- A pasta **routes** é o modulo exclusivo para abriga tudo aquilo que é relativo á navegação do projeto
- A pasta **types** é onde estão todas as tipagems do projeto.

## Licença

Este projeto está licenciado sob os termos da Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
