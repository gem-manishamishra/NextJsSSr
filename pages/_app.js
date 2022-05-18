// import '../styles/globals.css'
import Layout from '../components/layout'
import { store,wrapper } from '../redux/store';
import { Provider } from 'react-redux';
// import { wrapper} from "../store/store";

function MyApp({ Component, pageProps }) {
  return ( <>
            <Provider store={store}>
              <Layout/>
              <Component {...pageProps} />
            </Provider> 
          </>)
}

export default wrapper.withRedux(MyApp);
