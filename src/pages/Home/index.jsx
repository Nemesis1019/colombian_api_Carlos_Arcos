
import { useState } from "react";
import { Presidents_view } from "../../routes";
import { TabPresidents } from "../../components/Tab/tab_president"

import './home_styles.css';

export function Home(){
 

  return (
    <> 
      <h1>Colombia Dash</h1>
      <TabPresidents />
    </>
  );
  
};