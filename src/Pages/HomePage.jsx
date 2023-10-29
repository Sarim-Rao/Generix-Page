import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../components/BannerImg";
import LeaderShipSec from "../components/LeaderShipSec";
import InvitationJoin from "../components/InvitationJoin";
import FooterLinks from "../components/FooterLinks";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/*..... banner image..... */}

      <BannerImg />

      {/* leader ship  */}

      <LeaderShipSec />

     

      {/* Join our awesome team  */}
      <InvitationJoin />
     

      {/* footer links section  */}

      <FooterLinks />

      

      {/* empty  line  */}

      <div className="empty-line"></div>
      
    </>
  );
};

export default HomePage;
