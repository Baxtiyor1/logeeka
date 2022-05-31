import { Routes, Route } from 'react-router-dom';
//SASS
import './App.scss'

//Components
import Private from './Route/Private';
import Public from './Route/Public';
import Admin from './Components/Admin/Admin';
import AdminArticle from './Components/Admin/AdminArticle/AdminArticle';
import ArticleForm from './Components/Admin/ArticleForm/ArticleForm';
import AdminJournal from './Components/Admin/AdminJournal/AdminJournal';
import AdminPricing from './Components/Admin/AdminPricing/AdminPricing';
import AdminConference from './Components/Admin/AdminConference/AdminConference';
import AdminCertificates from './Components/Admin/AdminCertificates/AdminCertificates';
import JournalForm from './Components/Admin/JournalForm/JournalForm';
import CertificateForm from './Components/Admin/CertificatesForm/CertificatesForm';
import ConferemceForm from './Components/Admin/ConferenceForm/ConferenceForm';
import PriceForm from './Components/Admin/PriceForm/PriceForm';
import AdminAdd from './Components/Admin/AdminAdd/AdminAdd';
//public
import Home from './Pages/Home';
import Conference from './Pages/Conference';
import Articles from './Pages/Articles';
import Journal from './Pages/Journal';
import Certificates from './Pages/Certificates';
import Contacts from './Pages/Contacts';
import Aboutus from './Pages/Aboutus';
import AboutStaff from './Pages/AboutStaff';
import Pricing from './Pages/Pricing';
import InnerConference from './Pages/InnerConference';
import InnerArticles from './Pages/InnerArticles';
import Login from './Components/login/login';
import NotFound from './Components/404/404';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Public />}>
        <Route path="/" element={<Home />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/conference/:id" element={<InnerConference />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<InnerArticles />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/about/staff" element={<AboutStaff />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route path='/' element={<Private />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/add' element={<AdminAdd />} />
        <Route path='/admin/article' element={<AdminArticle />} />
        <Route path='/admin/article/form' element={<ArticleForm />} />
        <Route path='/admin/journal' element={<AdminJournal />} />
        <Route path='/admin/journal/form' element={<JournalForm />} />
        <Route path='/admin/price' element={<AdminPricing />} />
        <Route path='/admin/price/form' element={<PriceForm />} />
        <Route path='/admin/conference' element={<AdminConference />} />
        <Route path='/admin/conference/form' element={<ConferemceForm />} />
        <Route path='/admin/certificate' element={<AdminCertificates />} />
        <Route path='/admin/certificate/form' element={<CertificateForm />} />
      </Route>
    </Routes>
  )
}

export default App;
