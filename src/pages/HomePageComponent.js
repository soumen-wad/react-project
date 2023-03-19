import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import AboutComponent from '../components/AboutComponent';
import ServicesComponent from '../components/ServicesComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import BlogComponent from '../components/BlogComponent';
import ContactComponent from '../components/ContactComponent';
import FooterComponent from '../components/FooterComponent';

export default function HomePageComponent() {
  return (
    <>
      <HeaderComponent/>
      <BannerComponent></BannerComponent>
      <AboutComponent></AboutComponent>
      <ServicesComponent></ServicesComponent>
      <ProjectsComponent></ProjectsComponent>
      <BlogComponent></BlogComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent/>
    </>
  )
}
