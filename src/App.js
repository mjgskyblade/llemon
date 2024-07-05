import {
    Route, 
    Routes
  } from 'react-router-dom';
  import pages from './utils/pages';
  import Layout from './components/layout/Layout';
  import Home from './components/pages/Home/index.js';
  import Bookings from './components/pages/Bookings';
  import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
  import NotFound from './components/pages/NotFound';
  import ComingSoon from './components/pages/ComingSoon';

  
  const App = () => {
    return (
      <>
        <Layout>
          <Routes>
            <Route path={pages.get('home').path} element={<Home />} />
            <Route 
              path={pages.get('about').path} 
              element={<ComingSoon />} 
            />
            <Route 
              path={pages.get('menu').path} 
              element={<ComingSoon />} 
            />
            <Route path={pages.get('bookings').path} element={<Bookings />} />
            <Route 
              path={pages.get('confirmedBooking').path} 
              element={<ConfirmedBooking />} 
            />
            <Route 
              path={pages.get('orderOnline').path} 
              element={<ComingSoon />} 
            />
            <Route 
              path={pages.get('login').path} 
              element={<ComingSoon />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </>
    );
  };
  
  export default App;