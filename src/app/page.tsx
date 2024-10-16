import Navbar from '../../components/navbar/page';
import Body from '../../components/body/page';
import Footer from '../../components/footer/page';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}