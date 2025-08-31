import { Routes, Route } from 'react-router-dom';
import './App.css';
import FileUploadDownload from './pages/landingpage';
import { useTranslation } from 'react-i18next';
import { Home } from './pages/Home';
import { Mindset } from './pages/Thoughts';
import Fen from './pages/blogs/fenbendazole';
import Ivermectin from './pages/blogs/ivermectin';
import Hoxsey from './pages/blogs/hoxsey';
import { Prevent } from './pages/Prevent';
import MassPract from './pages/Mass';
import { Nutrigenomics } from './pages/Nutrigenomics';
import Blog5 from './pages/blogs/blog5';
import Bitcoin from './pages/blogs/bitcoin';
import Blog8 from './pages/blogs/blog8';
import Meditation from './pages/Meditation';
import Blog7 from './pages/blogs/blog7';
import Blog9 from './pages/blogs/blog9';
import { ReviewPage } from './pages/reviewpage';
import Blog16 from './pages/blogs/blog16';
import HerbalMedicine from './pages/HerbalMedicine';
import Blog1 from './pages/blogs/blog1';
import Mike from './pages/blogs/mike';
import { HolisticHealers } from './pages/holistichealers';
import { AppliedKinesiology } from './pages/AK';
import { AKPract } from './pages/kin';
import Blog18 from './pages/blogs/blog18';
import { Transformational } from './pages/transform';
import Blog12 from './pages/blogs/blog12';
import Blog14 from './pages/blogs/blog14';
import Blog17 from './pages/blogs/blog17';
import { Detox } from './pages/Detox';
import { StemCell } from './pages/Stemcell';
import { NotFound } from './pages/NotFound';
import { Shop } from './pages/products';
import Blog2 from './pages/blogs/blog2';
import { Nutrition } from './pages/Nutrition';
import BlogPage from './pages/Blog';
import { Hypnotherapy } from './pages/Hypnotherapy';
import Blog6 from './pages/blogs/cancer';
import Blog10 from './pages/blogs/blog10';
import Blog19 from './pages/blogs/blog19';
import Ramona from './pages/blogs/ramona';
import { About } from './pages/About';
import { Homeopathy } from './pages/Homeopathy';
import { Acupuncture } from './pages/Acupuncture';
import { Ayurveda } from './pages/Ayurveda';
import { Marketing } from './pages/DigitalMarketing';
import { Chiropractic } from './pages/Chiropractic';
import { Chelation } from './pages/Chelation';
import { Telehealth } from './pages/Telehealth';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import { Apoth } from './pages/Apoth';
import { Chiro } from './pages/ChiroPRACT';
import { Breathwork } from './pages/breathworkers';
import { Hypnopract } from './pages/hypnopract';
import { AYPract } from './pages/AYPRACT';
import { Nutritionpract } from './pages/nutritionpract';
import { Coaching } from './pages/coach';
import { HomeopathyPract } from './pages/HOMEOPATHYPRACT';
import { Acupract } from './pages/acupract';
import { Breathworkk } from './pages/Breathwork';
import { Natpract } from './pages/naturopathics';
import { Naturopathy } from './pages/Naturopathy';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/Login/SignIn';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { StemPract } from './pages/STEMPRACT';
import React from 'react';
import PublicSignUp from './pages/SignUp/PublicSignup';
import SignupOptions from './pages/SignupOptions';
import StripePayment from './pages/StripePayment/StripePayment';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ProviderDashboard from './Dashboard/ProviderDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import ScrollTop from './Components/ScrollTop';

function App() {
  const { t } = useTranslation();
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      {/* <Topbar t={t} /> */}
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Home t={t} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/naturopathylane" element={<Mike t={t} />} />
        <Route path="/stemcell" element={<StemCell t={t} />} />
        <Route path="/ayurveda" element={<Ayurveda t={t} />} />
        <Route path="/nutrigenomics" element={<Nutrigenomics t={t} />} />
        <Route path="/mindset" element={<Mindset t={t} />} />
        <Route path="/reviews" element={<ReviewPage t={t} />} />
        <Route path="/breath" element={<Breathworkk t={t} />} />
        <Route path="/coaching" element={<Coaching t={t} />} />
        <Route path="/stemcellproviders" element={<StemPract t={t} />} />
        <Route path="/akpract" element={<AKPract t={t} />} />
        <Route path="/holisticbusinessplan" element={<FileUploadDownload t={t} />} />
        <Route path="/acupuncturists" element={<Acupract t={t} />} />
        <Route path="/blog" element={<BlogPage t={t} />} />
        <Route path="/ak" element={<AppliedKinesiology t={t} />} />
        <Route path="/breathwork" element={<Breathwork  providerEmail="samueljuansalgado@gmail.com"  t={t} />} />
        <Route path="/naturopathy" element={<Naturopathy t={t} />} />
        <Route path="/naturopathicproviders" element={<Natpract t={t} />} />
        <Route path="/nutritionpract" element={<Nutritionpract t={t} />} />
        <Route path="/transformationalcoaching" element={<Transformational t={t} />} />
        <Route path="/apoth" element={<Apoth t={t} />} />
        <Route path="/blog1" element={<Blog1 t={t} />} />
        <Route path="/shop" element={<Shop t={t} />} />
        <Route path="/massagetherapy" element={<MassPract t={t} />} />
        <Route path="/blog17" element={<Blog17 t={t} />} />
        <Route path="/blog18" element={<Blog18 t={t} />} />
        <Route path="/blog2" element={<Blog2 t={t} />} />
        <Route path="/blog3" element={<Blog3 t={t} />} />
        <Route path="/herbalmedicine" element={<HerbalMedicine t={t} />} />
        <Route path='/hypnopract' element={<Hypnopract t={t} />} />
        <Route path='/homeopract' element={<HomeopathyPract t={t} />} />
        <Route path='/chiropract' element={<Chiro t={t} />} />
        <Route path='/emotionaleatingcoach' element={<HolisticHealers t={t} />} />
        <Route path='/meditation' element={<Meditation t={t} />} />
        <Route path='/ayurvedicmedicine' element={<AYPract t={t} />} />
        <Route path="/blog4" element={<Blog4 t={t} />} />
        <Route path="/ramona" element={<Ramona t={t} />} />
        <Route path="/blog19" element={<Blog19 t={t} />} />
        <Route path="/cancer" element={<Blog6 t={t} />} />
        <Route path="/blog5" element={<Blog5 t={t} />} />
        <Route path="/bitcoin" element={<Bitcoin t={t} />} />
        <Route path="/ivermectin" element={<Ivermectin t={t} />} />
        <Route path="/hoxsey" element={<Hoxsey t={t} />} />
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
        <Route path="/digitalmarketing" element={<Marketing t={t} />} />
        <Route path="/homeopathy" element={<Homeopathy t={t} />} />
        <Route path="/telehealth" element={<Telehealth t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/blog7" element={<Blog7 t={t} />} />
        <Route path="/stripepay" element={<PrivateRoute><StripePayment t={t} /></PrivateRoute>} />
        <Route path="/signup" element={<SignupOptions />} />
        <Route path="/signup/public" element={<PublicSignUp t={t} />} />
        <Route path="/signup/provider" element={<SignUp t={t} />} />
        <Route path="/signin" element={<SignIn t={t} />} />

        {/* Telehealth Providers Dashboard (for regular users) */}
        <Route path="/provider-dashboard" element={
          <PrivateRoute>
            <ProviderDashboard t={t} />
          </PrivateRoute>
        } />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={
          <PrivateRoute adminOnly={true}>
            <AdminDashboard t={t} />
          </PrivateRoute>
        } />
      </Routes>

    </QueryClientProvider>
  );
}

export default App;