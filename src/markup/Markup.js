import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Homepage from './Pages/Homepage1'

import Jobprofile from './Pages/Jobprofile'
import Jobmyresume from './Pages/Jobmyresume'
import Jobsappliedjob from './Pages/Jobsappliedjob'
import Jobsalert from './Pages/Jobsalert'
import Jobsavedjobs from './Pages/Jobsavedjobs'
import Jobcvmanager from './Pages/Jobcvmanager'

import Companyresume from './Pages/Companyresume'
import Componypostjobs from './Pages/Componypostjobs'
import Companymanage from './Pages/Companymanage'
import Companytransactions from './Pages/Companytransactions'
import Browsecandidates from './Pages/Browsecandidates'

import Aboutus from './Pages/Aboutus'
import Jobdetail from './Pages/Jobdetail'
import Freejobalerts from './Pages/Freejobalerts'
import Browsejoblist from './Pages/Browsejoblist'
import Browsejobgrid from './Pages/Browsejobgrid'
import Browsejobfilterlist from './Pages/Browsejobfilterlist'
import Browsejobfiltergrid from './Pages/Browsejobfiltergrid'

import Categoryalljob from './Pages/Categoryalljob'
import Categorycompanyjob from './Pages/Categorycompanyjob'
import Categorydesignationsjob from './Pages/Categorydesignationsjob'
import Categoryjobs from './Pages/Categoryjobs'
import Categorylocationjobs from './Pages/Categorylocationjobs'
import Categoryskilljobs from './Pages/Categoryskilljobs'

import Portfoliogrid2 from './Pages/Portfoliogrid2'

import Register2 from './Pages/Register2'
import Error404 from './Pages/Error404'

import Contact from './Pages/Contact'

import Blogclassic from './Pages/Blogclassic'
import Blogclassicsidebar from './Pages/Blogclassicsidebar'
import Blogdetailgrid from './Pages/Blogdetailgrid'
import Blogdetailgridsidebar from './Pages/Blogdetailgridsidebar'
import Blogleftimg from './Pages/Blogleftimg'
import Blogdetail from './Pages/Blogdetail'
import ScrollToTop from './Element/ScrollToTop'

//New paths
import { Header } from 'components/header'
import Login from './Pages/login'
import ChangePassword from './Pages/change-password'
import Transactions from './Pages/transactions'
import Profile from './Pages/profile'
import PostJob from './Pages/post-job'
import Resume from './Pages/resume'
import Register from './Pages/register'
import ManageJobs from './Pages/manage-jobs'
import Companies from './Pages/companies'
import Companies2 from './Pages/Companies2'
import Home from './Pages/home'

const Markup = () => {
  const [showHeader, setShowHeader] = useState(false)

  const location = useLocation().pathname

  useEffect(() => {
    setShowHeader(location !== '/iniciar-sesion')
  }, [location])

  return (
    <>
      <div className="page-wraper d-flex flex-column">
        {showHeader && <Header />}
        <div className={`pages-container bg-white ${showHeader ? 'mt-2' : ''}`}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Homepage} />
            <Route path="/jobs-profile" exact component={Jobprofile} />
            <Route path="/jobs-my-resume" exact component={Jobmyresume} />
            <Route path="/jobs-applied-job" exact component={Jobsappliedjob} />
            <Route path="/jobs-alerts" exact component={Jobsalert} />
            <Route path="/jobs-saved-jobs" exact component={Jobsavedjobs} />
            <Route path="/jobs-cv-manager" exact component={Jobcvmanager} />
            <Route path="/company-resume" exact component={Companyresume} />
            <Route path="/company-post-jobs" exact component={Componypostjobs} />
            <Route path="/company-manage-job" exact component={Companymanage} />
            <Route path="/company-transactions" exact component={Companytransactions} />
            <Route path="/browse-candidates" exact component={Browsecandidates} />

            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/job-detail" exact component={Jobdetail} />
            <Route path="/companies" exact component={Companies2} />
            <Route path="/free-job-alerts" exact component={Freejobalerts} />
            <Route path="/browse-job-list" exact component={Browsejoblist} />
            <Route path="/browse-job-grid" exact component={Browsejobgrid} />
            <Route path="/browse-job-filter-list" exact component={Browsejobfilterlist} />
            <Route path="/browse-job-filter-grid" exact component={Browsejobfiltergrid} />

            <Route path="/category-all-jobs" exact component={Categoryalljob} />
            <Route path="/category-company-jobs" exact component={Categorycompanyjob} />
            <Route path="/category-designations-jobs" exact component={Categorydesignationsjob} />
            <Route path="/category-jobs" exact component={Categoryjobs} />
            <Route path="/category-location-jobs" exact component={Categorylocationjobs} />
            <Route path="/category-skill-jobs" exact component={Categoryskilljobs} />

            <Route path="/portfolio-grid-2" exact component={Portfoliogrid2} />

            <Route path="/register-2" exact component={Register2} />
            <Route path="/error-404" exact component={Error404} />

            <Route path="/contact" exact component={Contact} />

            <Route path="/blog-classic" exact component={Blogclassic} />
            <Route path="/blog-classic-sidebar" exact component={Blogclassicsidebar} />
            <Route path="/blog-detailed-grid" exact component={Blogdetailgrid} />
            <Route path="/blog-detailed-grid-sidebar" exact component={Blogdetailgridsidebar} />
            <Route path="/blog-left-img" exact component={Blogleftimg} />
            <Route path="/blog-details" exact component={Blogdetail} />

            <Route path="/iniciar-sesion" exact component={Login} />
            <Route path="/publicar-empleo" exact component={PostJob} />
            <Route path="/cambiar-contraseña" exact component={ChangePassword} />
            <Route path="/perfil" exact component={Profile} />
            <Route path="/resumen" exact component={Resume} />
            <Route path="/transacciones" exact component={Transactions} />
            <Route path="/registro" exact component={Register} />
            <Route path="/gestionar-trabajos" exact component={ManageJobs} />
            <Route path="/empresas" exact component={Companies} />
          </Switch>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}

export default Markup
