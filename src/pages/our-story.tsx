import '../styles/components/_story.scss'
import ImageSlider from '../components/product-page/sub-components/ImageSlider';

const OurStoryPage = () => {

  const images = [ '../../public/images/OurStoryPage/process carousel 1.jpg', '../../public/images/OurStoryPage/process carousel 2.jpg', '../../public/images/OurStoryPage/process carousel 3.jpg', '../../public/images/OurStoryPage/process carousel 4.jpg', '../../public/images/OurStoryPage/process carousel 5.jpg']

  return (
    <>
      
      <div className="container-fluid mt-5">
        <div className="row overflow-hidden">
          <div className="col mt-4">
            <div className="row">
              <h1 className='story-text text-left mt-5'>Our Story</h1>
              <p className='story-text-small text-left' style={{paddingRight: '26px'}}>began in <strong>Ohrid in 1913</strong><p>when master craftsman <strong>Slave Marinov</strong> started shaping copper into high-quality household products.</p></p>
              <div className='cooper'><img src="../../public/images/OurStoryPage/copper pot.png" alt="cooper"/></div>
              </div>
              </div>
              <div className="story-img" />
              <div className="story-img-bg mb-5" />
              <h2 className='story-text story-top'>Copper oxidizes and changes over time.</h2>
              <div className='row d-flex flex-column justify-content-right story-bottom pr-0'>
                <h2 className='story-text p-0 text-right'>And so has Marinov.</h2>
                <p className='story-text-small p-0 text-right'>Over the years, our family business has evolved and adapted to changing times, all the while holding on to its rich history and tradition.</p>
              </div>
              <p className='story-text-small text-left mb-5 pb-5' style={{paddingRight: '104px'}}>Slave’s skill was passed down to <strong>his son Ivan</strong>, who expanded the business by introducing<p>souvenirs.</p></p>
              <img src="../../public/images/OurStoryPage/belt.png" alt="belt" className='belt'/>
              <p className='story-text-small mt-5 pt-5 mb-5'style={{paddingLeft: '50px', textAlign: 'right'}}>Following in his father’s footsteps, <strong>Ivan’s son Slave</strong> created the iconic handmade <strong>antique helmet,</strong> which quickly became a symbol synonymous with our brand.</p>
              <div style={{height: '610px'}}>
                <img src="../../public/images/OurStoryPage/slave.png" alt="slave" className='slave' />
                <img src="../../public/images/OurStoryPage/helmet.png" alt="helmet" className='helmet'/>
              </div>
              <img src="../../public/images/OurStoryPage/branch divider.svg" alt="branch divider" style={{paddingLeft: '0'}} />
              <p className='story-text-small text-left mt-5' style={{paddingRight: '80px'}}><strong></strong>Today, Slave’s legacy carries on in the hands of  <strong> his daughter Maria and  son Ivan</strong>, marking the <strong>fourth generation</strong> of our family's timeless craft.</p>
              <img src="../../public/images/OurStoryPage/ring.png" alt="ring" className='ring'/>
              <p className='story-text-small text-left mt-5 mb-0' style={{paddingRight: '90px'}}>Under Maria's <p className='mb-0'>visionary leadership, MARINOV has taken a bold step forward with a fresh perspective, exploring <strong>unique and modern jewelry designs.</strong></p></p>
              <div style={{height: '450px', position: 'relative'}}></div><img src="../../public/images/OurStoryPage/bracelet.png" alt="bracelet" className='bracelet'/>
              <p className='story-text-small mb-5'style={{paddingLeft: '51px', textAlign: 'right'}}>Using <strong>traditional techniques</strong> taught by her family, she experiments with new <strong>complementary materials</strong> and methods of production, mixing <strong>past and present</strong> to create timeless pieces of jewelry.</p>
              <h2 className='story-text text-left' style={{paddingRight: '20%'}}>Peek Into Our Process</h2>
              <div className='slider mt-2 mb-5 p-0'>
                <ImageSlider images={images} title=''/>
                <div className='mt-5 px-3'>
                  <p>Crafting copper jewelry is a meticulous art, requiring precision, honed skill, and a deep commitment to excellence. Every step, from shaping the raw copper to adding intricate details, demands careful attention.</p>
                  <p className="my-4">It's more than creating a piece of jewelry; it's a dedication to the art, passion, and expertise that define our work.</p>
                  <p>Each finished piece speaks of our commitment to quality, promising a distinctive and beautifully crafted copper jewelry experience for you.</p>
                </div>
              </div>
              <h1 className='story-text text-left mt-5 mb-4'>Certified Craftsmanship</h1>
                <p className="mb-4">Through the years, our business and skilled craftsmen have achieved numerous certifications, showcasing our commitment to exceptional craftsmanship. We have actively engaged in international workshops, demonstrating our craft and learning from various traditions.</p>
              <div className="wall">
                <p className="wall-text">These experiences reflect our continuous journey of skill enhancement and passion for the art, reinforcing our dedication to quality.</p>
                <img src="../../public/images/OurStoryPage/certificate 1.jpg" alt="certificate" className="certificate-1"/>
                <img src="../../public/images/OurStoryPage/certificate 2.jpg" alt="certificate" className="certificate-2"/>
                <img src="../../public/images/OurStoryPage/certificate 3.jpg" alt="certificate" className="certificate-3"/>
                <img src="../../public/images/OurStoryPage/certificate 4.jpg" alt="certificate" className="certificate-4"/>
                <img src="../../public/images/OurStoryPage/certificate 5.jpg" alt="certificate" className="certificate-5"/>
              </div>
        </div>
      </div>
    </>
  );
}

export default OurStoryPage