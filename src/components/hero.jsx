export default function Hero (props) {
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    
    const heroStyle = {
        display: 'flex',
        minHeight: props.minHeight
    }
    const heroImageStyle = {
        backgroundImage: "url(" + props.backgroundImage + ")",
        height: "100%",
        width: "100%"
    }
    
    return(
        <div className="hero" 
        // ref={(r) => { this.ref = r; }}
        style={heroStyle}>
            <div className="hero-image" style={heroImageStyle}/>
            {/* <div className="hero-overlay">
                {/* {this.props.children && <div>{this.props.children}</div>}}
            </div> */}
        </div>
    )
  }