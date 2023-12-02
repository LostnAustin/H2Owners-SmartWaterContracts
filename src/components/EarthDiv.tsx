import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from '.';

const EarthDiv = () => {
  return (
    <div className="bg-indigo-600 bg-opacity-0">
        <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />      
      </motion.div>
    </div>
  )
}

export default EarthDiv