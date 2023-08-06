import { combineReducers } from "redux";
import AuthReducer from "../Reducers/AuthReducer";
import ViewPropertyReducer from "../Reducers/ViewPropertyReducer";
import AboutTurkey from "../Reducers/AboutTurkeyReducerhandle";
import BuyerGuide from "../Reducers/BuyerGuideReducer";
import PropertyEnquiryShowModalReducer from "../Reducers/PropertyEnquiryShowModalReducer";
import PhoneTelReducer from "../Reducers/PhoneTelReducer";
import HideComponent from "../Reducers/HideComponentOneReducer";
import PropertyListReducer from "../Reducers/PropertListReducer";
import UserTabReducer from "../Reducers/UserTabReducer";
import FeaturedPropertyReducer from "../Reducers/FeaturedPropertyReducer";
import ContentReducer from "../Reducers/ContentReducer";
import NewsViewReducer from '../Reducers/NewsViewReducer';
import PropertyFilterReducer from '../Reducers/PropertyFilterReducer';
import PropertyTypeFilterReducer from "../Reducers/PropertyTypeFilterReducer";
import PropertyBedroomFilter from "../Reducers/PropertyBedroomFilter";



const rootReducer = combineReducers({
    AuthReducer,
    viewProperty:ViewPropertyReducer,
    AboutTurkey,
    BuyerGuide,
    Enquiry:PropertyEnquiryShowModalReducer,
    phone:PhoneTelReducer,
    HideComponent,
    property:PropertyListReducer,
    UserTab:UserTabReducer,
    FeaturedPropertyReducer,
    NewsViewReducer,
    PropertyFilterReducer,
    typeFilter:PropertyTypeFilterReducer,
    BedroomFilter:PropertyBedroomFilter,
})

export default rootReducer