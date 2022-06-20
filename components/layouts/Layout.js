import Footer from "../Footer";
import Header from "../Header";


const Layout = ({ children }) => {
    return (
        <div className="">
        <Header />

      <main className="bg-white">
        {children}
      </main>

      <Footer />
    </div>
  )
}
export default Layout;