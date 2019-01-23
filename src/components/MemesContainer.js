import React from "react"

class MemesContainer extends React.Component{
    state ={
        topText: "",
        bottomText: "",
        rndImg: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
        allMemeImgs: {},
        isLoading: false
    }

    componentDidMount = () => {
        this.setState({isLoading:true})
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({ allMemeImgs: response.data.memes, isLoading:false})
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name] : value });
    }

    handleSumbit = (event) => {
        event.preventDefault()
        this.setState({isLoading:true})
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const rndImg = this.state.allMemeImgs[randNum].url
        this.setState({
            rndImg:rndImg,
            isLoading:false
        })
    }

    render= () => {
        return (
            <div>
                <main>
                    <form className = "meme-form" onSubmit={this.handleSumbit}>
                        <input type="text" onChange={this.handleChange} name = "topText" placeholder="Top Text" />
                        <input type="text" onChange={this.handleChange} name = "bottomText" placeholder="Bottom Text" />
                        <button>Generate</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.isLoading? "Loading": this.state.rndImg} alt="generatedMeme"/>
                        <h2 className ="top">{this.state.topText}</h2>
                        <h2 className ="bottom">{this.state.bottomText}</h2>

                    </div>
                    
                </main>
            </div>
        )
    }
}

export default MemesContainer