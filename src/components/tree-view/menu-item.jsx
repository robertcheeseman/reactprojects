import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'

 export default function MenuItem({item}) {

    return (
    
    <li>
        <p>{item.label}</p>

        {
            item && item.children && item.children.length > 0 ? 
            <MenuList list={item.children} />
            : null
        }
    </li>
    
    )
 }