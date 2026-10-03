# Formulário Angular — abordagem reativa

Exercício Angular 11 sobre formulários reativos, validação, grupos de dados e hobbies dinâmicos. Os dados ficam no navegador e não são enviados a um servidor.

## Requisitos e execução

- Node.js compatível com Angular CLI 11 e as dependências antigas do projeto
- npm

Na raiz do repositório:

~~~sh
npm ci
npm start
~~~

Abra http://localhost:4200.

## Build, testes e lint

~~~sh
npm run build
npm test
npm run lint
~~~

O runner de teste usa Karma e pode exigir um navegador compatível. O comando E2E npm run e2e está definido, mas depende da configuração e ferramentas antigas do Protractor incluídas no projeto; pode não funcionar em ambientes atuais.

Na verificação manual, envie o formulário vazio, teste valores inválidos, adicione/remova hobbies e confira as mensagens de validação.

## Manutenção

A stack Angular 11 e ferramentas de lint/E2E estão antigas. Atualize as dependências e substitua os testes padrão por casos específicos de validação antes de reutilizar o projeto.