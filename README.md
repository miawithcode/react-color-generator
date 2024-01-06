# Color Generator

## Values.js

用 [Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md) 生成不同颜色

1. Install
    ```sh
    npm i values.js
    ```
2. Usage
    ```jsx
    import Values from 'values.js';
    new Values('#f15025').all(10);
    ```

## React-Toastify

1. Install
    ```sh
    npm i react-toastify
    ```
2. Usage
    ```jsx
    // main.jsx
    import 'react-toastify/dist/ReactToastify.css';

    // App.jsx
    import { ToastContainer, toast } from 'react-toastify';

    toast.success('awesome');
    toast.error('error message');

    return (
    <main>
        ...............
        <ToastContainer position='top-center' />
    </main>
    );
    ```

## Clipboard API
