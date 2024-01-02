import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Newpassword = React.lazy(() => import("pages/Newpassword"));
const EditValues = React.lazy(() => import("pages/EditValues"));
const EditPartner = React.lazy(() => import("pages/EditPartner"));
const Editfeature = React.lazy(() => import("pages/Editfeature"));
const Editservice = React.lazy(() => import("pages/Editservice"));
const Editjob = React.lazy(() => import("pages/Editjob"));
const Settings = React.lazy(() => import("pages/Settings"));
const AddNewSubscription = React.lazy(() => import("pages/AddNewSubscription"));
const EditTeamMember = React.lazy(() => import("pages/EditTeamMember"));
const Forgotyourpassword = React.lazy(() => import("pages/Forgotyourpassword"));
const NewPartner = React.lazy(() => import("pages/NewPartner"));
const Addnewfeature = React.lazy(() => import("pages/Addnewfeature"));
const Addnewservice = React.lazy(() => import("pages/Addnewservice"));
const Addnewjob = React.lazy(() => import("pages/Addnewjob"));
const Replay = React.lazy(() => import("pages/Replay"));
const Newnewsletter = React.lazy(() => import("pages/Newnewsletter"));
const AddNewTeamMember = React.lazy(() => import("pages/AddNewTeamMember"));
const ForgotyourpasswordOne = React.lazy(
  () => import("pages/ForgotyourpasswordOne"),
);
const Partners = React.lazy(() => import("pages/Partners"));
const AboutusOne = React.lazy(() => import("pages/AboutusOne"));
const Feature = React.lazy(() => import("pages/Feature"));
const Services = React.lazy(() => import("pages/Services"));
const Controljob = React.lazy(() => import("pages/Controljob"));
const Messages = React.lazy(() => import("pages/Messages"));
const Newsletter = React.lazy(() => import("pages/Newsletter"));
const Teammember = React.lazy(() => import("pages/Teammember"));
const Login = React.lazy(() => import("pages/Login"));
const Termsofuse = React.lazy(() => import("pages/Termsofuse"));
const Privacypolicy = React.lazy(() => import("pages/Privacypolicy"));
const Blogdetails = React.lazy(() => import("pages/Blogdetails"));
const Blogs = React.lazy(() => import("pages/Blogs"));
const Visitormanagementsystem = React.lazy(
  () => import("pages/Visitormanagementsystem"),
);
const ResidentialSectors = React.lazy(() => import("pages/ResidentialSectors"));
const CommercialSectors = React.lazy(() => import("pages/CommercialSectors"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/commercialsectors" element={<CommercialSectors />} />
          <Route path="/residentialsectors" element={<ResidentialSectors />} />
          <Route
            path="/visitormanagementsystem"
            element={<Visitormanagementsystem />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails" element={<Blogdetails />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teammember" element={<Teammember />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/controljob" element={<Controljob />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/aboutusone" element={<AboutusOne />} />
          <Route path="/partners" element={<Partners />} />
          <Route
            path="/forgotyourpasswordone"
            element={<ForgotyourpasswordOne />}
          />
          <Route path="/addnewteammember" element={<AddNewTeamMember />} />
          <Route path="/newnewsletter" element={<Newnewsletter />} />
          <Route path="/replay" element={<Replay />} />
          <Route path="/addnewjob" element={<Addnewjob />} />
          <Route path="/addnewservice" element={<Addnewservice />} />
          <Route path="/addnewfeature" element={<Addnewfeature />} />
          <Route path="/newpartner" element={<NewPartner />} />
          <Route path="/forgotyourpassword" element={<Forgotyourpassword />} />
          <Route path="/editteammember" element={<EditTeamMember />} />
          <Route path="/addnewsubscription" element={<AddNewSubscription />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/editjob" element={<Editjob />} />
          <Route path="/editservice" element={<Editservice />} />
          <Route path="/editfeature" element={<Editfeature />} />
          <Route path="/editpartner" element={<EditPartner />} />
          <Route path="/editvalues" element={<EditValues />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
