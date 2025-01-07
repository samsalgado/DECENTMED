
import { Routes } from 'react-router';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Fen from './pages/blogs/fenbendazole';
import Ivermectin from './pages/blogs/ivermectin';
import { Prevent } from './pages/Prevent';
import Blog5 from './pages/blogs/blog5';
import Blog8 from './pages/blogs/blog8';
import Blog7 from './pages/blogs/blog7';
import Blog9 from './pages/blogs/blog9';
import Blog11 from './pages/blogs/blog11';
import Blog16 from './pages/blogs/blog16';
import HerbalMedicine from './pages/HerbalMedicine';
import Blog1 from './pages/blogs/blog1';
import Blog15 from './pages/blogs/blog15';
import Blog12 from './pages/blogs/blog12';
import Blog14 from './pages/blogs/blog14';
import Blog17 from './pages/blogs/blog17';
import { Detox } from './pages/Detox';
import { StemCell } from './pages/Stemcell';
import { NotFound } from './pages/NotFound';
import Blog2 from './pages/blogs/blog2';
import { Nutrition } from './pages/Nutrition';
import BlogPage from './pages/Blog';
import { Hypnotherapy } from './pages/Hypnotherapy';
import Blog6 from './pages/blogs/cancer';
import Blog10 from './pages/blogs/blog10';
import { About } from './pages/About';
import { Homeopathy } from './pages/Homeopathy';
import { Acupuncture } from './pages/Acupuncture';
import { Ayurveda } from './pages/Ayurveda';
import { Chiropractic } from './pages/Chiropractic';
import { Chelation } from './pages/Chelation';
import { Telehealth } from './pages/Telehealth';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import { Apoth } from './pages/Apoth';
import { Chiro } from './pages/ChiroPRACT';
import { Hypnopract } from './pages/hypnopract';
import { AYPract } from './pages/AYPRACT';
import { HomeopathyPract } from './pages/HOMEOPATHYPRACT';
import SignUp from './pages/SignUp/SignUp';
import StripePayment from './pages/StripePayment/StripePayment';
import Topbar from './pages/topbar';
import Login from './pages/Login/Login';
import AuthProvider from './pages/Providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddtoCart from './addtocart/addtocart';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const { t } = useTranslation();

  // Create a client
  const queryClient = new QueryClient()
  return (
    < QueryClientProvider client={queryClient} >
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home t={t} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/stemcell" element={<StemCell t={t} />} />
          <Route path="/ayurveda" element={<Ayurveda t={t} />} />
          <Route path="/blog" element={<BlogPage t={t} />} />
          <Route path="/apoth" element={<Apoth t={t} />} />
          <Route path="/blog1" element={<Blog1 t={t} />} />
          <Route path="/blog17" element={<Blog17 t={t} />} />
          <Route path="/blog2" element={<Blog2 t={t} />} />
          <Route path="/blog3" element={<Blog3 t={t} />} />
          <Route path="/herbalmedicine" element={<HerbalMedicine t={t} />} />
          <Route path='/hypnopract' element={<Hypnopract t={t} />} />
          <Route path='/homeopract' element={<HomeopathyPract t={t} />} />
          <Route path='/chiropract' element={<Chiro t={t} />} />
          <Route path='/ayurvedicmedicine' element={<AYPract t={t} />} />
          <Route path="/blog4" element={<Blog4 t={t} />} />
          <Route path="/blog11" element={<Blog11 t={t} />} />
          <Route path="/cancer" element={<Blog6 t={t} />} />
          <Route path="/blog5" element={<Blog5 t={t} />} />
          <Route path="/blog15" element={<Blog15 t={t} />} />
          <Route path="/blog15" element={<Blog15 t={t} />} />
          <Route path="/ivermectin" element={<Ivermectin t={t} />} />
          <Route path="/fenbendazole" element={<Fen t={t} />} />
          <Route path="/prevent" element={<Prevent t={t} />} />
          <Route path="/blog8" element={<Blog8 t={t} />} />
          <Route path="/blog9" element={<Blog9 t={t} />} />
          <Route path="/blog16" element={<Blog16 t={t} />} />
          <Route path="/blog10" element={<Blog10 t={t} />} />
          <Route path="/blog12" element={<Blog12 t={t} />} />
          <Route path="/blog14" element={<Blog14 t={t} />} />
          <Route path="/detox" element={<Detox t={t} />} />
          <Route path="/hypnotherapy" element={<Hypnotherapy t={t} />} />
          <Route path="/nutrition" element={<Nutrition t={t} />} />
          <Route path="/chiropractic" element={<Chiropractic t={t} />} />
          <Route path="/acu" element={<Acupuncture t={t} />} />
          <Route path="/chelation" element={<Chelation t={t} />} />
          <Route path="/homeopathy" element={<Homeopathy t={t} />} />
          <Route path="/telehealth" element={<Telehealth t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/blog7" element={<Blog7 t={t} />} />
          <Route path="/login" element={<Login t={t} />} />
          <Route path="/signin" element={<SignUp t={t} />} />
          <Route path="/stripepay" element={<StripePayment t={t} />} />
          <Route path="/addtocart" element={<AddtoCart t={t} />} />
          <Route path="/dashboard" element={<PrivateRoute  ><Dashboard t={t} /></PrivateRoute>} />
          <Route element={<Topbar t={t} />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider >
  )
}

export default App;