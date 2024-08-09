
import { motion } from 'framer-motion'
import { ReactNode, FC } from 'react'
import { DotLoader } from 'react-spinners';
import ReactDOM from 'react-dom'
import { cn } from '../../utils/style-utils';

interface ModalProp extends React.HTMLAttributes<HTMLDivElement> {
    
    children: ReactNode;
    loading?: boolean;
    position?: string
    handleModalShowed?: () => void
}

const Modal: FC<ModalProp> = ({ children, position = '', loading = false, className, handleModalShowed }) => {

    const dropIn = {
        hidden: {
            y: "-100vh"
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        },
        exit: {
            y: "100vh",
            opacity: 0,
        },
    }
    return ReactDOM.createPortal(
        <>

            <motion.div
                className='fixed top-0 left-0  h-full w-full bg-neutral-300/50 flex justify-center items-center z-50'
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className={cn(`rounded-2xl max-w-xl w-full  max-h-[100vh] m-auto p-2 flex flex-col items-center bg-white absolute ${position}`, className)}
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onAnimationComplete={handleModalShowed}

                >
              
                        <div className='px-2 w-full h-full  overflow-y-auto pretty-scrollbar'>
                            {children}
                        </div>
                    



                </motion.div>
                {
                    loading &&
                    <div className="h-full w-full absolute flex items-center justify-center  bg-[#0000006d] top-0" onClick={(e) => e.stopPropagation()}>
                        <DotLoader color='white' />
                    </div>

                }

            </motion.div>
        </>,
        (document.getElementById("portal")!)
    )
}

export default Modal
