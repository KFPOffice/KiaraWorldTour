export default function Hero (props) {
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    
    const heroStyle = {
        minHeight: props.minHeight,
        overflow: 'hidden',
        position: 'relative'
    }
    const heroImageStyle = {
        backgroundImage: "url(" + props.backgroundImage + ")",
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundPosition: 'center 15%',
        backgroundSize: 'cover',
    }
    
    return(
        <div className="hero" style={heroStyle}>
            <div className="hero-image" style={heroImageStyle}/>
            {/* <div className="hero-overlay">
                {/* {this.props.children && <div>{this.props.children}</div>}}
            </div> */}
        </div>
    )
  }