import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AppBar from './components/appBar';
import Home from './pages/index/home';
import Detail from './pages/index/detail';
import Page404 from './pages/index/page404'
import CategoryPage from './pages/index/categoryItems';
import Footer from './components/footer';
import Login from './pages/index/login';
import Register from './pages/index/register';
import ShoppinCart from './pages/index/shoppingCart';
import AdminProduct from './admin/newProduct';
import Loading from './pages/index/loading';

function App() {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </head>
      <body>

        <div id="app">
          <AppBar />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/produit/:id' element={<Detail />} />
            <Route path='/category/:id' element={<CategoryPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/my-cart' element={<ShoppinCart />} />
            <Route path='/*' element={<Page404 />} />
            <Route path='/admin/product' element={<AdminProduct />} />
            <Route path='/test' element={<Loading />} />
          </Routes>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;
