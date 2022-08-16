# Aliquota
Projeto de Cálculo de imposto de renda sobre um produto financeiro em relação ao tempo de retirada.

## Problema:

* Um determinado produto financeiro recolhe imposto de renda apenas quando o cliente faz o seu resgate.
* O Produto pode ter diversas aplicações e resgates, no decorrer do tempo.
* O cálculo do IR segue a seguinte lógica abaixo:
  * Até 1 ano de aplicação: 22,5% sobre o lucro;
  * De 1 a 2 anos de aplicação: 18,5% sobre o lucro;
  * Acima de 2 anos de aplicação: 15% sobre o lucro;
* A aplicação não pode ser igual ou menor que zero.
* A data de resgate não pode ser menor que a data de aplicação.

### Preparação do Ambiente Virtual

```
npm init -y
```
```
npm install --save-dev jest
```
1. Dentro do package.json, na chave scripts -> test trocar o valor da propriedade por "jest".
2. Nomear os nomes dos módulos com .test.js. Ex.: myCode.test.js.
3. Para rodar os testes:
```
npm t
```
### Neste Projeto:

* Fazemos uso de biblioteca de testes do JavaScript: JEST;
* Buscamos utilizar conceitos de TDD, DDD, OO, SOLID e Clean Code;
