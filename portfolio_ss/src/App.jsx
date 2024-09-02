import BackToTopButton from "./components/BackToTopButton";
import Contatos from "./components/Contatos";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

export default function App() {
  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />
      </main>
      <Footer />
      <BackToTopButton />
    </Layout>
  );
}
