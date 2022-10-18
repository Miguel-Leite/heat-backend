# DOWhile

<p>
É uma aplicação onde usuário pode enviar uma mensagem, compartilhando as suas espetativas sobre o DOWhile o que ele está apredendo ao longo da sua carreira como DEV e desse jeito vai colocando as suas mensagem, nesta mesma plataforma DOWhile.
</p>

### Como rodar na sua máquina?

<p>Depois de fazeres o clone do repositório na sua máquina, acessa a pasta do projecto no seu terminal e roda o seguinte comando: 
<br />
<b>Usando YARN: </b>
<br />

Instalar os pacotes: ``yarn install`` <br />
Inicializar o servidor: ``yarn dev``

<br />
<b>Usando NPM</b>
<br />

Instalar os pacotes: ``npm install`` <br />
Inicializar o servidor: ``npm dev``

</p>

### Tecnologia utilizadas:

<ul>
    <li>
        BACK-END
        <ul>
            <li><b>NodeJS</b>: Para construção da API</li>
            <li><b>ORM -> Prisma</b>: para o gerênciamento da informações na BASE DE DADOS.</li>
            <li><b>Socket.io</b>: Para envio de mensagem em REALTIME (tempo real).</li>
            <li><b>Elixir</b>: Para receber as mensagem para poder formar as nuvens de tags.</li>
        </ul>
    </li>
    <li>
        FRONT-END
        <ul>
            <li><b> ReactJS </b>: Para o desenvolvimento da página web. </li>
            <li><b> React Native</b>: Para o desenvolvimento da aplicação mobile. </li>
        </ul>
    </li>
</ul>

### Funcionalidades da aplicação:

[x] Autenticação com github
[x] Registro de usuário
[x] Registro de mensagem
[x] Listar as 3 ultimas mensagens
[x] Listar dados do perfil do usuário autenticado

### Routas (endpoints)
<p>URL: 

`http://localhost:4000` </p>
<table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>GET</th>
            <th>POST</th>
        </tr>
    </head>
    <tbody>
        <tr>
            <td> Oauth </td>
            <td> /github </td>
            <td> X </td>
        </tr>
        <tr>
            <td> Oauth(callback) </td>
            <td> /signin/callback </td>
            <td> X </td>
        </tr>
        <tr>
            <td> Oauth(autenticação e registrar usuário) </td>
            <td> X </td>
            <td> /authenticate </td>
        </tr>
        <tr>
            <td> Registrar mensagem </td>
            <td> X </td>
            <td> /messages </td>
        </tr>
        <tr>
            <td> Listar 3 ultimas mensagens </td>
            <td> /messages/last3 </td>
            <td> X </td>
        </tr>
        <tr>
            <td> Perfil de usuário </td>
            <td> /profile </td>
            <td> X </td>
        </tr>
    </tbody>
</table>