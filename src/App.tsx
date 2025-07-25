// React router dom
import { Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Home from 'app/pages/home/page';
import ExperienceDetail from 'app/pages/experience-detail/[id]/ExperienceDetail';
import ProjectDetail from 'app/pages/project-detail/[id]/ProjectDetail';
import ClaimsAndRefundsPolicy from 'app/pages/claims-and-refunds-policy/ClaimsAndRefundsPolicy';

function App() {
  return (

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/experience-detail/:id"
            element={
              <ExperienceDetail />
            }
          />
          <Route
            path="/project-detail/:id"
            element={
              <ProjectDetail />
            }           
          />
          <Route
            path="/claims-and-refunds-policy"
            element={
              <ClaimsAndRefundsPolicy />
            }
          />
        </Routes>
    
  );
}

export default App;
