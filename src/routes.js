import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './site/home/index'
import DetalheProduto from './site/detalheProduto/index';
import Carrinho from './site/carrinho/index';


export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact="true" component={Home}/>
                <Route path="/detalhe" component={DetalheProduto} />
                <Route path="/carrinho" component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}