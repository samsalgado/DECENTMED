import "../App.css";
import '../info/Info.css';
import { useTranslation } from 'react-i18next'
import tier1 from "../images copy/250.png";
import tier2 from '../images copy/500.png';
import tier3 from "../images copy/1000.png";
import Collapsible from 'react-collapsible';
import { useEffect, useState } from 'react';
//import supabase from "./supabase";
export function Pricing() {
  const { t } = useTranslation('common');
  const [selectedTier, setSelectedTier] = useState(null);
  //const [tierDetails,setTierDetails] = useState([]);
  const handleChange = async (e) => {
    const value = e.target.value;
    setSelectedTier(value);
    //await getTiers(value);
  }
 /* const getTiers = async (tier) => {
    try {
      const {data, error} = await supabase
      .from('Pricing_tiers')
      .select('*')
      .eq('tier', tier);
      if (error) {
        console.error('Error fetching tier data:', error);
      } else {
        setTierDetails(data); // Update the state with fetched data
        console.log('Fetched Tier Details:', data); // Optional: Log the fetched data
      }
    } catch (err) {
      console.error('Error while fetching tiers:', err);
    }
    }
    */
  useEffect(() => {
    console.log("Tier:", selectedTier);
    //console.log("Tier Details:", tierDetails);
  }, [selectedTier]); 
    return(
       <div className="">
 <div className="title-container">
        <table className="collapsibles-table">
            <tbody>
              <tr>
              <th className="collapsible-trigger">
       <Collapsible trigger={t("Pricing Tiers")}>
        <div className='collapsible-content'>
        <input type='radio' onClick={handleChange} name='Tier' value="Tier 1"></input>
        <img src={tier1} alt="tier 1" />
       <input type='radio' onClick={handleChange} name='Tier' value="Tier 2"></input>
        <img src={tier2} alt="Tier2" /> 
        <input type='radio' onClick={handleChange} name='Tier' value="Tier 3"></input>
        <img  src={tier3} alt="Tier3" />
        <img alt="" />
        </div>
        </Collapsible>
        </th>
        </tr>
        </tbody>
          </table>
      </div>
</div>
    )
  };
export default Pricing;