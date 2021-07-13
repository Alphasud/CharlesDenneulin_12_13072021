export default function Sidebar() {

    return <aside className="sidebar">
        <div className="button-list">
            <button>
                <img src={`${process.env.PUBLIC_URL}/images/meditation.png`} alt="Meditation" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/images/swimming.png`} alt="Swimming" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/images/biking.png`} alt="Biking" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/images/weightlifting.png`} alt="weightlifting" />
            </button>
        </div>
        <div className="text">
            <p>Copyright SportSee {new Date().getFullYear()}</p>
        </div>
  </aside>;
}

