import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import FileUploadDownload from './pages/landingpage';
import { useTranslation } from 'react-i18next';
import BrowserOnly from "./Components/BrowserOnly"
import Hoxsey from './pages/blogs/hoxsey';
import Wrapper from './info/Wrapper';
import Bitcoin from './pages/blogs/bitcoin';
import BlogAcu from './pages/blogs/blogacu';
import Blog7 from './pages/blogs/blog7';
import Shop from "./pages/products";
import Blog4 from './pages/blogs/blog4';
import Ramona from './pages/blogs/ramona';
import Blog9 from './pages/blogs/blog9';
import Blog20 from './pages/blogs/blog20';
import Blog16 from './pages/blogs/blog16';
import Blog3 from './pages/blogs/blog3';
import Blog6 from './pages/blogs/cancer';
import Blog5 from './pages/blogs/blog5';
import Blog10 from './pages/blogs/blog10';
import Blog19 from './pages/blogs/blog19';
import Blog12 from './pages/blogs/blog12';
import Blog14 from './pages/blogs/blog14';
import BlogPage from "./pages/Blog";
import Blog23 from './pages/blogs/blog23';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/Login/SignIn';
import {ProviderLandingPage} from "./pages/ProviderLandingPage";
import Blog18 from './pages/blogs/blog18';
import Blog1 from './pages/blogs/blog1';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Blog8 from './pages/blogs/blog8';
import Fen from './pages/blogs/fenbendazole';
import Ivermectin from './pages/blogs/ivermectin';
import Blog24 from './pages/blogs/blog24';
import HerbalMedicine from './pages/HerbalMedicine';
import PublicSignUp from './pages/SignUp/PublicSignup';
import SignupOptions from './pages/SignupOptions';
import StripePayment from './pages/StripePayment/StripePayment';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ProviderDashboard from './Dashboard/ProviderDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import ScrollTop from './Components/ScrollTop';
import Mike from './pages/blogs/mike';
 import Blog22 from './pages/blogs/blog22';
import Blog21 from './pages/blogs/blog21';
import Menopause from './pages/Menopause';




const Home = lazy(() => import('./pages/Home'));
const Feldenkrais = lazy(() => import('./pages/Feldenkrais'));
const Mindset = lazy(() => import('./pages/Thoughts'));
const Prevent = lazy(() => import('./pages/Prevent'));
const HealPract = lazy(() => import('./pages/HealPract'));
const Soundhealing = lazy(() => import('./pages/soundhealing'));
const Func = lazy(() => import('./pages/Func'));
const Energy = lazy(() => import('./pages/Energy'));
const EnergyPract = lazy(() => import('./pages/EnergyPract'));
const Summit = lazy(() => import('./pages/Summit'));
const ADHD = lazy(() => import('./pages/ADHD'));
const MassPract = lazy(() => import('./pages/Mass'));
const Trauma = lazy(() => import('./pages/Trauma'));
const PTSD = lazy(() => import('./pages/PTSD'));
const Nutrigenomics = lazy(() => import('./pages/Nutrigenomics'));
const FuncMed = lazy(() => import('./pages/funcmed'));
const Meditation = lazy(() => import('./pages/Meditation'));
const ReviewPage = lazy(() => import('./pages/reviewpage'));
const HolisticHealers = lazy(() => import('./pages/holistichealers'));
const AppliedKinesiology = lazy(() => import('./pages/AK'));
const AKPract = lazy(() => import('./pages/kin'));
const Transformational = lazy(() => import('./pages/transform'));
const Detox = lazy(() => import('./pages/Detox'));
const StemCell = lazy(() => import('./pages/Stemcell'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Lynn = lazy(() => import('./pages/lynn'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const Hypnotherapy = lazy(() => import('./pages/Hypnotherapy'));
const About = lazy(() => import('./pages/About'));
const Homeopathy = lazy(() => import('./pages/Homeopathy'));
const Acupuncture = lazy(() => import('./pages/Acupuncture'));
const Ayurveda = lazy(() => import('./pages/Ayurveda'));
const Marketing = lazy(() => import('./pages/DigitalMarketing'));
const Chiropractic = lazy(() => import('./pages/Chiropractic'));
const Chelation = lazy(() => import('./pages/Chelation'));
const Telehealth = lazy(() => import('./pages/Telehealth'));
const ChooseProviderTier = lazy(() => import('./pages/SignUp/ChooseProviderTier'));
const Apoth = lazy(() => import('./pages/Apoth'));
const Chiro = lazy(() => import('./pages/ChiroPRACT'));
const Breathwork = lazy(() => import('./pages/breathworkers'));
const Hypnopract = lazy(() => import('./pages/hypnopract'));
const AYPract = lazy(() => import('./pages/AYPRACT'));
const Nutritionpract = lazy(() => import('./pages/nutritionpract'));
const Coaching = lazy(() => import('./pages/coach'));
const HomeopathyPract = lazy(() => import('./pages/HOMEOPATHYPRACT'));
const Acupract = lazy(() => import('./pages/acupract'));
const Breathworkk = lazy(() => import('./pages/Breathwork'));
const Natpract = lazy(() => import('./pages/naturopathics'));
const Naturopathy = lazy(() => import('./pages/Naturopathy'));
const StemPract = lazy(() => import('./pages/STEMPRACT'));
function App() {
  const { t } = useTranslation();
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
       <BrowserOnly>
      <ScrollTop />
      {/* ⬇️ ২️⃣ এখানে popup কম্পোনেন্ট বসাবে */}
      </BrowserOnly>
      <Wrapper>
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home t={t} />} />
        <Route path="/soundhealing" element={<Soundhealing />} />
        <Route path="/soundhealers" element={<HealPract />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/naturopathylane" element={<Mike t={t} />} />
        <Route path="/stemcell" element={<StemCell t={t} />} />
        <Route path="/ayurveda" element={<Ayurveda t={t} />} />
        <Route path="/adhd" element={<ADHD t={t} />} />
        <Route path="/ptsd" element={<PTSD t={t} />} />
        <Route path="/narcissism" element={<Lynn t={t} />} />
        <Route path="/providers" element={<ProviderLandingPage t={t} />} />
        <Route path="/nutrigenomics" element={<Nutrigenomics t={t} />} />
         <Route path="/conversionoptimizationconsulting" element={<Blog24 t={t} />} />
        <Route path="/energyhealers" element={<EnergyPract t={t} />} />
        <Route path="/mindset" element={<Mindset t={t} />} />
        <Route path="/funcmed" element={<Func t={t} />} />
        <Route path="/feldenkrais" element={<Feldenkrais t={t} />} />
        <Route path="/menopause" element={<Menopause t={t} />} />
        <Route path="/trauma" element={<Trauma t={t} />} />
        <Route path="/fertiility" element={<Blog22 t={t} />} />
        <Route path="/holistichealthmarketing" element={<Blog23 t={t} />} />
        <Route path="/reviews" element={<ReviewPage t={t} />} />
        <Route path="/energyhealing" element={<Energy t={t} />} />
        <Route path="/breathwork" element={<Breathworkk t={t} />} />
        <Route path="/acupuncture-for-migraines" element={<Blog21 t={t} />} />
        <Route path="/coaching" element={<Coaching t={t} />} />
        <Route path="/acupuncture-for-carpal-tunnel" element={<BlogAcu t={t} />} />
        <Route path="/stemcellproviders" element={<StemPract t={t} />} />
        <Route path="/coaching" element={<Coaching t={t} />} />
        <Route path="/summit" element={<Summit t={t} />} />
        <Route path="/akpract" element={<AKPract t={t} />} />
        <Route path="/choose-provider-tier" element={<ChooseProviderTier />} />
        <Route path="/holisticbusinessplan" element={<FileUploadDownload t={t} />} />
        <Route path="/acupuncturists" element={<Acupract t={t} />} />
        <Route path="/blog" element={<BlogPage t={t} />} />
        <Route path="/applied-kinesiology" element={<AppliedKinesiology t={t} />} />
        <Route path="/breathworkers" element={<Breathwork providerEmail="samueljuansalgado@gmail.com" t={t} />} />
        <Route path="/functionalmedicine" element={<FuncMed t={t} />} />
        <Route path="/naturopathy" element={<Naturopathy t={t} />} />
        <Route path="/naturopathicproviders" element={<Natpract t={t} />} />
        <Route path="/nutritionpract" element={<Nutritionpract t={t} />} />
        <Route path="/transformationalcoaching" element={<Transformational t={t} />} />
        <Route path="/apoth" element={<Apoth t={t} />} />
        <Route path="/can-back-pain-cause-constipation" element={<Blog1 t={t} />} />
        <Route path="/shop" element={<Shop t={t} />} />
        <Route path="/massagetherapy" element={<MassPract t={t} />} />
        <Route path="/blog18" element={<Blog18 t={t} />} />
        <Route path="/detox-cleanse" element={<Blog3 t={t} />} />
        <Route path="/herbalmedicine" element={<HerbalMedicine t={t} />} />
        <Route path='/hypnopract' element={<Hypnopract t={t} />} />
        <Route path='/homeopract' element={<HomeopathyPract t={t} />} />
        <Route path='/chiropract' element={<Chiro t={t} />} />
        <Route path='/emotionaleatingcoach' element={<HolisticHealers t={t} />} />
        <Route path='/meditation' element={<Meditation t={t} />} />
        <Route path='/ayurvedicmedicine' element={<AYPract t={t} />} />
        <Route path="/cellular-regeneration" element={<Blog4 t={t} />} />
        <Route path="/ramona" element={<Ramona t={t} />} />
        <Route path="/tcnh" element={<Blog19 t={t} />} />
        <Route path="/acupuncture-cost" element={<Blog20 t={t} />} />
        <Route path="/cancer" element={<Blog6 t={t} />} />
        <Route path="/acupuncture-defined" element={<Blog5 t={t} />} />
        <Route path="/what-is-bitcoin" element={<Bitcoin t={t} />} />
        <Route path="/ivermectin" element={<Ivermectin t={t} />} />
        <Route path="/hoxsey" element={<Hoxsey t={t} />} />
        <Route path="/fenbendazole" element={<Fen t={t} />} />
        <Route path="/prevent" element={<Prevent t={t} />} />
        <Route path="/hepatitis-B-specialists" element={<Blog8 t={t} />} />
        <Route path="/value-of-nutrition" element={<Blog9 t={t} />} />
        <Route path="/rose-oil" element={<Blog16 t={t} />} />
        <Route path="/cancer-prevention" element={<Blog10 t={t} />} />
        <Route path="/acupuncture-montreal" element={<Blog12 t={t} />} />
        <Route path="/benefits-of-chiropractic" element={<Blog14 t={t} />} />
        <Route path="/detox" element={<Detox t={t} />} />
        <Route path="/hypnotherapy" element={<Hypnotherapy t={t} />} />
        <Route path="/nutrition" element={<Nutrition t={t} />} />
        <Route path="/chiropractic" element={<Chiropractic t={t} />} />
        <Route path="/acupuncture" element={<Acupuncture t={t} />} />
        <Route path="/chelation" element={<Chelation t={t} />} />
        <Route path="/digitalmarketing" element={<Marketing t={t} />} />
        <Route path="/homeopathy" element={<Homeopathy t={t} />} />
        <Route path="/telehealth" element={<Telehealth t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/batana-oil" element={<Blog7 t={t} />} />
        <Route path="/stripepay" element={<PrivateRoute><StripePayment t={t} /></PrivateRoute>} />
        <Route path="/signup" element={<SignupOptions />} />
        <Route path="/signup/public" element={<PublicSignUp t={t} />} />
        <Route path="/signup/provider" element={<SignUp t={t} />} />
        <Route path="/provider" element={<SignUp t={t} />} />
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
              </Suspense>
</Wrapper>
    </QueryClientProvider>
  );
}

export default App;