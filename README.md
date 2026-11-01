# jmramirezherrera.github.io

Página web de J.M. Ramírez Herrera

TO DO List:

Secciones:

- Main page: Jose Maria Ramirez Herrera (Director & Guionista). showreel resumen. socials y email (siempre visibles en el footer de todas las paginas).
- Trabajos destacados: cuadricula de 2 columnas. cada elemento al hacer click te lleva a una pagina detalle de dicho trabajo. al hacer hover en cada elemento la tarjeta se oscurece y aparecen el titulo y el año. toda la tarjeta es clickable. cada tarjeta es una imagen/portada de dicho trabajo.
- Sobre mi: bio de chema + foto.
- Contacto: email + socials.

![viterjs-template](https://i.ibb.co/xMMGs2Q/Screenshot-2023-07-07-105634.png)

### Getting Started

#### Clone the repo

```
npx degit emre-cil/viterjs-template my-app
```

```
cd my-app
```

#### Install Dependencies

```
pnpm install
```

#### Run

```
pnpm dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.js

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
```

> jsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```

### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| pnpm dev      | Runs the application.              |
| pnpm build    | Create builds for the application. |
| pnpm preview  | Runs the Vite preview              |
| pnpm lint     | Display eslint errors              |
| pnpm lint:fix | Fix the eslint errors              |
| pnpm format   | Runs prettier for all files        |
| pnpm test     | Run tests                          |

### Check List

```

```
