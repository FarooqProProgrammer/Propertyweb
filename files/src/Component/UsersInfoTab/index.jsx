import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {UserTabInfo} from "../../Redux/Action/UserTabInfo"

export default function UsersInfoTab() {
    const [TabNumber, setTabNumber] = useState(1);
    const dispatch = useDispatch();

    const HandleTabChange = (number) => {
        console.log(number)
        setTabNumber(number)
        dispatch(UserTabInfo(number))
    }
    return (
        <div className="container-fluid-xl">
            <ul className="tabs">
                <li
                    className={`tab-link ${TabNumber == 1 ? 'current':''}`}
                    onClick={()=>HandleTabChange(1)}
                >
                    Account Settings
                </li>
                <li
                    className={`tab-link ${TabNumber == 2 ? 'current':''}`}
                    onClick={()=>HandleTabChange(2)}
                >
                    My Enquires
                </li>
                <li
                   className={`tab-link ${TabNumber == 3 ? 'current':''}`}
                    onClick={()=>HandleTabChange(3)}
                >
                    My Favorites List
                </li>
                <li
                    className={`tab-link ${TabNumber == 4 ? 'current':''}`}
                    onClick={()=>HandleTabChange(4)}
                >
                    My Properties List
                </li>
                <li
                    className={`tab-link ${TabNumber == 5 ? 'current':''}`}
                    onClick={()=>HandleTabChange(5)}
                >
 
                    Saved Searches
                </li>
            </ul>
        </div>

    )
}
