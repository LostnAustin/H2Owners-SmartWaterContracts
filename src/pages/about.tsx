import React from 'react'
import { Navbar } from '../components'

type Props = {}

const About = (props: Props) => {
  return (

    <div className='container-fluid text-center text-3xl px-2 pt-4 bg-gradient-to-b from-purple-600 to-blue-600'>
    <div className='bg-cover bg-no-repeat bg-center pb-11'>
        <Navbar />
        </div>
        <main className='mt-10 pt-16'>
        <h1 className='text-4xl ml-2'>Overview</h1>
        <p>Water is the most valuable human resource, with only about 3% of the planet's available quantity being fresh water, and only a portion of that not locked in the form of glaciers or ice.
Texas has two distinct legal systems governing water: groundwater and surface water. Surface water is owned by the state, which grants water rights to use specific volumes of water for beneficial uses. The Texas Water Code recognizes surface water rights issued in perpetuity as private rights that can be bought and sold and can only be canceled for nonuse over an extended period of time.
Texas uses a prior appropriation system operates under the principle of “first in time, first in right,” meaning that older or “senior” rights are given precedence over newer or “junior” rights during times of water shortage. An exception to the prior appropriation system is the landowner’s qualified riparian rights for domestic and livestock use.
</p>
        <h1 className='text-4xl ml-2'>Why Smart Water Contracts?</h1>
            <p className='text-2xl ml-2'>Traditional Water Supply Contracts in Texas require a complex, time consuming application process. An applicant for a Water Supply Contract must provide the following: </p>
    <ul className='container ml-5 mb-3 mt-2 text-lg '>
     <li className='ml-5 mb-3 mt-2'>1. A vicinity map(s) showing the diversion
      point and place of use</li>
     <li className='ml-5 mb-3 mt-2'>2. A signed water supply contract that includes:</li>
      <li className='ml-10 mb-3 mt-2'>-Base water right number</li>
      <li className='ml-10 mb-3 mt-2'>-Seller and buyer</li>
      <li className='ml-10 mb-3 mt-2'>-Contract begin and end dates</li>
      <li className='ml-10 mb-3 mt-2'>-Annual quantity being used (acre-feet)</li>
      <li className='ml-10 mb-3 mt-2'>-Type of use</li>
      <li className='ml-10 mb-3 mt-2'>-Contract price</li>
    </ul>

    <p className='text-2xl ml-2 mb-5 p-4'>In order to submit this info, the applicant must submit <text className="italic">"One original and six copies of the application and supporting materials"</text> so that the varying INTEROPERABLE agencies can coordinate on the permit (Eg. TCEQ, TWDB, LCRA, etc.)</p>

    <h1 className='text-3xl'>Solution: Web3, Blockchain, and ChainLINK</h1>
      <p className='text-2xl mb-5 p-4'>By utilizing web3 and blockchain, agencies and applicants are able to coordinate in a decentralized manner. The integration of a variety of ChainLINK products can significantly streamline the process. CCIP will allow the various agencies to operate their own protocols and data while being able to interact with other chains (in our use case Fuji and Mumbai testnets).  </p>
      <p className='text-2xl mb-5 p-4'>Automation can be achieved by utilizing ChainLINK keepers, data feeds, and external adaptors used to create triggers for verifying water availability, permitting conditions, transfer or rights, etc. Dynamic, cross-chain NFT's can be utilized by customers to represent changes and the rights themselves.</p>
    </main>
    </div>
  )
}

export default About