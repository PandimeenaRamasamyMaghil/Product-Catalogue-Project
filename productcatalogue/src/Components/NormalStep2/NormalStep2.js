  import React, { useState } from 'react'
  import "./NormalStep2.scss"
  import DaysOfWeek from "../DaysOfWeek/DaysOfWeek"
  import { useSelector } from 'react-redux'
  import { useEffect } from 'react'

  const NormalStep2 = () => {
    const prizingDetail=useSelector((state)=>state.PricingDetailReducer.prizingData.mainForm)
    const thirdParty= prizingDetail && prizingDetail.normalForm &&prizingDetail?.normalForm.thirdParty;
    const [thirdParty1, setThirdParty1] = useState(thirdParty);


    const Pickup=prizingDetail && prizingDetail.normalForm && prizingDetail?.normalForm.Pickup;
    const [Pickup1, setPickup1] = useState(Pickup);

    const Delivery=prizingDetail && prizingDetail.normalForm && prizingDetail?.normalForm.Delivery;
    const [delivery1, setDelivery1] = useState(Delivery);


    const Dinein=prizingDetail && prizingDetail.normalForm && prizingDetail?.normalForm.DineIn;
    const [Dinein1, setDinein] = useState(Dinein);
    
    
    console.log(thirdParty)

    console.log(prizingDetail)


    return (
      <div>
          <div className='Step2Avaliable'>
          <h1 className='Step2Avaliable-heading'>Available Service Streams(Normal)</h1>   
          </div>
          <h1 className='Step2Dinein-heading'>Dine in</h1>
          <div className='Step2DineIn'>
          <div className='Step2DineInPrice'>
          <div ><h1 className='Step2DineInPriceheading'>Price</h1></div>
          {prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.dineinfields.map((elem,index)=>{
            return(
              <>
                <div key={index} ><h1 className='Step2DineInPricevalue'>{elem.DineInPrice||"-"}</h1></div>
            
              
              </>
            )
          })}
        
        
          </div>


          <div ><h1 className='Step2DineInServiceheading'>Service Time</h1>

          {prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.dineinfields.map((elem,index)=>{
            
            return(


              <>
              <div className='Step2DineInServiceTime'>
      
          <div > <h1 className='Step2DineInPricevalue'>{elem.DineInMealType||"-"}</h1></div>
            </div>
              
              </>
            )
          })}
          </div>

          
          
          <div className='Step2DineInServiceArea'>
          <div ><h1 className='Step2DineInServiceAreaheading'>Service Area</h1></div>

          {prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.dineinfields.map((elem,index)=>{
            return(

              <>
              <div ><h1 className='Step2DineInPricevalue'>{elem.DineInService||"-"}</h1></div>
              
              </>
            )
          })}
          
      
          </div>
          
          </div>
          <h1 className='AvailDaysheading'>Available Days</h1>
          {prizingDetail && prizingDetail?.normalForm && prizingDetail?.normalForm.DineIn.map((elem,index)=>{
            return(

              <>
              <div className='dayacheckedavail'>
            
            <DaysOfWeek days={elem} setDays={setDinein}/>
          </div>
              
              
              </>
            )
          })}
        
          <h1 className='Step2Onlineheading'>Online</h1>
          <h1 className='Step2Pickupheading'>Pickup</h1>
          <div className='Step2Pickup'>
          <div className='Step2SellingPrize'>
            <div><h1 className='Step2SellingPrizeheading'>Selling Price for Pickup</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{ prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.formNormal &&prizingDetail.normalForm.formNormal.PickuppriceNormal||"-"}</h1></div>
          </div>
          <div className='Step2SellingPrize2'>
            <div><h1 className='Step2SellingPrizeheading2'>Service Time</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.PicupMealType || '-'}</h1></div>
          </div>
          </div>
          <h1 className='AvailDaysheadingPickup'>Available Days</h1>
          <div className='DaysPickUp'>
            <DaysOfWeek days={Pickup1} setDays={setPickup1}/>
          </div>
          <h1 className='Step2Deliveryheading'>Delivery</h1>
          <div className='Step2Delivery'>
          <div className='Step2SellingPrize'>
            <div><h1 className='Step2SellingPrizeheading'>Selling Price for Delivery</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.formNormal &&prizingDetail.normalForm.formNormal.DeliverypriceNormal||"-"}</h1></div>
          </div>
          <div className='Step2SellingPrize2'>
            <div><h1 className='Step2SellingPrizeheading2'>Service Time</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.DeliveryMealType || '-'}</h1></div>
          </div>
          </div>
          <h1 className='AvailDaysheadingdelivery'>Available Days</h1>
          <div className='DaysDelivery'>
            <DaysOfWeek days={delivery1} setDays={setDelivery1}/>
          </div>
          <h1 className='Step2ThirdPartyDeliveryheading'>Third Party Delivery</h1>
          <div className='Step2ThirdPartyDelivery'>
          <div className='Step2SellingPrize'>
            <div><h1 className='Step2SellingPrizeheading'>Swiggy Prize Listed</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.formNormal &&prizingDetail.normalForm.formNormal.SwiggyNormal||"-"}</h1></div>
          </div>
          <div className='Step2SellingPrize2'>
            <div><h1 className='Step2SellingPrizeheading2'>Zomato Price Listed</h1></div>
            <div><h1 className='Step2SellingPrizevalue'>{prizingDetail && prizingDetail.normalForm &&  prizingDetail.normalForm.formNormal &&prizingDetail.normalForm.formNormal.ZomatoNormal||"-"}</h1></div>
          </div>
          </div>
          <h1 className='AvailDaysheadingthirparty'>Available Days</h1>
          <div className='DaysThirdDelivery'>
            <DaysOfWeek days={thirdParty1} setDays={setThirdParty1}/>
          </div>
      </div>
    )
    
  }

  export default NormalStep2