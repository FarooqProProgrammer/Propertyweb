import { v4 as uuidv4 } from 'uuid';
import LittleBhosphorus from "../assets/littlebosphorus_blog_cover.jpg"
import GlatteTower from "../assets/galata-tower-istanbul_1678985700.jpg"
import HippoDrome from "../../assets/hippodrome-in-istanbul.jpg"
import IstanbulAtNight from "../../assets/istanbul-at-night_1678806152.jpg"




export const BlogData = [
    {
        id:uuidv4(),
        title:'Big Life by the little Bhosphurus Istanbul',
        date:'21 Mar 2023',
        img:LittleBhosphorus
    },
    
    {
        id:uuidv4(),
        title:'Turkish Citizenship benefits for foreign Investors',
        date:'16 Mar 2023',
        img:GlatteTower
    },
    
    {
        id:uuidv4(),
        title:'Experience Old Constantipole through the Old Hippodrome',
        date:'14 Mar 2023',
        img:HippoDrome
    },
    
    {
        id:uuidv4(),
        title:'USA to designate 15 more nature conversation areas',
        date:'04 Mar 2023',
        img:IstanbulAtNight
    },
]