import Header from './Header';
import HeaderTop from './HeaderTop';
import Footer from './Footer';
import PricingWithContactUs from './PricingWithContactUs';
import TransparentPricing from './TransparentPricing';
import TopratedSupport from './TopratedSupport';
import CuttingEdgeTechnology from './CuttingEdgeTechnology';
import RatingPage from './RatingPage';
import PartnersPage from './PartnersPage';
import DiscoverPage from './DiscoverPage';
import ThreeCardsPage from './ThreeCardsPage';
import SearchFront from './SearchFront';
const BodyPage = () => {
  
  return (
    <>
     <HeaderTop/>
     <Header/>
      {/* <p style={{backgroundColor:"purple",color:"white"}}>body text</p> */}
      <SearchFront/>
      <ThreeCardsPage/>
      <DiscoverPage/>
      <PartnersPage/>
      <RatingPage/>
      <CuttingEdgeTechnology/>
      <TopratedSupport/>
      <TransparentPricing/>
      <PricingWithContactUs/>
    <Footer/>
    </>   
  );
};
export default BodyPage;