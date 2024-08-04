import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="app-logo" className="w-28 object-contain" />

                <button
                    type="button"
                    onClick={() => window.open("https://github.com")}
                    className="black-btn"
                >
                    GitHub
                </button>
            </nav>

            <h1 className="head_text">
                Summarize articles with <br />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summarizer, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    );
};

export default Hero;
