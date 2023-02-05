import React,{useState} from 'react';
import WildData from './WildData';
import { Link } from 'react-router-dom';
import './style.css'
import Form from './form';


const Explore = () => {

    const [data,setData] = useState(WildData);
    // const [region,setRegion] = useState()

    const filterResult= (witem)=>{
        const result = WildData.filter((curData)=>{
            return curData.status === witem;
        })
        setData(result)
    }

    const filterRegion = (ritem) => {
        const result = WildData.filter((curData)=>{
            return curData.region === ritem;
        })
        setData(result)
    }

    const filterSpecies = (sitem) => {
        const result = WildData.filter((curData)=>{
            return curData.species[0] === sitem ||curData.species[1] === sitem ||curData.species[2] === sitem ||curData.species[3] === sitem ||curData.species[4] === sitem ||curData.species[5] === sitem ||curData.species[6] === sitem ||curData.species[7] === sitem;
        })
        setData(result)
    }

    const noFilter = () => {
        setData(WildData)
    }


  return (
    <>  
        <header>
            <Link to="/main" className='Title'>Florafauna<Link to="/analysis" className='month'> Monthly Analysis<Link to="/Form" className='month'> Support</Link></Link></Link>
            <Link to="/"> <button className='logout'>Logout</button></Link>
        </header>
        <div className='whole' align="center">
        <h1>Explore</h1>
        
        <p className='but'>
            <strong>Biodiversity Index Level :</strong>  
            <button onClick={() => filterResult('Critical')} style={{backgroundColor:"red"}}>Critical</button>
            <button onClick={() => filterResult('Moderate')} style={{backgroundColor:"orange"}}>Moderate</button>
            <button onClick={() => filterResult('Sustainable')} style={{backgroundColor:"green"}}>Sustainable</button>
        </p>
        <p className='sel'>
            <select onChange={(e) => filterRegion(e.target.value)} >
            <option>-- Select the Region --</option>
                <option>Asia Pacific</option>
                <option>Latin America</option>
                <option>Africa</option>
                <option>North America</option>
                <option>Europe & Central Asia</option> 
            </select>
            <select onChange={(e) => filterSpecies(e.target.value)} >
                <option >-- Select the Species --</option>
                {
                    data.map((opts,i)=><option key={i}>{opts.species[0]}</option>)
                }
            </select>
            
        </p>
        <button class="cut" onClick={() => noFilter()}>Remove Filter</button>
        <div className='cards'>
            {data.map((values) => {
                const {id,image,pname,region,status,species} = values;
                return(
                    <>  
                        <div className='card' key={id}>
                            <img src={image} alt='img' style={{height:'400px',width:'500px'}}/>
                            <div className='card-body'>
                                <h3 className='park-name'>{pname}</h3>
                                <h2>&#128640; {region} <strong> {status}</strong></h2>
                                <h4>Animal Species : {species[0]}, {species[1]}, {species[2]}, ... + {species.length-3} &#128047;</h4>
                                
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
        </div>
    </>
  )
}

export default Explore;