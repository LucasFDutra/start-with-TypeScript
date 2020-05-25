- [**English**](#English)
- [**Português**](#Português)

# English
---

# What this repository is about
This repository will be used for my TypeScript studies.

To begin I wold like to indicate two links here:
- [Rocketseat - TypeScript: Vantagens, mitos, dicas e conceitos fundamentais](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

# What is TypeScript?
Roughly speaking, TypeScript is JavaScript with typing, and its files end with the extensions `.ts` or `.tsx` for react project files. And it brings certain advantages over JavaScript, to understand some of these advantages see the sum function below:

```JavaScript
const sum = (a, b) => {
  return (a + b);
};
```

Se fizermos:

```JavaScript
sum(1,2);
```

We will have the answer to number 3, but what if we do:

```JavaScript
sum('string_1', 'string_2');
```

We will have as answer the concatenation of a string `string_1string_2`.

Of course, this is not a huge problem, if you are working on a personal project, where only you work. But imagine that you are on a giant project that if this type of behavior happens the system can break. Worse, imagine the work that would be needed to identify a simple typing error. That's why TypeScript is very welcome.

# How to use
For both node and react, it is necessary to install the node, yarn is optional, you can use npm to manage packages, I prefer yarn.

- [node](https://nodejs.org/en/)
    ```shell
    $ sudo apt-get install curl

    $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

    $ sudo apt-get install -y nodejs
    ```

- [yarn](https://yarnpkg.com/)
    ```shell
    $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    $ sudo apt-get update && sudo apt-get install yarn
    $ sudo apt-get update && sudo apt-get install --no-install-recommends yarn
    ```

## Node
For a node application, typescritp needs to be installed separately, as well as an interpreter for it (which will play the same role that the nodemon does on the conventional node), this interpreter is `ts-node-dev`. However, both TypeScript and ts-node-dev must be installed as development dependencies, as there is nothing that understands TypeScript, everything has to be converted to js later (role of ts-node-dev), then in production environments it is not necessary to install these libs.

> NOTE: A few days ago the version of [Deno] (https://deno.land/) was released, which is a runtime (the node is a runtime) for TypeScritp and JavaScript, but it is in v1 and recently launched, by this I will follow this tutorial with the "classic" way of using TypeScript.

> NOTE: I will use ts-node-dev but it is not the only option, we also have some others, such as [sucrase](https://www.npmjs.com/package/sucrase).

- [TypeScript](https://www.typescriptlang.org/)
    ```shell
    $ yarn add typescript -D
    ```
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
    ```shell
    $ yarn add ts-node-dev -D
    ```

Lembrando que para iniciar uma aplicação node, basta digitar
```shell
yarn init -y
```
Now for your application to work, you need to write the following in package.json:
```json
"scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
},
```

Ai no terminal digite o comando
```shell
yarn dev:server
```
> NOTE: you can give another key for this item, then instead of typing dev: start you would type something else. And I also assumed that your project's initial file would be inside a src folder and would be named index.ts

## React
With react it is a little simpler, there is no need to install TypeScript separately and neither an interpreter, the `create react-app` itself already does this job for us. Just type:

```shell
$ yarn create react-app `appName` --template=typescript
```

## React-Native
Instle o expo:
```shell
$ sudo npm install expo-cli --global
```
Just like react js in native, we don't need to do too many things to specify a TypeScript project. Just run the expo init and choose the TypeScript option.

```shell
$ expo init $appName
```

> NOTE: I use the expo for my projects, if you didn't want to use it and choose to use the react-native cli, I recommend this video [here](https://www.youtube.com/watch?v=XcU9GEUZTQA) from rocketseat, which will help you get started with react-native without the expo.

## Installing Libraries
Some libraries do not accompany typing with the main lib, such as express, which makes your code editor not know how to auto-complete things for you, as he cannot know what methods are available for a particular class that is calling from inside the library, so in some cases you will need to install these types together with the desired library, in the example of express just do:

```shell
$ yarn add express
$ yarn add @types/express -D
```

See that the type part also goes as a development dependency.

To identify when it is necessary to do this. See the gif below, when importing the express it has `...` below it, and if we move the mouse over it vscode informs that it is necessary to install `@types/express`, then whenever necessary vscode will warn.

Veja que a parte do tipo também vai como dependência de desenvolvimento.

<img src='./image/fig001.gif' />

> If you use another editor, then it may tell you otherwise, or you will need to look in the documentation to see if you need to install and how to do this.

An important point is that, unlike node, TypeScript imports libraries using the syntax of `import` even in the backend.

```TypeScript
import express from 'express';
```
## Configuring the lint
Considering that you are already a javaScript developer, then you probably use `eslint`, and here we are going to use it too. I will configure according to the airbnb settings.

First install `eslint` and` editor config`. In vscode you can find the same in markteplace, or install it with the command:

```shell
$ code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
```

- Create the file `.editorconfig`:
    ```conf
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

- Create the file `.eslintrc.js`:
    ```JavaScript
    module.exports = {
        env: {
            browser: true,
            es6: true,
            jest: true,
        },
        extends: [
            'airbnb',
            'plugin:@typescript-eslint/recommended',
            'prettier/@typescript-eslint',
        ],
        globals: {
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        plugins: ['react', 'import', 'jsx-a11y'],
        rules: {
            'react/jsx-filename-extension': [
                'error',
                {
                    extensions: ['.tsx'],
                },
            ],
            'import/prefer-default-export': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            'import/extensions': [
                0,
                { ts: 'always', tsx: 'always' }
            ],
            'quotes': ["error", "single"],
            "arrow-body-style": ["error", "always"],
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {},
            },
        },
    };

    ```

Copy the `.editorconfig` and` .eslintrc.js` files to the project folder.

### Dependencies
install the following libraries in your project as development dependencies:

```shell
yarn add prettier -D
yarn add eslint -D
yarn add eslint-config-airbnb -D
yarn add eslint-plugin-import -D
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D
yarn add @typescript-eslint/eslint-plugin -D
yarn add @typescript-eslint/parser -D
yarn add eslint-import-resolver-typescript -D
yarn add eslint-plugin-jsx-a11y -D
yarn add eslint-plugin-react -D
```

> NOTE: Eslint may not work at first, close the application and open it again to reload vscode. But if it still doesn't work, then a triangular icon will appear in the lower right corner, written `Eslint` on the front, click on it and see why eslint didn't work. Usually when it is the first time he is doing this process he can ask to install eslint globally on the machine.

# Declaration of variables
The TypeScript has a very intelligent typing (type inference), it is not necessary to declare a type every time a variable is declared, it is already able to understand what the type of the variable is, and assigns a type to it that will not change over time. application, and if you try to change you will receive a warning. However it is possible to declare the type of a variable if you want.

The basic types of TypeScript are: `number`, `string`, `boolean`, `void`, `null`, `undefined`, `any`, `never`, `Array`, `tuple`.

Below are some examples I took from this link [here](https://dzone.com/articles/what-are-the-basic-data-types-in-typescript), which explains each type better.

```TypeScript
// number
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;

// string
let firstName: string = "Kunal";

// boolean
let isPrimaryAccount: boolean = true;

// null
let nullValue: null = null;

// undefined
let undefinedValue: undefined = undefined;

// Array
let marks: number[] = [80, 85, 75];
let marks: Array<number> = [80, 85, 75];

// tuple
let person: [string, number] = ["Kunal", 2018];
```
# Functions
When declaring a function with the TypeScript it is necessary to inform the type of each attribute of the function, and also the return of it, taking as basis that our sum function the way to do this is:

```TypeScript
const sum = (a: number, b: number): number => {
  return (a + b);
};
```

> If we didn't know the type that would return from the function, we could use `void`. But you better know the type of return.

# Compound types
Just like the C language that has structures, TypeScript has some composite types as well. But they are far from complicated.

## Interfaces
To declare an interface do:

```TypeScript
interface interfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
}
```

To use this now is the same as with a basic type:

```TypeScript
const object : interfaceName = {
    value_1,
    value_2,
    value_n,
}
```

Or even in a function:

```TypeScript
interface ISum {
  a: number;
  b: number;
}

const sum = (values : ISum): number => {
  return (values.a + values.b);
};

const v: ISum = {
  a: 1,
  b: 2,
};

console.log(sum(v));
```

Another nice thing about interfaces is that one interface can inherit another:

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
};

interface secondInterfaceName {
    variable_1: firstInterfaceName;
    variable_2: basicType;
    variable_n: basicType;
};
```

Or even an interface that extends to another

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
};

interface secondInterfaceName extends firstInterfaceName {
    variable_z: basicType;
};
```

An interface can also have optional entries, that is, in the example above we can create a variable of type `firstInterfaceName` but which does not contain` variable_n`. For this we need to modify the interface a little by placing a question in the optional variable:

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n?: basicType;
};
```


## Types
Unlike interfaces, a type cannot be inherited, but it can contain multiple types. Here's an example:

```TypeScript
type Polygon =
  { type: 'square', x: number } |
  { type: 'circle', radius: number } |
  { type: 'rectangle', x: number, y: number };

function area(polygon: Polygon): number {
  switch (polygon.type) {
    case 'square':
      return (polygon.x ** 2);
    case 'circle':
      return (Math.PI * polygon.radius ** 2);
    case 'rectangle':
      return (polygon.x * polygon.y);
    default:
      return 0;
  }
};

console.log(area({
  type: 'square',
  x: 2,
}));
```
In this example, the area of a polygon can be calculated in different ways according to the geometry of the object to be calculated, so we can have different inputs according to the type of input.

## Enums
They serve to define constants. An example:

```TypeScript
enum Response {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: Response): void {
  console.log(recipient, message);
}

respond('Princess Caroline', Response.Yes);
```
The result of this is going to be `'Princess Caroline 1'`

# Fim
Basically the TypeScript is that, there are some specifications for react hooks, but it ends up being the same thing we saw here, and it ends up being better to go searching the internet as the errors appear. So it is important to configure `eslint` as it will help you in this mission of learning TypeScript.

But to help you, I left two projects here, a backend with node, and another front end with react, both very simple. The node application simulates sending email and the react application would be the interface that consumes that api. The entire application was made together with a rocketseat tutorial, which you can find [here](https://www.youtube.com/watch?v=0mYq5LrQN1s). And I highly recommend taking a look at the video and following their channel, not least because it's having a lot of TypeScript content.

To run the applications enter the backend folder and type in the terminal:

```shell
$ yarn install
$ yarn dev:server
```

Open another terminal, enter the frontend folder and type:

```shell
$ yarn install
$ yarn start
```

## endpoints
- Endpoint get: `http://localhost:3333/users`
- Response: 
    ```JavaScript
        {
            name: 'Lucas',
            email: 'lucas@gmail.com.br',
        }
    ```
- Endpoint put: `http://localhost:3333/users`
- Response: foi
- console.log: email enviado para lucas@gmail.com.br Bem vindo

For the react application I only did part of the get method, to execute the post method in the api use [insomnia](https://insomnia.rest/) or [postman](https://www.postman.com/) .

<img src='./image/fig002.gif' />

# Português
---

# Do que se trata esse repositório
Esse repositório será destinado para meus estudos sobre TypeScript.

Para começar eu gostaria de indicar dois links aqui:
- [Rocketseat - TypeScript: Vantagens, mitos, dicas e conceitos fundamentais](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

# O que é TypeScript?
A grosso modo o TypeScript é o javascript com tipagem, e seus arquivos terminam com a extensão `.ts` ou `.tsx` para arquivos de projetos react. E ele trás certas vantagens em relação ao javascript, para entender um pouco dessas vantagens veja a função de soma abaixo:

```JavaScript
const sum = (a, b) => {
  return (a + b);
};
```

Se fizermos:

```JavaScript
sum(1,2);
```

Teremos como resposta o numero 3, mas e se fizermos:

```JavaScript
sum('string_1', 'string_2');
```

Teremos como resposta a concatenação de uma string `string_1string_2`.

Claro que isso não é um imenso problema, se você estiver trabalhando em um projetinho pessoal, em que só você trabalha. Mas imagine que você está em um projeto gigante que se esse tipo de comportamento acontecer o sistema pode quebrar. E pior, imagine o trabalho que seria necessário para identificar um simples erro de tipagem. Por isso o TypeScript é muito bem vindo.

# Como utilizar
Tanto para node como para react, é necessário instalar o node, o yarn é opcional, você pode utilizar o npm para gerenciar os pacotes, eu prefiro o yarn.

- [node](https://nodejs.org/en/)
    ```shell
    $ sudo apt-get install curl

    $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

    $ sudo apt-get install -y nodejs
    ```

- [yarn](https://yarnpkg.com/)
    ```shell
    $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    $ sudo apt-get update && sudo apt-get install yarn
    $ sudo apt-get update && sudo apt-get install --no-install-recommends yarn
    ```

## Node
Para uma aplicação node, o typescritp precisa ser instalado separadamente, assim como um interpretador para ele (que fará o mesmo papel que o nodemon faz no node convencional), esse interpretador é o `ts-node-dev`. Porém tanto o TypeScript quanto o ts-node-dev devem ser instalados como dependências de desenvolvimento, pois não existe nada que entenda TypeScript, tudo tem que ser convertido para js depois (papel do ts-node-dev), então em ambientes de produção não é necessásio instalar essas libs.

> OBS.: A poucos dias saiu a versão do [Deno](https://deno.land/) que é uma runtime (o node é uma runtime) para o TypeScritp e JavaScript, mas está na v1 e recém lançado, por isso vou seguir esse tutorial com o modo "classico" de utilizar TypeScript.

> OBS.: Utilizarei o ts-node-dev mas ele não é a única opção, também temos algumas outras, como o [sucrase](https://www.npmjs.com/package/sucrase).

- [TypeScript](https://www.typescriptlang.org/)
    ```shell
    $ yarn add typescript -D
    ```
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
    ```shell
    $ yarn add ts-node-dev -D
    ```

Lembrando que para iniciar uma aplicação node, basta digitar
```shell
yarn init -y
```

Agora para sua aplicação funcionar, você precisa escrever no package.json o seguinte:
```json
"scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
},
```

Ai no terminal digite o comando
```shell
yarn dev:server
```

> OBS.: você pode dar outra key para esse item, ai ao em vez de digitar dev:start você digitaria outra coisa. E também presumi que o arquivo inicial do seu projeto estaria dentro de uma pasta src e teria o nome index.ts

## React
Com o react a coisa é um pouco mais simples, não é necessário instalar o TypeScript separadamente e nem um interpretador, o proprio `create react-app` já faz esse trabalho por nós. Basta digitar:

```shell
$ yarn create react-app `appName` --template=typescript
```

## React-Native
Instle o expo:
```shell
$ sudo npm install expo-cli --global
```

Assim como o react js no native também não precisamos fazer muitas coisas para especificar um projeto TypeScript. Basta executar o init do expo e escolher a opção de TypeScript

```shell
$ expo init $appName
```

> OBS.: Eu utilizo o expo para meus projetos, caso você não queria utilizar ele e opte por utilizar a cli do react-native, eu recomendo esse video [aqui](https://www.youtube.com/watch?v=XcU9GEUZTQA) da rocketseat, que vai te ajudar a iniciar com react-native sem o expo.

## Instalando Bibliotecas
Algumas bibliotecas não acompanham as tipagens junto com a lib principal, tipo o express, o que faz o seu editor de código não ter saber como auto completar as coisas para você, pois ele não consegue saber quais os métodos estão disponíveis para uma determinada classe que está chamando de dentro da biblioteca, por isso em alguns casos você precisará instalar esses tipos junto com a biblioteca desejada, no exemplo do express basta fazer:

```shell
$ yarn add express
$ yarn add @types/express -D
```
Veja que a parte do tipo também vai como dependência de desenvolvimento.

Para identificar quando é necessário fazer isso. Veja no gif abaixo, ao importar o express ele fica com `...` abaixo dele, e se passarmos o mouse por cima o vscode informa que é necessário instalar o `@types/express`, então sempre que for necessário o vscode irá avisar.

<img src='./image/fig001.gif' />

> Se você utiliza outro editor, então talvez ele avise de outra forma, ou você precisará procurar na documentação para saber se precisará instalar e o como fazer isso.

Um ponto importante, é que diferentemente do node, o TypeScript importa as bibliotecas utilizando a sintaxe de `import` mesmo no backend.

```TypeScript
import express from 'express';
```

## Configurando o lint
Considerando que você já é um desenvolvedor javaScript, então você provavelmente utiliza o `eslint`, e aqui vamos utilizar ele também. Eu configurarei de acordo com as configurações do airbnb.

Primeiramente instale o `eslint` e o `editor config`. No vscode você pode achar o mesmo no markteplace, ou instalar com o comando:
```shell
$ code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
```

- Crie o arquivo `.editorconfig`:
    ```conf
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

- Crie o arquivo `.eslintrc.js`:
    ```JavaScript
    module.exports = {
        env: {
            browser: true,
            es6: true,
            jest: true,
        },
        extends: [
            'airbnb',
            'plugin:@typescript-eslint/recommended',
            'prettier/@typescript-eslint',
        ],
        globals: {
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        plugins: ['react', 'import', 'jsx-a11y'],
        rules: {
            'react/jsx-filename-extension': [
                'error',
                {
                    extensions: ['.tsx'],
                },
            ],
            'import/prefer-default-export': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            'import/extensions': [
                0,
                { ts: 'always', tsx: 'always' }
            ],
            'quotes': ["error", "single"],
            "arrow-body-style": ["error", "always"],
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {},
            },
        },
    };

    ```

Copie para a pasta do projeto os arquivos `.editorconfig` e `.eslintrc.js`.

### Dependências
instale em seu projeto as seguintes bibliotecas como dependências de desenvolvimento:

```shell
yarn add prettier -D
yarn add eslint -D
yarn add eslint-config-airbnb -D
yarn add eslint-plugin-import -D
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D
yarn add @typescript-eslint/eslint-plugin -D
yarn add @typescript-eslint/parser -D
yarn add eslint-import-resolver-typescript -D
yarn add eslint-plugin-jsx-a11y -D
yarn add eslint-plugin-react -D
```

> OBS.: Pode acontecer de o eslint não funcionar de primeira, feche a aplicação e abra novamente para recarregar o vscode. Mas se ainda não der certo, então vai aparecer um icone triangular no canto inferior direito, escrito `Eslint` na frente, clique nele e veja o porque o eslint não funcionou. Normalmente quando é a primeira vez que está fazendo esse processo ele pode pedir para instalar o eslint de forma global na máquina.

# Declaração de variáveis
O TypeScript tem uma tipagem bem inteligênte (inferência de tipos), não sendo necessário declarar tipo toda vez que se declara uma variável, ele já consegue entender qual é o tipo da variável, e atribui um tipo a ela que não mudará com o decorrer da aplicação, e se você tentar mudar você receberá um aviso. Porém é possivel sim declarar o tipo de uma variável caso queira.

Os tipos básicos do TypeScript são: `number`, `string`, `boolean`, `void`, `null`, `undefined`, `any`, `never`, `Array`, `tuple`.

Abaixo temos alguns exemplos que peguei desse link [aqui](https://dzone.com/articles/what-are-the-basic-data-types-in-typescript), que explica melhor cada tipo.

```TypeScript
// number
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;

// string
let firstName: string = "Kunal";

// boolean
let isPrimaryAccount: boolean = true;

// null
let nullValue: null = null;

// undefined
let undefinedValue: undefined = undefined;

// Array
let marks: number[] = [80, 85, 75];
let marks: Array<number> = [80, 85, 75];

// tuple
let person: [string, number] = ["Kunal", 2018];
```

# Funções
Quando se declara uma função com o TypeScript é necessário informar qual o tipo de cada atributo da função, e também ao retorno dela, tomando como base aquela nossa função de soma o modo de fazer isso é:

```TypeScript
const sum = (a: number, b: number): number => {
  return (a + b);
};
```

> Se por ventura não soubessemos o tipo que iria retornar da função, poderiamos utilizar o `void`. Mas é melhor que saiba o tipo de retorno.

# Tipos compostos
Assim como a linguagem C que tem as structures, o TypeScript possui alguns tipos compostos também. Mas eles estão longe de serem complicados.

## Interfaces
Para declarar uma interface faça:

```TypeScript
interface interfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
}
```

Para utilizar isso agora é a mesma coisa que com um tipo básico:

```TypeScript
const object : interfaceName = {
    value_1,
    value_2,
    value_n,
}
```

Ou até mesmo em uma função:
```TypeScript
interface ISum {
  a: number;
  b: number;
}

const sum = (values : ISum): number => {
  return (values.a + values.b);
};

const v: ISum = {
  a: 1,
  b: 2,
};

console.log(sum(v));
```

Outra coisa legal de interfaces é que uma interface pode herdar outra:

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
};

interface secondInterfaceName {
    variable_1: firstInterfaceName;
    variable_2: basicType;
    variable_n: basicType;
};
```

Ou até uma interface que estenda a outra

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n: basicType;
};

interface secondInterfaceName extends firstInterfaceName {
    variable_z: basicType;
};
```

Uma interface também pode ter entradas opcionais, ou seja, no exemplo acima podemos criar uma variável do tipo `firstInterfaceName` mas que não contenha o `variable_n`. Para isso precisamos modificar um pouco a interface colocando uma interrogação na variável opcional:

```TypeScript
interface firstInterfaceName {
    variable_1: basicType;
    variable_2: basicType;
    variable_n?: basicType;
};
```


## Types
Diferentemente das interfaces um type não pode ser herdado, porém ele pode conter multiplos tipos. Veja um exemplo:

```TypeScript
type Polygon =
  { type: 'square', x: number } |
  { type: 'circle', radius: number } |
  { type: 'rectangle', x: number, y: number };

function area(polygon: Polygon): number {
  switch (polygon.type) {
    case 'square':
      return (polygon.x ** 2);
    case 'circle':
      return (Math.PI * polygon.radius ** 2);
    case 'rectangle':
      return (polygon.x * polygon.y);
    default:
      return 0;
  }
};

console.log(area({
  type: 'square',
  x: 2,
}));
```

Neste exemplo a area de um poligono pode ser calculada de formas diferentes de acordo com a geometria do objeto a ser calculado, então podemos ter entradas diferentes de acordo com o tipo de entrada.

## Enums
Servem para definir constantes. Um exemplo:

```TypeScript
enum Response {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: Response): void {
  console.log(recipient, message);
}

respond('Princess Caroline', Response.Yes);
```
o resultado disso vai ser `'Princess Caroline 1'`

# Fim
Basicamente o TypeScript é isso, existem ai algumas especificações para hooks do react, mas acaba sendo a mesma coisa que vimos aqui, e acaba sendo melhor ir pesquisando na internet conforme os erros aparecem. Por isso é importante configurar o `eslint` pois ele te ajudará nessa missão de aprender TypeScript.

Mas para te ajudar, eu deixei dois projetos aqui, um backend com node, e outro front end com react, ambos bem simples. A aplicação node simula um envio de email e a aplicação react seria a interface que consome essa api. Toda a aplicação foi feita juntamente com um tutorial da rocketseat, que você encontra [aqui](https://www.youtube.com/watch?v=0mYq5LrQN1s). E super recomendo dar uma olhada no video e acompanhar o canal deles, até porque anda tendo bastante conteúdo de TypeScript.

Para rodar as aplicações entre na pasta backend e digite no terminal:
```shell
$ yarn install
$ yarn dev:server
```

Abra outro terminal, entre na pasta frontend e digite:
```shell
$ yarn install
$ yarn start
```

## endpoints
- Endpoint get: `http://localhost:3333/users`
- Response: 
    ```JavaScript
        {
            name: 'Lucas',
            email: 'lucas@gmail.com.br',
        }
    ```
- Endpoint put: `http://localhost:3333/users`
- Response: foi
- console.log: email enviado para lucas@gmail.com.br Bem vindo

Pela aplicação react só fiz a parte do método get, para executar o método post na api utilize o [insomnia](https://insomnia.rest/) ou o [postman](https://www.postman.com/).

<img src='./image/fig002.gif' />
