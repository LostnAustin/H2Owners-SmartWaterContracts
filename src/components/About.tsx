import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
    <h2>Why Smart Water Contracts?</h2>
    <p>Traditional Water Supply Contracts in Texas require a complex application process. An applicant for a Water Supply Contract must provide the following information: </p>
    <ul>
     <li>a vicinity map(s) showing the diversion
      point and place of use</li>
     <li>A signed water supply contract that includes:</li>
      <li>-Base water right number</li>
      <li>-Seller and buyer</li>
      <li>-Contract begin and end dates</li>
      <li>-Annual quantity being used (acre-feet)</li>
      <li>-Type of use</li>
      <li>-Contract price</li>
    </ul>

    <p>In order to submit this info, the applicant must submit "One original and six copies of the application and supporting materials" so that the varying INTEROPERABLE agencies can coordinate on the permit (Eg. TCEQ, TWDB, LCRA, etc.)</p>

    <h2>Solution: Web3, Blockchain, and ChainLINK</h2>
      <p>By utilizing web3 and blockchain, agencies and applicants are able to coordinate in a decentralized manner. The integration of a variety of ChainLINK products can significantly streamline the process. CCIP will allow the various agencies to independently create their own AVAX subnets and protocols, yet interact with other chains (in our use case Fuji and Mumbai testnets). </p>
      <p>Automation could be achieved by utulizing ChainLINK keepers, data feeds, and external adaptors used for verifying water availability, permitting conditions, etc.</p>
    </div>
  )
}

export default About