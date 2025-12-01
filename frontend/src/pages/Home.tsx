import Navigate from '../components/navigate';
import Hakkimizda from '../components/hakkimizda';
import Hizmetlerimiz from '../components/hizmetlerimiz';
import Iletisim from '../components/iletisim';
import TeklifAl from '../components/teklifal';


import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            className="app-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div id="anasayfa">
                <Navigate />
            </div>
            <div id="hakkimizda">
                <Hakkimizda />
            </div>
            <div id="hizmetlerimiz">
                <Hizmetlerimiz />
            </div>
            <Iletisim />
            <TeklifAl />

        </motion.div>
    );
}

export default Home;
