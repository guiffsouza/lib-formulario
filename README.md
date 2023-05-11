# Package lib-formulario

Uma Lib React para realizar criação de formulario.
&nbsp;
Acesse o [link](https://www.npmjs.com/package/lib-formulario) do repositório do package no site oficial NPM.
&nbsp;
Acesse o [link](https://github.com/guiffsouza/lib-formulario) do repositório do Github.

## Como usar

Para instalar o package bastar rodar o comando abaixo.

```
$ npm install lib-formulario
```

### Component Input

O Componente `Input` tem os seguintes tipos `'email'`, `'text'`, `'number'`, `'tel'`, `'password'`, `'date'`, `'datetime'`.
&nbsp;
Abaixo um exemplo de uso do componente.

```
import { Input } from 'lib-formulario';

function App() {
  return (
    <>
      <Input
          id='email'
          type='email'
          placeholder='Seu email'
          required={true}
          erro={true}
          messageErro='erro'
          border='normal'
          />
    </>
  );
}

export default App;
```

O componente `<Input/>` pode receber os seguintes valores:

| Key         | Tipagem                                                          | Valor Opcional ? |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| id          | string                                                           | Não              |
| label       | string                                                           | Sim              |
| placeholder | string                                                           | Sim              |
| name        | string                                                           | Sim              |
| type        | 'email', 'text', 'number', 'tel', 'password', 'date', 'datetime' | Sim              |
| value       | string, number                                                   | Sim              |
| maxlength   | number                                                           | Sim              |
| erro        | boolean                                                          | Sim              |
| messageErro | string                                                           | Sim              |
| border      | 'normal', 'none'                                                 | Não              |
| required    | boolean                                                          | Sim              |
| mask        | boolean                                                          | Sim              |
| valueMask   | 'tel', 'date', 'dateFull'                                        | Sim              |
| onchange    | (e: React.ChangeEvent<HTMLInputElement>) => void                 | Sim              |
| onblur      | (e: React.FocusEvent<HTMLInputElement>) => void                  | Sim              |
| oninvalid   | (e: React.FormEvent<HTMLInputElement>) => void                   | Sim              |

Você pode passar uma Key `mask={true}` e `valueMask={'tel'}` para criar uma máscara `(11) 1 1111 - 1111` no input.

### Component InputList

O Componente `InputList` criar um input com listagem.
&nbsp;
O Componente recebe um array.
&nbsp;
Abaixo um exemplo de como usar o componente.

```
import { InputList } from 'lib-formulario';

function App() {
  return (
    <>
      <InputList
        label='Mes'
        lista={['janeiro', 'fevereiro']}
        name='mes'
        border='normal'
        required={true}/>
    </>
  );
}

export default App;
```

O Componente `<InputList/>` recebe os seguintes valores:

| Key      | Tipagem                                     | Valor Opcional ? |
| -------- | ------------------------------------------- | ---------------- |
| label    | string                                      | Sim              |
| lista    | string[]                                    | Não              |
| name     | string                                      | Não              |
| value    | string                                      | Sim              |
| border   | 'normal', 'none'                            | Sim              |
| required | boolean                                     | Sim              |
| onchange | (e: React.ChangeEvent<HTMLElement>) => void | Sim              |

### O Component Button

O Componente `Button` criar um botão.
&nbsp;
Abaixo um exemplo de como usar o componente.

```
import { Button } from 'lib-formulario';

function App() {
  return (
    <>
      <Button type='submit'>Enviar</Button>
    </>
  );
}

export default App;
```

O Componente `<Button/>` recebe os seguintes valores:

| Key      | Tipagem                                          | Valor Opcional ? |
| -------- | ------------------------------------------------ | ---------------- |
| type     | 'button', 'submit', 'reset'                      | Não              |
| children | ReactNode                                        | Não              |
| color    | string                                           | Sim              |
| onclick  | (e: React.MouseEvent<HTMLButtonElement>) => void | Sim              |

Você pode passar uma key `color={"#fff"}` para mudar a cor do background do botão.
