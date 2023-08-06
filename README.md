<br />
<p align="center">
  <h2 align="center">Desafio Geopixel</h2>

  <p align="center">
    Teste de proficiência em programação
    <br />
  </p>
</p>

<details open="open">
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li>
      <a href="#desafios">Desafios</a>
      <ul>
        <li><a href="#relógio">Relógio</a></li>
      </ul>
      <ul>
        <li><a href="#manipulador-de-itens">Manipulador de Itens</a></li>
      </ul>
      <ul>
        <li><a href="#bola-tímida">Bola Tímida</a></li>
      </ul>
    </li>
    <li>
      <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
    </li>
    <li>
      <a href="#instruções-gerais">Instruções Gerais</a>
      <ul>
        <li><a href="#configurações-e-instalações">Configurações e Instalações</a></li>
      </ul>
    </li>
   
  </ol>
</details>

## Desafios

### Relógio

Crie um relógio que leia a hora atual do sistema e exiba o horário no formato hh:mm:ss na tela.

### Manipulador de Itens

Crie um conjunto de componentes que forneçam ao usuário as interfaces pare selecionar itens em uma
lista, visualizar qual item está atualmente selecionado, meios no qual possa adicionar e remover itens da
lista e limpar a caixa de inserção de novos itens.
Você deverá criar uma caixa de seleção que exiba os itens atuais disponíveis a serem selecionados e/ou
removidos. A caixa deverá ter um item de placeholder informativo que deve iniciar selecionado, mas não
deve ser permitido sua seleção posteriormente. Além do placeholder, deverá existir ao menos um item
inicial na lista.
Crie um input de texto que permita ao usuário escrever os itens a serem adicionados ou removidos da
lista. O input deverá ter um texto de placeholder que informe ao usuário seu propósito de utilização.
Crie um conjunto de 3 botões, sendo um botão responsável por adicionar o item escrito no input na lista,
outro deve remover o item escrito no input da lista e um último que apenas limpa o que estiver escrito
no input.
Por fim, crie um texto que exiba qual é o item atualmente selecionado pelo usuário.

Regras entre os componentes:

- Os itens na lista devem ser case-sensitives, ou seja, não devem existir itens exatamente iguais na
  lista, por exemplo, a ocorrência de “ eopixel” e “ eopixel” não deve acontecer, mas “geopixel” e
  “GeoPixel" podem existir
- Para o item ser removido da lista, deve-se digitá-lo exatamente igual ao que se encontra na lista
- Ao adicionar ou remover um item da lista, o input ser limpo
- Não permita que string vazia seja adicionada à lista
- Notifique o usuário, com uma mensagem clara, sempre que ele tentar realizar uma ação que não
  deva, como adicionar um item repetido
- Notifique o usuário, com uma mensagem clara, sempre que uma ação for bem-sucedida,
  informando o que acabou de acontecer, como inserir um item na lista ou apagar um item com
  sucesso

### Bola Tímida

Criar um componente em formato de bola que quando o usuário realizar a ação de hover sobre ela com
o cursor, ela mude de posição aleatoriamente dentro de seu espaço estabelecido.
A mudança de posição deve ser feita com uma transição e não mudar imediatamente para o novo local.

## Tecnologias Utilizadas

O projeto foi criado usando as tecnologias:

- [Node.js] [React] [TypeScript]

<!-- GETTING STARTED -->

## Instruções Gerais

A seguir estão as instruções para a instalação, configuração e uso do projeto.

### Configurações e Instalações

1. Clone o repositório

```sh
  git clone https://github.com/tamireslucena/fundamentos-react
```

2. Instalar dependências

```sh
  npm install
```

3. Subir a aplicação

```sh
  npm run start
```

> A página estará disponível em <a href="localhost:3000">localhost:3000</a>.
