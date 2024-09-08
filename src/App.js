import { Routes} from 'react-router';
import './App.css';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {Prevent} from './pages/Prevent';
import Blog5 from './pages/blogs/blog5';
import Blog8 from './pages/blogs/blog8';
import Blog7 from './pages/blogs/blog7';
import Blog9 from './pages/blogs/blog9';
import Blog1 from './pages/blogs/blog1';
import { Detox } from './pages/Detox';
import {StemCell} from './pages/Stemcell';
import {NotFound} from './pages/NotFound';
import Blog2 from './pages/blogs/blog2';
import { Nutrition } from './pages/Nutrition';
import BlogPage from './pages/Blog';
import { Hypnotherapy } from './pages/Hypnotherapy';
import Blog6 from './pages/blogs/cancer';
import Blog10 from './pages/blogs/blog10';
import { About } from './pages/About';
import {Homeopathy} from './pages/Homeopathy';
import { Acupuncture } from './pages/Acupuncture';
import { Ayurveda } from './pages/Ayurveda';
import { Chiropractic } from './pages/Chiropractic';
import { Chelation } from './pages/Chelation';
import { Telehealth } from './pages/Telehealth';
import Bitcoin from './pages/blogs/bitcoin';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import { Apoth } from './pages/Apoth';
import { Hypnopract } from './pages/hypnopract';
function App() {

  return( 

  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="/stemcell" element={<StemCell />}/>
    <Route path="/ayurveda" element={<Ayurveda />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog1" element={<Blog1 />} />
    <Route path="/blog2" element={<Blog2 />} />
    <Route path="/blog3" element={<Blog3 />} />
    <Route path='/hypnopract' element={<Hypnopract />} />
    <Route path="/blog4" element={<Blog4 />} />
    <Route path="/cancer" element={<Blog6 />} /> 
    <Route path="/blog5" element={<Blog5 />} />
    <Route path="/prevent" element={<Prevent />}/>
    <Route path="/blog8" element={<Blog8 />} />
    <Route path="/blog9" element={<Blog9 />} />
    <Route path="/blog10" element={<Blog10 />} />
    <Route path="/detox" element={<Detox />}/>
    <Route path="/hypnotherapy" element={<Hypnotherapy />}/>
    <Route path="/nutrition" element={<Nutrition />}/>
    <Route path="/chiropractic" element={<Chiropractic />}/>
    <Route path="/acu" element={<Acupuncture />}/>
    <Route path="/blog4" element={<Blog4 />} />
    <Route path="/chelation" element={<Chelation />}/>
    <Route path="/homeopathy" element={<Homeopathy />} />
    <Route path="/telehealth" element={<Telehealth />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog7" element={<Blog7 />} />
    <Route path="/bitcoin" element={<Bitcoin />} />
    <Route path="/apoth" element={<Apoth />} />
    
</Routes>
    
  )
}

export default App;