import {
    Primary_Post_Data_Send,
    Primary_Post_Data_Success,
    Primary_Post_Data_Failure,
  } from "./constans";
  import { itemCustomizationAPI ,primarypageAPI,PricingDetailApi} from "./Api";

import { Item_Customizations_Data_Request, Item_Customizations_Data_Success } from "./constans";
import { Pricing_Detail_Data_Request,Pricing_Detail_Data_Success } from "./constans";
  import { takeEvery, call, put } from 'redux-saga/effects';
  import {primarypost,primarysuccess,primaryfailure}from './Actions'


  function* postprimary(action) {

    try{
      const payload=action.payload;
      const response= yield call(primarypageAPI,payload)
      console.log("Posted Successfully");
      console.log("primary post data",payload)
  
      yield put(primarysuccess(payload));
      console.log("Posted Successfully");


  }catch (error) {
  }
    
  }


 




// function* postItemCustomization(action){
//   try {
//     const payload = action.payload;
//     const response = yield call(itemCustomizationAPI, payload);
//     console.log("Response received:", response);

//     if (response && response.data) {
//       console.log("Posted Successfully");
//       yield put({ type: "Item_Customizations_Data_Success", payload: response.data   });
//     } else {
//       throw new Error("Response data is undefined");
//     }
//   } catch (error) {
//     console.error("Failed to post:", error);
//     yield put({ type: "Item_Customizations_Data_Failure", error: error.message || error });
//   }
// } 



// function* postPricingDetail(action){
//   try{
//       const payload=action.payload;
//       const response= yield call(PricingDetailApi,payload)
//       console.log("Posted Successfully");
  
//       yield put({type:"Pricing_Detail_Data_Success"  , payload: response.data});
//       console.log("Posted Successfully");


//   }catch (error) {
//   }


// }

export function* watchPostprimary() {
    yield takeEvery( Primary_Post_Data_Send, postprimary);


  }
// export function* itemCustomizationData() {
//     yield takeEvery(Item_Customizations_Data_Request,postItemCustomization);
//   }
  // export function* PricingDetailData() {
  //   yield takeEvery(Pricing_Detail_Data_Request,postPricingDetail);
  // }