import { Routes, Route } from 'react-router-dom';
//SASS
import './App.scss'

//Components
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


function App() {
  return (
    <Routes>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/admin/article' element={<AdminArticle />}/>
      <Route path='/admin/article/form' element={<ArticleForm />}/>
      <Route path='/admin/journal' element={<AdminJournal />}/>
      <Route path='/admin/journal/form' element={<JournalForm />}/>
      <Route path='/admin/price' element={<AdminPricing />}/>
      <Route path='/admin/price/form' element={<PriceForm />}/>
      <Route path='/admin/conference' element={<AdminConference />}/>
      <Route path='/admin/conference/form' element={<ConferemceForm />}/>
      <Route path='/admin/certificate' element={<AdminCertificates />}/>
      <Route path='/admin/certificate/form' element={<CertificateForm />}/>
    </Routes>
  )
}

export default App;
