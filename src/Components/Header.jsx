export default function Header() {

    return <header className="header">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
        <nav>
            <a href="/#">Accueil</a>
            <a href="/#">Profil</a>
            <a href="/#">Réglage</a>
            <a href="/#">Communauté</a>
        </nav>
  </header>;
}

