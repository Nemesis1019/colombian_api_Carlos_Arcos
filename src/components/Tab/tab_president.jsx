import { useContext, useState } from "react";
import {dash_context, Presidents_view,Attractions,Airport_Region,Airport} from "../../routes"

import "./tab_president.css"
export const TabPresidents = () => {
    const {setChangeTab} = useContext(dash_context)
    const [activeTab, setActiveTab] = useState('airports');
    
  const renderContent = () => {
    switch (activeTab) {
      case 'airports':
        return <Airport_Region/> ;
      case 'presidents':
        return <Presidents_view/>
      case 'attractions':
        return <Attractions/>;
      default:
        return null;
    }
  };

  return (
    <div className="board-container">
      <div className="tabs">
        <button onClick={() => {setActiveTab('airports'),setChangeTab('airports')}}>Airports</button>
        <button onClick={() => {setActiveTab('presidents'),setChangeTab('presidents')}}>Presidents</button>
        <button onClick={() => {setActiveTab('attractions'),setChangeTab('attractions')}}>Attractions</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
  
}