import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/styles/AppartementPage.css'

function AppartementPage() {
  return (
    <div className="appartement__container">
      <Navbar />
      <div className='appartement__content'>
        <div className='appartement__content__img'>
            <img src="https://picsum.photos/800/400" alt="" />
        </div>
        <div className="appartement__content__header">
          <div className='appartement__content__title'>    
              <h1>Crazy loft on Canal st martin</h1>
              <h2>Paris , Ile de France</h2>
              <div className='appartement__content__tags'>
              <span>Cozy</span>
              <span>Canal</span>
              <span>Paris 10</span>
              </div>
          </div>
          <div className='appartement__content__owner'>
              <div className='appartement__content__owner__detail'>
                <h3><span>Alexandre</span><span>Dumas</span></h3>
                <div className="appartement__content__owner__badge"></div>
              </div>
              <div className="appartement__content__owner__stars">
                  <span className=''>☆</span>
                  <span className=''>☆</span>
                  <span className=''>☆</span>
                  <span className=''>☆</span>
                  <span className=''>☆</span>
              </div>
          </div>
        </div>
          <div className="appartement__content__info">
            <div className="appartement__content__info__volet">
                <h4>Description</h4>
                <span><i class="fa-solid fa-chevron-down"></i></span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi praesentium qui, ullam assumenda sapiente porro exercitationem? Quisquam impedit earum obcaecati? Suscipit asperiores quibusdam dolor recusandae voluptatem similique in eligendi!</p>
            </div>
            <div className="appartement__content__info__volet">
                <h4>Équipements</h4>
                <span><i class="fa-solid fa-chevron-down"></i></span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi praesentium qui, ullam assumenda sapiente porro exercitationem? Quisquam impedit earum obcaecati? Suscipit asperiores quibusdam dolor recusandae voluptatem similique in eligendi!</p>
            </div>
          </div>  
    </div>
      <Footer />  
    </div>
  )
}

export default AppartementPage
