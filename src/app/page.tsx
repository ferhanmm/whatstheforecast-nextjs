import Header from '../../components/header/page';
import Footer from '../../components/footer/page';

export default function Page() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
            <Footer />
        </div>
    )
}