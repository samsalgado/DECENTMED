import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import '../App.css';
import Footer from '../footer';
import Info7 from '../info/info7';
import Practices from '../info/practices';
import Practice from './practices';
import { AuthContext } from './Providers/AuthProvider';
import Topbar from './topbar';


export function Telehealth({ t }) {

    const { user } = useContext(AuthContext);
    const { loading, data: paymentsInformation } = useQuery({
        queryKey: ['paymentsInformation'],
        queryFn: async () => {
            const res = await fetch('https://decentmed-server.vercel.app/payments');
            return res.json();
        }
    })

    const { loader, data: adminInformation } = useQuery({
        queryKey: ['adminInformation'],
        queryFn: async () => {
            const res = await fetch('https://decentmed-server.vercel.app/users');
            return res.json();
        }
    })

    if (loading || loader) {
        return <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px 20px', fontWeight: "bold", border: 'none', borderRadius: '5px' }}> </button>
    }

    // Find role logged Admin
    const userRole = adminInformation?.find(
        (admin) => admin?.role === "admin" && admin?.email === user?.email
    );

    // // Find payments for the logged-in user's email
    // const paymentsByEmail = paymentsInformation?.find(
    //     (payment) => (payment?.email === user?.email && payment.status === 'approved') || userRole
    // );

    const paymentsByEmail = paymentsInformation?.find(
        (payment) => {
            if (userRole) {
                return true; // admin 
            }
            return payment?.email === user?.email && payment.status === 'approved';
        }
    );


    return (
        <>
            <Helmet>
                <title>{t('Telehealth Services')}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={t("Connect with healthcare providers virtually! Explore our Telehealth Directory to find a doctor offering online consultations. Learn more about the benefits of telehealth.")} />
            </Helmet>

            <header>
                <Topbar />
            </header>
            <div>
                <h1 className='title'>{t('Telehealth Directory')}</h1>
            </div>
            <Practice />
            <div>
                {paymentsByEmail ? (
                    <Practices />
                ) : (
                    <p className='warning'>{t('No payments found or not approved special service.')}</p>
                )}
            </div>
            <div>
                <Info7 />

            </div>
            <br></br>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
