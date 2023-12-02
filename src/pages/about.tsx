import React from 'react'
import { Navbar } from '../components'

type Props = {}

const About = (props: Props) => {
  return (

    <div className='container-fluid text-center text-3xl px-2 pt-4'>
    <div className='bg-cover bg-no-repeat bg-center pb-11'>
        <Navbar />
        </div>
        <main className='mt-10 pt-16'>
        <h1 className='text-4xl ml-2'>Why Smart Water Contracts?</h1>
            <p className='text-2xl ml-2'>Traditional Water Supply Contracts in Texas require a complex application process. An applicant for a Water Supply Contract must provide the following: </p>
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
      <p className='text-2xl mb-5 p-4'>By utilizing web3 and blockchain, agencies and applicants are able to coordinate in a decentralized manner. The integration of a variety of ChainLINK products can significantly streamline the process. CCIP will allow the various agencies to independently create their own AVAX subnets and protocols, yet interact with other chains (in our use case Fuji and Mumbai testnets). </p>
      <p className='text-2xl mb-5 p-4'>Automation can be achieved by utilizing ChainLINK keepers, data feeds, and external adaptors used for verifying water availability, permitting conditions, etc.</p>
    </main>
    </div>
  )
}

export default About