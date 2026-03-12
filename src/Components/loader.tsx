import { motion } from 'framer-motion'
import logoSd from '/Images/logosd.png'

const secondPartVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0 },  
};


export default function Loader() {
    return (
        <div className='flex flex-row justify-center items-center'>     
            <motion.div
                variants={secondPartVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0, duration: 0.8, ease: "easeInOut" }} 
                style={{ width: 500, height: 200 }} 
            >
             
                <motion.img
                    src={logoSd}
                    alt="Parte 2 del logo"
                    style={{ width: '100%', height: '100%' }}
                    loading='lazy'
                />
            </motion.div>
        </div>

    )
}